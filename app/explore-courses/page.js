"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar.js";
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
    </>
  );
}