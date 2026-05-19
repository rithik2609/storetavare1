import Link from "next/link";
import { CheckCircle, Package, Truck } from "lucide-react";

export const metadata = { title: "Order Placed Successfully" };

export default function OrderSuccessPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", padding: "3rem 1.25rem" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(44,110,73,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
          <CheckCircle size={44} color="#2C6E49" />
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.2rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem" }}>Order Placed!</h1>
        <p style={{ fontSize: "1rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Thank you for shopping with Tavare.</p>
        <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "2.5rem" }}>Your order has been confirmed and will be dispatched within 24 hours.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { icon: <Package size={22} />, title: "Order Confirmed", sub: "We've received your order" },
            { icon: <Truck size={22} />, title: "Delivery in 3–7 Days", sub: "Across India" },
          ].map((b) => (
            <div key={b.title} className="card" style={{ padding: "1.25rem", textAlign: "center" }}>
              <div style={{ color: "var(--primary)", display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>{b.icon}</div>
              <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>{b.title}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 2 }}>{b.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/account/orders" className="btn btn-primary">View My Orders</Link>
          <Link href="/collections" className="btn btn-outline">Continue Shopping</Link>
        </div>
      </div>
    </section>
  );
}
