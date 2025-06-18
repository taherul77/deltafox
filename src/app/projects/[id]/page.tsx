import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import ProjectDetailsBanner from "../../../components/banners/ProjectDetailsBanner";
import ProjectDetailsContent from "../../../components/projects/ProjectDetailsContent";
import ContactForm from "../../../components/services/ContactForm";
import CTASection from "../../../components/sections/CTASection";

const projects = [
  {
    id: "ecommerce-platform",
    image: "/newImage/E-commerce.png",
    category: "Web Development",
    title: "OmniChannel E-commerce Platform",
    description:
      "A full-featured, scalable e-commerce solution supporting B2C and B2B operations with AI-powered recommendations and advanced inventory management.",
    client: {
      name: "Soft IT Group",
      industry: "Retail Technology",
      size: "Enterprise (5,000+ employees)",
    },
    duration: "August 2020 - January 2023 (2.5 years)",
    teamSize: 15,
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS",
      "Stripe API",
      "PayPal SDK",
    ],
    location: "Sydney, Australia",
    budget: "$2.8M",
    problems: [
      "Managing inventory of 500,000+ SKUs with real-time synchronization across 12 warehouses",
      "Handling 10,000+ concurrent users during peak sales periods",
      "Complex tax calculations for international sales across 15 countries",
      "Fraud detection and prevention for high-value transactions",
    ],
    solutions: [
      "Microservices architecture with Kubernetes orchestration for horizontal scaling",
      "Implemented Elasticsearch for lightning-fast product search (response time <200ms)",
      "Developed custom recommendation engine boosting average order value by 22%",
      "Multi-tier caching strategy reduced database load by 65%",
    ],
    keyFeatures: [
      "Augmented reality product preview",
      "Voice-assisted shopping",
      "Automated dropshipping integration",
      "AI-powered dynamic pricing engine",
      "Blockchain-based authenticity verification for luxury goods",
    ],
    metrics: [
      "99.99% uptime (less than 52 minutes downtime annually)",
      "35% increase in conversion rate post-launch",
      "$48M processed in first-year GMV",
      "4.9/5 average customer satisfaction rating",
    ],
    awards: [
      "2022 Webby Award for Best Shopping Platform",
      "2023 Retail Tech Innovation Award",
    ],
  },
  {
    id: "fitness-tracker",
    image: "/newImage/Fitness.jpg",
    category: "Mobile App",
    title: "VitalFit: AI-Powered Fitness Ecosystem",
    description:
      "Comprehensive health platform combining wearable integration, nutrition planning, and personalized coaching with computer vision form analysis.",
    client: {
      name: "Healthify Inc.",
      industry: "Digital Health",
      size: "Mid-market (500 employees)",
    },
    duration: "January 2021 - December 2022 (2 years)",
    teamSize: 8,
    technologies: [
      "Flutter",
      "Firebase",
      "TensorFlow Lite",
      "HealthKit",
      "Google Fit API",
      "WebRTC",
    ],
    location: "San Francisco, United States",
    budget: "$1.2M",
    problems: [
      "Accuracy gap in tracking diverse workout types (yoga vs. weightlifting)",
      "User retention dropped to 32% after 30 days",
      "Integration challenges with 15+ wearable devices",
      "Personalization limited by basic algorithms",
    ],
    solutions: [
      "Developed proprietary motion capture algorithm (patent pending) with 94% accuracy",
      "Implemented gamification layer increasing 90-day retention to 68%",
      "Universal wearable adapter supporting 98% of market devices",
      "Neural network-based recommendation system analyzing 200+ health metrics",
    ],
    keyFeatures: [
      "Real-time form correction using smartphone camera",
      "Adaptive workout plans adjusting to recovery state",
      "Social challenges with live leaderboards",
      "Meal planning with grocery list generation",
      "Corporate wellness program integration",
    ],
    metrics: [
      "1.4M downloads in first year (230% over projection)",
      "4.8/5 average rating across 86,000 reviews",
      "Users achieved goals 37% faster than industry average",
      'Featured in Apple App Store "Health & Fitness" 14 consecutive weeks',
    ],
    partnerships: [
      "Fitbit",
      "MyFitnessPal",
      "Headspace",
      "WHO Healthy Cities Initiative",
    ],
  },
  {
    id: "banking-dashboard",
    image: "/newImage/BankingDashboard.jpg",
    category: "UI/UX Design",
    title: "NexusBank: Digital Banking Experience Platform",
    description:
      "Next-generation financial dashboard unifying personal banking, investment, and financial planning with predictive cash flow analysis.",
    client: {
      name: "Banking Solutions Ltd.",
      industry: "Financial Services",
      size: "Enterprise (10,000+ employees)",
    },
    duration: "March 2019 - June 2021 (2.3 years)",
    teamSize: 12,
    technologies: ["Figma", "Adobe XD", "React", "D3.js", "Plaid API", "Auth0"],
    location: "London, United Kingdom",
    budget: "$3.1M",
    problems: [
      "Legacy system had 62% digital abandonment rate",
      "Customer support costs exceeding £5M annually",
      "Regulatory compliance across 8 jurisdictions",
      "Millennial customer acquisition lagging competitors",
    ],
    solutions: [
      "Human-centered design process with 1,200+ user interviews",
      "Created 18 customizable dashboard modules",
      "Built regulatory engine automating 85% of compliance checks",
      'Implemented "Financial Health Score" increasing product cross-sell by 41%',
    ],
    keyFeatures: [
      "Predictive budgeting with machine learning",
      "Visual money flow mapping",
      "One-click dispute resolution",
      "Biometric authentication flow (3.2 second avg)",
      "AR branch locator with queue time estimates",
    ],
    metrics: [
      "Digital adoption increased to 89%",
      "NPS score jumped from 12 to 58",
      "35% reduction in support tickets",
      "Won 2022 FinTech Breakthrough Award",
    ],
    accessibility: [
      "WCAG 2.1 AA compliant",
      "Voice navigation support",
      "Dyslexia-friendly font options",
      "High contrast mode",
    ],
  },
  {
    id: "data-analytics-platform",
    image: "/newImage/DataAnalyticsPlatform.png",
    category: "Cloud Services",
    title: "Quantum Insights: Enterprise Analytics Suite",
    description:
      "End-to-end data orchestration platform with AI-assisted insights, automated reporting, and what-if scenario modeling for enterprise decision making.",
    client: {
      name: "Analytics Pro",
      industry: "Business Intelligence",
      size: "Mid-market (1,200 employees)",
    },
    duration: "July 2020 - December 2022 (2.5 years)",
    teamSize: 20,
    technologies: [
      "Apache Spark",
      "Kubernetes",
      "TensorFlow",
      "Snowflake",
      "Airflow",
      "Tableau",
    ],
    location: "Toronto, Canada",
    budget: "$4.5M",
    problems: [
      "Clients spending 70% of time preparing data vs analyzing",
      "Slow query performance on 100TB+ datasets",
      "Lack of intuitive visualization for non-technical users",
      "Difficulty correlating metrics across 50+ data sources",
    ],
    solutions: [
      "Automated data pipeline builder reduced setup time from weeks to hours",
      "Columnar storage with vectorized processing enabled sub-second queries",
      "Natural language query interface (supporting 8 languages)",
      "Cross-dataset correlation engine identified 3 previously unknown revenue opportunities",
    ],
    keyFeatures: [
      "Automated anomaly detection",
      "Prescriptive analytics recommendations",
      "Collaborative dashboard editing",
      "Data storytelling wizard",
      "Regulatory compliance auditor",
    ],
    metrics: [
      "Processes 2.3B events daily (peak throughput 1.2M events/sec)",
      "Reduced client reporting time by 82%",
      "Identified $47M in cost savings across client base",
      'Gartner Magic Quadrant "Visionary" 2023',
    ],
    caseStudy: {
      client: "Fortune 500 Retailer",
      results:
        "Optimized supply chain reducing inventory costs by 18% while improving stock availability",
    },
  },
  {
    id: "learning-management-system",
    image: "/newImage/Learning-Management-System.png",
    category: "Web Development",
    title: "EduSphere: Next-Gen Learning Platform",
    description:
      "Adaptive learning ecosystem combining microlearning, VR classrooms, and competency-based progression with blockchain credentialing.",
    client: {
      name: "EduTech Solutions",
      industry: "Education Technology",
      size: "Enterprise (3,000 employees)",
    },
    duration: "February 2021 - November 2023 (2.8 years)",
    teamSize: 18,
    technologies: [
      "MERN Stack",
      "WebRTC",
      "Unity",
      "Hyperledger",
      "WebAssembly",
      "LTI",
    ],
    location: "Bangalore, India",
    budget: "$2.1M",
    problems: [
      "Completion rates below 20% for self-paced courses",
      "Inability to verify skill acquisition",
      "Limited engagement in virtual classrooms",
      "Content discoverability challenges across 8,000+ courses",
    ],
    solutions: [
      "Competency graph mapping 1,200+ professional skills",
      'Implemented "Learning DNA" personalization algorithm',
      "VR classroom reduced cognitive load by 32% (NASA-TLX measured)",
      "Blockchain-secured microcredentials with labor market alignment",
    ],
    keyFeatures: [
      "Knowledge reinforcement bots",
      "Career path simulator",
      "Real-time group whiteboarding",
      "Automated lecture transcription (supporting 11 languages)",
      "AI teaching assistant",
    ],
    metrics: [
      "Completion rates increased to 63%",
      "92% of learners reported career impact",
      "Integrated with 140+ university systems",
      'TIME Magazine "Top 100 Innovations in Education"',
    ],
    partnerships: [
      "Coursera",
      "LinkedIn Learning",
      "University of London",
      "National Skill Development Corporation",
    ],
  },
  {
    id: "food-delivery-app",
    image: "/newImage/FoodDeliveryApp.jpg",
    category: "Mobile App",
    title: "GourmetNow: Premium Food Experience Platform",
    description:
      "Concierge-level food delivery service featuring Michelin-starred restaurants, live chef streaming, and sustainable packaging tracking.",
    client: {
      name: "Foodie Inc.",
      industry: "Food Technology",
      size: "Startup (150 employees)",
    },
    duration: "May 2022 - Present",
    teamSize: 10,
    technologies: [
      "SwiftUI",
      "Jetpack Compose",
      "Firebase",
      "Mapbox",
      "WebSockets",
      "Computer Vision",
    ],
    location: "Singapore",
    budget: "$1.8M",
    problems: [
      "Premium restaurants reluctant to join delivery platforms",
      "Food quality deterioration during transit",
      "High customer acquisition costs ($45 CPA)",
      "Inefficient routing increasing delivery times",
    ],
    solutions: [
      'Developed "Chef\'s Table" program with customized packaging solutions',
      "Temperature-controlled delivery pods with IoT monitoring",
      "Invitation-only launch created exclusivity (0.8% conversion rate)",
      "Reinforcement learning routing system incorporating 12 variables",
    ],
    keyFeatures: [
      "Live kitchen viewing",
      "Sommelier pairing recommendations",
      "Carbon footprint tracker",
      "Ultra-premium packaging unboxing experience",
      'Scheduled "feast mode" for large orders',
    ],
    metrics: [
      "$78 average order value (3.2x industry average)",
      "4.9/5 satisfaction from 98% of restaurants",
      "28% month-over-month growth",
      "Featured in Michelin Guide digital platform",
    ],
    sustainability: [
      "100% biodegradable packaging",
      "EV-only delivery fleet",
      "Surplus food redistribution program",
      "Carbon-neutral delivery option",
    ],
    
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

const ProjectDetailsPage = ({ params }: { params: { id: string } }) => {
  const project = projects.find((project) => project.id === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Header />
      <main>
        <ProjectDetailsBanner title={project.title} />
        <ProjectDetailsContent
          title={project.title}
          image={project.image}
          description={project.description}
          category={project.category}
          client={project.client}
          duration={project.duration}
          location={project.location}
          teamSize={project.teamSize}
          budget={project.budget}
          technologies={project.technologies}
          problems={project.problems}
          solutions={project.solutions}
          keyFeatures={project.keyFeatures}
          metrics={project.metrics}
          awards={project.awards}
          partnerships={project.partnerships}
          accessibility={project.accessibility}
          sustainability={project.sustainability}
          caseStudy={project.caseStudy}
        />
        <ContactForm />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
