import { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Aarnav Dahal",
  description: "Get in touch with me.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-3 text-ink">
        <MessageSquare className="text-primary-500 w-8 h-8" />
        Let&apos;s Connect
      </h1>
      <p className="text-slate mb-10 text-lg">
        Whether you have a question, an internship opportunity, or just want to say hi,
        feel free to reach out. I&apos;ll try my best to get back to you!
      </p>

      <div className="bg-surface border border-border p-8 rounded-2xl">
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
          <a
            href="mailto:arnavjungdahala1@gmail.com"
            className="flex items-center gap-3 px-6 py-4 bg-primary-500/10 text-primary-600 hover:bg-primary-500 hover:text-white rounded-xl transition-all border border-primary-500/20 hover:border-primary-500 w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            <span className="font-semibold text-lg">Send me an Email</span>
          </a>

          <p className="text-slate italic text-sm">
            Or find me on LinkedIn / GitHub (links coming soon!)
          </p>
        </div>
      </div>
    </div>
  );
}
