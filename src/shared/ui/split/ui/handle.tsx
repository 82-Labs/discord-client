import { useSplitContext } from "../hooks/use-split-context";

type HandleProps = {
  className?: string;
};

export function Handle({ className }: HandleProps) {
  const { handleSize, handlePointerDown } = useSplitContext();

  return (
    <hr
      aria-orientation="vertical"
      aria-label="Resize panel"
      onPointerDown={handlePointerDown}
      className={
        className ??
        "h-full shrink-0 bg-transparent hover:bg-black/10 focus:bg-black/10"
      }
      style={{
        width: handleSize,
        height: "100%",
        margin: 0,
        border: "none",
        cursor: "col-resize",
        touchAction: "none",
      }}
    />
  );
}
