import { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy" };

const sections = [
  { title: "Information We Collect", items: ["Personal information you provide: name, email address, phone number, and delivery address.", "Payment information processed securely through our payment partners.", "Usage data such as pages visited, products viewed, and time spent on the site.", "Device information including browser type, IP address, and operating system."] },
  { title: "How We Use Your Information", items: ["To process and fulfill your orders and send order confirmations.", "To communicate shipping updates, returns, and customer service responses.", "To send promotional emails and offers (you can unsubscribe at any time).", "To improve our website, products, and overall customer experience."] },
  { title: "Information Sharing", items: ["We do not sell your personal data to third parties.", "We share data only with trusted partners: payment processors, shipping companies, and analytics providers.", "We may disclose information if required by law or to protect our legal rights."] },
  { title: "Data Security", items: ["We use SSL encryption to protect all data transmitted through our website.", "Payment information is processed through secure, PCI-compliant payment gateways.", "We regularly review and update our security practices to protect your data."] },
  { title: "Cookies", items: ["We use cookies to remember your cart, preferences, and login sessions.", "Analytics cookies help us understand how customers use our website.", "You can disable cookies in your browser settings, though this may affect functionality."] },
  { title: "Your Rights", items: ["You may request access to the personal data we hold about you.", "You may request correction or deletion of your personal data.", "You may opt out of marketing communications at any time.", "Contact us at privacy@tavare.com for any data-related requests."] },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="page-hero"><div className="container"><h1 className="section-heading">Privacy Policy</h1><div className="divider" /><p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: "0.5rem" }}>Last updated: 1 November 2024</p></div></div>
      <section className="section"><div className="container prose-policy" style={{ maxWidth: 760, margin: "0 auto" }}>
        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2rem" }}>At Tavare, we are committed to protecting your privacy. This policy explains how we collect, use and protect your personal information when you use our website or services.</p>
        {sections.map((s) => (
          <div key={s.title} style={{ marginBottom: "2rem" }}>
            <h2>{s.title}</h2>
            <ul>{s.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
        <p style={{ marginTop: "2rem", padding: "1rem", background: "var(--cream)", borderRadius: 4, fontSize: "0.85rem", color: "var(--text-muted)" }}>If you have questions about this policy, contact us at <a href="mailto:privacy@tavare.com" style={{ color: "var(--primary)" }}>privacy@tavare.com</a></p>
      </div></section>
    </>
  );
}
