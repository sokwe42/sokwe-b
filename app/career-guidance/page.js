import Navbar from "@/components/Navbar.js";
import CareerGuidanceForm from "@/components/CareerGuidanceForm.js";
import "./career.css";

const guidanceSteps = [
  {
    icon: "🧭",
    title: "Discover your direction",
    text: "Answer simple questions about your interests, strengths, and goals.",
  },
  {
    icon: "🎯",
    title: "Match with career paths",
    text: "Get suggestions for careers that fit your personality and skills.",
  },
  {
    icon: "📚",
    title: "Find the right courses",
    text: "See recommended courses that can help you start building skills.",
  },
];

const careerPaths = [
  "Software Developer",
  "Data Analyst",
  "Digital Marketer",
  "Virtual Assistant",
  "Graphic Designer",
  "Entrepreneur",
];

export default function CareerGuidance() {
  return (
    <>
      <Navbar />

      <main className="career-page">
        <section className="career-hero">
          <div className="career-hero-card">
            <h3>Your path to clarity</h3>

            <div className="journey-step">
              <div className="journey-step-num active-step">01</div>
              <div className="journey-step-line" />
              <div className="journey-step-body">
                <strong>Share your interests</strong>
                <p>Tell us what you enjoy and what you want to achieve.</p>
              </div>
            </div>

            <div className="journey-step">
              <div className="journey-step-num">02</div>
              <div className="journey-step-line" />
              <div className="journey-step-body">
                <strong>Get matched</strong>
                <p>Receive career directions that fit your profile.</p>
              </div>
            </div>

            <div className="journey-step">
              <div className="journey-step-num">03</div>
              <div className="journey-step-line last" />
              <div className="journey-step-body">
                <strong>Start learning</strong>
                <p>Follow a course path built around your goals.</p>
              </div>
            </div>
          </div>

          <div className="career-hero-content">
            <span>Career Guidance</span>

            <h1>Not sure what career path fits you?</h1>

            <p>
              Sokwe-b helps learners understand their strengths, explore career
              options, and choose courses that support their future goals.
            </p>

            <div className="career-hero-buttons">
              <button type="button">Start Career Check</button>
              <button type="button" className="outline-btn">
                Explore Career Paths
              </button>
            </div>
          </div>
        </section>

        <section className="guidance-section">
          <div className="section-heading">
            <span>How it works</span>
            <h2>Simple guidance for better career decisions</h2>
            <p>
              We make career planning easier by breaking it into simple steps.
            </p>
          </div>

          <div className="guidance-grid">
            {guidanceSteps.map((step) => (
              <div className="guidance-card" key={step.title}>
                <span>{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="career-paths">
          <div className="career-paths-left">
            <span>Popular paths</span>
            <h2>Explore careers learners often choose</h2>
            <p>
              These paths can help you understand where your skills and interests
              may lead.
            </p>
          </div>

          <div className="career-paths-grid">
            {careerPaths.map((path) => (
              <div className="career-path-card" key={path}>
                {path}
              </div>
            ))}
          </div>
        </section>

        <section className="career-cta">
          <span>Ready?</span>
          <h2>Start with guidance, then choose your course</h2>
          <p>
            Take the first step toward a clear learning and career direction.
          </p>
          <button type="button">Begin Career Guidance</button>
        </section>

        <section className="career-form-section">
          <div className="form-container">
            <span>Personalized Guidance</span>
            <h2>Tell us about yourself</h2>
            <p>
              Share your interests and goals and we’ll help guide you toward the
              right career path and courses.
            </p>

            <CareerGuidanceForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import Footer from "@/components/Footer.js";