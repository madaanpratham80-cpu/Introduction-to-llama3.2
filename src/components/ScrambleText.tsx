import React, { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  isHovered: boolean;
  className?: string;
}

const CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><';

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  isHovered,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isHovered) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDisplayText(text);
      return;
    }

    let frame = 0;
    const chars = text.split('');
    const totalLength = chars.length;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      frame++;
      const revealIndex = Math.floor(frame / 4);

      if (revealIndex >= totalLength) {
        setDisplayText(text);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return;
      }

      let output = '';
      for (let i = 0; i < totalLength; i++) {
        if (i < revealIndex) {
          output += chars[i];
        } else {
          if (chars[i] === ' ') {
            output += ' ';
          } else {
            const randomIndex = Math.floor(Math.random() * CHAR_SET.length);
            output += CHAR_SET[randomIndex];
          }
        }
      }

      setDisplayText(output);
    }, 25);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovered, text]);

  return <span className={className}>{displayText}</span>;
};
