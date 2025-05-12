export function getBackgroundColor(hours: number): string {
  if (hours >= 180) return "bg-lime-400";
  return "bg-gray-400";
}