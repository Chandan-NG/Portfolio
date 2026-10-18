export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription?: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  invertedSpotlight?: boolean; // Ollama "Max" card pattern
  highlights: string[];
  stats?: { label: string; value: string }[];
  date: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  details: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export interface ActivityPost {
  id: string;
  date: string;
  timeAgo: string;
  tag: string;
  content: string;
  repoLink?: string;
  repoName?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Chandan N G",
    handle: "@Chandan-NG",
    role: "AI Engineer",
    tagline: "Building full-stack web applications and AI-powered solutions that solve real-world problems through intelligent, scalable, and user-focused technology.",
    bio: "Building full-stack web applications and AI-powered solutions that solve real-world problems through intelligent, scalable, and user-focused technology.",
    location: "Bengaluru, Karnataka",
    timezone: "Asia/Kolkata",
    status: "Available for new projects & roles",
    statusActive: true,
    bannerUrl: "/assets/banner-dark.png",
    bannerLightUrl: "/assets/banner-dark.png",
    bannerDarkUrl: "/assets/banner-dark.png",
    avatarUrl: "/assets/avatar-anime.jpg",
    avatarAnimeUrl: "/assets/avatar-anime.jpg",
    avatarRealUrl: "/assets/avatar-real.jpg",
    calUrl: "https://cal.com/chandan-ng",
    email: "chandan.ng.official@gmail.com",
    phone: "+91 80734 53032",
    githubUrl: "https://github.com/Chandan-NG",
    linkedinUrl: "https://www.linkedin.com/in/chandan-ng",
    twitterUrl: "https://x.com/chandan_ng_",
    resumeUrl: "/resume",
    resumeDriveUrl: "https://drive.google.com/file/d/1gmWaiAsARkfLWVWWGHjWuei1Fi-REwSK/view?usp=drive_link",
    resumePdfUrl: "/resume.pdf",
    installCommand: "npx chandan-ng",
    curlCommand: "curl -sL https://chandan-ng.dev/bio",
  },

  pinnedStatus: {
    badge: "Building Now",
    headline: "Refining Agentic RAG workflows and modular full-stack interfaces",
    timestamp: "Updated recently",
  },

  terminalData: {
    command: "npx chandan-ng --status",
    output: [
      { type: "comment", text: "# Fetching developer profile for Chandan N G" },
      { type: "info", text: "Name:        Chandan N G" },
      { type: "info", text: "Role:        Software Engineer & AI Systems Developer" },
      { type: "info", text: "Core Stack:  Next.js, TypeScript, Python, Agentic RAG, Tailwind" },
      { type: "info", text: "Focus:       Self-correcting RAG, Multimodal AI, Clean UI Systems" },
      { type: "success", text: "Status:      🟢 Ready for engineering opportunities" },
    ],
  },

  projects: [
    {
      id: "studylens-ai",
      slug: "studylens-ai",
      title: "StudyLens AI",
      tagline:
        "A local-first AI study assistant that transforms YouTube lectures into summaries, structured notes, quizzes, and grounded study conversations.",
      description:
        "A local-first AI study assistant that transforms YouTube lectures into summaries, structured notes, quizzes, and grounded study conversations.",
      category: "AI & Agents",
      technologies: ["Python", "FastAPI", "Ollama", "Qwen2", "SQLite", "Bootstrap 5", "JavaScript"],
      githubUrl: "https://github.com/Chandan-NG/StudyLens-AI",
      imageUrl: "/projects/studylens-ai.png",
      featured: true,
      highlights: [
        "Transcript and document ingestion with local LLM summarization",
        "Automated multiple-choice quiz and active-recall flashcard generation",
        "Context-grounded study Q&A interface powered by local models",
        "SQLite persistence with responsive Bootstrap interface",
      ],
      date: "2025 - 2026",
    },
    {
      id: "meridian-7x",
      slug: "meridian-7x",
      title: "Meridian 7X",
      tagline:
        "A modern, responsive agency website featuring interactive 3D cards, kinetic canvas effects, and fluid scroll animations.",
      description:
        "A modern, responsive agency website featuring interactive 3D cards, kinetic canvas effects, and fluid scroll animations.",
      category: "Web Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/Chandan-NG/Meridian7X",
      liveUrl: "https://meridian7x.onrender.com/",
      imageUrl: "/projects/meridian-7x.png",
      featured: true,
      highlights: [
        "Interactive 3D card perspectives with gyroscope and mouse tracking",
        "Fluid scroll-linked animations powered by Framer Motion",
        "Kinetic canvas particles background with optimized frame rates",
        "Production deployment hosted on Render",
      ],
      date: "2025",
    },
    {
      id: "agentic-rag-pdf-chat",
      slug: "agentic-rag-pdf-chat",
      title: "Agentic RAG PDF Chat",
      tagline:
        "A local AI-powered PDF assistant that uses agentic workflows, document retrieval, relevance grading, and source-grounded answers.",
      description:
        "A local AI-powered PDF assistant that uses agentic workflows, document retrieval, relevance grading, and source-grounded answers.",
      category: "AI & Agents",
      technologies: ["Python", "LangGraph", "LlamaIndex", "ChromaDB", "Ollama", "PyMuPDF", "Streamlit"],
      githubUrl: "https://github.com/Chandan-NG/Agentic-RAG-PDF-Chat",
      imageUrl: "/projects/agentic-rag-pdf-chat.png",
      featured: true,
      highlights: [
        "Multi-agent architecture with planning and self-correction loops",
        "Semantic chunking and hybrid dense-sparse vector indexing",
        "Hallucination checks that benchmark generated responses against source context",
        "Interactive chat interface with per-claim document citations",
      ],
      date: "2025 - Present",
    },
    {
      id: "ai-vision",
      slug: "ai-vision",
      title: "AI Vision",
      tagline:
        "A browser-based object detection application that identifies objects in images using a pretrained computer vision model, with confidence filtering and image export.",
      description:
        "A browser-based object detection application that identifies objects in images using a pretrained computer vision model, with confidence filtering and image export.",
      category: "AI & Agents",
      technologies: ["JavaScript", "TensorFlow.js", "COCO-SSD", "HTML5", "CSS3"],
      githubUrl: "https://github.com/Chandan-NG/AI-Vision",
      liveUrl: "https://chandan-ng.github.io/AI-Vision/",
      imageUrl: "/projects/ai-vision.png",
      featured: false,
      highlights: [
        "In-browser object detection running locally via TensorFlow.js",
        "Dynamic confidence score slider and bounding box visualization",
        "Instant image annotation export for computer vision datasets",
        "Zero-latency client-side machine learning inference",
      ],
      date: "2025",
    },
    {
      id: "smolagent-ai-assistant",
      slug: "smolagent-ai-assistant",
      title: "Smolagent AI Assistant",
      tagline:
        "An interactive AI agent that combines Python code execution, web search, custom tools, and conversational interaction.",
      description:
        "An interactive AI agent that combines Python code execution, web search, custom tools, and conversational interaction.",
      category: "AI & Agents",
      technologies: ["Python", "Hugging Face smolagents", "Qwen2.5-Coder", "Gradio", "DuckDuckGo Search"],
      githubUrl: "https://github.com/Chandan-NG/Smolagent-AI-Assistant",
      imageUrl: "/projects/smolagent-ai-assistant.png",
      featured: false,
      highlights: [
        "Autonomous code generation and execution loops with Qwen2.5-Coder",
        "Integrated multi-step tool use: web search, timezone inspection, and custom utilities",
        "Interactive Gradio interface featuring iterative error correction workflows",
        "Strict safety execution and verification cycles for autonomous task completion",
      ],
      date: "2026",
    },
    {
      id: "hr-analytics-dashboard",
      slug: "hr-analytics-dashboard",
      title: "HR Analytics Dashboard",
      tagline:
        "An interactive Power BI dashboard that visualizes employee attrition, workforce demographics, salary distribution, and job-role insights.",
      description:
        "An interactive Power BI dashboard that visualizes employee attrition, workforce demographics, salary distribution, and job-role insights.",
      category: "Data & Analytics",
      technologies: ["Microsoft Power BI", "Data Visualization", "HR Analytics"],
      githubUrl: "https://github.com/Chandan-NG/HR-Analytics_Dashboard",
      imageUrl: "/projects/hr-analytics.png",
      featured: true,
      highlights: [
        "Cohort attrition analysis across departments and experience brackets",
        "Dynamic filtering with instant chart re-rendering without layout shift",
        "KPI cards highlighting headcount, churn rates, and salary percentiles",
        "Comprehensive talent retention business intelligence report",
      ],
      date: "2024 - 2025",
    },
    {
      id: "bloglyf",
      slug: "bloglyf",
      title: "BlogLyf",
      tagline:
        "A minimalist wellness website featuring thoughtfully designed pages centered on grounding, self-acceptance, and a slower pace of life.",
      description:
        "A minimalist wellness website featuring thoughtfully designed pages centered on grounding, self-acceptance, and a slower pace of life.",
      category: "Web Development",
      technologies: ["Node.js", "Express.js", "EJS", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/Chandan-NG/BlogLyf",
      liveUrl: "https://bloglyf.onrender.com/",
      imageUrl: "/projects/bloglyf.png",
      featured: false,
      highlights: [
        "Full-stack server-side templating with Node.js and Express",
        "Dynamic article routing and content management",
        "Responsive, high-readability editorial layout built with Bootstrap",
        "Live deployment running continuously on Render",
      ],
      date: "2024",
    },
    {
      id: "evently",
      slug: "evently",
      title: "EventLy",
      tagline:
        "A responsive event landing page showcasing event details, speakers, key features, and testimonials in a clean, mobile-friendly layout.",
      description:
        "A responsive event landing page showcasing event details, speakers, key features, and testimonials in a clean, mobile-friendly layout.",
      category: "Web Development",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/Chandan-NG/EventLy",
      liveUrl: "https://chandan-ng.github.io/EventLy/",
      imageUrl: "/projects/evently.png",
      featured: false,
      highlights: [
        "Responsive grid layout optimized for mobile, tablet, and desktop viewports",
        "Interactive agenda timelines and speaker profile popovers",
        "Accessible ticketing and RSVP forms with client-side validation",
        "Deployed seamlessly via GitHub Pages",
      ],
      date: "2024",
    },
    {
      id: "qr-code-generator",
      slug: "qr-code-generator",
      title: "QR Code Generator",
      tagline:
        "A lightweight web utility that converts URLs or plain text into QR codes and lets users download them as PNG images.",
      description:
        "A lightweight web utility that converts URLs or plain text into QR codes and lets users download them as PNG images.",
      category: "Developer Tools",
      technologies: ["HTML5", "CSS3", "JavaScript", "QRCode.js"],
      githubUrl: "https://github.com/Chandan-NG/QR-Code-Generator",
      liveUrl: "https://chandan-ng.github.io/QR-Code-Generator/",
      imageUrl: "/projects/qr-code-generator.png",
      featured: false,
      highlights: [
        "Real-time QR code generation upon user keystroke input",
        "High-resolution PNG export with customizable canvas dimensions",
        "Zero backend dependencies; 100% client-side privacy-first processing",
        "Deployed on GitHub Pages",
      ],
      date: "2024",
    },
    {
      id: "diceye",
      slug: "diceye",
      title: "DicEye",
      tagline:
        "An interactive dice-rolling web app that dynamically generates dice results using JavaScript and a responsive Bootstrap interface.",
      description:
        "An interactive dice-rolling web app that dynamically generates dice results using JavaScript and a responsive Bootstrap interface.",
      category: "Web Development",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/Chandan-NG/DicEye",
      liveUrl: "https://chandan-ng.github.io/DicEye/",
      imageUrl: "/projects/diceye.png",
      featured: false,
      highlights: [
        "Dynamic dice roll randomization logic with animated visual transitions",
        "Responsive Bootstrap layout that scales smoothly across devices",
        "Clean, accessible UI with sound and touch support",
        "Deployed live on GitHub Pages",
      ],
      date: "2024",
    },
    {
      id: "secret",
      slug: "secret",
      title: "Secret",
      tagline:
        "A web application that retrieves random secrets from a public REST API and displays them through a server-rendered interface.",
      description:
        "A web application that retrieves random secrets from a public REST API and displays them through a server-rendered interface.",
      category: "Web Development",
      technologies: ["Node.js", "Express.js", "EJS", "Axios", "REST API"],
      githubUrl: "https://github.com/Chandan-NG/Secret",
      imageUrl: "/projects/secret.png",
      featured: false,
      highlights: [
        "Asynchronous REST API consumption and error handling with Axios",
        "Server-side template rendering with EJS and Express routing",
        "Dynamic secrets retrieval with state persistence",
        "Clean, minimalist layout with expressive typography",
      ],
      date: "2024",
    },
  ] as Project[],

  skills: {
    categories: [
      {
        name: "Programming Languages",
        skills: ["Python", "JavaScript", "SQL"],
      },
      {
        name: "Frontend Development",
        skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "EJS", "jQuery"],
      },
      {
        name: "Backend Development",
        skills: ["Node.js", "Express.js", "Django", "REST APIs", "Axios"],
      },
      {
        name: "AI / Machine Learning / LLM",
        skills: [
          "LangChain",
          "LangGraph",
          "Retrieval-Augmented Generation (RAG)",
          "Agentic AI",
          "smolagents",
          "Ollama",
          "LLM Applications",
          "Prompt Engineering",
        ],
      },
      {
        name: "Data Science & Analytics",
        skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "MS Excel", "Jupyter Notebook"],
      },
      {
        name: "Databases",
        skills: ["MySQL", "PostgreSQL", "SQLite", "ChromaDB"],
      },
      {
        name: "Developer Tools",
        skills: ["Git", "GitHub", "VS Code", "PyCharm", "Postman", "Streamlit", "Gradio"],
      },
      {
        name: "Core Concepts",
        skills: [
          "Object-Oriented Programming (OOP)",
          "API Integration",
          "Vector Search",
          "Document Processing",
          "Data Analysis",
          "Analytical Thinking",
          "Problem Solving",
        ],
      },
    ],
  },

  experience: [
    {
      id: "exp-1",
      role: "Full Stack Development Intern",
      company: "QSpiders, Bengaluru",
      location: "Bengaluru, India",
      period: "Jan 2026 – May 2026",
      current: true,
      description:
        "Developing and testing full-stack web applications using Python, SQL, HTML, CSS, and Django fundamentals.",
      achievements: [
        "Developed and tested simple web applications using Python, SQL, HTML, CSS, and Django fundamentals.",
        "Built mini projects including a calculator to strengthen Python programming, logical thinking, and problem-solving skills.",
        "Created responsive web pages using HTML and CSS and practiced SQL for database tables, data storage, and basic queries.",
        "Worked with Django project structure, URLs, views, and templates while debugging and testing applications to resolve basic functionality issues.",
      ],
      skills: ["Python", "Django", "SQL", "HTML5", "CSS3", "JavaScript"],
    },
  ] as ExperienceItem[],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering (Data Science)",
      institution: "AMC Engineering College, Bengaluru",
      period: "2022 – 2026",
      grade: "CGPA: 8.34/10",
      details: [
        "Specialization in Computer Science & Engineering with Data Science focus.",
        "CGPA: 8.34 / 10",
        "Active participant in department-level hackathons and technical events in 2024 and 2025.",
      ],
    },
  ] as EducationItem[],

  certifications: [
    {
      id: "cert-1",
      title: "Python for Data Science",
      issuer: "NPTEL",
      date: "Verified",
      credentialUrl: "https://github.com/Chandan-NG",
      skills: ["Python", "Data Science", "NumPy", "Pandas"],
    },
    {
      id: "cert-2",
      title: "Machine Learning and Deep Learning – Fundamentals and Applications",
      issuer: "NPTEL",
      date: "Verified",
      credentialUrl: "https://github.com/Chandan-NG",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks"],
    },
    {
      id: "cert-3",
      title: "MERN Full Stack Development",
      issuer: "GeeksforGeeks",
      date: "Verified",
      credentialUrl: "https://github.com/Chandan-NG",
      skills: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
      id: "cert-4",
      title: "Fundamentals of Agents",
      issuer: "Hugging Face",
      date: "Verified",
      credentialUrl: "https://github.com/Chandan-NG",
      skills: ["Agentic AI", "smolagents", "Tool Calling", "LLMs"],
    },
  ] as CertificationItem[],

  activityFeed: [
    {
      id: "act-1",
      date: "Oct 2025",
      timeAgo: "recent",
      tag: "Agentic-RAG",
      content:
        "Shipped modular self-grading retrieval loop in Agentic-RAG-PDF-Chat to reduce context hallucinations when querying tabular documents.",
      repoLink: "https://github.com/Chandan-NG/Agentic-RAG-PDF-Chat",
      repoName: "Chandan-NG/Agentic-RAG-PDF-Chat",
    },
    {
      id: "act-2",
      date: "Sep 2025",
      timeAgo: "last month",
      tag: "StudyLens-AI",
      content:
        "Added multimodal OCR and question synthesis engine in StudyLens-AI for lecture diagrams and handwritten formulas.",
      repoLink: "https://github.com/Chandan-NG/StudyLens-AI",
      repoName: "Chandan-NG/StudyLens-AI",
    },
    {
      id: "act-3",
      date: "Aug 2025",
      timeAgo: "2 months ago",
      tag: "HR-Analytics",
      content:
        "Optimized client-side aggregation filters and chart responsiveness for workforce churn visualization.",
      repoLink: "https://github.com/Chandan-NG/HR-Analytics_Dashboard",
      repoName: "Chandan-NG/HR-Analytics_Dashboard",
    },
    {
      id: "act-4",
      date: "Jul 2025",
      timeAgo: "3 months ago",
      tag: "Portfolio",
      content:
        "Architected minimalist portfolio adopting Ollama-inspired design tokens: hairline cards, pill geometry, and fluid typography.",
      repoLink: "https://github.com/Chandan-NG",
      repoName: "Chandan-NG/portfolio",
    },
  ] as ActivityPost[],
};
