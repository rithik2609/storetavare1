import { Metadata } from "next";
export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  const sections = [
    { title: "Acceptance of Terms", content: "By accessing or using the Tavare website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website." },
    { title: "Use of Website", content: "You may use our website only for lawful purposes. You agree not to reproduce, redistribute or misuse any content from this website without written permission from Tavare." },
    { title: "Product Information", content: "We make every effort to display product colours, sizes and details accurately. However, slight variations may occur due to screen settings. All prices are in Indian Rupees (INR) and inclusive of applicable taxes." },
    { title: "Order Placement", content: "Placing an order constitutes an offer to purchase. We reserve the right to cancel any order in case of pricing errors, stock unavailability or fraudulent activity. A confirmation email does not constitute final acceptance of an order." },
    { title: "Intellectual Property", content: "All content on this website, including images, logos, text and design, is the property of Tavare and is protected under Indian intellectual property laws. Unauthorised use is strictly prohibited." },
    { title: "Limitation of Liability", content: "Tavare shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our maximum liability is limited to the amount paid for the order in question." },
    { title: "Governing Law", content: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Tamil Nadu, India." },
  ];
  return (
    <>
      <div className="page-hero"><div className="container"><h1 className="section-heading">Terms & Conditions</h1><div className="divider" /><p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: "0.5rem" }}>Last updated: 1 November 2024</p></div></div>
      <section className="section"><div className="container" style={{ maxWidth: 760, margin: "0 auto" }}>
        <div className="prose-policy">
          {sections.map((s, i) => (
            <div key={s.title} style={{ marginBottom: "2rem" }}>
              <h2>{i + 1}. {s.title}</h2>
              <p>{s.content}</p>
            </div>
          ))}
        </div>
      </div></section>
    </>
  );
}
