export function BotijaoIcon({ size = 24, className = '' }: { size?: number | string, className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Corpo do botijão */}
      <rect x="5" y="8" width="14" height="12" rx="4" />
      {/* Linha central do botijão */}
      <line x1="5" y1="14" x2="19" y2="14" />
      {/* Alça/Colarinho de proteção no topo */}
      <path d="M7 8V3h10v5" />
      {/* Válvula central */}
      <path d="M12 8V5" />
      <path d="M10 5h4" />
      {/* Base do botijão */}
      <path d="M8 20v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1" />
    </svg>
  );
}
