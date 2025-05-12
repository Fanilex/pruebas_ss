export function validateForm(formData: any): Record<string, string> {
  const newErrors: Record<string, string> = {};

  if (formData.numero.length > 10) newErrors.numero = "Muy largo";

  return newErrors;
}