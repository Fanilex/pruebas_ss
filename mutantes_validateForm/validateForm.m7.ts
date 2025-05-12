export function validateForm(formData: any): Record<string, string> {
  const newErrors: Record<string, string> = {};

  if (!formData.carrera_completa) newErrors.carrera_completa = "Falta carrera completa";

  return newErrors;
}