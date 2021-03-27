import { Temporal } from "proposal-temporal";
import { isAfter, isBefore, isEqual } from "./date-string";
import { daysToSeconds } from "./days-to-seconds";

console.log(daysToSeconds(5));

const currentDay = Temporal.now.plainDateISO();
console.log(currentDay.toString());

const moreFiveDays = currentDay.add(Temporal.Duration.from({ days: 5, months: 3 }));
console.log(moreFiveDays.toString());

const currentTimeZone = Temporal.now.timeZone();
console.log(currentTimeZone.toString());

console.log(
  isBefore("2020-01-01", "2020-01-02"),
  isAfter("2020-01-02", "2020-01-01"),
  isEqual("2020-01-01", "2020-01-01")
);

console.log(isBefore(currentDay, moreFiveDays));

const differenceBetween = (initial: Temporal.PlainDate, final: Temporal.PlainDate) => {
  return initial.since(final).negated();
};

console.log(differenceBetween(currentDay, moreFiveDays).toString());
