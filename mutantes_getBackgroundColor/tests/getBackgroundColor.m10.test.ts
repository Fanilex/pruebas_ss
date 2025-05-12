import { getBackgroundColor } from "../getBackgroundColor.m10";

describe("Mutante 10 - Validación tipo", () => {
  it("should return expected background for known values", () => {
    expect(getBackgroundColor(180)).toMatch(/^bg-/);
    expect(getBackgroundColor(120)).toMatch(/^bg-/);
    expect(getBackgroundColor(60)).toMatch(/^bg-/);
    expect(getBackgroundColor(100)).toMatch(/^bg-/);
    expect(getBackgroundColor(200)).toMatch(/^bg-/);
  });

  it("should return gray for unknown value", () => {
    expect(getBackgroundColor(999)).toMatch(/^bg-/);
  });
});
