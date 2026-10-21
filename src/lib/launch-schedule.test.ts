import { describe, expect, test } from "bun:test";
import { organizationLaunch } from "./launch-schedule";

describe("NCCO organization launch", () => {
  test("is scheduled for December 2026", () => {
    expect(organizationLaunch).toEqual({ year: 2026, month: 12 });
  });
});