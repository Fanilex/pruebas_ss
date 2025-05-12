export function validateForm(formData: any): Record<string, string> {
  const newErrors: Record<string, string> = {};

  if (!formData.email.includes("@tec.mx")) newErrors.email = "Solo correo institucional";

  return newErrors;
}