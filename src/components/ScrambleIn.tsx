import React, { useEffect, useState, useRef } from 'react';

interface ScrambleInProps {
  text: string;
  delay?: number;
  triggered: boolean;
  className?: string;
}

const CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><';

export const ScrambleIn: React.FC<ScrambleInProps> = ({
  text,
  delay = 0,
  triggered,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState<string>('\u00A0');
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!triggered) {
      setDisplayText('\u00A0');
      setIsStarted(false);
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsStarted(true);
      let frame = 0;
      const chars = text.split('');
      const totalLength = chars.length;

      intervalRef.current = window.setInterval(() => {
        frame++;
        const revealIndex = Math.floor(frame * 0.5);

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
          } else if (i < revealIndex + 3) {
            if (chars[i] === ' ') {
              output += ' ';
            } else {
              const randomIndex = Math.floor(Math.random() * CHAR_SET.length);
              output += CHAR_SET[randomIndex];
            }
          } else {
            break;
          }
        }

        setDisplayText(output || '\u00A0');
      }, 25);
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [triggered, text, delay]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText === '\u00A0' && !isStarted ? '\u00A0' : displayText}
    </span>
  );
};
