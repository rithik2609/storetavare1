"use client";
import { useState } from "react";
import Link from "next/link";
import { Heart, Minus, Plus, Share2, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import toast from "react-hot-toast";
import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

const attributes = [
  { icon: "🧵", label: "Fabric" },
  { icon: "🎨", label: "Color" },
  { icon: "📏", label: "Saree Length" },
  { icon: "👗", label: "Blouse Piece" },
  { icon: "🪡", label: "Work" },
  { icon: "✨", label: "Occasion" },
];

export default function ProductInfo({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);
  const discountPct = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const attrValues: Record<string, string> = {
    Fabric: product.fabric,
    Color: product.color,
    "Saree Length": product.sareeLength,
    "Blouse Piece": product.blousePiece,
    Work: product.work,
    Occasion: product.occasion.join(", "),
  };

  return (
    <div>
      <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>{product.category}</p>
      <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 600, lineHeight: 1.2, marginBottom: "0.75rem" }}>
        {product.name}
      </h1>

      {/* Rating */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
        <span className="stars">{Array(product.rating).fill("★").join("")}</span>
        <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>({product.reviews} Reviews)</span>
      </div>

      {/* Price */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 600, color: "var(--text)" }}>₹{product.price.toLocaleString("en-IN")}</span>
        <span style={{ fontSize: "1rem", color: "var(--text-light)", textDecoration: "line-through" }}>₹{product.mrp.toLocaleString("en-IN")}</span>
        {discountPct > 0 && <span className="badge badge-sale">{discountPct}% OFF</span>}
      </div>
      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>Inclusive of all taxes</p>

      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{product.description}</p>

      {/* Attributes Grid */}
      <div className="two-col-sm" style={{ marginBottom: "1.75rem", padding: "1rem", background: "var(--cream)", borderRadius: 4 }}>
        {attributes.map((attr) => (
          <div key={attr.label} style={{ display: "flex", gap: "0.5rem", fontSize: "0.82rem" }}>
            <span>{attr.icon}</span>
            <div>
              <span style={{ color: "var(--text-muted)" }}>{attr.label}: </span>
              <span style={{ fontWeight: 500, color: "var(--text)" }}>{attrValues[attr.label]}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Qty + Stock */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", border: "1.5px solid var(--border)", borderRadius: 2 }}>
          <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 38, height: 42, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Minus size={14} /></button>
          <span style={{ width: 40, textAlign: "center", fontFamily: "'Jost',sans-serif", fontWeight: 500 }}>{qty}</span>
          <button onClick={() => setQty(qty + 1)} style={{ width: 38, height: 42, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Plus size={14} /></button>
        </div>
        <span style={{ fontSize: "0.82rem", color: "#2C6E49", fontWeight: 500 }}>✓ In Stock</span>
      </div>

      {/* CTA */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        <button onClick={() => { addItem(product, qty); toast.success("Added to cart!"); }}
          className="btn btn-primary" style={{ flex: 1, minWidth: 140 }}>
          🛍 Add to Cart
        </button>
        <Link href="/checkout" onClick={() => addItem(product, qty)} className="btn btn-outline" style={{ flex: 1, minWidth: 140, textAlign: "center" }}>Buy Now</Link>
      </div>
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem" }}>
        <button onClick={() => { toggleItem(product); toast(inWishlist ? "Removed from wishlist" : "Added to wishlist ♥"); }}
          className="btn btn-outline btn-sm" style={{ flex: 1 }}>
          <Heart size={14} fill={inWishlist ? "var(--primary)" : "none"} /> {inWishlist ? "Wishlisted" : "Add to Wishlist"}
        </button>
        <button onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success("Link copied!"); }}
          className="btn btn-outline btn-sm" style={{ flex: 1 }}>
          <Share2 size={14} /> Share
        </button>
      </div>

      {/* Trust Badges */}
      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", border: "1px solid var(--border)", borderRadius: 4, justifyContent: "space-around" }}>
        {[
          { icon: <Truck size={16} />, label: "Free Shipping", sub: "Above ₹1499" },
          { icon: <ShieldCheck size={16} />, label: "Secure Payment", sub: "100% Safe" },
          { icon: <RotateCcw size={16} />, label: "Easy Returns", sub: "Within 7 days" },
        ].map((b) => (
          <div key={b.label} style={{ textAlign: "center", flex: 1 }}>
            <div style={{ color: "var(--primary)", display: "flex", justifyContent: "center", marginBottom: 4 }}>{b.icon}</div>
            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.68rem", fontWeight: 600, lineHeight: 1.3 }}>{b.label}</div>
            <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>{b.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
