"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar.js";
import "./explore.css";

const courses = [
  {
    title: "Web Development Foundations",
    category: "IT & Software",
    level: "Beginner",
    duration: "8 weeks",
    rating: "4.8",
    students: "1,200+",
    tag: "Popular",
  },
  {
    title: "Data Analysis with Excel & SQL",
    category: "Data & Analytics",
    level: "Beginner",
    duration: "6 weeks",
    rating: "4.7",
    students: "900+",
    tag: "Career Path",
  },
  {
    title: "AI Tools for Productivity",
    category: "AI & Digital Tools",
    level: "Beginner",
    duration: "4 weeks",
    rating: "4.9",
    students: "700+",
    tag: "New",
  },
  {
    title: "Digital Marketing Essentials",
    category: "Business Skills",
    level: "Intermediate",
    duration: "5 weeks",
    rating: "4.6",
    students: "850+",
    tag: "Hot",
  },
  {
    title: "Career Readiness Bootcamp",
    category: "Career Readiness",
    level: "Beginner",
    duration: "3 weeks",
    rating: "4.8",
    students: "1,500+",
    tag: "Recommended",
  },
  {
    title: "Creative Design Basics",
    category: "Creative Skills",
    level: "Beginner",
    duration: "5 weeks",
    rating: "4.5",
    students: "600+",
    tag: "Creative",
  },
];

const categories = [
  "All Courses",
  "IT & Software",
  "Data & Analytics",
  "AI & Digital Tools",
  "Business Skills",
  "Creative Skills",
  "Career Readiness",
];

export default function ExploreCourses() {
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [sortBy, setSortBy] = useState("Popular");

  useEffect(() => {
    const querySearch = searchParams.get("search");

    if (querySearch) {
      setSearchTerm(querySearch);
    }
  }, [searchParams]);

  let filteredCourses = courses.filter((course) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      course.title.toLowerCase().includes(search) ||
      course.category.toLowerCase().includes(search) ||
      course.level.toLowerCase().includes(search) ||
      course.tag.toLowerCase().includes(search);

    const matchesCategory =
      activeCategory === "All Courses" || course.category === activeCategory;

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
        {/* FLAGSHIP LANDING */}
        <section className="flagship-landing">
          <div className="flagship-left">
            <span>Flagship Course</span>
            <h1>AI Career Starter Program</h1>
            <p>
              Learn how to use AI tools, discover your career path, and build
              practical digital skills for modern work.
            </p>

            <div className="flagship-actions">
              <button type="button">Start Learning</button>
              <button type="button" className="outline-btn">
                View Course Outline
              </button>
            </div>
          </div>

          <div className="flagship-right">
            <h3>What this course helps with</h3>
            <div className="flagship-point">🤖 AI tools for productivity</div>
            <div className="flagship-point">🧭 Career path discovery</div>
            <div className="flagship-point">📚 Beginner digital skills</div>
            <div className="flagship-point">💼 Job and freelance readiness</div>
          </div>
        </section>

        {/* COURSE SEARCH INTRO */}
        <section className="explore-hero small-hero">
          <div>
            <span className="explore-badge">Course Catalogue</span>
            <h1>Explore all courses</h1>
            <p>
              Search through practical courses and filter by category to find
              the path that fits your goals.
            </p>

            <div className="explore-search">
              <input
                type="text"
                placeholder="Search courses, skills, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="button">Search</button>
            </div>
          </div>
        </section>

        {/* COURSES SECTION */}
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
                  className={activeCategory === category ? "active-filter" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <section className="courses-main">
            <div className="courses-header">
              <div>
                <span>Course Catalogue</span>
                <h2>
                  {filteredCourses.length}{" "}
                  {filteredCourses.length === 1 ? "course" : "courses"} found
                </h2>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="Popular">Sort by: Popular</option>
                <option value="Newest">Newest</option>
                <option value="Highest rated">Highest rated</option>
                <option value="Beginner friendly">Beginner friendly</option>
              </select>
            </div>

            <div className="courses-grid">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <article className="course-card" key={course.title}>
                    <div className="course-top">
                      <span className="course-tag">{course.tag}</span>
                      <span className="course-rating">⭐ {course.rating}</span>
                    </div>

                    <div className="course-icon">📘</div>

                    <p className="course-category">{course.category}</p>
                    <h3>{course.title}</h3>

                    <div className="course-meta">
                      <span>{course.level}</span>
                      <span>{course.duration}</span>
                      <span>{course.students}</span>
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

        {/* CLOSING SECTION */}
        <section className="course-closing">
          <span>Still unsure?</span>
          <h2>Let Sokwe-b help you choose the right path</h2>
          <p>
            If you are not sure which course fits you, our career guidance and
            AI coaching tools can help you discover the best direction based on
            your interests and goals.
          </p>

          <div className="closing-buttons">
            <button type="button">Get Career Guidance</button>
            <button type="button" className="outline-btn">
              Try AI Coaching
            </button>
          </div>
        </section>
      </main>
    </>
  );
}