export const personalInfo = {
  name: "Roohan Ahmad",
  title: "AI/ML Engineer & Full-Stack Developer",
  tagline: "Crafting intelligent solutions from pixels to pipelines",
  location: "Pakistan",
  email: "roohan.ahmad@example.com",
  resumeUrl: "#",
  avatar: "https://avatars.githubusercontent.com/u/132151644?v=4",
  social: {
    github: "https://github.com/roohan-514",
    linkedin: "https://linkedin.com/in/roohan-ahmad",
    email: "mailto:roohan.ahmad@example.com",
  },
  about: [
    "AI/ML Engineer with expertise in Computer Vision, Deep Learning, and MLOps. Passionate about building end-to-end intelligent systems that bridge research and production.",
    "Experienced in developing real-time pose estimation systems, RAG-based chatbots, and scalable ML pipelines. Proficient in Python, C++, React, and cloud-native deployment.",
  ],
  stats: [
    { label: "Projects", value: "10+" },
    { label: "Experience", value: "2+ Years" },
    { label: "Technologies", value: "20+" },
    { label: "Repos", value: "15+" },
  ],
};

export const skills = [
  { id: 1, name: "Computer Vision", icon: "👁️", description: "OpenCV, MediaPipe, YOLO, DeepStream, Pose Estimation" },
  { id: 2, name: "Deep Learning", icon: "🧠", description: "CNNs, Object Detection, PyTorch, TensorFlow, Transfer Learning" },
  { id: 3, name: "LLMs & RAG", icon: "🤖", description: "LangChain, ChromaDB, GPT APIs, Vector Search, Prompt Engineering" },
  { id: 4, name: "MLOps", icon: "⚙️", description: "MLflow, DVC, CI/CD, Kubernetes, Model Deployment, A/B Testing" },
  { id: 5, name: "Backend", icon: "⚡", description: "FastAPI, Django, REST APIs, WebSockets, PostgreSQL" },
  { id: 6, name: "Frontend", icon: "🎨", description: "React, Three.js, Framer Motion, Tailwind, Responsive Design" },
  { id: 7, name: "DevOps", icon: "🐳", description: "Docker, AWS, GitHub Actions, Nginx, Linux Administration" },
  { id: 8, name: "Languages", icon: "💻", description: "Python, C++, JavaScript, TypeScript, SQL, Bash" },
];

export const experience = [
  {
    id: 1,
    role: "AI/ML Engineer",
    company: "Freelance / Self-Employed",
    period: "2024 - Present",
    description: [
      "Developed real-time pose estimation systems using MediaPipe and OpenCV for fitness and rehabilitation applications",
      "Built RAG-based chatbots with LangChain and ChromaDB achieving 95% retrieval accuracy",
      "Designed and deployed MLOps pipelines with MLflow and Docker for reproducible model training",
    ],
  },
  {
    id: 2,
    role: "Computer Vision Intern",
    company: "Tech Solutions Inc.",
    period: "2023 - 2024",
    description: [
      "Implemented YOLO-based object detection system reducing inference time by 40% through model optimization",
      "Created automated data preprocessing pipelines for large-scale image datasets",
      "Integrated DeepStream SDK for real-time video analytics on edge devices",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "B.S. Computer Science",
    school: "FAST National University of Computer and Emerging Sciences (NUCES)",
    period: "2021 - 2025",
    description: "Focus on AI/ML, Computer Vision, and Software Engineering",
  },
];

export const projects = [
  {
    id: 1,
    title: "BodyPose Dashboard",
    description: "Real-time 3D pose visualization dashboard with MediaPipe and Three.js. Supports multi-person tracking, angle calculations, and exercise rep counting.",
    tags: ["Python", "MediaPipe", "Three.js", "React", "FastAPI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/bodypose-dashboard", demo: "#" },
  },
  {
    id: 2,
    title: "Driver Drowsiness Monitor",
    description: "Real-time driver monitoring system using computer vision. Detects eye closure, yawning, and head pose to alert drivers of fatigue.",
    tags: ["OpenCV", "MediaPipe", "Python", "Dlib", "PyGame"],
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/Driver-Drowsiness-Monitoring-System", demo: "#" },
  },
  {
    id: 3,
    title: "RAG Chatbot",
    description: "Retrieval-Augmented Generation chatbot with LangChain and ChromaDB. Supports document ingestion, semantic search, and context-aware responses.",
    tags: ["LangChain", "ChromaDB", "FastAPI", "Sentence Transformers", "React"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/rag-chatbot", demo: "#" },
  },
  {
    id: 4,
    title: "MLOps Pipeline",
    description: "End-to-end ML pipeline with experiment tracking, model registry, and automated deployment using MLflow and Docker.",
    tags: ["MLflow", "DVC", "Docker", "FastAPI", "Python"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/mlops-pipeline", demo: "#" },
  },
  {
    id: 5,
    title: "Image Preprocessing Engine",
    description: "Automated image preprocessing pipeline with augmentation, resizing, normalization, and format conversion for ML datasets.",
    tags: ["OpenCV", "Python", "NumPy", "Albumentations", "DVC"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/image-preprocessing", demo: "#" },
  },
  {
    id: 6,
    title: "ICU Monitoring System",
    description: "Real-time ICU patient monitoring system with video analytics, anomaly detection, and alerting for critical events.",
    tags: ["DeepStream", "YOLO", "FastAPI", "React", "WebSocket"],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    links: { github: "https://github.com/roohan-514/icu-monitoring-system", demo: "#" },
  },
];
