import { normalize } from "../normalize.m3";
import { Step } from "../types";

describe("Mutante 3 - Invertir lógica completed", () => {
  const steps: Step[] = [
    { label: "Enviado", status: "completed" },
    { label: "Resultado", status: "completed" },
    { label: "Mi Respuesta", status: "in-progress" },
  ];

  it("should add Inscritx step", () => {
    const result = normalize(steps);
    expect(result[result.length - 1].label).toBe("Inscritx");
  });

  it("should return an array", () => {
    const result = normalize(steps);
    expect(Array.isArray(result)).toBe(true);
  });
});
