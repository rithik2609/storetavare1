"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore();
  const { addItem } = useCartStore();

  if (!items.length) return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", padding: "5rem 0" }}>
        <Heart size={56} color="var(--primary-light)" style={{ margin: "0 auto 1.25rem" }} />
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", marginBottom: "0.75rem" }}>Your Wishlist is Empty</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Save your favourite sarees here to buy them later.</p>
        <Link href="/collections" className="btn btn-primary">Explore Sarees</Link>
      </div>
    </section>
  );

  return (
    <section className="section">
      <div className="container">
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.2rem", fontWeight: 600, marginBottom: "0.25rem" }}>My Wishlist</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "2.5rem" }}>{items.length} saved item{items.length !== 1 ? "s" : ""}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1.5rem" }}>
          {items.map((product) => (
            <div key={product.id} className="card card-hover" style={{ position: "relative" }}>
              <button onClick={() => { removeItem(product.id); toast("Removed from wishlist"); }}
                style={{ position: "absolute", top: 10, right: 10, zIndex: 2, width: 32, height: 32, borderRadius: "50%", background: "white", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <Trash2 size={13} color="var(--text-muted)" />
              </button>
              <Link href={`/products/${product.slug}`} style={{ display: "block", overflow: "hidden" }}>
                <div style={{ position: "relative", paddingBottom: "130%", background: "var(--cream)" }}>
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} sizes="250px" />
                </div>
              </Link>
              <div style={{ padding: "0.9rem" }}>
                <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>{product.fabric}</p>
                <Link href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>{product.name}</h3>
                </Link>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.95rem", fontWeight: 600 }}>₹{product.price.toLocaleString("en-IN")}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-light)", textDecoration: "line-through" }}>₹{product.mrp.toLocaleString("en-IN")}</span>
                </div>
                <button onClick={() => { addItem(product); toast.success("Added to cart!"); }}
                  className="btn btn-primary btn-sm" style={{ width: "100%", justifyContent: "center" }}>
                  <ShoppingBag size={13} /> Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
