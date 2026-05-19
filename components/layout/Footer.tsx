"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const shopLinks = [
  { label: "All Collections", href: "/collections" },
  { label: "Silk Sarees", href: "/collections/silk-sarees" },
  { label: "Cotton Sarees", href: "/collections/cotton-sarees" },
  { label: "Banarasi Sarees", href: "/collections/banarasi-sarees" },
  { label: "New Arrivals", href: "/collections/new-arrivals" },
  { label: "Best Sellers", href: "/collections/best-sellers" },
  { label: "Sale", href: "/collections/sale" },
];

const customerLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Return & Refund Policy", href: "/return-refund-policy" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "FAQ", href: "/faq" },
];

const accountLinks = [
  { label: "My Orders", href: "/account/orders" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Track Order", href: "/track-order" },
  { label: "Login / Register", href: "/login" },
  { label: "My Addresses", href: "/account/addresses" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ background: "var(--text)", color: "rgba(255,255,255,0.75)", marginTop: "auto" }}>
      {/* Newsletter Strip */}
      <div style={{ background: "var(--primary)", padding: "2.5rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
            <div>
              <div style={{ color: "white", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 600 }}>Stay Updated</div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginTop: "0.25rem" }}>Subscribe to our newsletter and get exclusive offers &amp; updates</div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flex: "1 1 320px", maxWidth: 480 }}>
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{ flex: 1, padding: "0.7rem 1rem", border: "none", borderRadius: 2, fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", outline: "none" }}
              />
              <button onClick={() => { alert("Subscribed!"); setEmail(""); }}
                style={{ padding: "0.7rem 1.5rem", background: "var(--text)", color: "white", border: "none", borderRadius: 2, fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap" }}>
                Subscribe
              </button>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            {[
              { icon: "🎁", label: "Exclusive Offers" },
              { icon: "✨", label: "Early Access to Sales" },
              { icon: "🧣", label: "Style & Care Tips" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.85)", fontSize: "0.82rem" }}>
                <span>{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container" style={{ padding: "3.5rem 1.25rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2.5rem" }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.25rem" }}>
              <Image
                src="/logo.png"
                alt="Tavare — Happiness Through Thread"
                width={200}
                height={66}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.8, marginBottom: "1.25rem", maxWidth: 220 }}>
              Tavare is an online saree store that brings you elegant, premium and timeless sarees for every occasion.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {["📷", "📘", "📌", "💬"].map((icon, i) => (
                <a key={i} href="#" style={{ fontSize: "1rem", opacity: 0.7, transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = "1"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = "0.7"}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "white", marginBottom: "1rem" }}>Shop</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {shopLinks.map((l) => (
                <li key={l.href}><Link href={l.href} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--primary-light)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
                >{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "white", marginBottom: "1rem" }}>Customer Care</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {customerLinks.map((l) => (
                <li key={l.href}><Link href={l.href} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--primary-light)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
                >{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "white", marginBottom: "1rem" }}>My Account</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {accountLinks.map((l) => (
                <li key={l.href}><Link href={l.href} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--primary-light)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
                >{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "white", marginBottom: "1rem" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.82rem" }}>
              <div>📞 +91 98765 43210</div>
              <div>✉️ support@tavare.com</div>
              <div>🕐 Mon–Sat | 10AM–7PM</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "3rem", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <p style={{ fontSize: "0.78rem" }}>© 2024 Tavare. All Rights Reserved.</p>
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
            {policyLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{l.label}</Link>
            ))}
          </div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.75rem", opacity: 0.6 }}>
            <span>VISA</span><span>Mastercard</span><span>UPI</span><span>RuPay</span><span>COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
