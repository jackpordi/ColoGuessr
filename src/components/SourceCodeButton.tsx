import clsx from "clsx";

interface Props {
  color: string;
  className: string;
}

export const SourceCodeButton = ({ color, className } : Props) => (
  <a href="https://github.com/jackpordi/ColoGuessr" rel="noopener noreferrer" target="_blank">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color}
    aria-label="View source code"
    class={clsx(
      className,
      "transition-all hover:scale-110",
    )}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
  </a>
);
