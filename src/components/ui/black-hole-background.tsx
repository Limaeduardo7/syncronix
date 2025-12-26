"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlackHoleBackgroundProps {
  className?: string;
  strokeColor?: string;
  numberOfLines?: number;
  numberOfDiscs?: number;
  particleRGBColor?: [number, number, number];
  children?: React.ReactNode;
}

export function BlackHoleBackground({
  className,
  strokeColor = "#737373",
  children
}: BlackHoleBackgroundProps) {
  return (
    <div
      className={cn(
        'relative size-full overflow-hidden',
        className
      )}
    >
      {children}
      
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at center, transparent 10%, rgba(169, 0, 255, 0.2) 50%, rgba(0, 0, 0, 0.8) 100%)`
        }}
      />
      
      {/* Animated spinning circles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border opacity-20"
            style={{
              width: `${(i + 1) * 80}px`,
              height: `${(i + 1) * 30}px`,
              borderColor: strokeColor,
              borderWidth: '1px',
              marginLeft: `-${(i + 1) * 40}px`,
              marginTop: `-${(i + 1) * 15}px`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>
      
      {/* Radial lines */}
      <div className="absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 origin-bottom opacity-10"
            style={{
              width: '1px',
              height: '40%',
              backgroundColor: strokeColor,
              transform: `translate(-50%, -100%) rotate(${(i * 15)}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-60"
            style={{
              width: '2px',
              height: '2px',
              backgroundColor: `rgb(169, 0, 255)`,
              left: `${50 + Math.cos((i / 50) * Math.PI * 2) * 30}%`,
              top: `${50 + Math.sin((i / 50) * Math.PI * 2) * 15}%`,
            }}
            animate={{
              x: [0, -20, -40, -60],
              y: [0, -10, -20, -30],
              opacity: [0.6, 0.8, 0.4, 0],
              scale: [1, 1.5, 2, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeOut'
            }}
          />
        ))}
      </div>
      
      {/* Central glow */}
      <div 
        className="absolute left-1/2 top-1/2 w-20 h-20 rounded-full opacity-40 blur-xl"
        style={{
          background: `radial-gradient(circle, rgba(169, 0, 255, 0.8) 0%, transparent 70%)`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute left-1/2 top-[-71.5%] z-[3] h-[140%] w-[30%] rounded-b-full opacity-60 blur-3xl"
        style={{
          background: 'linear-gradient(20deg, #00f8f1, #ffbd1e40 16.5%, #fe848f 33%, #fe848f40 49.5%, #00f8f1 66%, #00f8f180 85.5%, #ffbd1e 100%)',
          backgroundSize: '100% 200%',
          transform: 'translate(-50%, 0)',
        }}
        animate={{ 
          backgroundPosition: ['0% 100%', '0% 300%'] 
        }}
        transition={{ 
          duration: 5, 
          ease: 'linear', 
          repeat: Infinity 
        }}
      />
      
      {/* Scan lines overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)'
        }}
      />
    </div>
  );
}