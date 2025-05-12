export function getBackgroundColor(hours: number): string {
  if (hours === 60) return "bg-orange-400";
  return "bg-gray-400";
}