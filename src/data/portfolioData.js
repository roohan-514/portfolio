const portfolioData = {
  profile: {
    name: "Syed Roohan Ali Rizvi",
    shortName: "Roohan",
    title: "AI & Machine Learning Enthusiast",
    tagline: "AI & Full-Stack Developer | MLOps | System Design | Open Source",
    subtitle: "Architecting Intelligent Experiences",
    profilePicture: "/images/profile.png",
    university: "FAST NUCES | BS Data Science",
    location: "Pakistan",
    email: "roohan.rizvi@gmail.com",
    linkedin: "https://www.linkedin.com/in/roohan-ali-8a4b082a0/",
    github: "https://github.com/roohan-514",
    about: "I'm an AI & Full-Stack Developer building production-grade intelligent systems — from RAG chatbots and MLOps pipelines to real-time computer vision and payment platforms. I love architecting scalable solutions, contributing to open source, and writing about what I build. I don't just build software; I craft digital ecosystems that think, respond, and inspire.",
    stats: { projects: "15+", focus: "Future Tech" },
    aboutExtra: "I build digital experiences that blend AI, clean engineering, and thoughtful design. From neural networks to immersive interfaces, I focus on work that is sharp, purposeful, and built to solve real problems."
  },

  skills: [
    { id: 1, number: "01", title: "AI Applied", description: "Neural Networks & Machine Learning", proficiency: 88, technologies: ["TensorFlow", "PyTorch", "NLP"] },
    { id: 2, number: "02", title: "Software Dev", description: "Full Stack Engineering", proficiency: 92, technologies: ["React", "Node.js", "TypeScript"] },
    { id: 3, number: "03", title: "System Design", description: "Distributed Systems & Architecture", proficiency: 80, technologies: ["Microservices", "Scaling", "C4"] },
    { id: 4, number: "04", title: "Cloud Ops", description: "AWS & CI/CD Pipelines", proficiency: 78, technologies: ["AWS", "Docker", "DevOps"] },
    { id: 5, number: "05", title: "Data Science", description: "Analytics & Intelligence", proficiency: 85, technologies: ["Pandas", "SQL", "Visualization"] },
    { id: 6, number: "06", title: "Computer Vision", description: "Image Processing & Detection", proficiency: 82, technologies: ["OpenCV", "YOLO", "MediaPipe"] },
    { id: 7, number: "07", title: "UI/UX Design", description: "User Experience & Interfaces", proficiency: 75, technologies: ["Figma", "Prototyping", "Research"] },
    { id: 8, number: "08", title: "DevOps", description: "MLOps & Infrastructure", proficiency: 76, technologies: ["MLflow", "Prometheus", "Grafana"] }
  ],

  projects: [
    {
      id: 1,
      title: "Urdu Deepfake Audio Detection",
      description: "Detecting deepfake Urdu audio using VGG16-based transformer models for robust audio forensics.",
      technologies: ["Python", "TensorFlow", "VGG16", "Deep Learning"],
      githubLink: "https://github.com/roohan-514/urdu-deepfake-audio-detection",
      link: "",
      featured: true,
      year: "2025",
      image: ""
    },
    {
      id: 2,
      title: "RAG Chatbot System",
      description: "Retrieval-Augmented Generation chatbot that answers questions based on your documents. Built with LangChain, ChromaDB, and OpenAI.",
      technologies: ["Python", "LangChain", "ChromaDB", "FastAPI", "React", "OpenAI"],
      githubLink: "https://github.com/roohan-514/rag-chatbot-system",
      link: "",
      featured: true,
      year: "2025",
      image: ""
    },
    {
      id: 3,
      title: "MLOps Production Pipeline",
      description: "End-to-end ML production pipeline with MLflow tracking, model registry, FastAPI serving, Streamlit monitoring, and Docker deployment.",
      technologies: ["Python", "MLflow", "FastAPI", "Docker", "Streamlit", "Prometheus"],
      githubLink: "https://github.com/roohan-514/mlops-production-pipeline",
      link: "",
      featured: true,
      year: "2025",
      image: ""
    },
    {
      id: 4,
      title: "AI Code Review Assistant",
      description: "AI-powered code review tool that analyzes code quality, finds bugs, detects security vulnerabilities, and suggests improvements using OpenAI.",
      technologies: ["Python", "OpenAI", "FastAPI", "React", "Docker"],
      githubLink: "https://github.com/roohan-514/ai-code-review-assistant",
      link: "",
      featured: true,
      year: "2025",
      image: ""
    },
    {
      id: 5,
      title: "ICU Monitoring System",
      description: "AI-powered real-time ICU patient monitoring with XGBoost risk prediction, clinical alerts, and automated reports.",
      technologies: ["FastAPI", "React", "PostgreSQL", "XGBoost", "WebSocket"],
      githubLink: "https://github.com/roohan-514/ICU-MONITORING-SYSTEM",
      link: "",
      featured: false,
      year: "2025",
      image: ""
    },
    {
      id: 6,
      title: "AI Facial Recognition Attendance",
      description: "AI-powered attendance system using facial recognition for automated, contactless check-ins.",
      technologies: ["Python", "OpenCV", "Face Recognition", "FastAPI"],
      githubLink: "https://github.com/roohan-514/AI-Facial-Recognition-Attendance",
      link: "",
      featured: false,
      year: "2024",
      image: ""
    },
    {
      id: 7,
      title: "Medical AI Diagnostic Assistant",
      description: "Medical diagnostic assistant leveraging AI to assist in preliminary health assessments.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      githubLink: "https://github.com/roohan-514/medical-ai-diagnostic",
      link: "",
      featured: false,
      year: "2024",
      image: ""
    },
    {
      id: 8,
      title: "Driver Drowsiness Monitoring",
      description: "Real-time driver monitoring using computer vision for drowsiness, yawning, and phone usage detection with YOLOv11.",
      technologies: ["Python", "OpenCV", "YOLO", "MediaPipe", "React"],
      githubLink: "https://github.com/roohan-514/Driver-Drowsiness-Identity-Monitoring-System",
      link: "",
      featured: false,
      year: "2024",
      image: ""
    },
    {
      id: 9,
      title: "AutoForge",
      description: "AI-powered code automation platform that generates REST APIs, database schemas, and executable code from plain English.",
      technologies: ["Python", "FastAPI", "React", "Claude AI", "Docker"],
      githubLink: "https://github.com/roohan-514/AUTOFORGE",
      link: "",
      featured: false,
      year: "2025",
      image: ""
    },
    {
      id: 10,
      title: "Multiplayer FPS Game",
      description: "Browser-based 3D multiplayer first-person shooter with AI bots, voice chat, and CS-style maps.",
      technologies: ["Three.js", "Node.js", "Socket.IO", "WebRTC"],
      githubLink: "https://github.com/roohan-514/multiplayer-game",
      link: "",
      featured: false,
      year: "2024",
      image: ""
    },
    {
      id: 11,
      title: "Stripe Payment System",
      description: "Robust payment and subscription management system integrated with Stripe API.",
      technologies: ["Node.js", "Express", "Stripe", "React"],
      githubLink: "https://github.com/roohan-514/stripe-payment-system",
      link: "",
      featured: false,
      year: "2024",
      image: ""
    },
    {
      id: 12,
      title: "AI Resume & Career Assistant",
      description: "AI-powered career assistant that helps build resumes, prepare for interviews, and discover career paths.",
      technologies: ["Python", "React", "OpenAI", "FastAPI"],
      githubLink: "https://github.com/roohan-514/ai-resume-assistant",
      link: "",
      featured: false,
      year: "2025",
      image: ""
    },
    {
      id: 13,
      title: "System Design & Architecture",
      description: "In-depth architecture documentation for production AI/ML systems with C4 diagrams, scaling analysis, deployment strategies, and design trade-offs.",
      technologies: ["System Design", "Architecture", "C4 Diagrams", "Distributed Systems"],
      githubLink: "https://github.com/roohan-514/system-design-architecture",
      link: "",
      featured: false,
      year: "2025",
      image: ""
    },
    {
      id: 14,
      title: "Open Source Contributions",
      description: "Open source toolkit featuring gitstat — a Python CLI tool that generates beautiful GitHub repo analytics reports. Includes contribution guides and best practices.",
      technologies: ["Python", "CLI", "GitHub API", "Open Source"],
      githubLink: "https://github.com/roohan-514/open-source-contributions",
      link: "",
      featured: false,
      year: "2025",
      image: ""
    },
    {
      id: 15,
      title: "Technical Blog Posts",
      description: "Collection of technical articles about building production AI/ML systems — real-time computer vision, RAG chatbots, MLOps pipelines, and payment systems.",
      technologies: ["Technical Writing", "AI", "ML", "Tutorials"],
      githubLink: "https://github.com/roohan-514/technical-blog-posts",
      link: "",
      featured: false,
      year: "2025",
      image: ""
    }
  ],

  education: [
    {
      id: 1,
      degree: "BS Data Science",
      institution: "FAST National University of Computer and Emerging Sciences (NUCES)",
      location: "Pakistan",
      startDate: "2021",
      endDate: "2025",
      status: "Completed",
      image: "",
      subjects: ["Neural Networks", "ML Pipelines", "AI Systems Design"]
    },
    {
      id: 2,
      degree: "ICS (Intermediate in Computer Science)",
      institution: "Government College University (GCU), Lahore",
      location: "Lahore, Pakistan",
      startDate: "2019",
      endDate: "2021",
      status: "Completed",
      image: "",
      subjects: ["Computer Science", "Physics", "Mathematics"]
    },
    {
      id: 3,
      degree: "Matriculation — Science",
      institution: "Beaconhouse School System",
      location: "Pakistan",
      startDate: "2017",
      endDate: "2019",
      status: "Completed",
      image: "",
      subjects: ["Science", "Mathematics", "Computer Studies"]
    }
  ],

  certifications: [
    { id: 1, title: "Hugging Face Agents", issuer: "Hugging Face", description: "Certificate of Excellence for successfully completing the Hugging Face Agents Course.", date: "2026", image: "", issuerLogo: "", link: "#" },
    { id: 2, title: "Fundamentals of Agents", issuer: "AI Academy", description: "Comprehensive course on AI agent fundamentals, architectures, and deployment strategies.", date: "2026", image: "", issuerLogo: "", link: "#" },
    { id: 3, title: "AI for Beginners", issuer: "Microsoft", description: "Foundational AI concepts covering neural networks, computer vision, and natural language processing.", date: "2025", image: "", issuerLogo: "", link: "#" },
    { id: 4, title: "Freelancing", issuer: "DigiSkills", description: "Professional freelancing skills including client management, proposal writing, and platform strategies.", date: "2024", image: "", issuerLogo: "", link: "#" },
    { id: 5, title: "Logo Designing", issuer: "DigiSkills", description: "Professional logo design principles, typography, color theory, and brand identity creation.", date: "2024", image: "", issuerLogo: "", link: "#" },
    { id: 6, title: "Graphic Designing", issuer: "DigiSkills", description: "Comprehensive graphic design covering layout, composition, and digital media production.", date: "2024", image: "", issuerLogo: "", link: "#" },
    { id: 7, title: "Social Media Marketing", issuer: "DigiSkills", description: "Strategic social media marketing including content creation, analytics, and campaign management.", date: "2024", image: "", issuerLogo: "", link: "#" }
  ]
};

export default portfolioData;
