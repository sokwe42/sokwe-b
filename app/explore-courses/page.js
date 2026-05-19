"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";
import { courses } from "@/app/data/courses.js";
import "./explore.css";

const categories = [
  "All Courses",
  "Accounting & Finance",
  "Office & Productivity",
  "Development",
  "Agriculture",
  "Environment",
  "Technology",
  "Business",
  "Marketing",
  "Engineering",
  "Design",
  "Cybersecurity",
  "Education",
  "Health",
  "Media",
  "Hospitality",
  "Communication",
  "Leadership",
  "Legal",
  "Lifestyle",
];

function ExploreCoursesContent() {
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [sortBy, setSortBy] = useState("Popular");
  const catalogueRef = useRef(null);

  const heroChips = [
    { label: "🤖 AI & Tech",       category: "Technology" },
    { label: "📈 Business",         category: "Business" },
    { label: "🔧 Trades",           category: "Engineering" },
    { label: "🎨 Design",           category: "Design" },
    { label: "📊 Data",             category: "Accounting & Finance" },
    { label: "💼 Career Readiness", category: "Education" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    catalogueRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleChipClick = (category) => {
    setActiveCategory(category);
    catalogueRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const querySearch = searchParams.get("search");

    if (querySearch) {
      setSearchTerm(querySearch);
    }
  }, [searchParams]);

  let filteredCourses = courses.filter((course) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      course.title?.toLowerCase().includes(search) ||
      course.originalTitle?.toLowerCase().includes(search) ||
      course.category?.toLowerCase().includes(search) ||
      course.displayCategory?.toLowerCase().includes(search) ||
      course.subcategory?.toLowerCase().includes(search) ||
      course.level?.toLowerCase().includes(search) ||
      course.tag?.toLowerCase().includes(search);

    const matchesCategory =
      activeCategory === "All Courses" ||
      course.displayCategory === activeCategory;

    return matchesSearch && matchesCategory;
  });

  if (sortBy === "Highest rated") {
    filteredCourses = [...filteredCourses].sort(
      (a, b) => Number(b.rating) - Number(a.rating)
    );
  }

  if (sortBy === "Newest") {
    filteredCourses = [...filteredCourses].sort((a, b) => {
      if (a.tag === "New") return -1;
      if (b.tag === "New") return 1;
      return 0;
    });
  }

  if (sortBy === "Beginner friendly") {
    filteredCourses = [...filteredCourses].sort((a, b) => {
      if (a.level === "Beginner" && b.level !== "Beginner") return -1;
      if (a.level !== "Beginner" && b.level === "Beginner") return 1;
      return 0;
    });
  }

  return (
    <>
      <Navbar />

      <main className="explore-page">
        {/* ── COMBINED DARK HERO ── */}
        <section className="explore-hero-combined">

          {/* Flagship course */}
          <div className="flagship-course-inner">
            <div className="fc-left">
              <div className="fc-badges">
                <span className="fc-badge-featured">⭐ Featured Course</span>
                <span className="fc-badge-new">New</span>
              </div>

              <h2>AI Career Starter Program</h2>

              <p>
                Learn how to use AI tools, discover your career path, and build
                practical digital skills for modern work — beginner friendly,
                self-paced.
              </p>

              <div className="fc-stats">
                <div className="fc-stat">
                  <strong>60 min</strong>
                  <span>Duration</span>
                </div>
                <div className="fc-stat-divider" />
                <div className="fc-stat">
                  <strong>Beginner</strong>
                  <span>Level</span>
                </div>
                <div className="fc-stat-divider" />
                <div className="fc-stat">
                  <strong>⭐ 4.9</strong>
                  <span>Rating</span>
                </div>
                <div className="fc-stat-divider" />
                <div className="fc-stat">
                  <strong>Self-paced</strong>
                  <span>Format</span>
                </div>
              </div>

              <div className="fc-actions">
                <button type="button" className="fc-btn-primary">
                  Start Learning
                </button>
                <button type="button" className="fc-btn-outline">
                  View Course Outline
                </button>
              </div>
            </div>

            <div className="fc-right">
              <div className="fc-card-label">What you will learn</div>

              <div className="fc-point">
                <span className="fc-check">✓</span>
                <div>
                  <strong>AI tools for productivity</strong>
                  <p>Use AI to study faster, plan better, and save time daily.</p>
                </div>
              </div>

              <div className="fc-point">
                <span className="fc-check">✓</span>
                <div>
                  <strong>Career path discovery</strong>
                  <p>Identify the right direction based on your strengths.</p>
                </div>
              </div>

              <div className="fc-point">
                <span className="fc-check">✓</span>
                <div>
                  <strong>Beginner digital skills</strong>
                  <p>Build confidence with essential tools used in every industry.</p>
                </div>
              </div>

              <div className="fc-point">
                <span className="fc-check">✓</span>
                <div>
                  <strong>Job and freelance readiness</strong>
                  <p>Prepare to apply, pitch, and work in the modern economy.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search bar — flows naturally below */}
          <div className="hero-search-bar">
            <form className="flagship-search" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search courses, skills, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">Search Courses</button>
            </form>

            <div className="flagship-chips">
              {heroChips.map((chip) => (
                <button
                  key={chip.category}
                  type="button"
                  className={`flagship-chip${activeCategory === chip.category ? " chip-active" : ""}`}
                  onClick={() => handleChipClick(chip.category)}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

        </section>

        <div className="catalogue-section" ref={catalogueRef}>
          <div className="catalogue-header">
            <div className="catalogue-header-left">
              <span>Course Catalogue</span>
              <h2>Browse all courses</h2>
              <p>Filter by category, level, or search above to find what fits your goals.</p>
            </div>
            <div className="catalogue-header-right">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="catalogue-sort"
              >
                <option value="Popular">Sort: Popular</option>
                <option value="Newest">Newest</option>
                <option value="Highest rated">Highest rated</option>
                <option value="Beginner friendly">Beginner friendly</option>
              </select>
            </div>
          </div>

        <section className="courses-layout">
          <aside className="filter-sidebar">
            <h3>Categories</h3>

            <select
              className="category-dropdown"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <div className="filter-list">
              {categories
                .filter((cat) => cat !== "All Courses")
                .slice(0, 4)
                .map((category) => (
                  <button
                    type="button"
                    key={category}
                    className={
                      activeCategory === category ? "active-filter" : ""
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
            </div>
          </aside>

          <section className="courses-main">
            <div className="courses-header">
              <p className="courses-count">
                <strong>{filteredCourses.length}</strong>{" "}
                {filteredCourses.length === 1 ? "course" : "courses"} found
              </p>
            </div>

            <div className="courses-grid">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <article className="course-card" key={course.id}>
                    <div className="course-top">
                      <span className="course-tag">{course.tag}</span>
                      <span className="course-rating">⭐ {course.rating}</span>
                    </div>

                    <div className="course-icon">📘</div>

                    <p className="course-category">
                      {course.displayCategory}
                    </p>

                    <h3>{course.title}</h3>

                    <div className="course-meta">
                      <span>{course.level}</span>
                      <span>{course.duration}</span>
                      <span>{course.subcategory}</span>
                    </div>

                    <button type="button">View Course</button>
                  </article>
                ))
              ) : (
                <div className="empty-state">
                  <h3>No courses found</h3>
                  <p>Try another search term or category.</p>
                </div>
              )}
            </div>
          </section>
        </section>
        </div>

        <section className="course-closing">
          <span>Still unsure?</span>
          <h2>Let Sokwe-b help you choose the right path</h2>
          <p>
            If you are not sure which course fits you, our career guidance and
            AI coaching tools can help you discover the best direction based on
            your interests and goals.
          </p>

          <div className="closing-buttons">
            <Link href="/career-guidance" className="primary-btn">
              Get Career Guidance
            </Link>

            <Link href="/ai-coaching" className="outline-btn">
              Try AI Coaching
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function ExploreCourses() {
  return (
    <Suspense fallback={<div>Loading courses...</div>}>
      <ExploreCoursesContent />
    </Suspense>
  );
}