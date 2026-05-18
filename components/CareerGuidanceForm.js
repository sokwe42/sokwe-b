"use client";

import { useState } from "react";

export default function CareerGuidanceForm() {
  const [form, setForm] = useState({ name: "", email: "", interests: "", goals: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/career-guidance", {
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
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success">
        <span>✅</span>
        <p>Thanks! We&apos;ve received your details and will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form className="career-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
      </div>
      <textarea name="interests" placeholder="What are your interests? (e.g. tech, business, design...)" rows="4" value={form.interests} onChange={handleChange} required />
      <textarea name="goals" placeholder="What are your goals? (e.g. job, freelancing, starting a business...)" rows="4" value={form.goals} onChange={handleChange} required />
      {status === "error" && <p className="form-error">{errorMsg}</p>}
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Get Personalized Guidance"}
      </button>
    </form>
  );
}
