export type SplitConfig = {
  minSize: number;
  defaultSize: number;
  maxSize?: number;
  rightMin: number;
  handleSize: number;
};

export type SplitState = {
  panelWidth: number;
  isDragging: boolean;
  isReady: boolean;
  isInitialized: boolean;
};

export type SplitAction =
  | { type: "SET_PANEL_WIDTH"; payload: number }
  | { type: "START_DRAG" }
  | { type: "STOP_DRAG" }
  | { type: "SET_READY"; payload: boolean }
  | { type: "SET_INITIALIZED"; payload: boolean }
  | { type: "INITIALIZE"; payload: number };
