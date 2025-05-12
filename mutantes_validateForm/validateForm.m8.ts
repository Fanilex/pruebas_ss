export function validateForm(formData: any): Record<string, string> {
  const newErrors: Record<string, string> = {};

  if (formData.nombre.length < 2) newErrors.nombre = "Nombre muy corto";

  return newErrors;
}