import { useCallback, useEffect } from "react";
import type { SplitConfig } from "../model/types";

export function usePointerEvents(
  containerRef: React.RefObject<HTMLDivElement | null>,
  config: SplitConfig,
  isDragging: boolean,
  updateWidth: (width: number) => void,
  startDrag: () => void,
  stopDrag: () => void,
) {
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!containerRef.current) return;

      startDrag();
      containerRef.current.setPointerCapture(e.pointerId);
    },
    [containerRef, startDrag],
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const newWidth = e.clientX - rect.left - config.handleSize / 2;
      updateWidth(newWidth);
    },
    [isDragging, config.handleSize, updateWidth, containerRef],
  );

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return;
    stopDrag();
  }, [isDragging, stopDrag]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };
    }
  }, [isDragging, handlePointerMove, handlePointerUp]);

  return {
    handlePointerDown,
  };
}
