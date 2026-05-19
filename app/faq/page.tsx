"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Metadata } from "next";

const faqs = [
  { q: "How long does delivery take?", a: "Standard delivery takes 3–7 business days across India. Express delivery (1–2 days) is available for select cities." },
  { q: "Do you offer free shipping?", a: "Yes! We offer free shipping on all orders above ₹1,499. Orders below this attract a flat ₹99 shipping charge." },
  { q: "What is your return policy?", a: "We accept returns within 7 days of delivery for unused, unwashed sarees in their original packaging. Please refer to our Return & Refund Policy page." },
  { q: "Is Cash on Delivery available?", a: "Yes, Cash on Delivery is available across India. We also accept UPI, Credit/Debit Cards, Net Banking and all major digital wallets." },
  { q: "How do I track my order?", a: "Once your order ships, you will receive an SMS and email with the tracking ID. You can also use our Track Order page to check real-time status." },
  { q: "Are your sarees authentic handwoven?", a: "Absolutely. All Tavare sarees are sourced directly from master weavers. Each saree comes with a quality assurance tag." },
  { q: "Can I exchange for a different size/colour?", a: "Yes, exchanges are accepted within 7 days of delivery, subject to stock availability. Contact our support team to initiate the process." },
  { q: "How should I wash my silk saree?", a: "We recommend dry cleaning for silk, Banarasi and Kanjivaram sarees. For cotton sarees, gentle hand wash in cold water is advised. Visit our Care Guide for detailed instructions." },
  { q: "Do you ship internationally?", a: "Currently we ship only within India. International shipping will be available soon — follow us on Instagram for updates." },
  { q: "How do I apply a coupon code?", a: "You can enter your coupon code in the Cart page before proceeding to checkout. The discount will be applied automatically." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Help Centre</p>
          <h1 className="section-heading">Frequently Asked Questions</h1>
          <div className="divider" />
          <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginTop: "0.75rem" }}>Can&apos;t find what you&apos;re looking for? <a href="/contact" style={{ color: "var(--primary)" }}>Contact us</a></p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <div key={i} className="card" style={{ overflow: "hidden" }}>
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}>
                  <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.92rem", fontWeight: 600, color: "var(--text)" }}>{faq.q}</span>
                  {openIndex === i ? <ChevronUp size={18} color="var(--primary)" style={{ flexShrink: 0 }} /> : <ChevronDown size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />}
                </button>
                {openIndex === i && (
                  <div style={{ padding: "0 1.5rem 1.25rem", borderTop: "1px solid var(--border)" }}>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.8, paddingTop: "1rem" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
