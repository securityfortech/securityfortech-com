import { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxOptions {
  offset?: ["start start" | "start end", "end start"];
  yRange?: [string, string];
  opacityRange?: number[];
  opacityOutput?: number[];
  scaleRange?: [number, number];
}

interface ParallaxResult<T extends HTMLElement> {
  ref: React.RefObject<T>;
  y: MotionValue<string>;
  opacity?: MotionValue<number>;
  scale?: MotionValue<number>;
}

export function useParallax<T extends HTMLElement = HTMLElement>(
  options: ParallaxOptions = {}
): ParallaxResult<T> {
  const {
    offset = ["start end", "end start"],
    yRange = ["0%", "20%"],
    opacityRange,
    opacityOutput,
    scaleRange,
  } = options;

  const ref = useRef<T>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], yRange);
  
  const opacity = opacityRange && opacityOutput
    ? useTransform(scrollYProgress, opacityRange, opacityOutput)
    : undefined;

  const scale = scaleRange
    ? useTransform(scrollYProgress, [0, 1], scaleRange)
    : undefined;

  return { ref, y, opacity, scale };
}
