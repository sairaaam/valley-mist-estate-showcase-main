import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add your map functions at the end
export const openMap = (address: string) => {
  const encodedAddress = encodeURIComponent(address);
  const userAgent = navigator.userAgent || navigator.vendor;
  
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    window.open(`maps://maps.google.com/maps?q=${encodedAddress}`, '_blank');
    return;
  }
  
  if (/android/i.test(userAgent)) {
    window.open(`geo:0,0?q=${encodedAddress}`, '_blank');
    setTimeout(() => {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    }, 500);
    return;
  }
  
  window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
};

export const VALLEY_MIST_LOCATION = "53/1, Infantry Rd, Shivaji Nagar, Bengaluru, Karnataka 560001";
