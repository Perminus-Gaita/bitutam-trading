type P = { className?: string };

const base = "h-6 w-6";

export function LeafIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 4c0 8-4.5 13-11 13H5c0-8 5-13 11-13h4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M4 21c2-5 6-8 11-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function EyeIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function TargetIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function HomeIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3.5 10.5 12 4l8.5 6.5V20a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9.5 21v-6h5v6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function BuildingIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 10h5a1 1 0 0 1 1 1v10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 8h4M7 12h4M7 16h4M17 14h0M17 18h0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2.5 21h19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function InstitutionIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 9.5 12 4l9 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M5.5 10.5V18M10 10.5V18M14 10.5V18M18.5 10.5V18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function KeyIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="8" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 12h9M18 12v3.5M15.5 12v2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3.5 13.8 9l5.5 1.8-5.5 1.8L12 18l-1.8-5.4L4.7 10.8 10.2 9 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M18.5 16.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" fill="currentColor" />
    </svg>
  );
}

export function BroomIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M14 3.5 20.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12.5 8.5 15.5 11.5l-5 5-3-3 5-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10.5 16.5 5 21H3v-2l4.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function MowerIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 16h10l1-5h6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M19 11V6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="6" cy="19" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="19" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function FlowerIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 5.8a2.4 2.4 0 1 1 3.4 3.4M12 5.8a2.4 2.4 0 1 0-3.4 3.4M14.2 8a2.4 2.4 0 1 1-3.4 3.4M9.8 8a2.4 2.4 0 1 0 3.4 3.4"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M12 12.5V21M12 17c-2 0-3.5-1-4-2.5M12 19c2 0 3.5-1 4-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function TreeIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3 6.5 11h11L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 8 7 15.5h10L12 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 15.5V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3.2 19 6v6c0 4.2-2.9 7.4-7 8.8-4.1-1.4-7-4.6-7-8.8V6l7-2.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BadgeIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="9.5" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8.5 14-1 7 4.5-2.4L16.5 21l-1-7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function UsersIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 20c0-3.2 2.7-5.2 6-5.2s6 2 6 5.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 6M17.5 15c2 .8 3.5 2.5 3.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ClipboardIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M9 4.5h6M6.5 5.5h11a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 3.5h6v2.5H9zM8.5 11h7M8.5 14.5h7M8.5 18h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ThumbIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7 10.5 11 3a2.4 2.4 0 0 1 2.4 2.4V9h5a1.8 1.8 0 0 1 1.8 2.1l-1.3 7A2 2 0 0 1 17 19.8H7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <rect x="3" y="10.5" width="4" height="9.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function StarIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="m12 3.5 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 10l6.1-.9L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 3.5h3l1.6 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7 2 2 0 0 1 5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m3.5 7 8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobeIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function PinIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 21c4-4.6 6-7.9 6-10.4A6 6 0 0 0 6 10.6C6 13.1 8 16.4 12 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="10.4" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------- trading & supply icons ------------------------- */

export function BrickIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2.5" y="5" width="19" height="4.5" rx="0.8" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2.5" y="9.5" width="19" height="4.5" rx="0.8" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2.5" y="14" width="19" height="4.5" rx="0.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 5v4.5M15 9.5V14M9 14v4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function SolarIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 14.5 6 7h12l2 7.5H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 7v7.5M5 10.8h14M12 14.5V21M8.5 21h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="19" cy="4" r="1.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function RoadIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M7.5 3 4 21M16.5 3 20 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 4v3M12 10.5v3M12 17v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function BoxIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3 3.5 7.2v9.6L12 21l8.5-4.2V7.2L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m3.5 7.2 8.5 4.3 8.5-4.3M12 11.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function TruckIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M2.5 6.5h11v10h-11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13.5 10h4l3 3v3.5h-7V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="18" r="1.9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function SearchIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ScaleIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 4v16M7 20h10M4 8h16M12 4l-8 4M12 4l8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 8 1.8 13a2.6 2.6 0 0 0 4.4 0L4 8ZM20 8l-2.2 5a2.6 2.6 0 0 0 4.4 0L20 8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function BoltIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M13.5 2.5 5 13.5h5.5L10 21.5 19 10.5h-5.5l0-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function HandshakeIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="m2.5 12 3.5-3.5 3 1 3-1.5 3 1.5 3-1L21.5 12l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 9.5 6.5 12a1.6 1.6 0 0 0 2.3 2.3l.7-.7 1.6 1.6a1.5 1.5 0 0 0 2.2-2.1l1.3 1.3a1.5 1.5 0 0 0 2.1-2.1L12 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function LayersIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m3 12 9 4.5L21 12M3 16.5 12 21l9-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function HardHatIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3.5 16.5a8.5 8.5 0 0 1 17 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9.5 8.4V5.2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="2" y="16.5" width="20" height="3" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
