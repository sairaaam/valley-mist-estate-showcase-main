import valleyMistLogo from '@/assets/valley-mist-logo.png';

interface LogoProps {
  className?: string;
  alt?: string;
}

export function Logo({ 
  className = "h-14 w-auto object-contain", 
  alt = "Valley Mist Estate Logo"
}: LogoProps) {
  return (
    <img 
      src={valleyMistLogo}
      alt={alt}
      className={className}
      loading="eager"
    />
  );
}
