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
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <User className="text-primary-500" /> About Me
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          I am a Computer Science with AI student who enjoys blending modern design
          aesthetics with robust backend systems. When I&apos;m not coding, you can
          probably find me exploring astrophysics, gaming, or watching anime. I love
          building custom experiences and experimenting with new technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-muted/20 border border-border/50 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="text-accent" /> Experience
          </h2>
          <div className="space-y-4 text-slate-400">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-primary-500/50 pl-4 py-1">
                <h3 className="font-semibold text-slate-200">{exp.role}</h3>
                <p className="text-sm">
                  {exp.organization} • {formatRange(exp.startDate, exp.endDate)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/20 border border-border/50 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="text-primary-400" /> Education
          </h2>
          <div className="space-y-4 text-slate-400">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-accent/50 pl-4 py-1">
                <h3 className="font-semibold text-slate-200">{edu.degree}</h3>
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
