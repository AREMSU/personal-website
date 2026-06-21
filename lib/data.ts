import projectsData from "@/data/projects.json";
import certificationsData from "@/data/certifications.json";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import awardsData from "@/data/awards.json";
import {
  Project,
  Certification,
  Experience,
  Education,
  Award,
} from "@/lib/types";

export const projects = projectsData as Project[];
export const certifications = certificationsData as Certification[];
export const experience = experienceData as Experience[];
export const education = educationData as Education[];
export const awards = awardsData as Award[];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getCertificationsByStatus(status: Certification["status"]): Certification[] {
  return certifications.filter((c) => c.status === status);
}

/** Sorts items with a "YYYY-MM" startDate, most recent first. Ongoing (endDate: null) items float to the top. */
export function sortByRecency<T extends { startDate: string; endDate: string | null }>(
  items: T[]
): T[] {
  return [...items].sort((a, b) => {
    if (a.endDate === null && b.endDate !== null) return -1;
    if (b.endDate === null && a.endDate !== null) return 1;
    return b.startDate.localeCompare(a.startDate);
  });
}
