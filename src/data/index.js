export const metrics = [
  { value: "400+",           label: "E2E tests built with Playwright" },
  { value: "3 days → 1 day", label: "Regression time cut at ImageKit" },
  { value: "720",            label: "Production releases managed at Clipboard Health" },
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
    desc: "Built and maintained a Playwright automation framework from scratch — 400+ test cases covering UI and API across 3 browsers, integrated into GitHub Actions CI/CD. Created a custom Slack report that included the latest code commit diff, helping the team pinpoint exactly which commit introduced a bug. Manually tested 20+ DAM features end-to-end — including the URL-based image transformation editor, creative automation, templates, and the full DAM UI revamp.",
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
    desc: "Clipboard Health is a YC + Sequoia-backed healthcare staffing marketplace connecting nurses with facilities across the US — I managed approximately 720 production releases, closely coordinating with QAs, PMs, and engineering teams to remove blockers and ensure smooth, on-time deployments. Tested the full onboarding flow revamp on Android and iOS, along with core worker app features including shift booking, instant pay, live ETA tracking, and in-app chat. Contributed to the existing UI and API automation test suite.",
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
    desc: "Built the Cypress automation framework for the Housr website. Tested the revamped website and mobile app — covering payment gateway, meal coupons, rent management, and more. Engaged with stakeholders to convert business requirements into detailed JIRA tickets for the development team.",
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
    desc: "Tested chatbots for global brands including Pampers, WestJet, Singtel, and Aflac. Performed regression, functional, and production validation testing. Reviewed live chats to identify gaps in chatbot performance and managed defect lifecycle end-to-end in JIRA.",
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
    title: "400+ Tests, 3 Browsers, Zero Manual Regression Days",
    company: "ImageKit.io",
    desc: "I built a Playwright UI and API testing framework from scratch — Page Object Model for maintainability, integrated into GitLab CI then migrated to GitHub Actions with scheduled jobs. The custom Slack report included the latest code commit diff, so when a test failed, the team knew exactly which commit caused it and could fix it immediately. What once took 3 days of manual regression now takes 1 day.",
    pills: [
      { bold: "400+", text: " E2E tests" },
      { bold: "3 days → 1 day", text: " regression" },
      { text: "GitHub Actions CI" },
      { text: "Slack integration" },
    ],
  },
  {
    title: "High Stakes, High Frequency — Keeping Clipboard Health's Releases Clean",
    company: "Clipboard Health",
    desc: "Clipboard Health is a two-sided healthcare marketplace where a broken app doesn't just affect UX — it directly impacts nurses' livelihoods and patient care. Shipping fast and shipping clean were both non-negotiable.\n\nI managed approximately 720 production releases — coordinating across QAs, PMs, and engineering teams via Slack and calls, enforcing a release cut checklist, no last-minute merges, and a hard QA and product sign-off gate. Before this process, releases were chaotic and consistently delayed — I brought structure, predictability, and confidence to every deployment. For hotfixes, the standard release process was bypassed — once QA and product gave the go-ahead, the fix went live immediately.",
    pills: [
      { bold: "720", text: " production releases" },
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
