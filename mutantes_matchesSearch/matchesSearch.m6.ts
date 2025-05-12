export function matchesSearch(project: any, search: string): boolean {
  const searchLower = search.toLowerCase();
  return project.objetivo_ps.toLowerCase().endsWith(searchLower);
}