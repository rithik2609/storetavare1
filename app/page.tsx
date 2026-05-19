import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { reviews } from "@/data/reviews";
import ProductCard from "@/components/product/ProductCard";

export default function HomePage() {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 5);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: "relative", background: "linear-gradient(135deg,#F2EAD8 0%,#EDE0CC 60%,#E5D5C0 100%)", overflow: "hidden" }}>
        <div className="container hero-grid" style={{ padding: "3rem 1.25rem" }}>
          <div style={{ zIndex: 2 }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Welcome to Tavare</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.4rem,6vw,5rem)", fontWeight: 700, lineHeight: 1.05, color: "var(--text)", marginBottom: "1.25rem" }}>
              Happiness<br /><span style={{ color: "var(--primary)", fontStyle: "italic" }}>Through Thread</span>
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 400, marginBottom: "2rem" }}>
              Elegant sarees crafted with love, woven for every beautiful you.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/collections" className="btn btn-primary btn-lg">Shop Now</Link>
              <Link href="/about" className="btn btn-outline btn-lg">Our Story</Link>
            </div>
            <div style={{ display: "flex", gap: "2rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
              {[["10K+","Happy Customers"],["50+","Weaver Families"],["4.9★","Average Rating"]].map(([val,lbl]) => (
                <div key={lbl}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--primary)" }}>{val}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Image src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=85" alt="Tavare Saree" fill style={{ objectFit: "cover" }} priority sizes="(max-width:768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* ── Features Strip ── */}
      <section style={{ background: "white", borderBottom: "1px solid var(--border)", borderTop: "1px solid var(--border)", padding: "1.5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "1rem" }}>
            {[
              { icon: "🏆", title: "Premium Quality", sub: "Finest fabrics crafted to perfection" },
              { icon: "🚚", title: "Free Shipping", sub: "On orders above ₹1499" },
              { icon: "🔒", title: "Secure Payment", sub: "100% secure & trusted checkout" },
              { icon: "↩️", title: "Easy Returns", sub: "Hassle free returns within 7 days" },
              { icon: "🎧", title: "Customer Support", sub: "We're here to help you always" },
            ].map((f) => (
              <div key={f.title} style={{ textAlign: "center", padding: "0.75rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>{f.icon}</div>
                <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.2rem" }}>{f.title}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shop by Collection ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="eyebrow">Explore</p>
            <h2 className="section-heading">Shop by Collection</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "1.25rem" }}>
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/collections/${cat.slug}`} style={{ textDecoration: "none" }}>
                <div className="card-hover" style={{ borderRadius: 4, overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "relative", paddingBottom: "120%", background: "var(--cream-dark)" }}>
                    <Image src={cat.image} alt={cat.name} fill style={{ objectFit: "cover" }} sizes="200px" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(44,24,16,0.65) 0%, transparent 50%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem 0.75rem" }}>
                      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontWeight: 600, color: "white", lineHeight: 1.2 }}>{cat.name}</div>
                      <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 3 }}>Explore Now →</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── New Arrivals ── */}
      <section className="section" style={{ background: "var(--cream-dark)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="eyebrow">Just In</p>
            <h2 className="section-heading">New Arrivals</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: "1.5rem" }}>
            {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/collections" className="btn btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="section">
        <div className="container">
          <div className="two-col" style={{ alignItems: "center" }}>
            <div style={{ position: "relative", height: "clamp(260px,40vw,420px)", borderRadius: 4, overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80" alt="Crafting Tradition" fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
            </div>
            <div>
              <p className="eyebrow">About Tavare</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 600, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Crafting Tradition,<br /><em style={{ color: "var(--primary)" }}>Celebrating You</em>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                At Tavare, every saree is more than just fabric — it&apos;s an emotion, a story and a celebration of Indian heritage. We bring you timeless elegance woven with love and happiness through every thread.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }}>
                {["Authentic Weaves","Handpicked Designs","Premium Fabrics","Made with Love"].map((v) => (
                  <div key={v} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text)" }}>
                    <span style={{ color: "var(--primary)", fontSize: "0.9rem" }}>✿</span>{v}
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn btn-primary">Know More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Sellers ── */}
      <section className="section" style={{ background: "var(--cream-dark)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="eyebrow">Most Loved</p>
            <h2 className="section-heading">Best Sellers</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: "1.5rem" }}>
            {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="eyebrow">Customer Love</p>
            <h2 className="section-heading">Loved by Thousands</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.5rem" }}>
            {reviews.slice(0,3).map((r) => (
              <div key={r.id} className="card" style={{ padding: "1.75rem" }}>
                <div className="stars" style={{ fontSize: "0.85rem", marginBottom: "0.75rem" }}>{"★".repeat(r.rating)}</div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem", fontStyle: "italic" }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", fontWeight: 700, flexShrink: 0 }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>{r.name}</div>
                    {r.verified && <div style={{ fontSize: "0.68rem", color: "#2C6E49" }}>✓ Verified Purchase</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offer Banner ── */}
      <section style={{ background: "var(--primary)", padding: "3.5rem 0", textAlign: "center" }}>
        <div className="container">
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.7)", marginBottom: "0.5rem" }}>Festive Special Offer</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>
            Flat 10% Off
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", marginBottom: "1.75rem" }}>On all orders above ₹2999</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ background: "rgba(255,255,255,0.15)", border: "1px dashed rgba(255,255,255,0.5)", borderRadius: 4, padding: "0.6rem 1.5rem" }}>
              <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "1rem", fontWeight: 700, color: "white", letterSpacing: "0.1em" }}>USE CODE: TAVARE10</span>
            </div>
            <Link href="/collections" className="btn btn-white">Shop Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
