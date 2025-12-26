import React from 'react';

interface PathAnimationProps {
  text?: string;
  fontSize?: number;
  strokeWidth?: number;
  duration?: string;
  gradientStart?: string;
  gradientEnd?: string;
  className?: string;
}

const PathAnimation: React.FC<PathAnimationProps> = ({
  text = 'PATH DRAWING',
  fontSize = 88,
  strokeWidth = 2,
  duration = '8s',
  gradientStart = '#ffffff',
  gradientEnd = '#ffffff',
  className = ''
}) => {
  return (
    <div className={`flex justify-center items-center min-h-[120px] ${className}`}>
      <svg width="1200" height="200" viewBox="0 0 1200 120" className="max-w-full">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientStart} />
            <stop offset="100%" stopColor={gradientEnd} />
          </linearGradient>
        </defs>
        
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth={strokeWidth}
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          {text}
          <animate
            attributeName="stroke-dashoffset"
            values="1000;0"
            dur={duration}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1"
          />
        </text>
      </svg>
    </div>
  );
};

export default PathAnimation;