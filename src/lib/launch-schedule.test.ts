import { describe, test } from "node:test";
import { deepStrictEqual } from "node:assert";
import { organizationLaunch } from "./launch-schedule";

describe("NCCO organization launch", () => {
  test("is scheduled for December 2026", () => {
    deepStrictEqual(organizationLaunch, { year: 2026, month: 12 });
  });
});