import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://chandan-ng.dev"),
  title: {
    default: "Chandan N G | Portfolio",
    template: "%s | Chandan N G",
  },
  description:
    "Personal developer portfolio of Chandan N G. Full-stack engineering, Agentic RAG, multimodal AI systems, and responsive web applications.",
  icons: {
    icon: "/assets/avatar-anime-circle.png",
    shortcut: "/assets/avatar-anime-circle.png",
    apple: "/assets/avatar-anime-circle.png",
  },
  keywords: [
    "Chandan N G",
    "Portfolio",
    "Software Engineer",
    "Agentic RAG",
    "StudyLens-AI",
    "AI Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "Bengaluru",
  ],
  authors: [{ name: "Chandan N G", url: "https://github.com/Chandan-NG" }],
  openGraph: {
    title: "Chandan N G | Portfolio",
    description: "Building intelligent systems, scalable web applications & agentic workflows.",
    url: "https://github.com/Chandan-NG",
    siteName: "Chandan N G Portfolio",
    type: "website",
    images: ["/assets/avatar-anime.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandan N G | Portfolio",
    description: "Building intelligent systems, scalable web applications & agentic workflows.",
    creator: "@chandan_ng_",
    images: ["/assets/avatar-anime.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0c" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" href="/assets/avatar-anime-circle.png" />
        <link rel="apple-touch-icon" href="/assets/avatar-anime-circle.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('chandan_portfolio_theme');
                if (t === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased selection:bg-[var(--ink)] selection:text-[var(--canvas)]">
        <ThemeProvider>
          {/* Sticky minimalist navigation */}
          <Navbar />

          {/* Main page content with top padding for floating dock */}
          <div className="flex-1 w-full pt-16 sm:pt-20">{children}</div>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
