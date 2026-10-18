import React from "react";

const ICON_MAP: Record<string, string> = {
  python: "/icons/python.svg",
  typescript: "/icons/typescript.svg",
  ts: "/icons/typescript.svg",
  javascript: "/icons/javascript.svg",
  js: "/icons/javascript.svg",
  fastapi: "/icons/fastapi.svg",
  sql: "/icons/sql.svg",
  mysql: "/icons/mysql.svg",
  postgresql: "/icons/postgresql.svg",
  postgres: "/icons/postgresql.svg",
  sqlite: "/icons/sqlite.svg",
  chromadb: "/icons/chromadb.svg",
  chroma: "/icons/chromadb.svg",
  react: "/icons/react.svg",
  html5: "/icons/html5.svg",
  html: "/icons/html5.svg",
  css3: "/icons/css3.svg",
  css: "/icons/css3.svg",
  bootstrap: "/icons/bootstrap.svg",
  "tailwind css": "/icons/tailwindcss.svg",
  tailwind: "/icons/tailwindcss.svg",
  ejs: "/icons/ejs.svg",
  jquery: "/icons/jquery.svg",
  "node.js": "/icons/nodejs.svg",
  node: "/icons/nodejs.svg",
  "express.js": "/icons/express.svg",
  express: "/icons/express.svg",
  django: "/icons/django.svg",
  "rest apis": "/icons/restapis.svg",
  "rest api": "/icons/restapis.svg",
  axios: "/icons/axios.svg",
  langchain: "/icons/langchain.svg",
  langgraph: "/icons/langgraph.svg",
  "retrieval-augmented generation (rag)": "/icons/rag.svg",
  rag: "/icons/rag.svg",
  "agentic ai": "/icons/agentic-ai.svg",
  smolagents: "/icons/smolagents.svg",
  ollama: "/icons/ollama.svg",
  llms: "/icons/llm-apps.svg",
  "llm applications": "/icons/llm-apps.svg",
  "prompt engineering": "/icons/prompt-engineering.svg",
  pandas: "/icons/pandas.svg",
  numpy: "/icons/numpy.svg",
  matplotlib: "/icons/matplotlib.svg",
  seaborn: "/icons/seaborn.svg",
  "power bi": "/icons/powerbi.svg",
  "ms excel": "/icons/excel.svg",
  excel: "/icons/excel.svg",
  "jupyter notebook": "/icons/jupyter.svg",
  jupyter: "/icons/jupyter.svg",
  git: "/icons/git.svg",
  github: "/icons/github.svg",
  "vs code": "/icons/vscode.svg",
  vscode: "/icons/vscode.svg",
  pycharm: "/icons/pycharm.svg",
  postman: "/icons/postman.svg",
  streamlit: "/icons/streamlit.svg",
  vite: "/icons/vite.svg",
  "framer motion": "/icons/framer.svg",
  framer: "/icons/framer.svg",
  "tensorflow.js": "/icons/tensorflow.svg",
  tensorflow: "/icons/tensorflow.svg",
  "hugging face": "/icons/huggingface.svg",
  "hugging face smolagents": "/icons/smolagents.svg",
  huggingface: "/icons/huggingface.svg",
  "bootstrap 5": "/icons/bootstrap.svg",
  "microsoft power bi": "/icons/powerbi.svg",
  "data visualization": "/icons/data-analysis.svg",
  "hr analytics": "/icons/hr-analytics.svg",
  qwen: "/icons/qwen.svg",
  qwen2: "/icons/qwen.svg",
  "qwen2.5-coder": "/icons/qwen.svg",
  "duckduckgo search": "/icons/duckduckgo.svg",
  duckduckgo: "/icons/duckduckgo.svg",
  llamaindex: "/icons/llamaindex.svg",
  pymupdf: "/icons/pymupdf.svg",
  "coco-ssd": "/icons/coco-ssd.svg",
  "qrcode.js": "/icons/qrcode.svg",
  qrcode: "/icons/qrcode.svg",
  gradio: "/icons/gradio.svg",
  "object-oriented programming (oop)": "/icons/oop.svg",
  oop: "/icons/oop.svg",
  "api integration": "/icons/api-integration.svg",
  "data analysis": "/icons/data-analysis.svg",
  "database management systems (dbms)": "/icons/dbms.svg",
  dbms: "/icons/dbms.svg",
  "operating systems": "/icons/os.svg",
  "computer networks": "/icons/networks.svg",
  "analytical thinking": "/icons/analytical-thinking.svg",
  "problem-solving": "/icons/problem-solving.svg",
  "problem solving": "/icons/problem-solving.svg",
  communication: "/icons/communication.svg",
  teamwork: "/icons/teamwork.svg",
  adaptability: "/icons/adaptability.svg",
  "time management": "/icons/time-management.svg",
  "continuous learning": "/icons/learning.svg",
};

export function getSkillIconPath(name: string): string {
  const norm = name.trim().toLowerCase();
  return ICON_MAP[norm] || "/icons/python.svg";
}

export function SkillIcon({
  name,
  className = "w-5 h-5 shrink-0",
}: {
  name: string;
  className?: string;
}) {
  const iconPath = getSkillIconPath(name);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={iconPath}
      alt={`${name} official logo`}
      className={`${className} object-contain select-none pointer-events-none`}
      loading="lazy"
      width={20}
      height={20}
    />
  );
}

