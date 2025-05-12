export function getBackgroundColor(hours: number): string {
  if (hours !== 60) return "bg-indigo-400";
  return "bg-gray-400";
}