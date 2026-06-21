export const metrics = [
  { value: "1 day → 1hr", label: "Regression time cut at ImageKit" },
  { value: "300+",        label: "E2E tests built with Playwright" },
  { value: "2× /week",   label: "Releases managed, zero critical escapes" },
];

export const toolGroups = [
  {
    label: "Automation",
    tools: [
      { name: "Playwright", accent: true },
      { name: "Cypress",    accent: true },
      { name: "JavaScript", accent: false },
      { name: "TypeScript", accent: false },
    ],
  },
  {
    label: "CI/CD & Pipeline",
    tools: [
      { name: "GitHub Actions",    accent: true },
      { name: "GitLab CI",         accent: true },
      { name: "Slack Integrations",accent: false },
    ],
  },
  {
    label: "API & Data",
    tools: [
      { name: "Postman",   accent: false },
      { name: "SQL",       accent: false },
      { name: "MongoDB",   accent: false },
      { name: "REST APIs", accent: false },
    ],
  },
  {
    label: "Tools",
    tools: [
      { name: "TestRail",     accent: false },
      { name: "JIRA",         accent: false },
      { name: "Datadog",      accent: false },
      { name: "BrowserStack", accent: false },
      { name: "LaunchDarkly", accent: false },
      { name: "Figma",        accent: false },
    ],
  },
  {
    label: "Methodology",
    tools: [
      { name: "Agile",        accent: false },
      { name: "Scrum",        accent: false },
      { name: "Shift-Left",   accent: true },
      { name: "Risk-Based Testing", accent: false },
    ],
  },
];

export const experiences = [
  {
    company: "ImageKit.io",
    role: "Senior Quality Analyst",
    date: "Jan 2024 – Jul 2026",
    badge: "Remote",
    year: "2024 – 2026",
    desc: "Designed and built a Playwright (JS) suite with 300+ E2E tests, cutting manual regression from ~1 day to under 1 hour per release. Integrated into GitHub Actions and GitLab CI — continuous regression on every build. Built a custom Slack integration to broadcast real-time test results to the engineering team.",
    tags: [
      { name: "Playwright",      green: true },
      { name: "GitHub Actions",  green: true },
      { name: "GitLab CI",       green: true },
      { name: "Slack Integration",green: false },
      { name: "E2E Testing",     green: false },
      { name: "JavaScript",      green: false },
    ],
  },
  {
    company: "Clipboard Health",
    role: "Senior Quality Engineer",
    date: "Sep 2021 – Jul 2023",
    badge: "Remote · YC",
    year: "2021 – 2023",
    desc: "Release Manager for 1 year — coordinated 2 production releases/week across 4–5 teams of 6 engineers each, zero critical escapes. Cross-browser and mobile testing via BrowserStack. Mentored junior QA engineers and led Agile ceremonies.",
    tags: [
      { name: "Release Management", green: true },
      { name: "BrowserStack",       green: false },
      { name: "Agile",              green: false },
      { name: "Mentorship",         green: false },
      { name: "Performance Testing",green: false },
    ],
  },
  {
    company: "Housr",
    role: "Quality Analyst",
    date: "Aug 2019 – Sep 2021",
    badge: "Gurgaon",
    year: "2019 – 2021",
    desc: "Built Cypress automated regression and smoke test scripts from scratch. API testing with Postman and database validation using SQL. Established quality gates that made every Agile sprint release-ready.",
    tags: [
      { name: "Cypress", green: true },
      { name: "Postman", green: false },
      { name: "SQL",     green: false },
      { name: "API Testing", green: false },
    ],
  },
  {
    company: "Netomi",
    role: "Quality Analyst",
    date: "Apr 2017 – Aug 2019",
    badge: "Gurugram",
    year: "2017 – 2019",
    desc: "Functional, regression, and cross-browser compatibility testing on a customer analytics dashboard. Authored SQL queries for data validation. Helped build QA processes and documentation standards that improved team efficiency.",
    tags: [
      { name: "Functional Testing", green: false },
      { name: "SQL",                green: false },
      { name: "Cross-browser",      green: false },
      { name: "QA Processes",       green: false },
    ],
  },
];

export const caseStudies = [
  {
    title: "From 1 day to 1 hour: rebuilding regression at ImageKit",
    company: "ImageKit.io",
    desc: "The live dashboard at ImageKit had no automated test coverage. Every release meant a full day of manual regression by one person. I designed and built a Playwright framework from scratch — page object model, CI integration via GitHub Actions, and a Slack bot that broadcasts live results to the engineering team.",
    pills: [
      { bold: "300+", text: " E2E tests" },
      { bold: "~1 day → <1 hr", text: " regression" },
      { text: "GitHub Actions CI" },
      { text: "Slack integration" },
    ],
  },
  {
    title: "Release management at scale: 2 deploys a week, zero escapes",
    company: "Clipboard Health",
    desc: "At Clipboard Health (Sequoia + YC backed), I served as Release Manager for a year — coordinating 2 production releases per week across 4–5 teams of 6 engineers each. This covers the process I built, how we handled hotfixes, and what made zero critical escapes possible.",
    pills: [
      { bold: "2×/week", text: " releases" },
      { bold: "4–5 teams", text: " coordinated" },
      { text: "Zero critical escapes" },
    ],
  },
  {
    title: "Building QA from scratch at an early-stage startup",
    company: "Housr",
    desc: "Housr had no QA process when I joined. I built Cypress-based automation, set up API testing with Postman, added SQL validation for data integrity, and established the quality gates that made every Agile sprint release-ready.",
    pills: [
      { text: "Cypress automation" },
      { text: "API + DB testing" },
      { text: "QA process from scratch" },
    ],
  },
];

export const writings = [
  "How I integrated Playwright into CI/CD — and what I learned",
  "Release management in practice: what 2 deploys a week taught me",
  "Shift-left testing — not just a buzzword",
  "Why I still do exploratory testing even when we have 300+ automated tests",
];
