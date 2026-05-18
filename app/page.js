"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";

import "./home.css";
/* =========================
   HERO CARDS (right-side carousel)
========================= */
const heroCards = [
  {
    icon: "🏠", iconBg: "#2563eb",
    label: "Featured Courses", badge: "Coming Soon", badgeClass: "badge-green",
    title: "Property and Tenancy Management", duration: "3 hrs", meta: "KSh 2,500",
    time: "Self paced",
  },
  {
    icon: "⚽", iconBg: "#7c3aed",
    label: "Featured Courses", badge: "Coming Soon", badgeClass: "badge-blue",
    title: "Sports Coaching and Sports Management", duration: "3 hrs", meta: "KSh 2,500",
    time: "Self paced",
  },
  {
    icon: "🔧", iconBg: "#059669",
    label: "Featured Courses", badge: "Coming Soon", badgeClass: "badge-amber",
    title: "Domestic Appliance Repairing Course", duration: "2 hrs 45 Min", meta: "KSh 2,500",
    time: "Self paced",
  },
];

/* =========================
   LOGOS
========================= */
const logos = [
  { src: "/logos/Raeng.png", alt: "RAENG" },
  { src: "/logos/Jasiri.png", alt: "Jasiri" },
  { src: "/logos/54Collective.png", alt: "54 Collective" },
  { src: "/logos/UON.png", alt: "University of Nairobi" },
  { src: "/logos/Multichoice.png", alt: "Multichoice" },
  { src: "/logos/Benz.png", alt: "Mercedes Benz Fellowship" },
  { src: "/logos/edens.png", alt: "Edens" },
];

