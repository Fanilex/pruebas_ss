export function getBackgroundColor(hours: number): string {
  if (hours < 100) return "bg-yellow-400";
  return "bg-gray-400";
}