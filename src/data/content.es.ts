// src/data/content.es.ts
// Todo el texto del sitio (versión en español) vive acá. Editá este archivo sin tocar Portfolio.astro.

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

// Tu presentación. Cada elemento del array es un párrafo separado; agregá más para partir el texto.
// Envolvé texto en <mark>...</mark> para resaltarlo en color accent.
export const intro = [
  "Hola!",
  "Me llamo Santi. Hace más de 5 años que construyo los <mark>pipelines y dashboards que potencian decisiones de negocio</mark>. Me apasiona tomar un problema ambiguo y convertirlo en un modelo de datos confiable.",
  "Hoy en día busco roles de Analytics / Data Engineer donde poder <mark>contribuir a construir arquitecturas de datos con impacto.</mark>",
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Transformacion de datos",
    items: ["SQL", "Python", "dbt", "Pandas"],
  },
  {
    label: "BI & visualización",
    items: ["Tableau", "Power BI", "Looker Studio", "Streamlit"],
  },
  {
    label: "Cloud e Infraestructura",
    items: ["GCP", "Snowflake", "Terraform"],
  },
  {
    label: "Versionado y CI/CD",
    items: ["Git", "Github Actions"],
  },
  {
    label: "Idiomas",
    items: ["Español · nativo", "Inglés · C1", "Alemán · C1", "Portugués · básico"],
    warm: true,
  },
];

export const experience: Job[] = [
  {
    company: "Passport Global",
    role: "Analytics Engineer",
    date: "DIC 2024 - PRESENTE",
    paragraphs: [
      "<mark>Centralicé la lógica de negocio de churn y revenue</mark> en modelos de datos gobernados en dbt, convirtiéndolos en la fuente única de verdad para los reportes de Customer Success y Business Operations.",
      "Desarrollé el monitor de Churn (dbt + Tableau) que reemplazó los cálculos manuales; hoy <mark>es usado trimestralmente para evaluar performance y setear objetivos.</mark>",
    ],
  },
  {
    company: "Mercado Libre Inc.",
    role: "Fraud Prevention Data Analyst",
    date: "MAY 2023 - DIC 2024",
    paragraphs: [
      "Diseñé el <mark>monitor de chargebacks</mark> (Tableau), con breakdowns dinámicos por país, canal de pago y banco emisor; <mark>se usa a diario para detectar y diagnosticar incidentes.</mark>",
      "Detecté, fuera de mi scope directo, un bug en el proceso de detección de fraude. Lideré el fix junto a IT, confirmando la causa raíz y validando la corrección en producción, <mark>evitando ~$1M USD en pérdidas anuales proyectadas.</mark>",
    ],
  },
  {
    company: "Agencia Argentina de Inversiones y Comercio Internacional",
    role: "Data Analyst - Business Intelligence",
    date: "ABR 2022 - ABR 2023",
    paragraphs: [
      "Construí desde cero un pipeline en Python + Scrapy que convierte datos crudos en recomendaciones de nuevos destinos de exportación para los clientes de la agencia, presentados en un <a href='https://app.powerbi.com/view?r=eyJrIjoiNjRiNmFmMjMtM2IxZC00OTc4LTgxMjYtM2NmYjAyNTliNjRkIiwidCI6IjM2MGNjNjBjLTVhZTgtNDFjMi05MmZiLTcyNDIyODU0YWRkYSIsImMiOjR9&pageName=ReportSection868e66edec67e556ec1d'> reporte interactivo en Power BI </a>; reemplazó la necesidad de un proveedor externo <mark>resultando en un ahorro de ~$50k USD/año</mark>",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Catalogo de Descuentos",
    description:
      "Pipeline ELT propio (Scrapy → GCS → BigQuery → dbt) con arquitectura medallion, que consolida descuentos de bancos y programas de membresía en Argentina para encontrar el mejor por comercio y período.",
    tags: ["dbt", "BigQuery", "Terraform", "Cloud Run"],
    link: { label: "github ↗", url: "https://github.com/VSantos77/discount-tracker" },
  },
];

export const contactHeadline = "¿Hablamos de tu próximo proyecto de datos?";
export const footerNote = "Buenos Aires, Argentina · Última actualización agosto 2026";

export const ui: UiStrings = {
  sectionExperience: "Experiencia",
  sectionProjects: "Proyectos",
  sectionContact: "Contacto",
};
