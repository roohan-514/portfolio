const portfolioData = {
  profile: {
    name: "Syed Roohan Ali Rizvi",
    title: "AI & Machine Learning Enthusiast",
    tagline: "AI & Full-Stack Developer | MLOps | System Design | Open Source",
    profilePicture: "/images/Profile.jpeg",
    university: "FAST National University of Computer and Emerging Sciences (NUCES)",
    location: "Pakistan",
    email: "roohan.rizvi@gmail.com",
    linkedin: "https://www.linkedin.com/in/roohan-ali-8a4b082a0/",
    github: "https://github.com/roohan-514",
    about: "I'm an AI & Full-Stack Developer building production-grade intelligent systems — from RAG chatbots and MLOps pipelines to real-time computer vision and payment platforms. I love architecting scalable solutions, contributing to open source, and writing about what I build.",
    skills: [
      "Python", "JavaScript", "TypeScript", "C", "C++",
      "React", "Angular", "Node.js", "Express.js", "FastAPI",
      "LangChain", "TensorFlow", "PyTorch", "OpenCV", "YOLO", "XGBoost",
      "PostgreSQL", "MongoDB", "SQLite", "ChromaDB",
      "Git", "Docker", "MLflow", "Prometheus", "Grafana",
      "OpenAI", "Stripe", "Socket.IO", "Three.js", "WebRTC"
    ],
    skillLevels: [
      { name: "Problem Solving", level: 85 },
      { name: "AI & ML", level: 88 },
      { name: "Web Development", level: 90 },
      { name: "System Design", level: 80 },
      { name: "DevOps & MLOps", level: 78 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Urdu Deepfake Audio Detection",
      description: "Detecting deepfake Urdu audio using VGG16-based transformer models for robust audio forensics.",
      technologies: ["Python", "TensorFlow", "VGG16", "Deep Learning"],
      githubLink: "https://github.com/roohan-514/urdu-deepfake-audio-detection",
      featured: true,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 2,
      title: "ICU Monitoring System",
      description: "AI-powered real-time ICU patient monitoring with XGBoost risk prediction, clinical alerts, and automated reports.",
      technologies: ["FastAPI", "React", "PostgreSQL", "XGBoost", "WebSocket"],
      githubLink: "https://github.com/roohan-514/ICU-MONITORING-SYSTEM",
      featured: false,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 3,
      title: "AI Facial Recognition Attendance",
      description: "AI-powered attendance system using facial recognition for automated, contactless check-ins.",
      technologies: ["Python", "OpenCV", "Face Recognition", "FastAPI"],
      githubLink: "https://github.com/roohan-514/AI-Facial-Recognition-Attendance",
      featured: false,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 4,
      title: "Medical AI Diagnostic Assistant",
      description: "Medical diagnostic assistant leveraging AI to assist in preliminary health assessments.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      githubLink: "https://github.com/roohan-514/medical-ai-diagnostic",
      featured: false,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 5,
      title: "Driver Drowsiness Monitoring",
      description: "Real-time driver monitoring using computer vision for drowsiness, yawning, and phone usage detection with YOLOv11.",
      technologies: ["Python", "OpenCV", "YOLO", "MediaPipe", "React"],
      githubLink: "https://github.com/roohan-514/Driver-Drowsiness-Identity-Monitoring-System",
      featured: false,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 6,
      title: "AutoForge",
      description: "AI-powered code automation platform that generates REST APIs, database schemas, and executable code from plain English.",
      technologies: ["Python", "FastAPI", "React", "Claude AI", "Docker"],
      githubLink: "https://github.com/roohan-514/AUTOFORGE",
      featured: false,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 7,
      title: "Multiplayer FPS Game",
      description: "Browser-based 3D multiplayer first-person shooter with AI bots, voice chat, and CS-style maps.",
      technologies: ["Three.js", "Node.js", "Socket.IO", "WebRTC"],
      githubLink: "https://github.com/roohan-514/multiplayer-game",
      featured: false,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 8,
      title: "Stripe Payment System",
      description: "Robust payment and subscription management system integrated with Stripe API.",
      technologies: ["Node.js", "Express", "Stripe", "React"],
      githubLink: "https://github.com/roohan-514/stripe-payment-system",
      featured: false,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 9,
      title: "AI Resume & Career Assistant",
      description: "AI-powered career assistant that helps build resumes, prepare for interviews, and discover career paths.",
      technologies: ["Python", "React", "OpenAI", "FastAPI"],
      githubLink: "https://github.com/roohan-514/ai-resume-assistant",
      featured: false,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 10,
      title: "RAG Chatbot System",
      description: "Retrieval-Augmented Generation chatbot that answers questions based on your documents. Built with LangChain, ChromaDB, and OpenAI.",
      technologies: ["Python", "LangChain", "ChromaDB", "FastAPI", "React", "OpenAI"],
      githubLink: "https://github.com/roohan-514/rag-chatbot-system",
      featured: true,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 11,
      title: "MLOps Production Pipeline",
      description: "End-to-end ML production pipeline with MLflow tracking, model registry, FastAPI serving, Streamlit monitoring, and Docker deployment.",
      technologies: ["Python", "MLflow", "FastAPI", "Docker", "Streamlit", "Prometheus"],
      githubLink: "https://github.com/roohan-514/mlops-production-pipeline",
      featured: true,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 12,
      title: "AI Code Review Assistant",
      description: "AI-powered code review tool that analyzes code quality, finds bugs, detects security vulnerabilities, and suggests improvements using OpenAI.",
      technologies: ["Python", "OpenAI", "FastAPI", "React", "Docker"],
      githubLink: "https://github.com/roohan-514/ai-code-review-assistant",
      featured: true,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 13,
      title: "System Design & Architecture",
      description: "In-depth architecture documentation for production AI/ML systems with C4 diagrams, scaling analysis, deployment strategies, and design trade-offs.",
      technologies: ["System Design", "Architecture", "C4 Diagrams", "Distributed Systems"],
      githubLink: "https://github.com/roohan-514/system-design-architecture",
      featured: false,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 14,
      title: "Open Source Contributions",
      description: "Open source toolkit featuring gitstat — a Python CLI tool that generates beautiful GitHub repo analytics reports. Includes contribution guides and best practices.",
      technologies: ["Python", "CLI", "GitHub API", "Open Source"],
      githubLink: "https://github.com/roohan-514/open-source-contributions",
      featured: false,
      image: "/images/projects/FYP.jpeg"
    },
    {
      id: 15,
      title: "Technical Blog Posts",
      description: "Collection of technical articles about building production AI/ML systems — real-time computer vision, RAG chatbots, MLOps pipelines, and payment systems.",
      technologies: ["Technical Writing", "AI", "ML", "Tutorials"],
      githubLink: "https://github.com/roohan-514/technical-blog-posts",
      featured: false,
      image: "/images/projects/FYP.jpeg"
    }
  ],

  education: [
    {
      id: 1,
      degree: "BS Computer Science",
      institution: "FAST National University of Computer and Emerging Sciences (NUCES)",
      location: "Pakistan",
      startDate: "2021",
      endDate: "2025",
      marks: "3.0+ CGPA",
      image: "/images/education/fast.jpg"
    },
    {
      id: 2,
      degree: "ICS (Intermediate in Computer Science)",
      institution: "Government College University (GCU), Lahore",
      location: "Lahore, Pakistan",
      startDate: "2019",
      endDate: "2021",
      marks: "90%",
      image: "/images/education/gcu.jpg"
    }
  ],

  experience: [
    {
      id: 1,
      title: "React Native Developer",
      company: "Hive of Solutions",
      location: "Remote",
      startDate: "Present",
      endDate: "",
      description: "Developing cross-platform mobile applications using React Native, integrating AI features and real-time functionality.",
      technologies: ["React Native", "JavaScript", "Firebase", "REST APIs"],
      achievements: [
        "Built and deployed multiple cross-platform mobile applications",
        "Integrated AI-powered features for enhanced user experience",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ]
    }
  ],

  certifications: [
    {
      id: 1,
      title: "AI & Machine Learning",
      issuer: "FAST NUCES",
      description: "Advanced coursework in artificial intelligence and machine learning algorithms.",
      date: "2024",
      link: "#"
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      issuer: "Self-Study",
      description: "Comprehensive full-stack development with React, Node.js, and databases.",
      date: "2024",
      link: "#"
    },
    {
      id: 3,
      title: "Computer Vision",
      issuer: "FAST NUCES",
      description: "Specialized studies in computer vision, image processing, and deep learning for visual recognition.",
      date: "2024",
      link: "#"
    },
    {
      id: 4,
      title: "Data Science",
      issuer: "Self-Study",
      description: "Data analysis, machine learning pipelines, and statistical modeling with Python.",
      date: "2023",
      link: "#"
    },
    {
      id: 5,
      title: "Cloud Computing",
      issuer: "Self-Study",
      description: "Cloud infrastructure, deployment, and services including Docker and cloud platforms.",
      date: "2023",
      link: "#"
    }
  ]
};

export default portfolioData;
