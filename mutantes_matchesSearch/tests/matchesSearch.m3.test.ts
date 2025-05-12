import { matchesSearch } from "../matchesSearch.m3";

describe("Mutante 3 - Retorno fijo falso", () => {
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
