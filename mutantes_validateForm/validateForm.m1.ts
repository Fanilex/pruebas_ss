export function validateForm(formData: any): Record<string, string> {
  const newErrors: Record<string, string> = {};

  if (!formData.nombre) newErrors.nombre = "Nombre vacío";

  return newErrors;
}