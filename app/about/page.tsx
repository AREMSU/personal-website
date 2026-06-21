import { Metadata } from "next";
import { User, Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | Aarnav Dahal",
  description: "Learn more about Aarnav Dahal's background and experience.",
};

function formatRange(start: string, end: string | null) {
  return `${start} – ${end ?? "Present"}`;
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3 text-ink">
          <User className="text-primary-500" /> About Me
        </h1>
        <p className="text-lg text-ink/80 leading-relaxed">
          I&apos;m a Computer Science with AI student leaning into web and front-end
          development, building clean interfaces and shipping real projects rather than
          collecting certificates. When I&apos;m not coding, you can probably find me
          exploring astrophysics, gaming, or watching anime. I like building things that
          look as good as they work.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-surface border border-border p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-ink">
            <Briefcase className="text-primary-500" /> Experience
          </h2>
          <div className="space-y-4 text-slate">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-primary-500/40 pl-4 py-1">
                <h3 className="font-semibold text-ink">{exp.role}</h3>
                <p className="text-sm">
                  {exp.organization} • {formatRange(exp.startDate, exp.endDate)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface border border-border p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-ink">
            <GraduationCap className="text-primary-500" /> Education
          </h2>
          <div className="space-y-4 text-slate">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-accent/40 pl-4 py-1">
                <h3 className="font-semibold text-ink">{edu.degree}</h3>
                <p className="text-sm">
                  {edu.institution} • {formatRange(edu.startDate, edu.endDate)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
