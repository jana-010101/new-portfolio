export const portfolioData = {
  personal: {
    name: "Janani R",
    title: "Python Developer",
    typingRoles: [
      "Python Developer",
      "Backend Developer",
      "Full Stack Fresher",
      "Software Engineer",
    ],
    tagline: "Open to Work • Actively Seeking Entry-Level Roles",
    location: "Chennai, Tamil Nadu, India",
    phone: "9962512296",
    email: "jananirkr401@gmail.com",
    linkedin: "https://www.linkedin.com/in/janani-r-68a3a3407",
    github: "https://github.com/janani-r",
    summary: `MCA student and aspiring Software Developer with a strong foundation in Python, web development, and database management. Passionate about building scalable backend systems and clean, efficient code. Experienced with Python Full Stack development through academic projects involving secure cloud storage, encryption, and data handling. Driven by a love for problem-solving and a continuous learning mindset, I am eager to contribute to innovative teams and grow as a professional software engineer.`,
  },

  careerObjective: `To obtain an entry-level Software Developer or Python Developer role where I can leverage my knowledge of Python, Django, Flask, and database systems to build impactful applications. I aim to contribute meaningfully to a forward-thinking organization while continuously enhancing my technical skills and growing into a well-rounded backend or full-stack engineer.`,

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Guru Nanak College (Autonomous)",
      location: "Chennai",
      duration: "2025 – 2027",
      status: "Currently Pursuing",
      icon: "🎓",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Dhanalakshmi Srinivasan College of Arts and Science for Women (Autonomous)",
      location: "Tamil Nadu",
      duration: "Completed 2025",
      status: "Completed",
      icon: "🏫",
    },
  ],

  skills: {
    languages: [
      { name: "Python", level: 85, icon: "🐍" },
      { name: "SQL", level: 80, icon: "🗄️" },
      { name: "JavaScript", level: 60, icon: "📜" },
      { name: "HTML5 / CSS3", level: 80, icon: "🌐" },
    ],
    backend: [
      { name: "Django", level: 78, icon: "🎸" },
      { name: "Flask", level: 72, icon: "🌶️" },
      { name: "REST Framework", level: 70, icon: "🔌" },
    ],
    databases: [
      { name: "MySQL", level: 80, icon: "🐬" },
      { name: "PostgreSQL", level: 75, icon: "🐘" },
      { name: "MongoDB (basic)", level: 50, icon: "🍃" },
    ],
    libraries: [
      { name: "NumPy", level: 70, icon: "🔢" },
      { name: "Pandas", level: 72, icon: "🐼" },
      { name: "Bootstrap", level: 75, icon: "🅱️" },
    ],
    tools: [
      { name: "Git / GitHub", level: 78, icon: "🔗" },
      { name: "Postman", level: 70, icon: "📬" },
      { name: "VS Code", level: 85, icon: "💻" },
      { name: "Docker (basic)", level: 45, icon: "🐳" },
      { name: "Linux / Bash", level: 65, icon: "🐧" },
      { name: "AWS EC2, S3 (basic)", level: 40, icon: "☁️" },
    ],
    concepts: [
      { name: "OOP", level: 85, icon: "🧩" },
      { name: "Data Structures & Algorithms", level: 72, icon: "📊" },
      { name: "Multithreading", level: 65, icon: "⚡" },
      { name: "Unit Testing (PyTest/Unittest)", level: 68, icon: "✅" },
      { name: "DBMS", level: 80, icon: "🗃️" },
    ],
  },

  softSkills: [
    { name: "Analytical Problem-Solving", icon: "🧠" },
    { name: "Attention to Detail", icon: "🔍" },
    { name: "Cross-Functional Collaboration", icon: "🤝" },
    { name: "Adaptability to Evolving Technologies", icon: "🚀" },
    { name: "Ownership and Accountability", icon: "🎯" },
  ],

  projects: [
    {
      title: "CLOUDEDUP: Secure Cloud Storage with Deduplication",
      type: "BCA Group Project",
      description:
        "A group project focused on secure cloud storage combining file encryption and data deduplication to optimize storage while protecting user data. Implemented user registration, login, file upload/download, and authorization policy verification modules.",
      techStack: ["ASP.NET", "SQL Server", "Encryption Algorithms", "Data Deduplication"],
      features: [
        "User registration and secure login system",
        "End-to-end file encryption and decryption",
        "Data deduplication to reduce storage overhead",
        "Authorization-policy-based access control",
        "File upload and download management",
      ],
      challenges: [
        "Designing secure access control policies without performance bottlenecks",
        "Implementing reliable deduplication while maintaining file integrity",
        "Coordinating encryption/decryption across multiple user roles",
      ],
      learnings: [
        "Practical understanding of encryption and decryption mechanisms",
        "Database-backed web application architecture",
        "Secure authentication and authorization patterns",
        "Team collaboration and version control practices",
      ],
      github: null,
      demo: null,
      gradient: "from-indigo-500 to-purple-600",
      icon: "☁️",
    },
    {
      title: "Python REST API Backend",
      type: "Personal Learning Project",
      description:
        "A RESTful API backend built using Django REST Framework showcasing CRUD operations, JWT authentication, and proper API design principles. Demonstrates backend development capabilities and understanding of HTTP protocols.",
      techStack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JWT", "Postman"],
      features: [
        "RESTful CRUD endpoints with proper HTTP methods",
        "JWT-based authentication and authorization",
        "PostgreSQL database integration with ORM",
        "API documentation and Postman collection",
        "Unit tests with PyTest",
      ],
      challenges: [
        "Implementing stateless JWT authentication securely",
        "Designing clean and scalable REST API structure",
        "Writing comprehensive unit tests for all endpoints",
      ],
      learnings: [
        "Django REST Framework best practices",
        "API authentication and security patterns",
        "Test-driven development with PyTest",
        "Database modeling with Django ORM",
      ],
      github: null,
      demo: null,
      gradient: "from-cyan-500 to-blue-600",
      icon: "🔌",
    },
    {
      title: "Data Analysis Dashboard",
      type: "Self-Learning Project",
      description:
        "An exploratory data analysis project using Python's data science stack to process, clean, and visualize datasets. Demonstrates proficiency in NumPy, Pandas, and data manipulation techniques used in real-world analytics.",
      techStack: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
      features: [
        "Data cleaning and preprocessing pipelines",
        "Statistical analysis and summary statistics",
        "Data visualization with charts and graphs",
        "Exploratory data analysis workflows",
        "CSV and JSON data ingestion",
      ],
      challenges: [
        "Handling missing data and outliers effectively",
        "Optimizing performance for larger datasets",
        "Creating meaningful visualizations from raw data",
      ],
      learnings: [
        "NumPy array operations and broadcasting",
        "Pandas DataFrame manipulation and groupby operations",
        "Data cleaning best practices",
        "Insights extraction and visualization storytelling",
      ],
      github: null,
      demo: null,
      gradient: "from-emerald-500 to-teal-600",
      icon: "📊",
    },
  ],

  certifications: [
    {
      name: "Digital 101",
      provider: "NASSCOM",
      icon: "🏛️",
      color: "from-blue-500 to-indigo-600",
      credential: null,
    },
    {
      name: "MongoDB Basics for Students",
      provider: "MongoDB University",
      icon: "🍃",
      color: "from-green-500 to-emerald-600",
      credential: null,
    },
    {
      name: "Certificate of Completion",
      provider: "Cisco",
      icon: "🔵",
      color: "from-cyan-500 to-blue-600",
      credential: null,
    },
  ],

  selfLearning: [
    {
      title: "Python Full Stack Development",
      description: "Actively learning Django, Flask, REST APIs, and frontend integration to become a well-rounded full stack Python developer.",
      icon: "🐍",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Database Management & SQL",
      description: "Deep diving into PostgreSQL, query optimization, indexing strategies, and database design principles.",
      icon: "🗄️",
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Practicing DSA problems to strengthen problem-solving skills and prepare for technical interviews.",
      icon: "🧩",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Cloud & DevOps Basics",
      description: "Exploring AWS (EC2, S3), Docker containerization, and Linux system administration for modern deployment workflows.",
      icon: "☁️",
      color: "from-cyan-400 to-teal-500",
    },
  ],

  codingProfiles: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/janani-r-68a3a3407", icon: "linkedin", color: "#0077B5" },
  ],

  achievements: [
    {
      title: "BCA Group Project Excellence",
      description: "Successfully designed and implemented the CLOUDEDUP secure cloud storage system as part of the BCA final year group project, demonstrating teamwork and technical depth.",
      icon: "🏆",
      type: "Academic",
    },
    {
      title: "MongoDB Certified",
      description: "Earned MongoDB Basics for Students certification, showcasing proactive upskilling in NoSQL database technology beyond the core curriculum.",
      icon: "🎖️",
      type: "Certification",
    },
    {
      title: "NASSCOM Digital 101",
      description: "Completed the NASSCOM Digital 101 programme, gaining foundational knowledge of the digital economy and technology landscape.",
      icon: "🌟",
      type: "Programme",
    },
    {
      title: "Cisco Certified",
      description: "Received Cisco Certificate of Completion, reflecting commitment to networking and IT infrastructure knowledge.",
      icon: "🔷",
      type: "Certification",
    },
  ],
};
