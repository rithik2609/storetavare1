"use client";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Reset link sent to your email!");
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 440, margin: "0 auto" }}>
        <div className="card" style={{ padding: "2.5rem 2rem", textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔑</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>Forgot Password?</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "2rem" }}>
            {sent ? "Check your inbox for the reset link." : "Enter your registered email and we'll send you a password reset link."}
          </p>

          {!sent ? (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input className="input" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Send Reset Link</button>
            </form>
          ) : (
            <div style={{ padding: "1.25rem", background: "rgba(44,110,73,0.08)", borderRadius: 4, marginBottom: "1.5rem" }}>
              <p style={{ color: "#2C6E49", fontSize: "0.9rem" }}>✓ Reset link sent to <strong>{email}</strong></p>
            </div>
          )}

          <Link href="/login" style={{ display: "block", marginTop: "1.5rem", fontSize: "0.82rem", color: "var(--primary)", textDecoration: "none" }}>← Back to Login</Link>
        </div>
      </div>
    </section>
  );
}
