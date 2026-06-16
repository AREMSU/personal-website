import { Metadata } from "next";
import { Code2, ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Aarnav Dahal",
  description: "Showcase of my recent coding projects and experiments.",
};

const placeholderProjects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "The website you are looking at right now! Built with Next.js, Tailwind CSS, and Framer Motion.",
    tags: ["Next.js", "React", "Tailwind"],
    github: "https://github.com/AREMSU/personal-website",
    link: "https://aarnavdahal.com.np"
  },
  {
    id: 2,
    title: "Secret Game Engine",
    description: "A custom 2D game engine built for learning purposes. Shhh, it's a secret.",
    tags: ["C++", "OpenGL", "GameDev"],
    github: "#",
    link: "#"
  },
  {
    id: 3,
    title: "Anime Tracker CLI",
    description: "Command line interface to track watched anime episodes using AniList API.",
    tags: ["Rust", "CLI", "API"],
    github: "#",
    link: "#"
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Code2 className="text-primary-500 w-8 h-8" /> 
        Projects 
        <span className="text-sm font-normal text-slate-500 ml-4 border border-border px-2 py-1 rounded-full bg-muted/20">
          Lv. 2
        </span>
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderProjects.map((project) => (
          <div key={project.id} className="group relative bg-muted/10 border border-border/50 rounded-2xl p-6 hover:border-primary-500/50 hover:bg-muted/30 transition-all">
            <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-6 h-16">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono bg-primary-500/10 text-primary-400 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <a href={project.github} className="hover:text-white transition-colors" target="_blank" rel="noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href={project.link} className="hover:text-white transition-colors" target="_blank" rel="noreferrer">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
