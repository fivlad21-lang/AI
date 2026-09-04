type Props = { className?: string; filled?: boolean };

/** Same silhouette for outline and filled — only fill changes. */
export function HeartIcon({ className = "h-5 w-5", filled = false }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 20.5s-7.2-4.35-9.3-8.4C1.2 9.2 2.1 5.8 5.2 4.7c1.85-.65 3.9-.1 5.1 1.45C11.5 4.6 13.55 4.05 15.4 4.7c3.1 1.1 4 4.5 2.5 7.4C19.2 16.15 12 20.5 12 20.5z" />
    </svg>
  );
}
