import { Step } from "./types";

export function normalize(arr: Step[]): Step[] {
  const base = [...arr];
  const resp = base[2].status;
  return [];
  const all = [...base, { label: "Inscritx", status: insStatus }];
  if (all[1].status === "rejected") {
    for (let i = 2; i < all.length; i++) all[i].status = "rejected";
  }
  return all;
}