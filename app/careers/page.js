import Navbar from "@/components/Navbar.js";
import JobApplicationForm from "@/components/JobApplicationForm.js";
import "./careers.css";

const roles = [
  {
    title: "Course Content Creator",
    type: "Part-time / Remote",
    text: "Help create practical learning content for learners.",
  },
  {
    title: "Career Mentor",
    type: "Flexible",
    text: "Guide learners as they choose career and learning paths.",
  },
  {
    title: "AI Coaching Assistant",
    type: "Remote",
    text: "Support learners with AI tools, productivity, and digital skills.",
  },
];

export default function Careers() {
  return (
    <>
      <Navbar />

      <main className="jobs-page">
        <section className="jobs-hero">
          <div className="jobs-hero-content">
            <span>Careers</span>
            <h1>Join Sokwe-b and help learners build better futures</h1>
            <p>
              We are building a platform that supports learning, career growth,
              AI coaching, and practical skill development.
            </p>

            <div className="jobs-hero-buttons">
              <button type="button">View Open Roles</button>
              <button type="button" className="outline-btn">
                Send Application
              </button>
            </div>
          </div>

          <div className="jobs-hero-card">
            <h3>Who we’re looking for</h3>
            <div className="job-check active">✓ Creative educators</div>
            <div className="job-check">✓ Career mentors</div>
            <div className="job-check">✓ AI and digital skills trainers</div>
            <div className="job-check">✓ Passionate team players</div>
          </div>
        </section>

        <section className="roles-section">
          <div className="section-heading">
            <span>Open Opportunities</span>
            <h2>Roles we may need as we grow</h2>
            <p>
              These are example opportunities for people interested in learning,
              mentorship, content creation, and technology.
            </p>
          </div>

          <div className="roles-grid">
            {roles.map((role) => (
              <div className="role-card" key={role.title}>
                <span>{role.type}</span>
                <h3>{role.title}</h3>
                <p>{role.text}</p>
                <button type="button">Apply Interest</button>
              </div>
            ))}
          </div>
        </section>

        <section className="culture-section">
          <div className="culture-left">
            <span>Our Culture</span>
            <h2>We care about learning, access, and real impact</h2>
            <p>
              Sokwe-b is for people who believe education should be practical,
              accessible, and connected to real career opportunities.
            </p>
          </div>

          <div className="culture-grid">
            <div>🌍 Impact-driven</div>
            <div>🤝 Collaborative</div>
            <div>💡 Creative</div>
            <div>🚀 Growth-focused</div>
          </div>
        </section>

        <section className="application-section">
          <div className="form-container">
            <span>Apply Interest</span>
            <h2>Want to work with Sokwe-b?</h2>
            <p>
              Send your details and tell us how you’d like to contribute. We’ll
              connect the form later.
            </p>

            <JobApplicationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import Footer from "@/components/Footer.js";