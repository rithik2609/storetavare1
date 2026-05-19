import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Return & Refund Policy" };

export default function ReturnRefundPage() {
  return (
    <>
      <div className="page-hero"><div className="container"><h1 className="section-heading">Return & Refund Policy</h1><div className="divider" /><p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: "0.5rem" }}>Last updated: 1 November 2024</p></div></div>
      <section className="section"><div className="container" style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ padding: "1.25rem 1.5rem", background: "rgba(44,110,73,0.08)", border: "1px solid rgba(44,110,73,0.2)", borderRadius: 4, marginBottom: "2.5rem", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.25rem" }}>✅</span>
          <p style={{ fontSize: "0.9rem", color: "#2C6E49", lineHeight: 1.7 }}>We offer hassle-free returns within <strong>7 days</strong> of delivery. Your satisfaction is our priority.</p>
        </div>
        <div className="prose-policy">
          {[
            { title: "Return Eligibility", items: ["Item must be returned within 7 days of delivery.", "Saree must be unused, unwashed, and in its original packaging.", "Blouse piece must be unstitched and uncut.", "Original tags must be intact.", "Items purchased on Sale are not eligible for return."] },
            { title: "Non-Returnable Items", items: ["Sale or clearance items.", "Customised or stitched blouse pieces.", "Items damaged due to misuse or improper handling.", "Items returned after 7 days of delivery."] },
            { title: "How to Initiate a Return", items: ["Contact us at returns@tavare.com or call +91 98765 43210 within 7 days of delivery.", "Share your order ID and reason for return along with clear photos of the item.", "Our team will verify and approve the return within 24 hours.", "Ship the item back using the return label we provide. Return pickup is also available in select cities."] },
            { title: "Refund Process", items: ["Refunds are processed within 5–7 business days after we receive and inspect the returned item.", "Refund will be credited to your original payment method.", "For COD orders, refund will be issued as store credit or bank transfer.", "Shipping charges are non-refundable unless the return is due to a defect or wrong item."] },
          ].map((s) => (
            <div key={s.title} style={{ marginBottom: "2rem" }}>
              <h2>{s.title}</h2>
              <ul>{s.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <div style={{ padding: "1.25rem", background: "var(--cream)", borderRadius: 4, marginTop: "1rem" }}>
          <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>Need help with a return? <Link href="/contact" style={{ color: "var(--primary)" }}>Contact our support team</Link></p>
        </div>
      </div></section>
    </>
  );
}
