"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Get in Touch</p>
          <h1 className="section-heading">Contact Us</h1>
          <div className="divider" />
          <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginTop: "0.75rem" }}>We&apos;re here to help. Reach out and we&apos;ll respond within 24 hours.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="card" style={{ padding: "2.5rem" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 600, marginBottom: "1.75rem" }}>Send a Message</h2>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <div className="two-col-sm">
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem" }}>Full Name *</label>
                    <input className="input" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem" }}>Phone</label>
                    <input className="input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem" }}>Email Address *</label>
                  <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem" }}>Subject</label>
                  <select className="input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                    <option value="">Select a topic</option>
                    <option>Order Query</option>
                    <option>Return / Exchange</option>
                    <option>Product Information</option>
                    <option>Shipping Issue</option>
                    <option>Payment Problem</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem" }}>Message *</label>
                  <textarea className="input" placeholder="How can we help you?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required style={{ minHeight: 130 }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>Send Message ✉️</button>
              </form>
            </div>

            {/* Info Panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: "📞", title: "Phone", lines: ["+91 98765 43210", "Mon–Sat, 10AM – 7PM"] },
                { icon: "✉️", title: "Email", lines: ["support@tavare.com", "We reply within 24 hours"] },
                { icon: "📍", title: "Address", lines: ["Tavare HQ, 12 Silk Lane", "Kanjivaram, Tamil Nadu 631501"] },
              ].map((info) => (
                <div key={info.title} className="card" style={{ padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{info.icon}</span>
                  <div>
                    <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "var(--text)", marginBottom: 3 }}>{info.title}</p>
                    {info.lines.map((l) => <p key={l} style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{l}</p>)}
                  </div>
                </div>
              ))}
              <div className="card" style={{ padding: "1.25rem" }}>
                <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem" }}>Quick Links</p>
                {[["Track Your Order","/track-order"],["Return Policy","/return-refund-policy"],["FAQ","/faq"],["Shipping Policy","/shipping-policy"]].map(([label,href]) => (
                  <a key={href} href={href} style={{ display: "block", fontSize: "0.85rem", color: "var(--primary)", textDecoration: "none", padding: "4px 0" }}>→ {label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
