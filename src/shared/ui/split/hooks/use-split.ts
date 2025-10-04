import { useCallback, useEffect, useReducer, useRef } from "react";

import { clampWidth } from "../lib/calculations";
import { initialSplitState, splitReducer } from "../model/reducer";
import type { SplitConfig } from "../model/types";

export function useSplit(
  config: SplitConfig,
  onChange?: (width: number) => void,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(splitReducer, {
    ...initialSplitState,
    panelWidth: config.defaultSize,
  });

  const updateWidth = useCallback(
    (newWidth: number, enforceMax = true) => {
      const clampedWidth = clampWidth(
        newWidth,
        config,
        containerRef,
        enforceMax,
      );
      dispatch({ type: "SET_PANEL_WIDTH", payload: clampedWidth });
      onChange?.(clampedWidth);
    },
    [config, onChange],
  );

  const startDrag = useCallback(() => {
    dispatch({ type: "START_DRAG" });
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }, []);

  const stopDrag = useCallback(() => {
    dispatch({ type: "STOP_DRAG" });
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, []);

  useEffect(() => {
    if (!state.isInitialized) {
      dispatch({ type: "INITIALIZE", payload: config.defaultSize });
    }
  }, [config.defaultSize, state.isInitialized]);

  return {
    containerRef,
    state,
    updateWidth,
    startDrag,
    stopDrag,
  };
}
