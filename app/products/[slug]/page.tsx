import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductGrid from "@/components/product/ProductGrid";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Not Found" };
  return { title: product.name, description: product.description.slice(0, 160) };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);

  return (
    <>
      <div className="container" style={{ padding: "1.5rem 1.25rem 0" }}>
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/collections">Collections</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href={`/collections/${product.categorySlug}`}>{product.category}</Link>
          <span className="breadcrumb-sep">/</span>
          <span style={{ color: "var(--text)" }}>{product.name}</span>
        </div>
      </div>

      <section className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}>
            <ProductGallery images={product.images} name={product.name} />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      {/* Description Tabs */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "2.5rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 0, borderBottom: "2px solid var(--border)", marginBottom: "1.75rem" }}>
            {["Description","Details","Wash Care","Shipping & Returns"].map((tab, i) => (
              <button key={tab} style={{ padding: "0.75rem 1.25rem", fontFamily: "'Jost',sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", color: i === 0 ? "var(--primary)" : "var(--text-muted)", borderBottom: i === 0 ? "2px solid var(--primary)" : "2px solid transparent", marginBottom: -2 }}>
                {tab}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.9 }}>{product.description}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Premium Quality Silk","Intricate Zari Weaving","Lightweight & Comfortable","Perfect for All Occasions"].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.7rem 1rem", background: "var(--cream)", borderRadius: 4 }}>
                  <span style={{ color: "var(--primary)" }}>✿</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--text)" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section" style={{ background: "var(--cream-dark)", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <p className="eyebrow">You May Also Like</p>
              <h2 className="section-heading">Related Sarees</h2>
              <div className="divider" />
            </div>
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </>
  );
}
