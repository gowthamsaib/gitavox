import React from 'react';
import {
  VOICEWAVE_BARS,
  VOICEWAVE_HEIGHT_MIN,
  VOICEWAVE_HEIGHT_RANGE,
  VOICEWAVE_DELAY_STEP,
  VOICEWAVE_DURATION_MIN,
  VOICEWAVE_DURATION_RANGE,
} from '../constants/voicewave';

interface VoiceWaveProps {
  isPlaying?: boolean;
}

const VoiceWave: React.FC<VoiceWaveProps> = ({ isPlaying = true }) => (
  <div className="flex items-center justify-center gap-1 h-12">
    {[...Array(VOICEWAVE_BARS)].map((_, i) => (
      <div
        key={i}
        className={`w-1 bg-gradient-to-t from-blue-600 to-purple-400 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}
        style={{
          height: `${VOICEWAVE_HEIGHT_MIN + Math.random() * VOICEWAVE_HEIGHT_RANGE}%`,
          animationDelay: `${i * VOICEWAVE_DELAY_STEP}s`,
          animationDuration: `${VOICEWAVE_DURATION_MIN + Math.random() * VOICEWAVE_DURATION_RANGE}s`,
          animationPlayState: isPlaying ? 'running' : 'paused',
        }}
      />
    ))}
  </div>
);

export default VoiceWave;
