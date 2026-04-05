import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import VoiceWave from './VoiceWave';

interface CustomAudioPlayerProps {
  src: string;
  autoplay?: boolean;
  onTimeUpdate?: (time: number) => void;
  onEnded?: () => void;
}

const formatTime = (seconds: number): string => {
  if (!isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const CustomAudioPlayer: React.FC<CustomAudioPlayerProps> = ({ src, autoplay = false, onTimeUpdate, onEnded }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hasAttemptedAutoplay = useRef(false);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      onTimeUpdate?.(audio.currentTime);
    };
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      onEnded?.();
    };
    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
    };
    const handleCanPlay = () => setIsLoading(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  // Handle autoplay (only once)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !autoplay || hasAttemptedAutoplay.current) return;

    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        hasAttemptedAutoplay.current = true;
      } catch {
        // Autoplay was blocked by browser policy — silently fail
        hasAttemptedAutoplay.current = true;
      }
    };

    // Wait for audio to be ready before attempting autoplay (readyState >= 2 = HAVE_CURRENT_DATA)
    if (audio.readyState >= 2) {
      attemptAutoplay();
    } else {
      audio.addEventListener('canplay', attemptAutoplay, { once: true });
    }

    return () => {
      audio.removeEventListener('canplay', attemptAutoplay);
    };
  }, [autoplay]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progressBar = progressRef.current;
    if (!audio || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <div className="text-slate-500 dark:text-slate-400 text-center">
          <p className="text-sm mb-2">Audio file not found</p>
          <p className="text-xs">
            Add <code className="font-mono bg-slate-200 dark:bg-white/10 px-1 rounded">qna-gitavox-demo.wav</code> to <code className="font-mono bg-slate-200 dark:bg-white/10 px-1 rounded">public/</code> to play.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Voice Wave Visualization */}
      <div className="w-full flex items-center justify-center" style={{ height: '80px' }}>
        <VoiceWave isPlaying={isPlaying} />
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        disabled={isLoading}
        className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : isPlaying ? (
          <Pause className="w-7 h-7 text-white fill-white" />
        ) : (
          <Play className="w-7 h-7 text-white fill-white ml-1" />
        )}
      </button>

      {/* Progress Bar */}
      <div className="w-full space-y-2">
        <div
          ref={progressRef}
          onClick={handleProgressClick}
          className="relative w-full h-1 bg-slate-200 dark:bg-white/10 rounded-full cursor-pointer group"
        >
          {/* Progress Fill */}
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
          
          {/* Progress Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-slate-900 border-2 border-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
          />
        </div>

        {/* Time Display */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
