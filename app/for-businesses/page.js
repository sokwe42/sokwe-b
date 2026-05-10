import Navbar from "@/components/Navbar.js";
import "./business.css";

const businessServices = [
  {
    icon: "🏢",
    title: "Team Training",
    text: "Upskill employees with practical digital, AI, and workplace courses.",
  },
  {
    icon: "🎥",
    title: "Custom Learning Content",
    text: "Create branded learning videos and training content for your team.",
  },
  {
    icon: "📊",
    title: "Skills Development Plans",
    text: "Build structured learning paths based on your organization’s goals.",
  },
];

export default function ForBusinesses() {
  return (
    <>
      <Navbar />

      <main className="business-page">
        <section className="business-hero">
          <div className="business-hero-content">
            <span>For Businesses</span>
            <h1>Train your team with practical skills for the future of work</h1>
            <p>
              Sokwe-b helps businesses build capable teams through flexible
              learning, AI coaching, digital skills training, and custom
              workforce development.
            </p>

            <div className="business-hero-buttons">
              <button type="button">Request Training</button>
              <button type="button" className="outline-btn">
                View Solutions
              </button>
            </div>
          </div>

          <div className="business-hero-card">
            <h3>Business learning solutions</h3>
            <div className="business-check active">✓ Employee upskilling</div>
            <div className="business-check">✓ AI adoption support</div>
            <div className="business-check">✓ Custom training content</div>
            <div className="business-check">✓ Team learning plans</div>
          </div>
        </section>

        <section className="business-services">
          <div className="section-heading">
            <span>Solutions</span>
            <h2>Flexible training for growing teams</h2>
            <p>
              Support your team with learning experiences that are practical,
              relevant, and easy to apply.
            </p>
          </div>

          <div className="business-grid">
            {businessServices.map((service) => (
              <div className="business-card" key={service.title}>
                <span>{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="business-process">
          <div className="process-left">
            <span>How it works</span>
            <h2>Simple training setup for your organization</h2>
            <p>
              We help you identify training needs, choose learning paths, and
              deliver practical skill-building sessions.
            </p>
          </div>

          <div className="process-list">
            <div className="process-item">
              <span>01</span>
              <p>Share your team’s training needs</p>
            </div>
            <div className="process-item">
              <span>02</span>
              <p>Choose courses or request custom content</p>
            </div>
            <div className="process-item">
              <span>03</span>
              <p>Train your team through flexible sessions</p>
            </div>
            <div className="process-item">
              <span>04</span>
              <p>Track growth and improve skills over time</p>
            </div>
          </div>
        </section>

        <section className="business-form-section">
          <div className="form-container">
            <span>Partner with us</span>
            <h2>Request a business training package</h2>
            <p>
              Tell us what your team needs and we’ll help recommend a suitable
              learning solution.
            </p>

            <form className="business-form">
              <div className="form-row">
                <input type="text" placeholder="Company name" required />
                <input type="email" placeholder="Work email" required />
              </div>

              <input type="text" placeholder="Training area of interest" />

              <textarea
                placeholder="Tell us about your team or training goals..."
                rows="5"
              />

              <button type="submit">Submit Business Request</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import Footer from "@/components/Footer.js";