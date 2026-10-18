"use client";

import React from "react";
import { Marquee } from "@/components/Marquee";
import { SkillIcon } from "@/components/SkillIcon";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Code,
  Layout,
  Brain,
  Wrench,
  Cpu,
  HeartHandshake,
} from "lucide-react";

// Final Categorization as strictly specified
const CATEGORIES = [
  {
    name: "Programming & Databases",
    icon: <Code className="w-3.5 h-3.5 text-[var(--ink)]" />,
    type: "marquee" as const,
    duration: "26s",
    repeat: 5,
    skills: [
      "Python",
      "JavaScript",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "ChromaDB",
    ],
  },
  {
    name: "Web Development",
    icon: <Layout className="w-3.5 h-3.5 text-[var(--ink)]" />,
    type: "marquee" as const,
    duration: "32s",
    repeat: 4,
    skills: [
      "React",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "EJS",
      "jQuery",
      "Node.js",
      "Express.js",
      "Django",
      "REST APIs",
      "Axios",
    ],
  },
  {
    name: "AI/ML & Data Analytics",
    icon: <Brain className="w-3.5 h-3.5 text-[var(--ink)]" />,
    type: "marquee" as const,
    duration: "36s",
    repeat: 3,
    skills: [
      "LangChain",
      "LangGraph",
      "Retrieval-Augmented Generation (RAG)",
      "Agentic AI",
      "smolagents",
      "Ollama",
      "LLMs",
      "Prompt Engineering",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "MS Excel",
      "Jupyter Notebook",
    ],
  },
  {
    name: "Developer Tools",
    icon: <Wrench className="w-3.5 h-3.5 text-[var(--ink)]" />,
    type: "marquee" as const,
    duration: "28s",
    repeat: 5,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "PyCharm",
      "Postman",
      "Streamlit",
      "Gradio",
    ],
  },
  {
    name: "Core Concepts",
    icon: <Cpu className="w-3.5 h-3.5 text-[var(--ink)]" />,
    type: "static" as const,
    duration: "0s",
    repeat: 1,
    skills: [
      "Object-Oriented Programming (OOP)",
      "API Integration",
      "Data Analysis",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    name: "Soft Skills",
    icon: <HeartHandshake className="w-3.5 h-3.5 text-[var(--ink)]" />,
    type: "static" as const,
    duration: "0s",
    repeat: 1,
    skills: [
      "Analytical Thinking",
      "Problem-Solving",
      "Communication",
      "Teamwork",
      "Adaptability",
      "Time Management",
      "Continuous Learning",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-10 sm:py-14 max-w-3xl mx-auto px-2 sm:px-0">
      <div className="space-y-9">
        {/* Section Heading: Single, left-aligned, prominent uppercase */}
        <ScrollReveal className="text-left px-3 sm:px-4">
          <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--ink)] font-semibold">
            SKILLS &amp; TECH STACK
          </h2>
        </ScrollReveal>

        {/* 6 Classified Categories */}
        <div className="space-y-8">
          {CATEGORIES.map((cat, idx) => {
            const isReversed = idx % 2 === 1;

            if (cat.type === "static") {
              return (
                <ScrollReveal key={cat.name} delay={idx * 0.04} distance={16} className="space-y-3 pt-2">
                  {/* Category Name Centered in Middle */}
                  <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--mute)] text-center">
                    {cat.icon}
                    <span>{cat.name}</span>
                  </div>

                  {/* Static Pills Arranged Centered (No Movement) */}
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 pt-1">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-xs sm:text-sm font-sans font-medium text-[var(--ink)] hover:border-[var(--hairline-strong)] hover:bg-[var(--canvas)] hover:scale-105 transition-all duration-150 cursor-default shadow-2xs select-none"
                        title={skill}
                      >
                        <SkillIcon name={skill} className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        <span className="whitespace-nowrap tracking-tight">{skill}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              );
            }

            // Moving Marquee for Tools & Platforms
            return (
              <ScrollReveal key={cat.name} delay={idx * 0.04} distance={16} className="space-y-2.5">
                {/* Category Name Centered in Middle */}
                <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--mute)] text-center">
                  {cat.icon}
                  <span>{cat.name}</span>
                </div>

                {/* Moving Marquee Track with Edge Fade Masks */}
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
                  <Marquee
                    reverse={isReversed}
                    pauseOnHover
                    repeat={cat.repeat}
                    style={{ "--duration": cat.duration } as React.CSSProperties}
                  >
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-xs sm:text-sm font-sans font-medium text-[var(--ink)] hover:border-[var(--hairline-strong)] hover:bg-[var(--canvas)] hover:scale-105 transition-all duration-150 cursor-pointer shadow-2xs shrink-0 mx-1 select-none"
                        title={skill}
                      >
                        <SkillIcon name={skill} className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        <span className="whitespace-nowrap tracking-tight">{skill}</span>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
