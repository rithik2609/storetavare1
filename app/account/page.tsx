import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = { title: "My Account" };

const accountNav = [
  { label: "My Orders", href: "/account/orders", icon: "📦", desc: "Track and manage your orders" },
  { label: "Wishlist", href: "/wishlist", icon: "♥", desc: "Your saved sarees" },
  { label: "My Addresses", href: "/account/addresses", icon: "📍", desc: "Manage delivery addresses" },
  { label: "My Profile", href: "/account/profile", icon: "👤", desc: "Update your personal details" },
  { label: "Track Order", href: "/track-order", icon: "🚚", desc: "Real-time order tracking" },
  { label: "Reviews", href: "/reviews", icon: "⭐", desc: "Your product reviews" },
];

export default function AccountPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2.5rem", padding: "1.5rem", background: "white", borderRadius: 4, border: "1px solid var(--border)" }}>
          <div style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 700, color: "white", flexShrink: 0 }}>P</div>
          <div>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", fontWeight: 700 }}>Priya Sharma</h1>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>priya@example.com &nbsp;·&nbsp; Member since 2024</p>
          </div>
          <Link href="/account/profile" className="btn btn-outline btn-sm" style={{ marginLeft: "auto" }}>Edit Profile</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
          {accountNav.map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <div className="card card-hover" style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.3rem" }}>{item.label}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Link href="/login" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.82rem", color: "var(--text-muted)", textDecoration: "none" }}>Sign Out</Link>
        </div>
      </div>
    </section>
  );
}
