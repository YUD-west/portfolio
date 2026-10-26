import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Yesuf Dergu",
    role: "Full-Stack Developer | Aspiring AI/ML Engineer",
    subRoles: [
      "Full-Stack Web Development",
      "Applied AI & Machine Learning",
      "Data Structures & Algorithms"
    ],
    location: "Ethiopia",
    availability: "Available for engineering roles and collaborations",
    bioShort: "I build web applications, algorithmic tools, and applied AI systems.",
    bioLong: [
      "I am a self-taught software developer based in Ethiopia. I learned software engineering by building real systems from the ground up—reading documentation, studying open-source codebases, and shipping projects.",
      "My work centers on full-stack web development with React, TypeScript, and Node.js, combined with practical exploration in data structures, algorithms, and machine learning. I prioritize clean, maintainable code and fast, responsive interfaces.",
      "I have built and deployed live platforms including NegadeX, YegnaFarm AI, and CGC Woliso, and am actively developing new projects like De Larada, ScamShield AI, and HomeNet."
    ]
  },

  socials: {
    github: "https://github.com/YUD-west",
    linkedin: "https://www.linkedin.com/in/yusuf2537",
    telegram: "https://t.me/SatoshiFlash",
    email: "yesufdergu464@gmail.com"
  },

  projects: [
    {
      id: "negadex",
      title: "NegadeX",
      tagline: "Stock trading simulator powered by real DSA",
      description: "A simulated stock trading platform built with core data structures and algorithms. Features an in-memory order book matching engine using heaps (priority queues), hash maps for O(1) portfolio tracking, binary search for price history scanning, and real-time trade execution.",
      category: "Systems & DSA",
      status: "Live",
      technologies: ["React", "TypeScript", "Tailwind CSS", "DSA", "Vite"],
      keyHighlights: [
        "In-memory order book matching engine simulating limit and market orders",
        "O(1) portfolio asset valuation and balance computation using hash maps",
        "Fast dark trading UI with real-time simulated order settlement"
      ],
      githubUrl: "https://github.com/YUD-west/NegadeX-Trading-Simulator",
      liveUrl: "https://negadex.vercel.app/",
      isFeatured: true
    },
    {
      id: "yegnafarm-ai",
      title: "YegnaFarm AI",
      tagline: "Agricultural intelligence and crop advisory platform",
      description: "A deployed agricultural technology platform providing advisory tools for farmers. Designed to assist with crop monitoring, disease pattern recognition, localized weather alerts, and sustainable farming practices.",
      category: "AI & ML",
      status: "Live",
      technologies: ["React", "TypeScript", "Applied AI", "Python / REST", "Tailwind CSS"],
      keyHighlights: [
        "Live web application delivering decision support for agricultural workflows",
        "Crop condition monitoring and localized planting advisory guides",
        "Mobile-first interface optimized for low-bandwidth connections"
      ],
      githubUrl: "https://github.com/YUD-west/farmer-consult-platform",
      liveUrl: "https://frontend-alpha-gray-52.vercel.app/",
      isFeatured: true
    },
    {
      id: "cgc-woliso",
      title: "CGC Woliso",
      tagline: "University tech community platform",
      description: "The official public web platform for the Cyber Guardians Club at Ambo University, Woliso Campus. Facilitates community initiatives across software engineering, AI, and cybersecurity with digital event passes and campus project registration.",
      category: "Full-Stack",
      status: "Live",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "SQLite"],
      keyHighlights: [
        "Full-stack production platform serving campus students and faculty",
        "Digital member pass verification system with downloadable event badges",
        "Student project proposal incubator and team recruiting workflows"
      ],
      githubUrl: "https://github.com/YUD-west",
      liveUrl: "https://cgc-woliso.onrender.com/",
      isFeatured: true
    },
    {
      id: "dealrada",
      title: "De Larada",
      tagline: "E-commerce storefront platform",
      description: "A digital retail storefront featuring dynamic catalog navigation, multi-attribute filtering, shopping cart state management, and an accessible checkout flow.",
      category: "E-Commerce",
      status: "In Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "State Architecture"],
      keyHighlights: [
        "Instant filtering by category, price range, and availability",
        "Client-side cart orchestration with real-time total computation",
        "Clean, responsive product catalog and checkout workflow"
      ],
      githubUrl: "https://github.com/YUD-west/dealrada-ecommerce-platform",
      liveUrl: "",
      isFeatured: true
    },
    {
      id: "scamshield-ai",
      title: "ScamShield AI",
      tagline: "Fraud detection and scam pattern analyzer",
      description: "A security and machine learning project designed to identify deceptive communication patterns, social engineering tactics, and fraudulent payment solicitations.",
      category: "AI & ML",
      status: "In Development",
      technologies: ["Python", "NLP", "Machine Learning", "FastAPI / React"],
      keyHighlights: [
        "Text classification heuristics detecting deceptive phrasing and urgency cues",
        "Risk scoring breakdown with explainable scam factor indicators",
        "Lightweight API ready for browser and mobile integrations"
      ],
      githubUrl: "https://github.com/YUD-west/ScamShield-AI",
      liveUrl: "",
      isFeatured: true
    },
    {
      id: "library-management-system",
      title: "Library Management System",
      tagline: "Book catalog and circulation system",
      description: "A full-stack library management system designed to track institutional collections, book checkout histories, automated overdue notices, and catalog searches.",
      category: "Full-Stack",
      status: "In Development",
      technologies: ["React", "TypeScript", "Node.js", "Express", "SQL"],
      keyHighlights: [
        "Book catalog indexing with ISBN lookup and genre categorization",
        "Patron lending limits, reservation queues, and due-date tracking",
        "Admin dashboard for inventory health and circulation statistics"
      ],
      githubUrl: "https://github.com/YUD-west/library-management-system",
      liveUrl: "",
      isFeatured: false
    },
    {
      id: "homenet",
      title: "HomeNet",
      tagline: "Local network discovery and diagnostic tool",
      description: "A networking tool designed for local subnet scanning, device inventory monitoring, latency metrics, and connection diagnostics.",
      category: "Networking",
      status: "In Development",
      technologies: ["Python", "Networking Protocols", "React", "TypeScript"],
      keyHighlights: [
        "Automated subnet scanning and active host identification",
        "Real-time ping, packet latency, and connection stability metrics",
        "Clear dashboard for monitoring local network devices"
      ],
      githubUrl: "https://github.com/YUD-west",
      liveUrl: "",
      isFeatured: false
    },
    {
      id: "urjii",
      title: "Urjii",
      tagline: "Job discovery and opportunity matching platform",
      description: "A web platform connecting job seekers with opportunities through structured category filtering, candidate profiles, and direct search.",
      category: "Full-Stack",
      status: "In Development",
      technologies: ["React", "TypeScript", "Node.js", "REST APIs", "Tailwind CSS"],
      keyHighlights: [
        "Multi-criteria filtering by role, location, and employment type",
        "Mobile-optimized applicant interface for straightforward job discovery",
        "Clean candidate profile data model"
      ],
      githubUrl: "https://github.com/YUD-west",
      liveUrl: "",
      isFeatured: false
    },
    {
      id: "kefeta",
      title: "Kefeta Youth Center",
      tagline: "Youth community platform",
      description: "A web platform developed for Kefeta Youth Center to publish workshop schedules, educational materials, and youth empowerment activities.",
      category: "Full-Stack",
      status: "In Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Web APIs"],
      keyHighlights: [
        "Directory of upcoming workshops, training, and events",
        "Resource portal for educational guides and community updates",
        "Responsive design accessible across all device sizes"
      ],
      githubUrl: "https://github.com/YUD-west",
      liveUrl: "",
      isFeatured: false
    }
  ],

  experiences: [
    {
      id: "exp-kefeta",
      role: "Full-Stack Developer",
      organization: "Kefeta Youth Center Platform",
      period: "2024 — Present",
      location: "Ethiopia",
      description: "Building the digital platform for Kefeta Youth Center, providing tools for youth engagement, program awareness, and community resources.",
      highlights: [
        "Architected responsive web pages for youth initiatives, workshops, and programs",
        "Structured information flows for non-technical community coordinators",
        "Optimized pages for performance across varying network speeds"
      ],
      skillsUsed: ["React", "TypeScript", "Tailwind CSS", "UI Design"]
    },
    {
      id: "exp-cgc",
      role: "Lead Platform Developer",
      organization: "Cyber Guardians Club (CGC Woliso)",
      period: "2024 — Present",
      location: "Woliso, Ethiopia",
      description: "Architected, built, and deployed the official CGC platform on Render, enabling students to register for technical cohorts and access event passes.",
      highlights: [
        "Engineered full-stack platform with React, TypeScript, Express, and SQLite",
        "Implemented digital pass verification with QR codes and responsive badge cards",
        "Maintained continuous uptime on cloud infrastructure"
      ],
      skillsUsed: ["React", "TypeScript", "Node.js", "Express", "SQLite"]
    },
    {
      id: "exp-community",
      role: "Community Contributor",
      organization: "Ethiopian Tech Community",
      period: "2023 — Present",
      location: "Ethiopia",
      description: "Active participant in local developer communities, peer reviews, collaborative hackathons, and open knowledge sharing.",
      highlights: [
        "Placed 2nd in the nationwide Ethiopian Cursor Community Hackathon",
        "Collaborated with peer developers on project architecture and debugging",
        "Promoted practical software development and hands-on coding"
      ],
      skillsUsed: ["Rapid Prototyping", "Git / GitHub", "Full-Stack Development"]
    }
  ],

  skills: [
    {
      title: "Frontend Development",
      description: "Building responsive, accessible web interfaces.",
      skills: [
        { name: "React.js" },
        { name: "TypeScript" },
        { name: "JavaScript (ES6+)" },
        { name: "Tailwind CSS" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "State Management" }
      ]
    },
    {
      title: "Backend & Systems",
      description: "Server-side applications, APIs, and data structures.",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
        { name: "Data Structures & Algorithms" },
        { name: "SQLite & PostgreSQL" },
        { name: "Authentication (JWT)" }
      ]
    },
    {
      title: "Programming & Tools",
      description: "Core languages and developer toolchains.",
      skills: [
        { name: "Python" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Git & GitHub" },
        { name: "Vite" },
        { name: "Linux / Bash" }
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Applied machine learning and intelligent tools.",
      skills: [
        { name: "Python for ML" },
        { name: "NumPy" },
        { name: "Scikit-learn" },
        { name: "NLP Basics" },
        { name: "LLM APIs" }
      ]
    }
  ],

  achievements: [
    {
      id: "cursor-hackathon-2024",
      title: "Ethiopian Cursor Community Hackathon",
      award: "2nd Place",
      event: "National Developer Hackathon",
      date: "2024",
      description: "Awarded 2nd place in the nationwide Ethiopian Cursor Community hackathon, building and shipping a complete, functional full-stack solution under strict competition time constraints.",
      takeaways: [
        "Rapid problem breakdown and fast full-stack prototyping",
        "Focused execution solving the core user problem first",
        "Working prototype selected for 2nd place by community judges"
      ]
    }
  ]
};
