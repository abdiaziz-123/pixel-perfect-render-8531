// The organization launch is separate from the proposed programme strategy.
export const organizationLaunch = { year: 2026, month: 12 } as const;
export const programmeStrategy = { startYear: 2027, endYear: 2029 } as const;
export const launchLabel = new Intl.DateTimeFormat("en", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(Date.UTC(organizationLaunch.year, organizationLaunch.month - 1, 1)));