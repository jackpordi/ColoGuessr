import clsx from "clsx";

interface Props {
  color: string;
  className: string;
}

export const DonateButton = ({ color, className } : Props) => (
  <a
    href="https://www.buymeacoffee.com/jackpordi"
    rel="noopener noreferrer"
    target="_blank"
    aria-label="Donate to author"
  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color}
    class={clsx(
      className,
      "transition-all hover:scale-110",
    )}
  >
  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
  <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
  </svg>
  </a>
);
