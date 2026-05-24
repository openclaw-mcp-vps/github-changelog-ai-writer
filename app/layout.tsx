import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog AI Writer — AI-generated changelogs from GitHub",
  description: "Automatically generate user-friendly changelogs from your GitHub commits, PRs, and issues using AI. Built for engineering managers, product managers, and open source maintainers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="28303c3b-95b7-40ee-954f-98b57b29df67"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
