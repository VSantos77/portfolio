// src/data/types.ts
// Tipos compartidos entre content.es.ts y content.en.ts.

export type Profile = {
  name: string;
  eyebrow: string;
  roleHighlight: string;
  roleRest: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
  warm?: boolean; // true = usa el chip color ámbar (lo usamos para Idiomas)
};

export type MiniChart = {
  before: { value: string; label: string; heightPx: number };
  after: { value: string; label: string; heightPx: number };
  note: string;
};

export type Job = {
  company: string;
  role: string;
  date: string;
  paragraphs: string[]; // cada string es un bullet; envolvé texto en <mark>...</mark> para resaltarlo en color accent
  chart?: MiniChart; // opcional: para destacar un dato antes/después
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: { label: string; url: string };
};

// Textos de interfaz (encabezados de sección) que varían por idioma.
export type UiStrings = {
  sectionExperience: string;
  sectionProjects: string;
  sectionContact: string;
};
