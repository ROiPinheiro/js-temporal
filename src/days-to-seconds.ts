import { Temporal } from "proposal-temporal";

export const daysToSeconds = (days: number) => {
  return Temporal.Duration.from({ days }).total({ unit: "seconds" });
};
