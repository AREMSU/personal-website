import { Metadata } from "next";
import { Code2, ExternalLink, Terminal } from "lucide-react";
import { projects, sortByRecency } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | Aarnav Dahal",
  description: "Showcase of my recent coding projects and experiments.",
};

export default function ProjectsPage() {
  const sortedProjects = sortByRecency(projects);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Code2 className="text-primary-500 w-8 h-8" />
        Projects
        <span className="text-sm font-normal text-slate-500 ml-4 border border-border px-2 py-1 rounded-full bg-muted/20">
          {projects.length} total
        </span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-muted/10 border border-border/50 rounded-2xl p-6 hover:border-primary-500/50 hover:bg-muted/30 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
              {project.status === "in-progress" && (
                <span className="text-[10px] uppercase tracking-wide font-mono text-amber-400 border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                  In progress
                </span>
              )}
            </div>
            <p className="text-slate-400 text-sm mb-6 h-16">{project.summary}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-primary-500/10 text-primary-400 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="hover:text-white transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noreferrer"
                  title="Source Code"
                >
                  <Terminal className="w-5 h-5" />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  title="Live Site"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
