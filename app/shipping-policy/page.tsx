import { Metadata } from "next";
export const metadata: Metadata = { title: "Shipping Policy" };

export default function ShippingPolicyPage() {
  return (
    <>
      <div className="page-hero"><div className="container"><h1 className="section-heading">Shipping Policy</h1><div className="divider" /><p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: "0.5rem" }}>Last updated: 1 November 2024</p></div></div>
      <section className="section"><div className="container" style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { icon: "🚚", title: "Free Shipping", desc: "On all orders above ₹1,499 across India" },
            { icon: "📦", title: "Standard Delivery", desc: "3–7 business days" },
            { icon: "⚡", title: "Express Delivery", desc: "1–2 days for select cities (₹199 extra)" },
            { icon: "🗺️", title: "Pan India", desc: "We ship to 19,000+ pin codes" },
          ].map((c) => (
            <div key={c.title} className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{c.icon}</div>
              <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 600, marginBottom: "0.3rem" }}>{c.title}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{c.desc}</div>
            </div>
          ))}
        </div>
        <div className="prose-policy">
          {[
            { title: "Processing Time", content: "Orders are processed within 24–48 hours of placement on business days (Monday–Saturday). Orders placed on Sundays or public holidays are processed the next business day." },
            { title: "Shipping Charges", content: "Free shipping on orders above ₹1,499. A flat shipping charge of ₹99 applies to orders below ₹1,499. Express delivery charges ₹199 extra." },
            { title: "Tracking Your Order", content: "Once shipped, you will receive an SMS and email with the tracking number and courier details. Track your order at any time using our Track Order page." },
            { title: "Delivery Attempts", content: "Our courier partner will attempt delivery 3 times. If undelivered after 3 attempts, the order will be returned to us. Contact support to reschedule delivery." },
            { title: "Damaged in Transit", content: "If your order arrives damaged, please photograph the package and contact us within 48 hours of delivery. We will arrange a replacement at no cost." },
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
