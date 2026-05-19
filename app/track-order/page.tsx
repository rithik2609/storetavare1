"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [tracked, setTracked] = useState(false);

  const steps = [
    { label: "Order Placed", date: "15 Nov 2024, 10:32 AM", done: true, desc: "Your order has been placed successfully." },
    { label: "Order Confirmed", date: "15 Nov 2024, 11:05 AM", done: true, desc: "Payment confirmed. Order is being prepared." },
    { label: "Shipped", date: "16 Nov 2024, 9:00 AM", done: true, desc: "Your order has been handed over to the courier." },
    { label: "Out for Delivery", date: "18 Nov 2024, 8:45 AM", done: true, desc: "Your order is out for delivery." },
    { label: "Delivered", date: "18 Nov 2024, 2:30 PM", done: true, desc: "Order delivered successfully." },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1 className="section-heading">Track Your Order</h1>
          <div className="divider" />
          <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginTop: "0.75rem" }}>Enter your order ID to track real-time delivery status</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 620, margin: "0 auto" }}>
          <div className="card" style={{ padding: "2rem", marginBottom: "2rem" }}>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <input className="input" placeholder="Enter Order ID (e.g. TV20241115001)" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
              <button className="btn btn-primary" style={{ whiteSpace: "nowrap" }} onClick={() => { if (!orderId.trim()) { toast.error("Please enter an order ID"); return; } setTracked(true); }}>Track</button>
            </div>
          </div>

          {tracked && (
            <div className="card" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
                <div>
                  <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.06em" }}>ORDER ID</p>
                  <p style={{ fontWeight: 600, marginTop: 2 }}>{orderId}</p>
                </div>
                <span style={{ background: "rgba(44,110,73,0.1)", color: "#2C6E49", fontFamily: "'Jost',sans-serif", fontSize: "0.75rem", fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>Delivered</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {steps.map((step, i) => (
                  <div key={step.label} style={{ display: "flex", gap: "1.25rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: step.done ? "#2C6E49" : "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ color: "white", fontSize: "0.7rem" }}>{step.done ? "✓" : i + 1}</span>
                      </div>
                      {i < steps.length - 1 && <div style={{ width: 2, flex: 1, background: step.done ? "#2C6E49" : "var(--border)", margin: "4px 0" }} />}
                    </div>
                    <div style={{ paddingBottom: i < steps.length - 1 ? "1.5rem" : 0 }}>
                      <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 600, color: step.done ? "var(--text)" : "var(--text-muted)" }}>{step.label}</p>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-light)", marginTop: 2 }}>{step.date}</p>
                      <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: 3 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
