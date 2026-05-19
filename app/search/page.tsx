import { Metadata } from "next";
import { products } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";
import Link from "next/link";

interface Props { searchParams: Promise<{ q?: string }> }

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  return { title: q ? `Search: "${q}"` : "Search" };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.toLowerCase().trim() ?? "";

  const results = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.fabric.toLowerCase().includes(query) ||
          p.color.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.occasion.some((o) => o.toLowerCase().includes(query))
      )
    : [];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1 className="section-heading">{query ? `Results for "${q}"` : "Search Sarees"}</h1>
          <div className="divider" />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <form action="/search" style={{ maxWidth: 560, margin: "0 auto 3rem", display: "flex", gap: "0.75rem" }}>
            <input name="q" defaultValue={q} className="input" placeholder="Search by name, fabric, colour, occasion..." autoFocus />
            <button type="submit" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>Search</button>
          </form>

          {!query && (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>Try: Silk, Banarasi, Wedding, Rose Gold, Cotton…</p>
              <Link href="/collections" className="btn btn-outline">Browse All Collections</Link>
            </div>
          )}

          {query && results.length === 0 && (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", marginBottom: "0.75rem" }}>No results found</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>We couldn&apos;t find any sarees matching &ldquo;{q}&rdquo;.</p>
              <Link href="/collections" className="btn btn-primary">View All Sarees</Link>
            </div>
          )}

          {results.length > 0 && (
            <>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>{results.length} result{results.length !== 1 ? "s" : ""} found</p>
              <ProductGrid products={results} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
