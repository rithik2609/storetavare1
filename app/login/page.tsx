"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [tab, setTab] = useState<"login"|"register">("login");
  const [form, setForm] = useState({ email: "", password: "", name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(tab === "login" ? "Logged in successfully!" : "Account created!");
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 460, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
            <Image src="/logo.png" alt="Tavare" width={180} height={60} style={{ objectFit: "contain" }} />
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Sign in to your account</p>
        </div>

        <div className="card" style={{ padding: "2rem" }}>
          <div style={{ display: "flex", borderBottom: "2px solid var(--border)", marginBottom: "1.75rem" }}>
            {(["login","register"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "0.75rem", fontFamily: "'Jost',sans-serif", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", color: tab === t ? "var(--primary)" : "var(--text-muted)", borderBottom: tab === t ? "2px solid var(--primary)" : "2px solid transparent", marginBottom: -2 }}>
                {t === "login" ? "Login" : "Register"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {tab === "register" && (
              <>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem" }}>Full Name</label>
                  <input className="input" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem" }}>Phone Number</label>
                  <input className="input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </>
            )}
            <div>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem" }}>Email Address</label>
              <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem" }}>Password</label>
              <input className="input" type="password" placeholder="••••••••" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
            {tab === "login" && (
              <div style={{ textAlign: "right" }}>
                <Link href="/forgot-password" style={{ fontSize: "0.8rem", color: "var(--primary)", textDecoration: "none" }}>Forgot Password?</Link>
              </div>
            )}
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}>
              {tab === "login" ? "Login to Account" : "Create Account"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
            {tab === "login" ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setTab(tab === "login" ? "register" : "login")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--primary)", fontWeight: 600, marginLeft: 4, fontFamily: "'Jost',sans-serif", fontSize: "0.82rem" }}>
              {tab === "login" ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
