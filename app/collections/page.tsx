import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore all Tavare saree collections — Silk, Cotton, Banarasi, Kanjivaram, Georgette and more.",
};

export default function CollectionsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Our Sarees</p>
          <h1 className="section-heading">All Collections</h1>
          <div className="divider" />
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "0.75rem" }}>
            Discover handpicked sarees woven with love for every beautiful occasion.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "2rem" }}>
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/collections/${cat.slug}`} style={{ textDecoration: "none" }}>
                <div className="card card-hover" style={{ overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "65%", background: "var(--cream-dark)" }}>
                    <Image src={cat.image} alt={cat.name} fill style={{ objectFit: "cover" }} sizes="350px" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(44,24,16,0.7) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", top: 12, right: 12, background: "var(--primary)", color: "white", fontFamily: "'Jost',sans-serif", fontSize: "0.7rem", fontWeight: 600, padding: "3px 10px", borderRadius: 2 }}>
                      {cat.count}+ Styles
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem" }}>
                      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 600, color: "white", marginBottom: "0.3rem" }}>{cat.name}</h2>
                      <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.08em" }}>EXPLORE NOW →</p>
                    </div>
                  </div>
                  <div style={{ padding: "1rem 1.25rem" }}>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{cat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured strip */}
          <div style={{ marginTop: "4rem", padding: "2.5rem", background: "var(--cream-dark)", borderRadius: 4, textAlign: "center" }}>
            <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Not Sure Where to Start?</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Browse All {products.length}+ Sarees</h2>
            <Link href="/collections/all" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
