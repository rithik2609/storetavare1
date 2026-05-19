import { Metadata } from "next";
export const metadata: Metadata = { title: "Cancellation Policy" };

export default function CancellationPolicyPage() {
  return (
    <>
      <div className="page-hero"><div className="container"><h1 className="section-heading">Cancellation Policy</h1><div className="divider" /><p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: "0.5rem" }}>Last updated: 1 November 2024</p></div></div>
      <section className="section"><div className="container" style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2.5rem" }}>
          {[
            { icon: "✅", title: "Within 24 Hours", desc: "Free cancellation. Full refund to original payment method.", ok: true },
            { icon: "⚠️", title: "24–48 Hours", desc: "Cancellation possible before dispatch. Full refund processed.", ok: true },
            { icon: "🚚", title: "After Dispatch", desc: "Cannot be cancelled. Use our return policy after delivery.", ok: false },
            { icon: "❌", title: "Custom Orders", desc: "Customised or stitched orders cannot be cancelled.", ok: false },
          ].map((c) => (
            <div key={c.title} className="card" style={{ padding: "1.5rem", borderLeft: `4px solid ${c.ok ? "#2C6E49" : "var(--primary)"}` }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{c.icon}</div>
              <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 700, marginBottom: "0.35rem", color: "var(--text)" }}>{c.title}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{c.desc}</div>
            </div>
          ))}
        </div>
        <div className="prose-policy">
          {[
            { title: "How to Cancel", content: "To cancel an order, contact us immediately at support@tavare.com or call +91 98765 43210 with your Order ID. Cancellations are processed during business hours (10AM–7PM, Mon–Sat)." },
            { title: "Refund on Cancellation", content: "For prepaid orders, refunds are processed within 5–7 business days to the original payment method. For UPI and wallet payments, refunds may reflect sooner. COD orders cancelled before dispatch do not attract any charge." },
            { title: "Tavare's Right to Cancel", content: "We reserve the right to cancel any order in case of pricing errors, stock unavailability, or suspected fraud. In such cases, a full refund will be initiated immediately." },
          ].map((s) => (
            <div key={s.title} style={{ marginBottom: "1.75rem" }}>
              <h2>{s.title}</h2>
              <p>{s.content}</p>
            </div>
          ))}
        </div>
      </div></section>
    </>
  );
}
