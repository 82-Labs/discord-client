import { useRef, useEffect } from "react";
import { useSplitContext } from "../hooks/use-split-context";

type PaneProps = {
  className?: string;
  minSize?: number;
  defaultSize?: number;
  maxSize?: number;
  fill?: boolean;
  children: React.ReactNode;
};

export function Pane({
  className,
  minSize,
  maxSize,
  fill,
  children,
}: PaneProps) {
  const { panelWidth, containerRef } = useSplitContext();
  const paneRef = useRef<HTMLDivElement>(null);

  const isFirstPane =
    paneRef.current?.parentElement?.firstElementChild === paneRef.current;

  useEffect(() => {
    if (fill && containerRef.current && paneRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const width = containerWidth - panelWidth;
      paneRef.current.style.width = `${width}px`;
    }
  }, [fill, panelWidth, containerRef]);

  const width = fill ? undefined : isFirstPane ? panelWidth : undefined;

  return (
    <div
      ref={paneRef}
      className={className ?? "h-full"}
      style={{
        width: width ? `${width}px` : undefined,
        flexGrow: fill ? 1 : undefined,
        minWidth: minSize ? `${minSize}px` : undefined,
        maxWidth: maxSize ? `${maxSize}px` : undefined,
      }}
    >
      {children}
    </div>
  );
}