/* =========================
   COURSE CATEGORIES
========================= */
const courseCategories = [
  {
    icon: "💻",
    title: "IT & Software",
    text: "Web development, coding, systems, and digital tools.",
  },
  {
    icon: "📈",
    title: "Business Skills",
    text: "Entrepreneurship, marketing, sales, and leadership.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    text: "Excel, SQL, data science, and business intelligence.",
  },
  {
    icon: "🤖",
    title: "AI & Digital Tools",
    text: "AI productivity, prompt skills, and automation.",
  },
  {
    icon: "🎨",
    title: "Creative Skills",
    text: "Design, content creation, branding, and media.",
  },
  {
    icon: "💼",
    title: "Career Readiness",
    text: "CV building, interviews, workplace skills, and growth.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);

  /* =========================
     AUTO ROTATE LOGOS
  ========================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  /* =========================
     AUTO ROTATE HERO CARD
  ========================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* =========================
     SHOW 3 LOGOS AT A TIME
  ========================= */
  const visibleLogos = [
    logos[currentIndex % logos.length],
    logos[(currentIndex + 1) % logos.length],
    logos[(currentIndex + 2) % logos.length],
  ];

  return (
    <>
      {/* HERO WRAPPER — navbar + hero share the same dark background */}
      <div className="hero-wrapper">
        <Navbar />
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">
              Online Courses for the 21st Century
            </span>

            <h1>
              Invest in <span className="hero-highlight">Skills</span><br />
              <span className="hero-highlight">That</span> Pay Back
            </h1>

            <p>
              Sokwe-b Education offers training courses and certifications
              that help young Africans launch their profesional journey
              in both formal and informal career paths.
            </p>

            <div className="hero-buttons">
              <Link href="/explore-courses" className="primary-btn">
                Browse Courses
              </Link>

              <Link href="#contact" className="waitlist-btn">
                or Join our Waiting list
              </Link>
            </div>

            <div className="hero-social-proof">
              <div className="hero-avatars">
                <span className="avatar avatar-1">AW</span>
                <span className="avatar avatar-2">BO</span>
                <span className="avatar avatar-3">CM</span>
                <span className="avatar avatar-4">DK</span>
              </div>
              <div className="hero-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-score">4.9</span>
                <span className="rating-count">star rating from 1200+ students</span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-session-card">
            <div className="hsc-header">
              <span className="hsc-label">{heroCards[heroIndex].label}</span>
              <span className={`hsc-badge ${heroCards[heroIndex].badgeClass}`}>
                {heroCards[heroIndex].badge}
              </span>
            </div>

            <div className="hsc-body">
              <div className="hsc-icon" style={{ background: heroCards[heroIndex].iconBg }}>
                {heroCards[heroIndex].icon}
              </div>
              <div className="hsc-info">
                <h4>{heroCards[heroIndex].title}</h4>
                <p>{heroCards[heroIndex].duration} · {heroCards[heroIndex].meta}</p>
              </div>
            </div>

            <div className="hsc-time">
              <span>{heroCards[heroIndex].time}</span>
            </div>

            <div className="hsc-progress">
              <div className="hsc-progress-bar" />
            </div>

            <Link href="/explore-courses" className="hsc-explore-btn">
              Explore Courses →
            </Link>
          </div>
        </section>
      </div>

      <main className="home-page">
        {/* CAREER PATHS */}
        <section className="career-paths-section">
          <div className="career-paths-text">
            <span>START LEARNING TODAY</span>

            <h2>Explore skills that can shape your future</h2>

            <p>
              Browse practical course categories built around real career goals.
              Start with what interests you, then grow step by step.
            </p>

            <Link href="/explore-courses" className="category-btn">
              View All Courses
            </Link>
          </div>

          <div className="course-carousel">
            {courseCategories.map((category) => (
              <div className="course-category-card" key={category.title}>
                <span>{category.icon}</span>

                <h3>{category.title}</h3>

                <p>{category.text}</p>

                <Link href="/explore-courses" className="category-btn">
                  Explore Courses
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="stats-section">
          <div>
            <h2>" 2,000+ "</h2>
            <p>Learners guided</p>
          </div>

          <div>
            <h2>" 500+ "</h2>
            <p>Courses available</p>
          </div>

          <div>
            <h2>20+</h2>
            <p>Career paths</p>
          </div>

          <div>
            <h2>AI</h2>
            <p>Coaching support</p>
          </div>
        </section>

        {/* TRUSTED SECTION */}
        <section className="trusted-section">
          <div className="trusted-top">
            <h2 className="trusted-title">
              Trusted learning ecosystem
            </h2>

            <h3 className="trusted-subtitle">
              Trusted by learners, teams, and growing businesses
            </h3>

            <p className="trusted-text">
              Sokwe-b connects learners with practical skills aligned with the
              tools, platforms, and companies shaping the modern workplace.
              Through collaborations with innovation hubs, academic institutions,
              leadership fellowships, and digital ecosystems, Sokwe-b continues
              building opportunities that empower future-ready learners across
              technology, business, and creative industries.
            </p>
          </div>

          <div className="trusted-bottom">
            <div className="trusted-line">
              <span className="support-tag">
                Supported by
              </span>

              {/* LOGO CAROUSEL */}
              <div className="logo-carousel">
                {visibleLogos.map((logo, index) => (
                  <div
                    className="logo-card"
                    key={`${logo.alt}-${index}`}
                  >
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="why-section">
          <div className="section-heading">
            <span>Why Sokwe-b?</span>

            <h2>
              Built for learners who need direction, not confusion
            </h2>

            <p>
              We combine course discovery, career guidance, and AI coaching to
              help learners make smarter education and career choices.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <span>🧭</span>

              <h3>Career-first learning</h3>

              <p>
                Courses are organized around career paths, with both formal and
                informal career options available.
              </p>
            </div>

            <div className="why-card">
              <span>⚡</span>

              <h3>Practical skill focus</h3>

              <p>
                Learners can explore real-world skills useful for jobs,
                freelancing, business, and personal growth.
              </p>
            </div>

            <div className="why-card">
              <span>🤝</span>

              <h3>Guidance and support</h3>

              <p>
                Career guidance and AI coaching help learners avoid feeling lost
                when choosing their path.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
