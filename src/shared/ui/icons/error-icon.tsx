interface ErrorIconProps {
  strokeColor: string;
  circleColor: string;
  ariaLabel: string;
  title: string;
}

export function ErrorIcon({
  strokeColor,
  circleColor,
  ariaLabel,
  title,
}: ErrorIconProps) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
    >
      <title>{title}</title>
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke={circleColor}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M40 40L80 80M80 40L40 80"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
