import { Metadata } from "next";
import { User, Briefcase, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Aarnav Dahal",
  description: "Learn more about Aarnav Dahal's background and experience.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <User className="text-primary-500" /> About Me
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          I am a passionate developer who enjoys blending modern design aesthetics with robust backend systems. 
          When I'm not coding, you can probably find me exploring the latest game releases or watching anime. 
          I love building custom experiences and experimenting with new technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-muted/20 border border-border/50 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="text-accent" /> Experience
          </h2>
          <div className="space-y-4 text-slate-400">
            <p>More detailed experience will be populated here from the database in Phase 2!</p>
            {/* Placeholder */}
            <div className="border-l-2 border-primary-500/50 pl-4 py-1">
              <h3 className="font-semibold text-slate-200">Software Engineer</h3>
              <p className="text-sm">Some Company • 2023 - Present</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/20 border border-border/50 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="text-primary-400" /> Education
          </h2>
          <div className="space-y-4 text-slate-400">
            <p>Education details will be dynamically loaded soon.</p>
            {/* Placeholder */}
            <div className="border-l-2 border-accent/50 pl-4 py-1">
              <h3 className="font-semibold text-slate-200">B.S. Computer Science</h3>
              <p className="text-sm">University Name • 2019 - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
