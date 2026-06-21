export const metrics = [
  { value: "1 day → 1hr", label: "Regression time cut at ImageKit" },
  { value: "300+",        label: "E2E tests built with Playwright" },
  { value: "2×/week",   label: "Releases managed, zero critical escapes" },
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
    desc: "As the sole QA owner at ImageKit, I drove the quality strategy for product — designing and building a Playwright (JS) suite with 300+ E2E tests from scratch, integrated into CI/CD pipelines for continuous regression. Stayed hands-on with manual and exploratory testing on every new feature before release, covering cross-browser and device coverage. Collaborated closely with developers, designers, and PMs to review UI/UX designs and functionality flows early — catching gaps before development, unblocking teams faster, and ensuring every release shipped with confidence.",
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
    desc: "Clipboard Health is a YC + Sequoia-backed healthcare staffing marketplace connecting nurses with facilities across the US — I owned UAT sign-off, wrote user stories in Jira, defined acceptance criteria, and negotiated conflicting requirements with developers and stakeholders. Manually tested every new feature across the mobile app and web platform before release, contributed to the existing automation setup, and helped maintain product documentation including release notes and user guides.",
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
    title: "ImageKit's Regression: Faster, Smarter, Automated",
    company: "ImageKit.io",
    desc: "I built a Playwright framework from scratch using POM for maintainability, integrated it into GitLab CI and later migrated to GitHub Actions with scheduled jobs for continuous regression on every build. Wired up a Slack integration that broadcast live test results to the entire team. The Slack integration changed how the team experienced quality — bugs were visible to everyone the moment they appeared, fixes went out faster, and production quality became a shared responsibility rather than a QA bottleneck. What once took a full day now takes under an hour.",
    pills: [
      { bold: "300+", text: " E2E tests" },
      { bold: "~1 day → <1 hr", text: " regression" },
      { text: "GitHub Actions CI" },
      { text: "Slack integration" },
    ],
  },
  {
    title: "High Stakes, High Frequency — Keeping Clipboard Health's Releases Clean",
    company: "Clipboard Health",
    desc: "Twice a week, I coordinated 4–5 teams shipping simultaneously into a single release — for a healthcare app running 24/7 with zero downtime tolerance. I was the single point of contact for all release decisions, with full visibility to leadership. Release cut checklists, no last-minute merges, and a hard QA and product sign-off gate meant nothing critical ever slipped through. Before this process, releases were chaotic and consistently delayed — I brought structure, predictability, and confidence to every deployment.",
    pills: [
      { bold: "2×/week", text: " releases" },
      { bold: "4–5 teams", text: " coordinated" },
      { text: "Zero critical escapes" },
    ],
  },
];

export const writings = [
  "How I integrated Playwright into CI/CD — and what I learned",
  "Release management in practice: what 2 deploys a week taught me",
  "Shift-left testing — not just a buzzword",
  "Why I still do exploratory testing even when we have 300+ automated tests",
];
