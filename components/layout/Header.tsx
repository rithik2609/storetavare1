"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Heart, Search, Menu, X, User, ChevronDown } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Collections", href: "/collections",
    children: [
      { label: "Silk Sarees", href: "/collections/silk-sarees" },
      { label: "Cotton Sarees", href: "/collections/cotton-sarees" },
      { label: "Georgette Sarees", href: "/collections/georgette-sarees" },
      { label: "Banarasi Sarees", href: "/collections/banarasi-sarees" },
      { label: "Kanjivaram Sarees", href: "/collections/kanjivaram-sarees" },
    ],
  },
  { label: "New Arrivals", href: "/collections/new-arrivals" },
  { label: "Best Sellers", href: "/collections/best-sellers" },
  { label: "Wedding", href: "/collections/wedding" },
  { label: "Sale", href: "/collections/sale" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cartCount = useCartStore((s) => s.totalItems());
  const wishlistCount = useWishlistStore((s) => s.items.length);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mobile breakpoint via JS — no CSS class conflicts
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close drawer on desktop resize
  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  return (
    <>
      {/* Announcement Bar */}
      <div style={{
        background: "var(--primary)", color: "white", textAlign: "center",
        padding: "6px 1rem", fontSize: "0.7rem", letterSpacing: "0.07em",
        whiteSpace: isMobile ? "normal" : "nowrap",
        lineHeight: 1.5,
      }}>
        Free Shipping on orders above ₹1499 &nbsp;|&nbsp; Follow Us on Instagram &nbsp;·&nbsp; Facebook &nbsp;·&nbsp; Pinterest &nbsp;·&nbsp; WhatsApp
      </div>

      <header style={{
        background: "white",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: scrolled ? "0 2px 20px rgba(44,24,16,0.08)" : "none",
        transition: "box-shadow 0.3s",
      }}>
        <div className="container">
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: isMobile ? "60px" : "72px",
          }}>

            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
              <Image
                src="/logo.png"
                alt="Tavare — Happiness Through Thread"
                width={isMobile ? 140 : 200}
                height={isMobile ? 44 : 58}
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>

            {/* Desktop Nav — only shown on desktop */}
            {!isMobile && (
              <nav style={{ display: "flex", alignItems: "center", flex: 1, justifyContent: "center", flexWrap: "nowrap", overflow: "hidden" }}>
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label} style={{ position: "relative" }}
                      onMouseEnter={() => setDropOpen(true)}
                      onMouseLeave={() => setDropOpen(false)}
                    >
                      <button style={{
                        display: "flex", alignItems: "center", gap: 3,
                        padding: "0.5rem 0.55rem",
                        fontFamily: "'Jost',sans-serif", fontSize: "0.72rem",
                        fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase",
                        color: "var(--text)", background: "none", border: "none", cursor: "pointer",
                      }}>
                        {link.label} <ChevronDown size={11} />
                      </button>
                      {dropOpen && (
                        <div style={{
                          position: "absolute", top: "100%", left: 0,
                          background: "white", border: "1px solid var(--border)",
                          borderRadius: 4, padding: "0.4rem 0", minWidth: 175,
                          boxShadow: "0 8px 32px rgba(44,24,16,0.12)", zIndex: 200,
                        }}>
                          {link.children.map((c) => (
                            <Link key={c.href} href={c.href} style={{
                              display: "block", padding: "0.55rem 1.1rem",
                              fontFamily: "'Jost',sans-serif", fontSize: "0.8rem",
                              color: "var(--text)", textDecoration: "none",
                            }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--primary)"; (e.currentTarget as HTMLElement).style.background = "var(--cream)"; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; (e.currentTarget as HTMLElement).style.background = "white"; }}
                            >{c.label}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link key={link.href} href={link.href} style={{
                      padding: "0.5rem 0.55rem",
                      fontFamily: "'Jost',sans-serif", fontSize: "0.72rem",
                      fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase",
                      color: "var(--text)", textDecoration: "none", whiteSpace: "nowrap",
                    }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--primary)"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text)"}
                    >{link.label}</Link>
                  )
                )}
              </nav>
            )}

            {/* Icon Row (always visible) */}
            <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 4 : 2, flexShrink: 0 }}>
              {/* Search */}
              <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Search"
                style={{ padding: "0.45rem", background: "none", border: "none", cursor: "pointer", color: "var(--text)", display: "flex", borderRadius: "50%" }}>
                <Search size={isMobile ? 20 : 19} />
              </button>

              {/* Wishlist */}
              <Link href="/wishlist" aria-label="Wishlist" style={{ position: "relative", padding: "0.45rem", color: "var(--text)", display: "flex" }}>
                <Heart size={isMobile ? 20 : 19} />
                {wishlistCount > 0 && (
                  <span style={{ position: "absolute", top: 1, right: 1, background: "var(--primary)", color: "white", fontSize: "0.55rem", fontWeight: 700, width: 15, height: 15, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Account */}
              <Link href="/account" aria-label="Account" style={{ padding: "0.45rem", color: "var(--text)", display: "flex" }}>
                <User size={isMobile ? 20 : 19} />
              </Link>

              {/* Cart */}
              <Link href="/cart" aria-label="Cart" style={{ position: "relative", padding: "0.45rem", color: "var(--text)", display: "flex" }}>
                <ShoppingBag size={isMobile ? 20 : 19} />
                {cartCount > 0 && (
                  <span style={{ position: "absolute", top: 1, right: 1, background: "var(--primary)", color: "white", fontSize: "0.55rem", fontWeight: 700, width: 15, height: 15, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile hamburger — only on mobile */}
              {isMobile && (
                <button onClick={() => setMobileOpen(true)} aria-label="Open menu"
                  style={{ padding: "0.45rem", background: "none", border: "none", cursor: "pointer", color: "var(--text)", display: "flex", marginLeft: 2 }}>
                  <Menu size={22} />
                </button>
              )}
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div style={{ padding: "0.75rem 0", borderTop: "1px solid var(--border)" }}>
              <form action="/search" style={{ display: "flex", gap: "0.5rem" }}>
                <input name="q" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sarees, fabrics, colours..." className="input" autoFocus />
                <button type="submit" className="btn btn-primary btn-sm">Search</button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 500 }}>
          {/* Backdrop */}
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(44,24,16,0.5)" }}
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer Panel */}
          <div style={{
            position: "absolute", top: 0, left: 0, bottom: 0, width: 300,
            background: "white", overflowY: "auto", display: "flex", flexDirection: "column",
            boxShadow: "4px 0 24px rgba(44,24,16,0.15)",
          }}>
            {/* Drawer Header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)",
            }}>
              <Image src="/logo.png" alt="Tavare" width={140} height={46} style={{ objectFit: "contain" }} />
              <button onClick={() => setMobileOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", display: "flex", padding: "0.25rem" }}>
                <X size={22} />
              </button>
            </div>

            {/* Nav Links */}
            <nav style={{ flex: 1 }}>
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)} style={{
                    display: "block", padding: "0.9rem 1.25rem",
                    fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 500,
                    color: "var(--text)", textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    letterSpacing: "0.04em",
                  }}>
                    {link.label}
                  </Link>
                  {link.children?.map((c) => (
                    <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)} style={{
                      display: "block", padding: "0.65rem 2.25rem",
                      fontFamily: "'Jost',sans-serif", fontSize: "0.8rem",
                      color: "var(--text-muted)", textDecoration: "none",
                      borderBottom: "1px solid var(--border)", background: "var(--cream)",
                    }}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>

            {/* Drawer Footer */}
            <div style={{ padding: "1.25rem", borderTop: "1px solid var(--border)", textAlign: "center" }}>
              <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
                Happiness Through Thread
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
