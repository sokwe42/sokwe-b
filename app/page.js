import Navbar from "@/components/Navbar.js";
import "./home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="home-page">
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

            <div className="hero-search">
              <input type="text" placeholder="What do you want to learn?" />
              <button>Search Courses</button>
            </div>

            <div className="hero-buttons">
              <button className="primary-btn">Explore Courses</button>
              <button className="secondary-btn">Get Career Guidance</button>
            </div>
          </div>

          <div className="hero-card">
            <h3>Popular Career Paths</h3>

            <div className="career-item">
              <span>💻</span>
              <div>
                <h4>Software Development</h4>
                <p>Web, apps, backend & AI tools</p>
              </div>
            </div>

            <div className="career-item">
              <span>📊</span>
              <div>
                <h4>Data & Analytics</h4>
                <p>Data science, Excel, SQL & BI</p>
              </div>
            </div>

            <div className="career-item">
              <span>🎨</span>
              <div>
                <h4>Creative Digital Skills</h4>
                <p>Design, content, branding & media</p>
              </div>
            </div>
          </div>
        </section>

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

        <section className="categories-section">
          <div className="section-heading">
            <span>Explore categories</span>
            <h2>Practical skills for modern careers</h2>
            <p>
              Choose from career-focused courses designed to help learners gain
              useful, employable skills.
            </p>
          </div>

          <div className="category-grid">
            <div className="category-card">💻 IT & Software</div>
            <div className="category-card">📈 Business Skills</div>
            <div className="category-card">🤖 AI & Digital Tools</div>
            <div className="category-card">🎨 Design & Creative</div>
            <div className="category-card">🗣 Communication</div>
            <div className="category-card">💼 Career Readiness</div>
          </div>
        </section>
      </main>
    </>
  );
}