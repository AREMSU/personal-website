import { Metadata } from "next";
import { Award, ShieldCheck, Hourglass } from "lucide-react";
import { certifications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Certifications | Aarnav Dahal",
  description: "Professional certifications and achievements.",
};

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Award className="text-accent w-8 h-8" />
        Certifications
      </h1>

      <div className="space-y-4">
        {certifications.map((cert) => {
          const inProgress = cert.status === "in-progress";
          return (
            <div
              key={cert.id}
              className="bg-muted/10 border border-border/50 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-full ${
                    inProgress
                      ? "bg-amber-400/10 text-amber-400"
                      : "bg-primary-500/10 text-primary-400"
                  }`}
                >
                  {inProgress ? (
                    <Hourglass className="w-6 h-6" />
                  ) : (
                    <ShieldCheck className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-100">{cert.title}</h3>
                  <p className="text-slate-400 text-sm">
                    {cert.issuer} •{" "}
                    {inProgress ? "In progress" : cert.dateEarned}
                  </p>
                </div>
              </div>

              {!inProgress && cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  className="mt-4 sm:mt-0 px-4 py-2 border border-border rounded-full text-sm hover:border-primary-500 hover:text-primary-400 transition-colors"
                >
                  Verify Badge
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
