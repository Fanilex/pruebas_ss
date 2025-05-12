export function validateForm(formData: any): Record<string, string> {
  const newErrors: Record<string, string> = {};

  if (!formData.email.includes(".com")) newErrors.email = "Email inválido por dominio";

  return newErrors;
}