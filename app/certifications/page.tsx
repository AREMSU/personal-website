import { Metadata } from "next";
import { Award, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications | Aarnav Dahal",
  description: "Professional certifications and achievements.",
};

const placeholderCerts = [
  {
    id: 1,
    title: "Work in Progress",
    issuer: "",
    date: "",
    link: "#"
  },
];

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Award className="text-accent w-8 h-8" /> 
        Certifications
      </h1>

      <div className="space-y-4">
        {placeholderCerts.map((cert) => (
          <div key={cert.id} className="bg-muted/10 border border-border/50 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-500/10 rounded-full text-primary-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-100">{cert.title}</h3>
                <p className="text-slate-400 text-sm">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
            
            <a 
              href={cert.link} 
              className="mt-4 sm:mt-0 px-4 py-2 border border-border rounded-full text-sm hover:border-primary-500 hover:text-primary-400 transition-colors"
            >
              Verify Badge
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
