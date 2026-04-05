import * as React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
        variant === 'default' && 'border-transparent bg-blue-600 text-white',
        variant === 'secondary' && 'border-transparent bg-white/10 text-white',
        variant === 'outline' && 'border-white/20 text-white',
        className
      )}
      {...props}
    />
  );
}

export { Badge };
