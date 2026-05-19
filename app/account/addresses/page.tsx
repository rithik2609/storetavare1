"use client";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

const mockAddresses = [
  { id: "1", name: "Priya Sharma", phone: "+91 98765 43210", line1: "123 MG Road, Koramangala", city: "Bangalore", state: "Karnataka", pincode: "560034", isDefault: true },
  { id: "2", name: "Priya Sharma", phone: "+91 98765 43210", line1: "45 Park Street, Salt Lake", city: "Kolkata", state: "West Bengal", pincode: "700091", isDefault: false },
];

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(mockAddresses);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 700, margin: "0 auto" }}>
        <div className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
          <Link href="/account">My Account</Link><span className="breadcrumb-sep">/</span>
          <span style={{ color: "var(--text)" }}>Saved Addresses</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 600 }}>Saved Addresses</h1>
          <button className="btn btn-primary btn-sm" onClick={() => toast("Add address form coming soon!")}>+ Add New</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {addresses.map((addr) => (
            <div key={addr.id} className="card" style={{ padding: "1.5rem", border: addr.isDefault ? "2px solid var(--primary)" : "1px solid var(--border)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                <div>
                  {addr.isDefault && <span style={{ display: "inline-block", background: "var(--primary)", color: "white", fontSize: "0.65rem", fontWeight: 700, padding: "2px 8px", borderRadius: 2, letterSpacing: "0.06em", marginBottom: "0.6rem" }}>DEFAULT</span>}
                  <p style={{ fontFamily: "'Jost',sans-serif", fontWeight: 600, color: "var(--text)", marginBottom: 3 }}>{addr.name}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{addr.line1}<br/>{addr.city}, {addr.state} — {addr.pincode}</p>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: 4 }}>📞 {addr.phone}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <button className="btn btn-outline btn-sm" onClick={() => toast("Edit address coming soon!")}>Edit</button>
                  {!addr.isDefault && (
                    <button className="btn btn-sm" style={{ border: "1px solid var(--border)", background: "none", color: "var(--text-muted)", cursor: "pointer", padding: "0.45rem 1rem", fontSize: "0.72rem", fontFamily: "'Jost',sans-serif", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
                      onClick={() => { setAddresses(addresses.map((a) => ({ ...a, isDefault: a.id === addr.id }))); toast.success("Default address updated!"); }}>
                      Set Default
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
