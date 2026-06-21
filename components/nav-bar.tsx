"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-center pt-6 pb-4 px-4 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex space-x-1 sm:space-x-4 bg-surface px-3 py-2 rounded-full border border-border shadow-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-ink",
                isActive ? "text-ink" : "text-slate"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-primary-500/10 border border-primary-500/40 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
