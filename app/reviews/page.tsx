import { Metadata } from "next";
import { reviews } from "@/data/reviews";
import Link from "next/link";

export const metadata: Metadata = { title: "Reviews & Testimonials", description: "Read what our customers say about Tavare sarees." };

export default function ReviewsPage() {
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Customer Love</p>
          <h1 className="section-heading">Reviews & Testimonials</h1>
          <div className="divider" />
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Summary */}
          <div className="card" style={{ padding: "2rem", marginBottom: "3rem", display: "flex", gap: "3rem", alignItems: "center", flexWrap: "wrap", justifyContent: "center", textAlign: "center" }}>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "4rem", fontWeight: 700, color: "var(--text)", lineHeight: 1 }}>{avg}</div>
              <div className="stars" style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>{"★".repeat(5)}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>Average Rating</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", flex: 1, minWidth: 200 }}>
              {[5,4,3,2,1].map((star) => {
                const count = reviews.filter((r) => r.rating === star).length;
                const pct = Math.round((count / reviews.length) * 100);
                return (
                  <div key={star} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", width: 12 }}>{star}</span>
                    <span style={{ color: "var(--gold)", fontSize: "0.75rem" }}>★</span>
                    <div style={{ flex: 1, height: 8, background: "var(--border)", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: "var(--gold)", borderRadius: 4 }} />
                    </div>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", width: 24 }}>{count}</span>
                  </div>
                );
              })}
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", fontWeight: 600 }}>{reviews.length}+</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Verified Reviews</div>
            </div>
          </div>

          {/* Review Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: "1.5rem" }}>
            {reviews.map((r) => (
              <div key={r.id} className="card" style={{ padding: "1.75rem" }}>
                <div className="stars" style={{ fontSize: "0.9rem", marginBottom: "0.75rem" }}>{"★".repeat(r.rating)}</div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem", fontStyle: "italic" }}>&ldquo;{r.text}&rdquo;</p>
                {r.productName && <p style={{ fontSize: "0.75rem", color: "var(--primary)", marginBottom: "0.75rem" }}>📦 {r.productName}</p>}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontWeight: 700 }}>{r.name[0]}</div>
                  <div>
                    <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.85rem", fontWeight: 600 }}>{r.name}</div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      {r.verified && <span style={{ fontSize: "0.68rem", color: "#2C6E49" }}>✓ Verified</span>}
                      <span style={{ fontSize: "0.68rem", color: "var(--text-light)" }}>{r.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/collections" className="btn btn-primary">Shop Our Sarees</Link>
          </div>
        </div>
      </section>
    </>
  );
}
