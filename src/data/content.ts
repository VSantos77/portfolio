// src/data/content.ts
// Todo el texto del sitio vive acá. Editá este archivo sin tocar index.astro.

export const profile = {
  name: "Santiago Villaverde",
  eyebrow: "",
  role: "Analytics Engineer | Ecommerce & Fraud Prevention",
  location: "Buenos Aires, Argentina",
  email: "santiago.villaverde07@gmail.com",
  linkedin: "https://linkedin.com/in/svillaverde",
  github: "https://github.com/VSantos77",
};

// Tu presentación. Reemplazá el texto entre comillas por 2-3 líneas propias.
export const intro =
"Hola, soy Santi! Hace +5 años que construyo los pipelines y dashboards que las áreas de negocio usan para tomar decisiones.\
Me encanta tomar un problema ambiguo y convertirlo en un modelo de datos confiable. \
Hoy busco roles de Analytics / Data Engineer donde poder contribuir a construir arquitecturas de datos con impacto."
;

export type SkillGroup = {
  label: string;
  items: string[];
  warm?: boolean; // true = usa el chip color ámbar (lo usamos para Idiomas)
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Datos & modelado",
    items: ["SQL (avanzado)", "dbt", "Python · Pandas", "Snowflake"],
  },
  {
    label: "BI & visualización",
    items: ["Tableau", "Power BI", "Looker Studio", "Streamlit"],
  },
  {
    label: "Infraestructura",
    items: ["GCP", "Terraform", "Git · CI/CD"],
  },
  {
    label: "Idiomas",
    items: ["Español · nativo", "Inglés · C1", "Alemán · C1", "Portugués · básico"],
    warm: true,
  },
];

export type MiniChart = {
  before: { value: string; label: string; heightPx: number };
  after: { value: string; label: string; heightPx: number };
  note: string;
};

export type Job = {
  company: string;
  role: string;
  date: string;
  paragraphs: string[];
  chart?: MiniChart; // opcional: solo el job de Mercado Libre lo usa
};

export const experience: Job[] = [
  {
    company: "Passport Global",
    role: "SSr Analytics Engineer - Data",
    date: "DIC 2024 - PRESENTE",
    paragraphs: [
      "Dueño end-to-end de las herramientas de BI (Tableau, Streamlit) para Growth y Customer Success, desde el relevamiento hasta el modelado en dbt.",
      "Construí el dashboard de churn (efectivo vs. potencial) que reemplazó los cálculos manuales de Business Operations; hoy se usa trimestralmente en los offsites de la compañía.",
    ],
  },
  {
    company: "Mercado Libre Inc.",
    role: "Fraud Prevention Data Analyst",
    date: "MAY 2023 - DIC 2024",
    paragraphs: [
      "Detecté, fuera de mi scope directo, un bug de validación antifraude que crecía sostenidamente. Escalé la causa raíz a IT y validé el fix en producción.",
    ],
    chart: {
      before: { value: "20%", label: "pico", heightPx: 64 },
      after: { value: "1-2%", label: "post-fix", heightPx: 8 },
      note: "Tasa de falsos negativos antes / después de la corrección",
    },
  },
  {
    company: "AAICI",
    role: "Data Analyst - Business Intelligence",
    date: "ABR 2022 - ABR 2023",
    paragraphs: [
      "Lideré un pipeline en Python + Scrapy que automatizó el reporting de indicadores comerciales, reemplazando un proveedor externo (~$50k/año evitados).",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: { label: string; url: string };
};

export const projects: Project[] = [
  {
    title: "Discount Tracker",
    description:
      "Pipeline ELT propio (Scrapy → GCS → BigQuery → dbt) con arquitectura medallion, que consolida descuentos bancarios para identificar el mejor por comercio y período.",
    tags: ["dbt", "BigQuery", "Terraform", "Cloud Run"],
    link: { label: "github ↗", url: "https://github.com/VSantos77/discount-tracker" },
  },
  {
    title: "Churn Dashboard",
    description:
      "Modelo dbt que centraliza la lógica de negocio de churn efectivo y potencial, con tests de calidad, usado trimestralmente en decisiones de la compañía.",
    tags: ["dbt", "Tableau", "SQL"],
  },
  {
    title: "Cost Comparison App",
    description:
      "App en Streamlit que le permite a Sales generar análisis de costos self-service, eliminando ~30 hs/mes de trabajo manual del equipo de Data.",
    tags: ["Streamlit", "Python", "Google Sheets API"],
  },
  {
    title: "Shipping Intelligence Portal",
    description:
      "App multi-cliente en Streamlit embebida en el portal externo, con row-level security y autenticación JWT para aislar datos por cliente.",
    tags: ["Streamlit", "Snowflake", "JWT"],
  },
];

export const contactHeadline = "¿Hablamos de tu próximo proyecto de datos?";
export const footerNote = "Buenos Aires, Argentina · Última actualización agosto 2026";
