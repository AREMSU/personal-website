import { Metadata } from "next";
import { Award, ShieldCheck, Hourglass, Hammer } from "lucide-react";
import { certifications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Certifications | Aarnav Dahal",
  description: "Professional certifications and achievements.",
};

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3 text-ink">
        <Award className="text-primary-500 w-8 h-8" />
        Certifications
      </h1>

      {certifications.length === 0 ? (
        <div className="bg-surface border border-border rounded-2xl p-10 text-center">
          <Hammer className="w-8 h-8 text-slate mx-auto mb-4" />
          <h2 className="font-display font-bold text-lg text-ink mb-2">
            Nothing here yet
          </h2>
          <p className="text-slate max-w-md mx-auto">
            Right now I&apos;m putting that time into shipping real projects instead.
            Check the <a href="/projects" className="text-primary-500 hover:text-primary-600 underline underline-offset-4">projects page</a> for what I&apos;ve actually built.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {certifications.map((cert) => {
            const inProgress = cert.status === "in-progress";
            return (
              <div
                key={cert.id}
                className="bg-surface border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:border-primary-500/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-full ${
                      inProgress
                        ? "bg-accent/10 text-accent"
                        : "bg-primary-500/10 text-primary-500"
                    }`}
                  >
                    {inProgress ? (
                      <Hourglass className="w-6 h-6" />
                    ) : (
                      <ShieldCheck className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-ink">{cert.title}</h3>
                    <p className="text-slate text-sm">
                      {cert.issuer} •{" "}
                      {inProgress ? "In progress" : cert.dateEarned}
                    </p>
                  </div>
                </div>

                {!inProgress && cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    className="mt-4 sm:mt-0 px-4 py-2 border border-border rounded-full text-sm text-ink hover:border-primary-500 hover:text-primary-500 transition-colors"
                  >
                    Verify Badge
                  </a>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
