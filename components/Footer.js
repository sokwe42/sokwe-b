import Link from "next/link";
import ContactForm from "./ContactForm";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ADDRESS */}
        <div className="footer-left">
          <div className="footer-address">
            <h4>Our Address</h4>
            <p>
              Sokwe-b Learning Platform <br />
              Nairobi, Kenya <br />
              info@sokwe-b.com <br />
              +254 708 801 801
            </p>
          </div>
        </div>

        {/* CONTACT / WAITLIST FORM */}
        <div id="contact" className="footer-contact">
          <ContactForm />
        </div>

        {/* RESOURCES */}
        <div className="footer-links">
          <h4>Resources</h4>
          <Link href="/">Sustainability Mission</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Data Controller</Link>
          <Link href="/">Contact Us</Link>
        </div>

        {/* MAP */}
        <div className="footer-map">
          <h4>Find Us</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1397.2636800593211!2d36.79119277218149!3d-1.2691971955994976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1793256811d7%3A0xbc1e134774ba2cb!2sBarista%20%26%20Co.%20Keystone%20Park!5e0!3m2!1sen!2ske!4v1778412847567!5m2!1sen!2ske"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Sokwe-b. All rights reserved.</p>
      </div>
    </footer>
  );
}
