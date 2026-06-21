export type ItemStatus = "completed" | "in-progress" | "planned";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  techStack: string[];
  startDate: string; // "YYYY-MM"
  endDate: string | null;
  status: ItemStatus;
  links: {
    github: string;
    live: string;
    demo: string;
  };
  highlights: string[];
  featured: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  dateEarned: string | null; // "YYYY-MM"
  credentialUrl: string;
  status: ItemStatus;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  description: string;
  bullets: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string | null;
  status: ItemStatus;
  details: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}
