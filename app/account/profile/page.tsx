"use client";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const [form, setForm] = useState({ name: "Priya Sharma", email: "priya@example.com", phone: "+91 98765 43210", dob: "1992-04-15", gender: "Female" });

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 620, margin: "0 auto" }}>
        <div className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
          <Link href="/account">My Account</Link><span className="breadcrumb-sep">/</span>
          <span style={{ color: "var(--text)" }}>My Profile</span>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 600, marginBottom: "2rem" }}>My Profile</h1>

        <div className="card" style={{ padding: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "white", flexShrink: 0 }}>P</div>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 600 }}>{form.name}</p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{form.email}</p>
            </div>
          </div>

          <div className="two-col-sm">
            {[
              { key: "name", label: "Full Name" }, { key: "phone", label: "Phone Number" },
              { key: "email", label: "Email Address", full: true },
              { key: "dob", label: "Date of Birth", type: "date" },
              { key: "gender", label: "Gender" },
            ].map((f: any) => (
              <div key={f.key} style={{ gridColumn: f.full ? "1/-1" : undefined }}>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem", letterSpacing: "0.05em" }}>{f.label}</label>
                {f.key === "gender" ? (
                  <select className="input" value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })}>
                    <option>Female</option><option>Male</option><option>Prefer not to say</option>
                  </select>
                ) : (
                  <input className="input" type={f.type ?? "text"} value={(form as any)[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
                )}
              </div>
            ))}
          </div>

          <button onClick={() => toast.success("Profile updated!")} className="btn btn-primary" style={{ marginTop: "1.75rem" }}>Save Changes</button>
        </div>
      </div>
    </section>
  );
}
