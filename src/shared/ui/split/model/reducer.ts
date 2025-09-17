import type { SplitAction, SplitState } from "./types";

export const initialSplitState: SplitState = {
  panelWidth: 280,
  isDragging: false,
  isReady: false,
  isInitialized: false,
};

export function splitReducer(
  state: SplitState,
  action: SplitAction,
): SplitState {
  switch (action.type) {
    case "SET_PANEL_WIDTH":
      return {
        ...state,
        panelWidth: action.payload,
      };

    case "START_DRAG":
      return {
        ...state,
        isDragging: true,
      };

    case "STOP_DRAG":
      return {
        ...state,
        isDragging: false,
      };

    case "SET_READY":
      return {
        ...state,
        isReady: action.payload,
      };

    case "SET_INITIALIZED":
      return {
        ...state,
        isInitialized: action.payload,
      };

    case "INITIALIZE":
      return {
        ...state,
        panelWidth: action.payload,
        isReady: true,
        isInitialized: true,
      };

    default:
      return state;
  }
}
