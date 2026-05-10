import Link from "next/link";
import Navbar from "@/components/Navbar.js";
import "./home.css";

const courseCategories = [
  {
    icon: "💻",
    title: "IT & Software",
    text: "Web development, coding, systems, and digital tools.",
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
  {
    icon: "📈",
    title: "Business Skills",
    text: "Entrepreneurship, marketing, sales, and leadership.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="home-page">
        {/* HERO */}
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">Your career journey starts here</span>

            <h1>
              Find the right course. <br />
              Build the right future.
            </h1>

            <p>
              Sokwe-b Education helps learners discover career paths, explore
              certified courses, and get AI-powered coaching for real-world
              success.
            </p>

            <form className="hero-search" action="/explore-courses">
  <input
    type="text"
    name="search"
    placeholder="What do you want to learn?"
  />
  <button type="submit">Search Courses</button>
</form>

            <div className="hero-buttons">
              <Link href="/explore-courses" className="primary-btn">
                Explore Courses
              </Link>
              <Link href="/career-guidance" className="secondary-btn">
                Get Career Guidance
              </Link>
            </div>
          </div>

          <div className="hero-visual-card">
  <div className="mini-card active">
    <span>📚</span>
    <div>
      <h4>Certified Courses</h4>
      <p>Learn practical skills for real careers.</p>
    </div>
  </div>

  <div className="mini-card">
    <span>🎯</span>
    <div>
      <h4>Career Matching</h4>
      <p>Discover paths that fit your strengths.</p>
    </div>
  </div>

  <div className="mini-card">
    <span>🤖</span>
    <div>
      <h4>AI Coaching</h4>
      <p>Get guided support while learning.</p>
    </div>
  </div>
</div>
        </section>

        {/* POPULAR CAREER PATHS / COURSE CATEGORIES */}
        <section className="career-paths-section">
          <div className="career-paths-text">
            <span>Popular career paths</span>
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
            <h2>2,000+</h2>
            <p>Learners guided</p>
          </div>

          <div>
            <h2>100+</h2>
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

        {/* TRUSTED CLIENTS */}
<section className="trusted-section">

  {/* TOP CONTENT (FULL WIDTH) */}
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

  {/* BOTTOM SPLIT SECTION */}
  <div className="trusted-bottom">

    {/* LEFT SIDE */}
    <div className="trusted-left">
      <span className="support-tag">Supported by</span>
    </div>

    {/* RIGHT SIDE */}
    <div className="trusted-right">

      <div className="logo-cloud">

        <div className="logo-item item1">
          <img src="/logos/Raeng.png" alt="RAENG" />
        </div>

        <div className="logo-item item2">
          <img src="/logos/Jasiri.png" alt="Jasiri" />
        </div>

        <div className="logo-item item3">
          <img src="/logos/54Collective.png" alt="54 Collective" />
        </div>

        <div className="logo-item item4">
          <img src="/logos/UON.png" alt="University of Nairobi" />
        </div>

        <div className="logo-item item5">
          <img src="/logos/Multichoice.png" alt="Multichoice" />
        </div>

        <div className="logo-item item6">
          <img src="/logos/Benz.png" alt="Mercedes Benz Fellowship" />
        </div>

      </div>

    </div>

  </div>

</section>
                
        {/* WHY CHOOSE US */}
        <section className="why-section">
          <div className="section-heading">
            <span>Why Sokwe-b?</span>
            <h2>Built for learners who need direction, not confusion</h2>
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
                Courses are organized around career paths, with both formal and informal carrer options available 
              </p>
            </div>

            <div className="why-card">
              <span>⚡</span>
              <h3>Practical skill focus</h3>
              <p>
                Learners can explore real-world skills useful for jobs,
                freelancing, business & personal growth.
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
import Footer from "@/components/Footer.js";