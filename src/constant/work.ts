import {
  LayoutTemplate,
  MonitorSmartphone,
  Smartphone,
  LucideIcon,
} from "lucide-react";

export type ProjectItem = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  images: string[];
  mainImage?: string; // Larger screenshot for detail page
  folder: string;
  icon: LucideIcon;
  companyLogo?: string;
  releaseDate?: string;
  lastUpdate?: string;
  overview?: string;
  features?: string[];
  techStack?: string[];
  whoShouldUse?: { title: string; description: string }[];
  previewLink?: string;
  figmaLink?: string;
};

export type ProjectCategory = {
  title: string;
  description: string;
  projects: ProjectItem[];
};

export const projectCategories: ProjectCategory[] = [
  {
    title: "Landing Page",
    description:
      "Explore our recently crafted landing pages designed to convert visitors into loyal customers with engaging aesthetics and seamless user journeys.",
    projects: [
      {
        slug: "bird-box",
        tag: "Landing page",
        title: "Bird Box - Food Delivery - Ecommerce",
        description:
          "Bird Box is an app that allows users to order food from local restaurants and have it delivered directly to their door.",
        images: [
          "birdBox/home-page.webp",
          "birdBox/menu-page.webp",
          "birdBox/cart-page.webp",
        ],
        folder: "landing-page",
        icon: LayoutTemplate,
        releaseDate: "Oct 15, 2023",
        lastUpdate: "Jan 12, 2024",
        figmaLink:
          "https://www.figma.com/design/4dDQoY5SwVSbArw3BLKp7S/BIRD-BOX?node-id=112-1278&t=vc9BXilObDNAsbID-1",
        overview:
          "Bird Box is a comprehensive food delivery and ecommerce platform designed to connect users with their favorite local restaurants effortlessly. It provides a seamless journey from browsing menus to receiving food at your doorstep.",
        features: [
          "Seamless Ordering Process",
          "Real-time Order Tracking",
          "Multiple Payment Options",
          "Interactive Menu Browsing",
          "User Ratings and Reviews",
        ],
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
        whoShouldUse: [
          {
            title: "Local Restaurants & Chains",
            description:
              "To expand their reach and offer delivery services easily.",
          },
        ],
      },
      {
        slug: "smart-city-sukabumi",
        tag: "Landing page",
        title: "Smart City Kabupaten Sukabumi - Smart City - Landing Page",
        description:
          "Smart city initiatives leverage IT applications and interconnected ecosystems to address urban challenges and improve their solutions.",
        images: [
          "smartCity/home-page.webp",
          "smartCity/laporan-masyarakat.webp",
          "smartCity/transparansi-page.webp",
        ],
        folder: "landing-page",
        icon: LayoutTemplate,
        companyLogo: "image%203.png",
        releaseDate: "Aug 20, 2023",
        lastUpdate: "Nov 05, 2023",
        figmaLink:
          "https://www.figma.com/design/81rJznOa6qgrt1CUcgOhQY/Smartcity-Sukabumi?node-id=2-3&t=Cet7PCewgb6LFLId-1",
        overview:
          "The Smart City Kabupaten Sukabumi landing page serves as the digital front door for urban development initiatives. It highlights integrated public services, real-time data monitoring, and smart governance programs designed to improve the quality of life.",
        features: [
          "Responsive Modern Design",
          "Interactive Data Visualization",
          "Detailed Program Sections",
          "Accessibility Optimized",
          "Fast Load Times",
        ],
        techStack: [
          "Next.js",
          "Tailwind CSS",
          "Framer Motion",
          "Data Visualization Libraries",
        ],
        whoShouldUse: [
          {
            title: "Government Bodies",
            description:
              "For digitalizing public services and connecting with citizens.",
          },
        ],
      },
    ],
  },
  {
    title: "Dashboard & Application",
    description:
      "Discover our suite of robust and scalable dashboard applications built to streamline workflows, facilitate data-driven decisions across various domains and platforms.",
    projects: [
      {
        slug: "spectra-iot",
        tag: "Dashboard & Application",
        title: "Spectra - Web of IoT Measurement - Dashboard & Application",
        description:
          "Spectra is a platform that uses IoT to precisely record data on temperature and electricity flow from hardware appliances securely and easily.",
        images: [
          "spectra/Card Image.webp",
          "spectra/Card Image-1.webp",
          "spectra/Card Image-2.webp",
        ],
        folder: "dashboard-application",
        icon: MonitorSmartphone,
        companyLogo: "image%203.png",
        releaseDate: "Mar 10, 2024",
        lastUpdate: "Apr 02, 2024",
        previewLink: "https://spectra.edifly-dev.com/login",
        figmaLink:
          "https://www.figma.com/design/9F2XfxL4hLemcXBoFbXeaY/Spectra---v1.0.0---Web-apps?node-id=19-536&t=sKMAdbK4A8shwH19-1",
        overview:
          "Spectra serves as a central hub for monitoring IoT devices. It provides precise, real-time visualizations for temperature, electricity flow, and other hardware metrics in an intuitive dashboard layout.",
        features: [
          "Real-time Data Streaming",
          "Interactive Charts & Metrics",
          "Hardware Integration API",
          "Secure Data Processing",
          "Customizable Dashboard Views",
        ],
        techStack: [
          "React",
          "Node.js",
          "WebSockets",
          "Chart.js",
          "Tailwind CSS",
        ],
        whoShouldUse: [
          {
            title: "Facility Managers & Engineers",
            description:
              "For tracking equipment health and optimizing energy consumption.",
          },
        ],
      },
      {
        slug: "amana-dashboard",
        tag: "Dashboard & Application",
        title: "Amana.ID - Admin Dashboard - Dashboard & Application",
        description:
          "Amana is a comprehensive system designed to organize pilgrimage processes precisely, utilizing advanced systems like ERP.",
        images: [
          "amana-dashboard/amana-dashboard.webp",
          "amana-dashboard/Login.webp",
          "amana-dashboard/Paket Umroh (3).webp",
        ],
        mainImage: "amana-dashboard/amana-dashboard.webp",
        folder: "dashboard-application",
        icon: MonitorSmartphone,
        companyLogo: "image%203.png",
        releaseDate: "Jan 12, 2024",
        lastUpdate: "Feb 15, 2024",
        previewLink: "maintenance",
        figmaLink:
          "https://www.figma.com/design/vKyJgEwFxTaHVfmAVvHiRz/-Web-Apps--Amana-s-Dashboard?node-id=2-932&t=sKMAdbK4A8shwH19-1",
        overview:
          "Amana Admin Dashboard is an ERP-level management tool. It tracks and organizes comprehensive workflows for Hajj and Umrah pilgrims, from passport processing to hotel bookings and complete group tracking.",
        features: [
          "Advanced User Management",
          "Automated Document Processing",
          "Financial Tracking & Invoicing",
          "Real-time Itinerary Management",
          "Role-based Access Control",
        ],
        techStack: [
          "Next.js",
          "TypeScript",
          "Prisma",
          "MongoDB",
          "Tailwind CSS",
        ],
        whoShouldUse: [
          {
            title: "Travel Agencies",
            description:
              "To manage massive operational complexities surrounding holy travel groups.",
          },
        ],
      },
      {
        slug: "enigma-virtual-assessment",
        tag: "Dashboard & Application",
        title: "Enigma - Virtual Assessment - Dashboard & Application",
        description:
          "The Virtual Assessment platform employs virtual reality simulations to analyze individual behaviors through immersive, gamified experiences.",
        images: [
          "enigma/Card Image.webp",
          "enigma/Card Image-1.webp",
          "enigma/Card Image-2.webp",
        ],
        folder: "dashboard-application",
        icon: MonitorSmartphone,
        companyLogo: "image%203.png",
        releaseDate: "Jun 01, 2023",
        lastUpdate: "Sep 20, 2023",
        figmaLink:
          "https://www.figma.com/design/fdFRgu5HkbSz3tAlFMomIF/-v.2.0--Enigma?node-id=144-128&t=TQd1MasOoeIPKvYD-1",
        overview:
          "Enigma Dashboard acts as the control panel and analytical engine for VR-based behavioral simulations. It interprets raw behavioral data from VR headsets and translates it into actionable psychological profiles.",
        features: [
          "Complex Data Visualization",
          "Behavioral Trait Mapping",
          "Candidate Scorecards",
          "Historical Assessment Trends",
          "Secure Authentication",
        ],
        techStack: ["React", "Redux", "D3.js", "Material UI"],
        whoShouldUse: [
          {
            title: "HR Professionals & Psychologists",
            description:
              "For conducting advanced behavioral screenings and interpreting VR simulation results.",
          },
        ],
      },
      {
        slug: "iapi-carrier-portal",
        tag: "Dashboard & Application",
        title: "iAPI - Carrier Portal - Dashboard & Application",
        description:
          "iAPI is an integrated carrier portal intended for airlines to streamline end-to-end administration workflows precisely into systems.",
        images: [
          "iapi/Card Image.webp",
          "iapi/Card Image-1.webp",
          "iapi/Card Image-2.webp",
        ],
        folder: "dashboard-application",
        icon: MonitorSmartphone,
        companyLogo: "image%203.png",
        releaseDate: "Nov 30, 2023",
        lastUpdate: "Dec 12, 2023",
        previewLink: "https://gerbang.imigrasi.go.id/iapi/airline/login",
        figmaLink:
          "https://www.figma.com/design/OI0nDmyS4JfKvtcM3RLA6H/IAPI?node-id=0-1&t=sKMAdbK4A8shwH19-1",
        overview:
          "The iAPI Carrier Portal unifies the administration processes for airlines. It brings together passenger data processing, flight manifesting, security clearing, and external system integrations into one coherent dashboard.",
        features: [
          "End-to-End Workflow Administration",
          "Real-time Flight Status Mapping",
          "Border Security System Integration",
          "Comprehensive Audit Logging",
        ],
        techStack: ["Angular", "Node.js", "Express", "MongoDB"],
        whoShouldUse: [
          {
            title: "Airline Operators",
            description:
              "For streamlining complex flight-related administration and meeting compliance standards.",
          },
        ],
      },
      {
        slug: "accs",
        tag: "Dashboard & Application",
        title: "ACCS - Air Cargo Community System - Dashboard & Application",
        description:
          "ACCS is a comprehensive platform designed to streamline and manage the export process flow for air cargo communities.",
        images: [
          "accs/add-booking.webp",
          "accs/booking-management.webp",
          "accs/login-page.webp",
        ],
        mainImage: "accs/booking-management.webp",
        folder: "dashboard-application",
        icon: MonitorSmartphone,
        companyLogo: "image%203.png",
        releaseDate: "Jan 10, 2024",
        lastUpdate: "Feb 05, 2024",
        figmaLink:
          "https://www.figma.com/design/vKExRoftR7qBJSDv1C9lrb/ACCS--Export-Process-Flow-?node-id=2052-1145&t=4U12BJi9adXnXjSY-1",
        overview:
          "ACCS (Air Cargo Community System) serves as a centralized hub for managing the complex workflows of air cargo exports. It provides tools for efficient booking management, tracking, and seamless coordination among stakeholders.",
        features: [
          "Booking Management System",
          "Export Process Tracking",
          "Community Coordination Tools",
          "Secure Authentication",
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        whoShouldUse: [
          {
            title: "Air Cargo Operations",
            description:
              "For efficient management of export processes and cargo bookings.",
          },
        ],
      },
      {
        slug: "oiw",
        tag: "Dashboard & Application",
        title:
          "OIW - Oversight of the Intelligence Watchlist - Dashboard & Application",
        description:
          "OIW is an analytical dashboard that provides oversight capabilities by effectively displaying structured data and profiles for intelligence tracking.",
        images: [
          "oiw/displaying-data.webp",
          "oiw/login-page.webp",
          "oiw/profile-details.webp",
        ],
        mainImage: "oiw/displaying-data.webp",
        folder: "dashboard-application",
        icon: MonitorSmartphone,
        releaseDate: "Mar 01, 2024",
        lastUpdate: "Mar 10, 2024",
        previewLink: "https://app.oiwatch.com/dashboard/login",
        figmaLink:
          "https://www.figma.com/design/7V1deZmzN0CIvHbY6Dx15y/Oversight-of-the-Intelligence-Watchlist?node-id=0-1&t=6uKzZbDptF8u7zly-1",
        overview:
          "The Oversight of the Intelligence Watchlist (OIW) application is tailored for comprehensive data review and profile management. It features robust capabilities for data presentation, secure login, and detailed profile analytics.",
        features: [
          "Advanced Data Monitoring",
          "Detailed Profile Views",
          "Secure Access Workflows",
          "Interactive Actionable Menus",
        ],
        techStack: ["React", "TypeScript", "Tailwind CSS"],
        whoShouldUse: [
          {
            title: "Security & Intelligence Analysts",
            description:
              "For overseeing watchlist data and managing sensitive profile details accurately.",
          },
        ],
      },
    ],
  },
  {
    title: "Mobile Apps",
    description:
      "Explore our range of matching pre-approved design elements tailored for all interfaces enabling a cohesive user experience.",
    projects: [
      {
        slug: "amana-mobile-app",
        tag: "Mobile Apps",
        title: "Amana.ID - Hajj & Umrah Pilgrim Application - Mobile Apps",
        description:
          "Amana is an application designed to assist Muslim pilgrims with precise calculations of their rituals and schedules from taking flights to the entire journey.",
        images: [
          "amana-mobile-app/Card Image.webp",
          "amana-mobile-app/Card Image-1.webp",
          "amana-mobile-app/Card Image-2.webp",
        ],
        folder: "mobile-apps",
        icon: Smartphone,
        companyLogo: "image%203.png",
        releaseDate: "Feb 01, 2024",
        lastUpdate: "Mar 15, 2024",
        figmaLink:
          "https://www.figma.com/design/kupMK2TorSuoWhJwcYn9mz/-Mobile-Apps--Amana.ID-by-BPKH?node-id=804-3624&t=sKMAdbK4A8shwH19-1",
        overview:
          "The Amana Mobile App serves as a digital companion for Hajj and Umrah. Its features guide pilgrims through precise ritual locations, step-by-step prayers, schedules, and group coordination.",
        features: [
          "Interactive Ritual Maps",
          "Prayer Timings & Qibla Compass",
          "Group Chat & Leader Tracking",
          "Offline Content Availability",
          "Emergency Contact System",
        ],
        techStack: ["React Native", "TypeScript", "Firebase", "Mapbox"],
        whoShouldUse: [
          {
            title: "Pilgrims",
            description:
              "To ensure they perform all rituals correctly and stay connected with their group.",
          },
        ],
      },
      {
        slug: "parx-mobile-app",
        tag: "Mobile Apps",
        title: "Parx - Parking Solution - Mobile Apps",
        description:
          "Parx is a smart parking application that offers real-time parking space availability. It simplifies user experience by saving time and minimizing parking-related stress, ensuring a smooth and efficient parking process from start to finish.",
        images: [
          "parx/Card Image.webp",
          "parx/Card Image-1.webp",
          "parx/Card Image-2.webp",
        ],
        mainImage: "parx/Card Image.webp", // We will try to map to a longer screen if available, else Card Image
        folder: "mobile-apps",
        icon: Smartphone,
        companyLogo: "image%203.png",
        releaseDate: "Dec 01, 2023",
        lastUpdate: "Jun 10, 2024",
        previewLink: "#",
        figmaLink:
          "https://www.figma.com/design/MZxNH4j40TPIhPPT2SwPLh/-v1.0.0-----Parx----Aplikasi-Parkir?node-id=52-8247&t=sKMAdbK4A8shwH19-1",
        overview:
          "Parx is a mobile app that offers real-time parking solutions, helping users to locate and reserve parking spaces easily. It enhances user experience by saving time and minimizing parking-related stress, ensuring a smooth and efficient process from start to finish.",
        features: [
          "Creative Animations & Design",
          "Auto Mode / Beauty",
          "Tailwind CSS + dx Theme",
          "Responsive by Media query",
          "Figma Design File included",
          "Intuitive Theme Support",
          "Search & Map Optimization",
          "Mobile-First & Fully Responsive",
          "Fully hassle-free support",
        ],
        techStack: [
          "NextJs",
          "React",
          "TypeScript",
          "Tailwind CSS (v4)",
          "Lucide Icons",
          "Figma Design File Included",
        ],
        whoShouldUse: [
          {
            title: "Product Teams & Developers",
            description:
              "Useful for tracking similar mobile application elements to keep app updates well-organized and standard-based.",
          },
        ],
      },
    ],
  },
];
