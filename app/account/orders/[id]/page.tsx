import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Order Details" };

interface Props { params: Promise<{ id: string }> }

export default async function OrderDetailsPage({ params }: Props) {
  const { id } = await params;

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720, margin: "0 auto" }}>
        <div className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
          <Link href="/account">My Account</Link><span className="breadcrumb-sep">/</span>
          <Link href="/account/orders">My Orders</Link><span className="breadcrumb-sep">/</span>
          <span style={{ color: "var(--text)" }}>{id}</span>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 600, marginBottom: "2rem" }}>Order Details</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* Status */}
          <div className="card" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.06em", fontWeight: 600, marginBottom: 4 }}>ORDER ID</p>
                <p style={{ fontWeight: 600, color: "var(--text)" }}>{id}</p>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: 2 }}>Placed on 15 Nov 2024</p>
              </div>
              <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 20, background: "rgba(44,110,73,0.1)", color: "#2C6E49", fontSize: "0.75rem", fontWeight: 700 }}>Delivered</span>
            </div>
            <div style={{ display: "flex", gap: 0, marginTop: "1.5rem" }}>
              {["Order Placed","Processing","Shipped","Out for Delivery","Delivered"].map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", flex: i < 4 ? 1 : 0 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#2C6E49", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "white", fontSize: "0.6rem" }}>✓</span>
                    </div>
                    <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", textAlign: "center", maxWidth: 52 }}>{s}</span>
                  </div>
                  {i < 4 && <div style={{ flex: 1, height: 2, background: "#2C6E49", margin: "0 2px 1.1rem" }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Items */}
          <div className="card" style={{ padding: "1.5rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1.25rem" }}>Items Ordered</h2>
            <div style={{ display: "flex", gap: "1rem", padding: "1rem", background: "var(--cream)", borderRadius: 4 }}>
              <div style={{ width: 70, height: 85, background: "var(--cream-dark)", borderRadius: 3, flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontWeight: 600, color: "var(--text)" }}>Rose Gold Soft Silk Saree</p>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: "3px 0" }}>Qty: 1 &nbsp;·&nbsp; Fabric: Soft Silk</p>
                <p style={{ fontWeight: 600 }}>₹2,899</p>
              </div>
            </div>
          </div>

          {/* Delivery + Payment */}
          <div className="two-col-sm">
            <div className="card" style={{ padding: "1.25rem" }}>
              <h3 style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Delivery Address</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text)", fontWeight: 500 }}>Priya Sharma</p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>123 MG Road, Koramangala<br/>Bangalore, Karnataka — 560034</p>
            </div>
            <div className="card" style={{ padding: "1.25rem" }}>
              <h3 style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Payment</h3>
              <p style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--text)" }}>Cash on Delivery</p>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 700, marginTop: "0.5rem" }}>₹2,899</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            <Link href="/track-order" className="btn btn-primary btn-sm">Track Order</Link>
            <Link href="/contact" className="btn btn-outline btn-sm">Need Help?</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
