"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle, Lock, ChevronRight } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";

const steps = ["Address", "Payment", "Confirm"];

const indianStates = ["Andhra Pradesh","Delhi","Gujarat","Karnataka","Kerala","Maharashtra","Rajasthan","Tamil Nadu","Telangana","Uttar Pradesh","West Bengal","Other"];

export default function CheckoutPage() {
  const [step, setStep] = useState(0);
  const [address, setAddress] = useState({ name: "", phone: "", email: "", line1: "", line2: "", city: "", state: "", pincode: "" });
  const [payment, setPayment] = useState("cod");
  const { items, subtotal, clearCart } = useCartStore();
  const router = useRouter();
  const sub = subtotal();
  const shipping = sub >= 1499 ? 0 : 99;
  const total = sub + shipping;

  const handleOrder = () => {
    clearCart();
    toast.success("Order placed successfully!");
    router.push("/checkout/success");
  };

  return (
    <section className="section" style={{ paddingTop: "2rem" }}>
      <div className="container">
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 600, marginBottom: "2rem" }}>Checkout</h1>

        {/* Step Progress */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "2.5rem" }}>
          {steps.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : 0 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: i <= step ? "var(--primary)" : "var(--border)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Jost',sans-serif", fontSize: "0.8rem", fontWeight: 700, transition: "background 0.3s" }}>
                  {i < step ? <CheckCircle size={18} /> : i + 1}
                </div>
                <span style={{ fontSize: "0.7rem", fontWeight: 500, color: i <= step ? "var(--primary)" : "var(--text-muted)", letterSpacing: "0.06em" }}>{s}</span>
              </div>
              {i < steps.length - 1 && <div style={{ flex: 1, height: 2, background: i < step ? "var(--primary)" : "var(--border)", margin: "0 0.5rem 1.2rem", transition: "background 0.3s" }} />}
            </div>
          ))}
        </div>

        <div className="sidebar-layout-lg">
          {/* Step Content */}
          <div className="card" style={{ padding: "2rem" }}>
            {step === 0 && (
              <div>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 600, marginBottom: "1.5rem" }}>Delivery Address</h2>
                <div className="two-col-sm">
                  {[
                    { key: "name", label: "Full Name", placeholder: "Your full name" },
                    { key: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX" },
                    { key: "email", label: "Email Address", placeholder: "you@example.com", full: true },
                    { key: "line1", label: "Address Line 1", placeholder: "House no, Street", full: true },
                    { key: "line2", label: "Address Line 2 (Optional)", placeholder: "Landmark, Area", full: true },
                    { key: "city", label: "City", placeholder: "Your city" },
                    { key: "pincode", label: "PIN Code", placeholder: "6-digit PIN" },
                  ].map((f) => (
                    <div key={f.key} style={{ gridColumn: f.full ? "1/-1" : undefined }}>
                      <label style={{ display: "block", fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem", letterSpacing: "0.05em" }}>{f.label}</label>
                      <input className="input" placeholder={f.placeholder} value={(address as any)[f.key]} onChange={(e) => setAddress({ ...address, [f.key]: e.target.value })} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem", letterSpacing: "0.05em" }}>State</label>
                    <select className="input" value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })}>
                      <option value="">Select State</option>
                      {indianStates.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <button onClick={() => setStep(1)} className="btn btn-primary" style={{ marginTop: "1.75rem" }}>Continue to Payment <ChevronRight size={16} /></button>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 600, marginBottom: "1.5rem" }}>Payment Method</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                  {[
                    { id: "cod", label: "Cash on Delivery", desc: "Pay when your order arrives", icon: "💵" },
                    { id: "upi", label: "UPI Payment", desc: "GPay, PhonePe, Paytm, BHIM", icon: "📱" },
                    { id: "card", label: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay", icon: "💳" },
                    { id: "netbanking", label: "Net Banking", desc: "All major Indian banks", icon: "🏦" },
                  ].map((opt) => (
                    <label key={opt.id} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", border: `2px solid ${payment === opt.id ? "var(--primary)" : "var(--border)"}`, borderRadius: 4, cursor: "pointer", background: payment === opt.id ? "rgba(155,92,97,0.04)" : "white", transition: "border 0.2s" }}>
                      <input type="radio" name="payment" value={opt.id} checked={payment === opt.id} onChange={() => setPayment(opt.id)} style={{ accentColor: "var(--primary)" }} />
                      <span style={{ fontSize: "1.3rem" }}>{opt.icon}</span>
                      <div>
                        <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "var(--text)" }}>{opt.label}</div>
                        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{opt.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <button onClick={() => setStep(0)} className="btn btn-outline">Back</button>
                  <button onClick={() => setStep(2)} className="btn btn-primary">Review Order <ChevronRight size={16} /></button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 600, marginBottom: "1.5rem" }}>Confirm Your Order</h2>
                <div style={{ padding: "1rem", background: "var(--cream)", borderRadius: 4, marginBottom: "1.5rem" }}>
                  <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>DELIVERY ADDRESS</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text)" }}>{address.name || "—"}, {address.phone}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{address.line1}, {address.city}, {address.state} — {address.pincode}</p>
                </div>
                <div style={{ padding: "1rem", background: "var(--cream)", borderRadius: 4, marginBottom: "2rem" }}>
                  <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>PAYMENT</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text)", textTransform: "capitalize" }}>{payment === "cod" ? "Cash on Delivery" : payment.toUpperCase()}</p>
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <button onClick={() => setStep(1)} className="btn btn-outline">Back</button>
                  <button onClick={handleOrder} className="btn btn-primary" style={{ gap: "0.5rem" }}><Lock size={14} /> Place Order — ₹{total.toLocaleString("en-IN")}</button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="card" style={{ padding: "1.5rem", position: "sticky", top: "5rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>Order Summary</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
              {items.map(({ product, quantity }) => (
                <div key={product.id} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <div style={{ position: "relative", width: 50, height: 60, borderRadius: 2, overflow: "hidden", flexShrink: 0, background: "var(--cream)" }}>
                    <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} sizes="50px" />
                    <div style={{ position: "absolute", top: -4, right: -4, width: 18, height: 18, borderRadius: "50%", background: "var(--primary)", color: "white", fontSize: "0.6rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{quantity}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.8rem", fontWeight: 500, color: "var(--text)" }}>{product.name}</p>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>₹{(product.price * quantity).toLocaleString("en-IN")}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Subtotal</span><span>₹{sub.toLocaleString("en-IN")}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Shipping</span><span style={{ color: shipping === 0 ? "#2C6E49" : "inherit" }}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 700, marginTop: "0.5rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
                <span>Total</span><span>₹{total.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
