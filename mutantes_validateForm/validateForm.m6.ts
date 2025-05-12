export function validateForm(formData: any): Record<string, string> {
  const newErrors: Record<string, string> = {};

  if (formData.matricula.length < 5) newErrors.matricula = "Matrícula corta";

  return newErrors;
}