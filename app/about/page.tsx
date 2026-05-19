import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Tavare — our story, our values, and our mission to bring happiness through thread.",
};

const milestones = [
  { year: "2018", title: "The Beginning", desc: "Tavare was founded with a simple dream — to make authentic handwoven sarees accessible to every woman across India." },
  { year: "2020", title: "Going Digital", desc: "We launched our online store, connecting master weavers directly with saree lovers across the country." },
  { year: "2022", title: "10,000 Happy Customers", desc: "A proud milestone — 10,000 women chose Tavare for their most special occasions." },
  { year: "2024", title: "Expanding Horizons", desc: "Today we serve customers pan-India, with over 200 handcrafted styles and 50+ weaver families as partners." },
];

const values = [
  { icon: "🧵", title: "Authentic Craftsmanship", desc: "Every saree is handwoven by skilled artisans using age-old techniques passed down through generations." },
  { icon: "🌸", title: "Timeless Elegance", desc: "We curate designs that blend tradition with contemporary sensibility, perfect for every occasion." },
  { icon: "💚", title: "Weaver Welfare", desc: "We believe in fair trade. Our artisan partners receive fair wages and recognition for their extraordinary skill." },
  { icon: "✨", title: "Premium Quality", desc: "From sourcing to packaging, we maintain the highest standards so you receive only the finest sarees." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", background: "linear-gradient(135deg,#F2EAD8,#E5D5C0)" }}>
        <div className="container hero-grid" style={{ padding: "3rem 1.25rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Our Story</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Crafting Tradition,<br /><em style={{ color: "var(--primary)" }}>Celebrating You</em>
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.75rem", maxWidth: 440 }}>
              At Tavare, every saree is more than just fabric — it&apos;s an emotion, a story and a celebration of Indian heritage. We bring you timeless elegance woven with love.
            </p>
            <Link href="/collections" className="btn btn-primary">Explore Our Sarees</Link>
          </div>
          <div className="hero-image-wrapper">
            <Image src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80" alt="Tavare Sarees" fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--primary)", padding: "2.5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "1.5rem", textAlign: "center" }}>
            {[["2018","Est."],["10K+","Happy Customers"],["50+","Weaver Families"],["200+","Unique Styles"],["4.9★","Avg Rating"]].map(([val,lbl]) => (
              <div key={lbl}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "white" }}>{val}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.08em", marginTop: 2 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="eyebrow">Our Journey</p>
            <h2 className="section-heading">How Tavare Grew</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: 680, margin: "0 auto" }}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: "flex", gap: "1.75rem", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, textAlign: "center" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: i % 2 === 0 ? "var(--primary)" : "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontWeight: 700, color: "white" }}>{m.year}</div>
                </div>
                <div className="card" style={{ flex: 1, padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>{m.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.8 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--cream-dark)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="eyebrow">What We Stand For</p>
            <h2 className="section-heading">Our Values</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
            {values.map((v) => (
              <div key={v.title} className="card" style={{ padding: "2rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.2rem", fontWeight: 600, marginBottom: "1rem" }}>
            Because every thread tells a story of timeless elegance.
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Explore our collection and find the saree that speaks to you.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link href="/collections" className="btn btn-primary btn-lg">Shop Now</Link>
            <Link href="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
