"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const res = await fetch("/api/mailing-list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setErrorMsg(data.error || "Something went wrong.");
      setStatus("error");
    } else {
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-success">
        <span>✅</span>
        <p>You&apos;re on the mailing list! We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h4>Join our Mailing List</h4>
      <p className="contact-subtext">Be the first to know when new courses go live.</p>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Any questions or comments? (optional)"
        rows={3}
        value={form.message}
        onChange={handleChange}
      />

      {status === "error" && <p className="contact-error">{errorMsg}</p>}

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Joining..." : "Join Mailing List →"}
      </button>
    </form>
  );
}
