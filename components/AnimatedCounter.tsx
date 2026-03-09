'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: Props) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const startedRef = useRef(false);

  useEffect(() => {
    if (inView && !startedRef.current) {
      startedRef.current = true;
      const startTime = performance.now();
      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
