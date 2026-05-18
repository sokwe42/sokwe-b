"use client";

import { useState } from "react";

export default function BusinessForm() {
  const [form, setForm] = useState({ company: "", email: "", training_area: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const res = await fetch("/api/business-inquiry", {
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
        <p>Request received! Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form className="business-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" name="company" placeholder="Company name" value={form.company} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Work email" value={form.email} onChange={handleChange} required />
      </div>
      <input type="text" name="training_area" placeholder="Training area of interest" value={form.training_area} onChange={handleChange} />
      <textarea name="message" placeholder="Tell us about your team or training goals..." rows="5" value={form.message} onChange={handleChange} />
      {status === "error" && <p className="form-error">{errorMsg}</p>}
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Business Request"}
      </button>
    </form>
  );
}
