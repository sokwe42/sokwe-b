"use client";

import { useState } from "react";

export default function JobApplicationForm() {
  const [form, setForm] = useState({ name: "", email: "", role: "", experience: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const res = await fetch("/api/job-application", {
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
      <div className="form-success">
        <span>✅</span>
        <p>Application received! We&apos;ll be in touch if there&apos;s a match.</p>
      </div>
    );
  }

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
      </div>
      <input type="text" name="role" placeholder="Role you're interested in" value={form.role} onChange={handleChange} />
      <textarea name="experience" placeholder="Tell us about your skills or experience..." rows="5" value={form.experience} onChange={handleChange} />
      {status === "error" && <p className="form-error">{errorMsg}</p>}
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Interest"}
      </button>
    </form>
  );
}
