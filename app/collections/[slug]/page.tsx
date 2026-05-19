import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductGrid from "@/components/product/ProductGrid";
import { Product } from "@/types";

interface Props { params: Promise<{ slug: string }> }

function filterProducts(slug: string): Product[] {
  switch (slug) {
    case "all": return products;
    case "new-arrivals": return products.filter((p) => p.isNew);
    case "best-sellers": return products.filter((p) => p.isBestSeller);
    case "sale": return products.filter((p) => p.discount > 0);
    case "wedding": return products.filter((p) => p.occasion.includes("Wedding"));
    default: return products.filter((p) => p.categorySlug === slug);
  }
}

function getTitle(slug: string): string {
  const map: Record<string,string> = {
    "all": "All Collections", "new-arrivals": "New Arrivals",
    "best-sellers": "Best Sellers", "sale": "Sale", "wedding": "Wedding Collection",
  };
  if (map[slug]) return map[slug];
  return categories.find((c) => c.slug === slug)?.name ?? "Collection";
}

function getDescription(slug: string): string {
  const cat = categories.find((c) => c.slug === slug);
  if (cat) return cat.description;
  const map: Record<string,string> = {
    "new-arrivals": "Freshly added sarees — be the first to wear them.",
    "best-sellers": "Our most loved sarees, chosen by thousands of happy customers.",
    "sale": "Premium sarees at incredible prices. Don't miss out!",
    "wedding": "Timeless bridal and wedding sarees crafted for your special day.",
    "all": "Our complete collection of handcrafted sarees for every occasion.",
  };
  return map[slug] ?? "";
}

export async function generateStaticParams() {
  const slugs = ["all","new-arrivals","best-sellers","sale","wedding",
    "silk-sarees","cotton-sarees","georgette-sarees","banarasi-sarees","kanjivaram-sarees"];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return { title: getTitle(slug), description: getDescription(slug) };
}

export default async function CollectionSlugPage({ params }: Props) {
  const { slug } = await params;
  const filtered = filterProducts(slug);
  const title = getTitle(slug);
  const desc = getDescription(slug);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/collections">Collections</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: "var(--text)" }}>{title}</span>
          </div>
          <h1 className="section-heading">{title}</h1>
          <div className="divider" />
          {desc && <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginTop: "0.75rem", maxWidth: 520, margin: "0.75rem auto 0" }}>{desc}</p>}
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filter pills */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)" }}>
            <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", display: "flex", alignItems: "center", marginRight: "0.5rem" }}>Browse:</span>
            {categories.map((c) => (
              <Link key={c.slug} href={`/collections/${c.slug}`}
                style={{ padding: "0.35rem 0.9rem", border: "1.5px solid var(--border)", borderRadius: 20, fontFamily: "'Jost',sans-serif", fontSize: "0.75rem", fontWeight: 500, textDecoration: "none", color: c.slug === slug ? "white" : "var(--text)", background: c.slug === slug ? "var(--primary)" : "white", borderColor: c.slug === slug ? "var(--primary)" : "var(--border)" }}>
                {c.name}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.85rem", color: "var(--text-muted)" }}>{filtered.length} sarees found</p>
            <select className="input" style={{ width: "auto", padding: "0.5rem 2rem 0.5rem 0.75rem", fontSize: "0.82rem" }}>
              <option>Sort: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          {filtered.length > 0 ? (
            <ProductGrid products={filtered} />
          ) : (
            <div style={{ textAlign: "center", padding: "5rem 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✿</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", marginBottom: "0.75rem" }}>No sarees found</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>Try exploring our other collections.</p>
              <Link href="/collections" className="btn btn-primary">Browse All</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
