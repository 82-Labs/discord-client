import { useRef } from "react";
import { usePointerEvents } from "../hooks/use-pointer-events";
import { useSplit } from "../hooks/use-split";
import {
  SplitContext,
  type SplitContextType,
} from "../hooks/use-split-context";
import type { SplitConfig } from "../model/types";
import { Handle } from "./handle";
import { Pane } from "./pane";

type SplitProps = {
  className?: string;
  handleSize?: number;
  minSize?: number;
  defaultSize?: number;
  maxSize?: number;
  rightMin?: number;
  onChange?: (width: number) => void;
  children: React.ReactNode;
};

function Split({
  className,
  handleSize = 6,
  minSize = 160,
  defaultSize = 280,
  maxSize,
  rightMin = 160,
  onChange,
  children,
}: SplitProps) {
  const config: SplitConfig = {
    minSize,
    defaultSize,
    maxSize,
    rightMin,
    handleSize,
  };

  const paneCount = useRef(0);
  const { containerRef, state, updateWidth, startDrag, stopDrag } = useSplit(
    config,
    onChange,
  );

  const { handlePointerDown } = usePointerEvents(
    containerRef,
    config,
    state.isDragging,
    updateWidth,
    startDrag,
    stopDrag,
  );

  const contextValue: SplitContextType = {
    panelWidth: state.panelWidth,
    handleSize,
    isDragging: state.isDragging,
    containerRef,
    updateWidth,
    handlePointerDown,
  };

  paneCount.current = 0;

  return (
    <SplitContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={className ?? "w-full h-full flex overflow-hidden"}
        style={{
          position: "relative",
          visibility: state.isReady ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </SplitContext.Provider>
  );
}

export const SplitPanel = Object.assign(Split, {
  Pane,
  Handle,
});
