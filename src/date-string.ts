import { Temporal } from "proposal-temporal";

type DateString = string | Temporal.PlainDate;

const BEFORE = -1;
const AFTER = 1;
const EQUAL = 0;

const base = (initial: DateString, final: DateString) => Temporal.PlainDate.compare(initial, final);

export const isBefore = (initial: DateString, final: DateString) => base(initial, final) === BEFORE;
export const isAfter = (initial: DateString, final: DateString) => base(initial, final) === AFTER;
export const isEqual = (initial: DateString, final: DateString) => base(initial, final) === EQUAL;
