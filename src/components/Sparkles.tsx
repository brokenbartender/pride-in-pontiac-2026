import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export function Sparkle({ color, size, style }: { color: string, size: number, style: React.CSSProperties }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0, rotate: 0, opacity: 0 }}
      animate={{ 
        scale: [0, 1, 0], 
        rotate: [0, 90], 
        opacity: [0, 1, 0] 
      }}
      transition={{ 
        duration: 1.5 + Math.random() * 2, 
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2 
      }}
      className="absolute"
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.434 58.5662C118.583 75.8398 160 80 160 80C160 80 118.583 84.1602 101.434 101.434C84.2846 118.583 80 160 80 160C80 160 75.7154 118.583 58.5662 101.434C41.4168 84.1602 0 80 0 80C0 80 41.4168 75.8398 58.5662 58.5662C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </motion.svg>
  );
}

export function Sparkles({ 
  count = 20, 
  colors = ["#FFD700", "#FFF", "#FF8C00"] 
}: { 
  count?: number; 
  colors?: string[] 
}) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; color: string; size: number; style: React.CSSProperties }>>([]);
  
  useEffect(() => {
    const generateSparkles = () => {
      return Array.from({ length: count }).map((_, i) => ({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 25 + 10,
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          pointerEvents: "none",
          zIndex: 0,
        } as React.CSSProperties
      }));
    };
    
    // We set it after mount to avoid hydration mismatch
    setSparkles(generateSparkles());
  }, [count, colors]);

  if (sparkles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {sparkles.map(s => (
         <Sparkle key={s.id} {...s} />
      ))}
    </div>
  );
}
