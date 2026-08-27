// src/data/content.en.ts
// All site text (English version) lives here. Edit this file without touching Portfolio.astro.

import type { Profile, SkillGroup, Job, Project, UiStrings } from "./types";

export const profile: Profile = {
  name: "Santiago Villaverde",
  eyebrow: "",
  roleHighlight: "Analytics Engineer",
  roleRest: "Ecommerce & Fraud Prevention",
  location: "Buenos Aires, Argentina",
  email: "santiago.villaverde07@gmail.com",
  linkedin: "https://linkedin.com/in/svillaverde",
  github: "https://github.com/VSantos77",
};

// Your intro. Each array item is its own paragraph; add more to split the text.
// Wrap text in <mark>...</mark> to highlight it in the accent color.
export const intro = [
  "Hi!",
  "I'm Santi. For over 5 years I've been building the <mark>pipelines and dashboards that power business decisions</mark>. I love taking an ambiguous problem and turning it into a reliable data model.",
  "Right now I'm looking for Analytics / Data Engineer roles where I can <mark>help build data architecture with real impact.</mark>",
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Data transformation",
    items: ["SQL", "Python", "dbt", "Pandas"],
  },
  {
    label: "BI & visualization",
    items: ["Tableau", "Power BI", "Looker Studio", "Streamlit"],
  },
  {
    label: "Cloud & infrastructure",
    items: ["GCP", "Snowflake", "Terraform"],
  },
  {
    label: "Versioning & CI/CD",
    items: ["Git", "Github Actions"],
  },
  {
    label: "Languages",
    items: ["Spanish · native", "English · C1", "German · C1", "Portuguese · basic"],
    warm: true,
  },
];

export const experience: Job[] = [
  {
    company: "Passport Global",
    role: "Analytics Engineer",
    date: "DEC 2024 - PRESENT",
    paragraphs: [
      "<mark>Centralized churn and revenue business logic</mark> into governed dbt data models, turning them into the single source of truth for Customer Success and Business Operations reporting.",
      "Built the Churn monitor (dbt + Tableau) that replaced manual calculations; it's now <mark>used quarterly to evaluate performance and set targets.</mark>",
    ],
  },
  {
    company: "Mercado Libre Inc.",
    role: "Fraud Prevention Data Analyst",
    date: "MAY 2023 - DEC 2024",
    paragraphs: [
      "Designed the <mark>chargeback monitor</mark> (Tableau), with dynamic breakdowns by country, payment channel and issuing bank; <mark>used daily to detect and diagnose incidents.</mark>",
      "Detected a bug in the fraud-detection process outside my direct scope. Led the fix together with IT, confirming the root cause and validating the correction in production, <mark>avoiding ~$1M USD in projected annual losses.</mark>",
    ],
  },
  {
    company: "Argentina's Trade & Investment Promotion Agency",
    role: "Data Analyst - Business Intelligence",
    date: "APR 2022 - APR 2023",
    paragraphs: [
      "Built from scratch a Python + Scrapy pipeline that turns raw data into new export-destination recommendations for the agency's clients, presented in an <a href='https://app.powerbi.com/view?r=eyJrIjoiNjRiNmFmMjMtM2IxZC00OTc4LTgxMjYtM2NmYjAyNTliNjRkIiwidCI6IjM2MGNjNjBjLTVhZTgtNDFjMi05MmZiLTcyNDIyODU0YWRkYSIsImMiOjR9&pageName=ReportSection868e66edec67e556ec1d'> interactive Power BI report </a>; replaced the need for an external vendor, <mark>saving ~$50k USD/year.</mark>",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Discount Tracker",
    description:
      "Self-built ELT pipeline (Scrapy → GCS → BigQuery → dbt) with a medallion architecture, consolidating bank and membership-program discounts across Argentina to find the best one by merchant and period.",
    tags: ["dbt", "BigQuery", "Terraform", "Cloud Run"],
    link: { label: "github ↗", url: "https://github.com/VSantos77/discount-tracker" },
  },
];

export const contactHeadline = "Want to talk about your next data project?";
export const footerNote = "Buenos Aires, Argentina · Last updated August 2026";

export const ui: UiStrings = {
  sectionExperience: "Experience",
  sectionProjects: "Projects",
  sectionContact: "Contact",
};
