"use client";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCartStore();
  const sub = subtotal();
  const shipping = sub >= 1499 ? 0 : 99;
  const total = sub + shipping;

  if (!items.length) return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", padding: "5rem 0" }}>
        <ShoppingBag size={56} color="var(--primary-light)" style={{ margin: "0 auto 1.25rem" }} />
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", marginBottom: "0.75rem" }}>Your Cart is Empty</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Add some beautiful sarees to get started.</p>
        <Link href="/collections" className="btn btn-primary">Shop Now</Link>
      </div>
    </section>
  );

  return (
    <section className="section">
      <div className="container">
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.2rem", fontWeight: 600, marginBottom: "0.25rem" }}>Shopping Cart</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "2.5rem" }}>{items.length} item{items.length > 1 ? "s" : ""} in your cart</p>

        <div className="sidebar-layout">
          {/* Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="card" style={{ display: "flex", gap: "1.25rem", padding: "1.25rem" }}>
                <Link href={`/products/${product.slug}`} style={{ flexShrink: 0, position: "relative", width: 90, height: 110, borderRadius: 3, overflow: "hidden", background: "var(--cream)" }}>
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} sizes="90px" />
                </Link>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>{product.fabric}</p>
                  <Link href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>{product.name}</h3>
                  </Link>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Color: {product.color}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", border: "1.5px solid var(--border)", borderRadius: 2 }}>
                      <button onClick={() => updateQuantity(product.id, quantity - 1)} style={{ width: 32, height: 36, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Minus size={12} /></button>
                      <span style={{ width: 36, textAlign: "center", fontSize: "0.9rem", fontWeight: 500 }}>{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, quantity + 1)} style={{ width: 32, height: 36, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Plus size={12} /></button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", fontWeight: 600 }}>₹{(product.price * quantity).toLocaleString("en-IN")}</span>
                      <button onClick={() => removeItem(product.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", display: "flex" }} aria-label="Remove"><Trash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="card" style={{ padding: "1.75rem", position: "sticky", top: "5rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 600, marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "1px solid var(--border)" }}>Order Summary</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Subtotal</span>
                <span>₹{sub.toLocaleString("en-IN")}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Shipping</span>
                <span style={{ color: shipping === 0 ? "#2C6E49" : "inherit" }}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
              {shipping > 0 && <p style={{ fontSize: "0.75rem", color: "var(--primary)", background: "var(--cream)", padding: "0.5rem 0.75rem", borderRadius: 3 }}>Add ₹{(1499 - sub).toLocaleString("en-IN")} more for free shipping!</p>}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 700, padding: "1rem 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: "1.25rem" }}>
              <span>Total</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <input className="input" placeholder="Enter coupon code" />
              <button className="btn btn-outline btn-sm">Apply Coupon</button>
            </div>
            <Link href="/checkout" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Proceed to Checkout</Link>
            <Link href="/collections" style={{ display: "block", textAlign: "center", marginTop: "1rem", fontFamily: "'Jost',sans-serif", fontSize: "0.8rem", color: "var(--primary)", textDecoration: "none" }}>← Continue Shopping</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
