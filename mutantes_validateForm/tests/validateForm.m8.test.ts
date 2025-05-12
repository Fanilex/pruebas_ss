import { validateForm } from "../validateForm.m8";

describe("Mutante 8 - Agregar validación por longitud", () => {
  const validData = {
    nombre: "Estefanía",
    matricula: "A01234567",
    carrera: "ITC",
    carrera_completa: "Ingeniería en Tecnologías Computacionales",
    email: "estefania@tec.mx",
    numero: "2221234567",
    compromiso: "si"
  };

  it("returns an object", () => {
    const result = validateForm(validData);
    expect(typeof result).toBe("object");
  });

  it("detects missing name or email", () => {
    const result = validateForm({ ...validData, nombre: "", email: "" });
    expect(Object.keys(result).length).toBeGreaterThanOrEqual(1);
  });
});
