export function validateForm(formData: any): Record<string, string> {
  const newErrors: Record<string, string> = {};

  if (formData.email === "") newErrors.email = "Falta email";

  return newErrors;
}