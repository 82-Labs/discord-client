import type { SplitConfig } from "../model/types";

export const calculateMaxWidth = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  config: SplitConfig,
): number => {
  if (!containerRef.current) return config.maxSize ?? Number.POSITIVE_INFINITY;

  const containerWidth = containerRef.current.clientWidth;
  const runtimeMax = containerWidth - config.rightMin - config.handleSize;

  if (config.maxSize) {
    return config.maxSize;
  }

  return Math.max(config.minSize, runtimeMax);
};

export const clampWidth = (
  width: number,
  config: SplitConfig,
  containerRef: React.RefObject<HTMLDivElement | null>,
  enforceMax = true,
): number => {
  if (!enforceMax && config.maxSize) {
    return Math.max(width, config.minSize);
  }

  const maxWidth = calculateMaxWidth(containerRef, config);
  return Math.min(Math.max(width, config.minSize), maxWidth);
};
