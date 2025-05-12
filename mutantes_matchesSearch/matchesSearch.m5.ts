export function matchesSearch(project: any, search: string): boolean {
  const searchLower = search.toLowerCase();
  return project.proyecto.toLowerCase().startsWith(searchLower);
}