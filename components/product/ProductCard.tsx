"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Product } from "@/types";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const { toggleItem, isInWishlist } = useWishlistStore();
  const { addItem } = useCartStore();
  const inWishlist = isInWishlist(product.id);
  const discountPct = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div
      className="card card-hover"
      style={{ cursor: "pointer", position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badges */}
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2, display: "flex", flexDirection: "column", gap: 4 }}>
        {product.isNew && <span className="badge badge-new">New</span>}
        {product.isBestSeller && <span className="badge badge-best">Best Seller</span>}
        {discountPct > 0 && <span className="badge badge-sale">{discountPct}% Off</span>}
      </div>

      {/* Wishlist */}
      <button
        onClick={(e) => { e.preventDefault(); toggleItem(product); toast(inWishlist ? "Removed from wishlist" : "Added to wishlist ♥"); }}
        style={{
          position: "absolute", top: 10, right: 10, zIndex: 2,
          width: 34, height: 34, borderRadius: "50%",
          background: "white", border: "1px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", transition: "all 0.2s",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
        aria-label="Toggle wishlist"
      >
        <Heart size={15} fill={inWishlist ? "var(--primary)" : "none"} color={inWishlist ? "var(--primary)" : "var(--text-muted)"} />
      </button>

      {/* Image */}
      <Link href={`/products/${product.slug}`} style={{ display: "block", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "relative", width: "100%", paddingBottom: "130%", overflow: "hidden", background: "var(--cream)" }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            style={{ objectFit: "cover", transition: "transform 0.5s ease", transform: hovered ? "scale(1.06)" : "scale(1)" }}
          />
        </div>

        {/* Add to Cart Overlay */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "var(--primary)", color: "white",
          padding: "0.6rem", textAlign: "center",
          fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
          transform: hovered ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s ease",
        }}
          onClick={(e) => { e.preventDefault(); addItem(product); toast.success(`${product.name} added to cart`); }}
        >
          Add to Cart
        </div>
      </Link>

      {/* Info */}
      <div style={{ padding: "0.85rem 0.9rem 1rem" }}>
        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {product.fabric}
        </p>
        <Link href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontWeight: 600, color: "var(--text)", lineHeight: 1.3, marginBottom: "0.4rem" }}>
            {product.name}
          </h3>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
          <span className="stars" style={{ fontSize: "0.7rem" }}>{"★".repeat(Math.floor(product.rating))}</span>
          <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>({product.reviews})</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "1rem", fontWeight: 600, color: "var(--text)" }}>₹{product.price.toLocaleString("en-IN")}</span>
          {product.mrp > product.price && (
            <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.8rem", color: "var(--text-light)", textDecoration: "line-through" }}>₹{product.mrp.toLocaleString("en-IN")}</span>
          )}
        </div>
      </div>
    </div>
  );
}
