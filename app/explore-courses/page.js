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

  useEffect(() => {
    const querySearch = searchParams.get("search");

    if (querySearch) {
      setSearchTerm(querySearch);
    }
  }, [searchParams]);

  const filteredCourses = courses.filter((course) => {
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

  return (
    <>
      <Navbar />

      <main className="explore-page">
        <section className="explore-hero">
          <div>
            <span className="explore-badge">Explore Courses</span>
            <h1>Find courses built around real career paths</h1>
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
              {categories.map((category) => (
                <button
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
                <h2>{filteredCourses.length} courses found</h2>
              </div>

              <select>
                <option>Sort by: Popular</option>
                <option>Newest</option>
                <option>Highest rated</option>
                <option>Beginner friendly</option>
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

                    <button>View Course</button>
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
      </main>
    </>
  );
}