import { createContext, useContext } from "react";

export type SplitContextType = {
  panelWidth: number;
  handleSize: number;
  isDragging: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  updateWidth: (width: number) => void;
  handlePointerDown: (e: React.PointerEvent) => void;
};

export const SplitContext = createContext<SplitContextType | null>(null);

export const useSplitContext = () => {
  const context = useContext(SplitContext);
  if (!context) {
    throw new Error("It can only be used inside the Split component.");
  }
  return context;
};
