import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "My Orders" };

const mockOrders = [
  { id: "TV20241115001", date: "15 Nov 2024", status: "Delivered", items: 2, total: 5798, product: "Rose Gold Soft Silk Saree" },
  { id: "TV20241028002", date: "28 Oct 2024", status: "Shipped", items: 1, total: 3299, product: "Pista Green Banarasi Saree" },
  { id: "TV20241003003", date: "03 Oct 2024", status: "Delivered", items: 3, total: 7497, product: "Dusty Pink Kanjivaram + 2 more" },
];

const statusColor: Record<string, string> = {
  Delivered: "#2C6E49", Shipped: "#B8962E", Pending: "#9B5C61", Cancelled: "#C0392B",
};

export default function MyOrdersPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760, margin: "0 auto" }}>
        <div className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
          <Link href="/account">My Account</Link><span className="breadcrumb-sep">/</span><span style={{ color: "var(--text)" }}>My Orders</span>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 600, marginBottom: "2rem" }}>My Orders</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {mockOrders.map((order) => (
            <div key={order.id} className="card" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.06em", marginBottom: 4 }}>ORDER ID</p>
                  <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.92rem", fontWeight: 600, color: "var(--text)" }}>{order.id}</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: 2 }}>{order.date} &nbsp;·&nbsp; {order.items} item{order.items > 1 ? "s" : ""}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: 4 }}>{order.product}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ display: "inline-block", padding: "3px 12px", borderRadius: 20, background: `${statusColor[order.status]}18`, color: statusColor[order.status], fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "0.5rem" }}>{order.status}</span>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 700 }}>₹{order.total.toLocaleString("en-IN")}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
                <Link href={`/account/orders/${order.id}`} className="btn btn-outline btn-sm">View Details</Link>
                <Link href="/track-order" className="btn btn-outline btn-sm">Track Order</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
