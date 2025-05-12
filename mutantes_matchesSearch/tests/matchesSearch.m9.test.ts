import { matchesSearch } from "../matchesSearch.m9";

describe("Mutante 9 - Retornar negación del search", () => {
  const project = {
    proyecto: "EmpowerShe",
    objetivo_ps: "Empoderamiento femenino mediante clases STEM"
  };

  it("returns boolean", () => {
    const result = matchesSearch(project, "empowershe");
    expect(typeof result).toBe("boolean");
  });

  it("returns true when match exists", () => {
    const result = matchesSearch(project, "stem");
    expect(result).toBe(true);
  });
});
