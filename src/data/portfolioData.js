export const personalInfo = {
  name: "Roohan Ali",
  shortName: "Roohan",
  title: "AI & Full-Stack Developer",
  tagline: "Building production-grade AI systems — from computer vision to LLM-powered applications",
  location: "Lahore, Pakistan",
  email: "roohan.rizvi@gmail.com",
  phone: "+92 3234645458",
  resumeUrl: "/portfolio/resume.pdf",
  avatar: "https://avatars.githubusercontent.com/u/132151644?v=4",
  social: {
    github: "https://github.com/roohan-514",
    linkedin: "https://linkedin.com/in/roohan-ali-8a4b082a0/",
    email: "mailto:roohan.rizvi@gmail.com",
  },
  about: [
    "AI & Full-Stack Developer with hands-on experience building LLM-powered applications, computer vision systems, and production MLOps pipelines. Passionate about architecting scalable solutions from data pipelines to deployment.",
    "I've worked across startups and enterprises — from reducing bug backlogs by 30% as a Software Engineer Intern at Techlogix to building AI tutor features that accelerated content production by 35% at an Online Academy.",
  ],
  stats: [
    { label: "Projects", value: "10+" },
    { label: "Experience", value: "2+ Years" },
    { label: "Degree", value: "BS Data Science" },
    { label: "University", value: "FAST NUCES" },
  ],
};

export const skills = [
  { id: 1, name: "AI & ML", icon: "🧠", description: "LLM Integration, BERT, SHAP, scikit-learn, PySpark, Claude API" },
  { id: 2, name: "Backend", icon: "⚡", description: "Python, FastAPI, Flask, REST APIs, JWT/RBAC, SQLAlchemy" },
  { id: 3, name: "Frontend", icon: "🎨", description: "React, Bootstrap, HTML, CSS, Three.js" },
  { id: 4, name: "Databases", icon: "🗄️", description: "PostgreSQL, MySQL, Redis" },
  { id: 5, name: "Cloud & DevOps", icon: "☁️", description: "Microsoft Azure, Docker, Docker Compose, CI/CD" },
  { id: 6, name: "Developer Tools", icon: "🛠️", description: "Git, PyCharm, VS Code, Linux" },
  { id: 7, name: "Computer Vision", icon: "👁️", description: "MediaPipe, OpenCV, YOLO, Pose Estimation" },
  { id: 8, name: "MLOps", icon: "⚙️", description: "MLflow, Docker, CI/CD Pipelines, Model Deployment" },
];

export const experience = [
  {
    id: 1,
    role: "AI-Based Learning Web Application Developer",
    company: "Online Academy",
    period: "Jan 2026 - Present",
    description: [
      "Built an LLM-powered AI tutor feature in a responsive React frontend",
      "Accelerated course content production by roughly 35% through automated AI agent workflows",
      "Worked in a 6-member Agile team delivering iterative releases",
    ],
  },
  {
    id: 2,
    role: "DevOps Intern",
    company: "Systems Limited",
    period: "Jan 2026 - Feb 2026",
    description: [
      "Cut manual deployment time by roughly 5 hours/week by automating Microsoft Azure VM provisioning",
      "Reduced incident resolution time by an estimated 40%",
      "Documented standardized deployment procedures for the team",
    ],
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    company: "Techlogix",
    period: "Sep 2025 - Nov 2025",
    description: [
      "Reduced open bug backlog by an estimated 30% by refactoring FastAPI backend services",
      "Implemented RBAC-based access controls across the application",
      "Contributed to CI/CD pipeline reviews and improvements",
    ],
  },
  {
    id: 4,
    role: "Software Development Intern",
    company: "Techverx",
    period: "Jun 2024 - Aug 2024",
    description: [
      "Reduced defect rate by an estimated 20% as measured by QA test pass rate",
      "Debugged and tested feature releases under senior developer mentorship",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Data Science",
    school: "FAST National University of Computer and Emerging Sciences (NUCES)",
    location: "Lahore, Pakistan",
    period: "Aug 2021 - May 2025",
    description: "Focus on AI/ML, Data Science, and Software Engineering",
  },
  {
    id: 2,
    degree: "ICS (Intermediate in Computer Science)",
    school: "Government College University (GCU)",
    location: "Lahore, Pakistan",
    period: "Aug 2019 - Mar 2021",
    description: "Computer Science, Physics, Mathematics",
  },
  {
    id: 3,
    degree: "Matriculation — Science",
    school: "Beacon House School System (BSS)",
    location: "Lahore, Pakistan",
    period: "Completed",
    description: "Science, Mathematics, Computer Studies",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Clinical Intelligence OS (CIOS)",
    description: "Hospital ERP with a 3-stage Clinical Intelligence Pipeline: ML risk scoring with SHAP explainability, qSOFA sepsis screening, and Claude API-powered assessments across 9 Dockerized microservices.",
    tags: ["FastAPI", "React", "Docker", "Claude API", "SHAP", "Kafka"],
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514", demo: "#" },
  },
  {
    id: 2,
    title: "BodyPose Observatory",
    description: "Real-time 3D human pose visualization dashboard using MediaPipe Pose Landmarker and Three.js, rendering live webcam skeletons with fall detection and vital-sign HUD overlays across 13 monitoring scenarios.",
    tags: ["Python", "MediaPipe", "Three.js", "React", "FastAPI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514", demo: "#" },
  },
  {
    id: 3,
    title: "RAG Chatbot System",
    description: "Document-grounded question-answering chatbot using LangChain and ChromaDB for retrieval-augmented generation over user-uploaded documents.",
    tags: ["LangChain", "ChromaDB", "FastAPI", "React", "OpenAI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/rag-chatbot-system", demo: "#" },
  },
  {
    id: 4,
    title: "MLOps Production Pipeline",
    description: "End-to-end MLOps pipeline with MLflow experiment tracking, Dockerized deployment, and automated drift detection and monitoring.",
    tags: ["MLflow", "Docker", "FastAPI", "Python", "CI/CD"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/mlops-production-pipeline", demo: "#" },
  },
  {
    id: 5,
    title: "Deep Fake Audio Detection (FYP)",
    description: "BERT/VGG16-based ML models to detect AI-generated Urdu voice scams, with a web interface for real-time predictions and accuracy optimization.",
    tags: ["Python", "BERT", "VGG16", "TensorFlow", "FastAPI"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/DEEP-FAKE-AUDIO-DETECTION", demo: "#" },
  },
];
