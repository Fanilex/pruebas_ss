export type Status = "completed" | "in-progress" | "locked" | "rejected";
export type Step = {
  label: string;
  status: Status;
};
