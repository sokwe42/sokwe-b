import Navbar from "@/components/Navbar.js";
import "./ai.css";

const coachingAreas = [
  {
    icon: "🤖",
    title: "AI Productivity Coaching",
    text: "Learn how to use AI tools to study, work faster, plan better, and save time.",
  },
  {
    icon: "🧠",
    title: "Prompt Writing Skills",
    text: "Understand how to ask better questions and get useful answers from AI tools.",
  },
  {
    icon: "💼",
    title: "Career & Work Support",
    text: "Get guidance on CVs, interviews, online work, freelancing, and career planning.",
  },
];

const coachingSteps = [
  "Choose your coaching goal",
  "Book a coaching session",
  "Get practical guidance",
  "Apply what you learn",
];

export default function AICoaching() {
  return (
    <>
      <Navbar />

      <main className="ai-page">
        <section className="ai-hero">
          <div className="ai-hero-content">
            <span>AI Coaching</span>
            <h1>Get guided support for learning, work, and career growth</h1>
            <p>
              Sokwe-b AI Coaching helps learners understand digital tools,
              improve productivity, and make smarter career decisions with
              practical guidance.
            </p>

            <div className="ai-hero-buttons">
              <a href="#book-session">Book a Session</a>
              <a href="#coaching-areas" className="outline-btn">
                Explore Coaching
              </a>
            </div>
          </div>

          <div className="ai-hero-card">
            <h3>What coaching can help you with</h3>

            <div className="ai-check active">✓ Choosing the right AI tools</div>
            <div className="ai-check">✓ Learning prompt writing</div>
            <div className="ai-check">✓ Improving productivity</div>
            <div className="ai-check">✓ Career planning with AI</div>
          </div>
        </section>

        <section className="coaching-section" id="coaching-areas">
          <div className="section-heading">
            <span>Coaching Areas</span>
            <h2>Practical AI support for modern learners</h2>
            <p>
              Choose the support area that fits your goals and get guidance that
              is easy to understand and apply.
            </p>
          </div>

          <div className="coaching-grid">
            {coachingAreas.map((area) => (
              <div className="coaching-card" key={area.title}>
                <span>{area.icon}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-process">
          <div className="process-left">
            <span>How it works</span>
            <h2>Book, learn, apply, grow</h2>
            <p>
              The coaching experience is designed to be simple. You choose what
              you need help with, book a session, and receive practical support.
            </p>
          </div>

          <div className="process-list">
            {coachingSteps.map((step, index) => (
              <div className="process-item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-featured">
          <div className="featured-card">
            <span>Popular Session</span>
            <h2>AI Tools Starter Session</h2>
            <p>
              A beginner-friendly coaching session for learners who want to use
              AI for studying, career planning, content creation, research, and
              productivity.
            </p>

            <div className="featured-tags">
              <span>60 minutes</span>
              <span>Beginner friendly</span>
              <span>Live coaching</span>
            </div>
          </div>

          <div className="featured-points">
            <h3>Session outline</h3>
            <ul>
              <li>Understand useful AI tools</li>
              <li>Learn basic prompt writing</li>
              <li>Apply AI to your learning goals</li>
              <li>Create a simple personal action plan</li>
            </ul>
          </div>
        </section>

        <section className="book-section" id="book-session">
          <span>Book Coaching</span>
          <h2>Ready to get personalized AI support?</h2>
          <p>
            Book a coaching session and get guided support based on your goals,
            skill level, and career direction.
          </p>

          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="book-btn"
          >
            Book on Calendly
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
import Footer from "@/components/Footer.js";