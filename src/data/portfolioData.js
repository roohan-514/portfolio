export const personalInfo = {
  name: "Syed Roohan Ali Rizvi",
  shortName: "Roohan",
  title: "AI & Machine Learning Enthusiast",
  tagline: "AI & Full-Stack Developer | MLOps | System Design | Open Source",
  location: "Pakistan",
  email: "roohan.rizvi@gmail.com",
  resumeUrl: "#",
  avatar: "https://avatars.githubusercontent.com/u/132151644?v=4",
  social: {
    github: "https://github.com/roohan-514",
    linkedin: "https://www.linkedin.com/in/roohan-ali-8a4b082a0/",
    email: "mailto:roohan.rizvi@gmail.com",
  },
  about: [
    "I'm an AI & Full-Stack Developer building production-grade intelligent systems — from RAG chatbots and MLOps pipelines to real-time computer vision and payment platforms. I love architecting scalable solutions, contributing to open source, and writing about what I build.",
    "I don't just build software; I craft digital ecosystems that think, respond, and inspire. I build digital experiences that blend AI, clean engineering, and thoughtful design. From neural networks to immersive interfaces, I focus on work that is sharp, purposeful, and built to solve real problems.",
  ],
  stats: [
    { label: "Projects", value: "15+" },
    { label: "Focus", value: "Future Tech" },
    { label: "University", value: "FAST NUCES" },
    { label: "Degree", value: "BS Data Science" },
  ],
};

export const skills = [
  { id: 1, name: "AI Applied", icon: "🧠", description: "Neural Networks & Machine Learning — TensorFlow, PyTorch, NLP" },
  { id: 2, name: "Software Dev", icon: "💻", description: "Full Stack Engineering — React, Node.js, TypeScript" },
  { id: 3, name: "System Design", icon: "🏗️", description: "Distributed Systems & Architecture — Microservices, Scaling" },
  { id: 4, name: "Cloud Ops", icon: "☁️", description: "AWS & CI/CD Pipelines — Docker, DevOps" },
  { id: 5, name: "Data Science", icon: "📊", description: "Analytics & Intelligence — Pandas, SQL, Visualization" },
  { id: 6, name: "Computer Vision", icon: "👁️", description: "Image Processing & Detection — OpenCV, YOLO, MediaPipe" },
  { id: 7, name: "UI/UX Design", icon: "🎨", description: "User Experience & Interfaces — Figma, Prototyping" },
  { id: 8, name: "DevOps", icon: "⚙️", description: "MLOps & Infrastructure — MLflow, Prometheus, Grafana" },
];

export const experience = [
  {
    id: 1,
    role: "AI/ML Engineer",
    company: "Freelance / Self-Employed",
    period: "2024 - Present",
    description: [
      "Developed real-time computer vision systems using OpenCV, MediaPipe, and YOLO for pose estimation and object detection",
      "Built RAG-based chatbots with LangChain and ChromaDB achieving high retrieval accuracy",
      "Designed and deployed MLOps pipelines with MLflow and Docker for reproducible model training and serving",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "BS Data Science",
    school: "FAST National University of Computer and Emerging Sciences (NUCES)",
    period: "2021 - 2025",
    description: "Focus on Neural Networks, ML Pipelines, AI Systems Design",
  },
  {
    id: 2,
    degree: "ICS (Intermediate in Computer Science)",
    school: "Government College University (GCU), Lahore",
    period: "2019 - 2021",
    description: "Computer Science, Physics, Mathematics",
  },
  {
    id: 3,
    degree: "Matriculation — Science",
    school: "Beaconhouse School System",
    period: "2017 - 2019",
    description: "Science, Mathematics, Computer Studies",
  },
];

export const projects = [
  {
    id: 1,
    title: "Urdu Deepfake Audio Detection",
    description: "Detecting deepfake Urdu audio using VGG16-based transformer models for robust audio forensics.",
    tags: ["Python", "TensorFlow", "VGG16", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/DEEP-FAKE-AUDIO-DETECTION", demo: "#" },
  },
  {
    id: 2,
    title: "RAG Chatbot System",
    description: "Retrieval-Augmented Generation chatbot that answers questions based on your documents. Built with LangChain, ChromaDB, and OpenAI.",
    tags: ["Python", "LangChain", "ChromaDB", "FastAPI", "React"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/rag-chatbot-system", demo: "#" },
  },
  {
    id: 3,
    title: "MLOps Production Pipeline",
    description: "End-to-end ML production pipeline with MLflow tracking, model registry, FastAPI serving, Streamlit monitoring, and Docker deployment.",
    tags: ["Python", "MLflow", "FastAPI", "Docker", "Streamlit"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/mlops-production-pipeline", demo: "#" },
  },
  {
    id: 4,
    title: "AI Code Review Assistant",
    description: "AI-powered code review tool that analyzes code quality, finds bugs, detects security vulnerabilities, and suggests improvements using OpenAI.",
    tags: ["Python", "OpenAI", "FastAPI", "React", "Docker"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/ai-code-review-assistant", demo: "#" },
  },
  {
    id: 5,
    title: "ICU Monitoring System",
    description: "AI-powered real-time ICU patient monitoring with XGBoost risk prediction, clinical alerts, and automated reports.",
    tags: ["FastAPI", "React", "PostgreSQL", "XGBoost", "WebSocket"],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/ICU-MONITORING-SYSTEM", demo: "#" },
  },
  {
    id: 6,
    title: "AI Facial Recognition Attendance",
    description: "AI-powered attendance system using facial recognition for automated, contactless check-ins.",
    tags: ["Python", "OpenCV", "Face Recognition", "FastAPI"],
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/AI-Facial-Recognition-Attendance", demo: "#" },
  },
  {
    id: 7,
    title: "Driver Drowsiness Monitoring",
    description: "Real-time driver monitoring using computer vision for drowsiness, yawning, and phone usage detection with YOLOv11.",
    tags: ["Python", "OpenCV", "YOLO", "MediaPipe", "React"],
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/Driver-Drowsiness-Identity-Monitoring-System", demo: "#" },
  },
  {
    id: 8,
    title: "AutoForge",
    description: "AI-powered code automation platform that generates REST APIs, database schemas, and executable code from plain English.",
    tags: ["Python", "FastAPI", "React", "Claude AI", "Docker"],
    image: "https://images.unsplash.com/photo-1555949963-ff1cf47267a5?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/AUTOFORGE", demo: "#" },
  },
];
