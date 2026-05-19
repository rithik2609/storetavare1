"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + images.length) % images.length);
  const next = () => setActive((a) => (a + 1) % images.length);

  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      {/* Main image */}
      <div style={{ position: "relative", width: "100%", paddingBottom: "110%", borderRadius: 4, overflow: "hidden", background: "var(--cream)", border: "1px solid var(--border)" }}>
        <Image src={images[active]} alt={name} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" priority />

        {/* Discount Badge */}
        <button onClick={prev} aria-label="Previous"
          style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", background: "white", border: "1px solid var(--border)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <ChevronLeft size={18} />
        </button>
        <button onClick={next} aria-label="Next"
          style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "white", border: "1px solid var(--border)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <ChevronRight size={18} />
        </button>
        <div style={{ position: "absolute", bottom: 10, right: 10, background: "white", border: "1px solid var(--border)", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ZoomIn size={15} />
        </div>
      </div>

      {/* Thumbnails */}
      <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto" }}>
        {images.map((img, i) => (
          <button key={i} onClick={() => setActive(i)}
            style={{ flexShrink: 0, width: 70, height: 80, borderRadius: 2, overflow: "hidden", border: `2px solid ${i === active ? "var(--primary)" : "var(--border)"}`, background: "var(--cream)", cursor: "pointer", position: "relative" }}>
            <Image src={img} alt={`${name} ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="70px" />
          </button>
        ))}
      </div>
    </div>
  );
}
