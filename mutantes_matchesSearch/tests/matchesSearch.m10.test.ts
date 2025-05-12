import { matchesSearch } from "../matchesSearch.m10";

describe("Mutante 10 - Igualdad exacta en lower", () => {
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
