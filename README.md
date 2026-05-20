# Tavare — Happiness Through Thread

A high-end, mobile-first e-commerce storefront for **Tavare**, an online saree store. Built with Next.js 16, TailwindCSS v4, TypeScript, and Zustand.

---

## ✨ Features

- 🛍 **Full Shopping Flow** — Browse → Product Detail → Cart → Checkout → Order Success
- 💖 **Wishlist** — Add/remove products, persisted via localStorage
- 🔍 **Search** — Site-wide product search
- 📦 **Order Tracking** — Track order status page
- 👤 **Account Management** — Profile, Addresses, Order History
- 📱 **Mobile Responsive** — Fully responsive on all screen sizes with a working hamburger drawer menu
- 🎨 **Luxury UI** — Cormorant Garamond + Jost typography, custom brand tokens, glassmorphism effects
- 🧩 **Mega Menu** — Collections dropdown with sub-categories
- 🏷️ **Product Filtering & Sorting** — By category, price, fabric, occasion
- 📜 **Policy Pages** — Privacy, Shipping, Returns, Cancellation, T&Cs, FAQ

---

## 🗂️ Project Structure

```
storetavare1/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Home page
│   ├── layout.tsx              # Root layout (fonts, header, footer, toasts)
│   ├── globals.css             # Design tokens, utilities, responsive classes
│   ├── about/                  # About Us
│   ├── cart/                   # Shopping cart
│   ├── checkout/               # Multi-step checkout (Address → Payment → Confirm)
│   ├── checkout/success/       # Order success page
│   ├── collections/            # All collections + [slug] filtered pages
│   ├── contact/                # Contact form
│   ├── faq/                    # FAQ accordion
│   ├── login/                  # Login & Register
│   ├── products/[slug]/        # Product detail page
│   ├── search/                 # Search results
│   ├── wishlist/               # Wishlist page
│   ├── track-order/            # Order tracking
│   ├── account/                # Account dashboard
│   │   ├── orders/             # Order list + [id] detail
│   │   ├── profile/            # Edit profile
│   │   └── addresses/          # Manage addresses
│   ├── privacy-policy/
│   ├── shipping-policy/
│   ├── return-refund-policy/
│   ├── cancellation-policy/
│   └── terms-and-conditions/
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky header with mobile drawer
│   │   └── Footer.tsx          # 5-column footer
│   └── product/
│       ├── ProductCard.tsx     # Product grid card with hover effects
│       ├── ProductGallery.tsx  # Image carousel with thumbnails
│       ├── ProductInfo.tsx     # Add to cart, wishlist, attributes
│       └── ProductGrid.tsx     # Responsive product grid
│
├── data/
│   ├── products.ts             # Static product data
│   ├── categories.ts           # Collection categories
│   └── reviews.ts              # Customer reviews
│
├── store/
│   ├── cartStore.ts            # Zustand cart state (localStorage persisted)
│   └── wishlistStore.ts        # Zustand wishlist state (localStorage persisted)
│
├── types/
│   └── index.ts                # TypeScript interfaces (Product, Category, Review)
│
└── public/
    └── logo.png                # Transparent brand logo
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16.2](https://nextjs.org/) (App Router) |
| Language | TypeScript 5 |
| Styling | TailwindCSS v4 + Vanilla CSS custom utilities |
| State Management | [Zustand 5](https://zustand-demo.pmnd.rs/) with localStorage persistence |
| Icons | [Lucide React](https://lucide.dev/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Notifications | [React Hot Toast](https://react-hot-toast.com/) |
| Fonts | Cormorant Garamond (serif) + Jost (sans-serif) via Google Fonts |
| Images | Next.js `<Image>` with Unsplash remote patterns |

---

## 🎨 Design System

Brand tokens defined in `app/globals.css`:

```css
--cream:        #F7F4EA   /* Page background */
--primary:      #9B5C61   /* Brand rose */
--primary-dark: #7A4349
--accent:       #C8956C   /* Gold accent */
--text:         #2C1810   /* Deep brown */
--text-muted:   #6B5B52
--gold:         #B8962E
```

### Responsive Utilities

| Class | Behaviour |
|---|---|
| `.hero-grid` | 1 col → 2 col at 768px |
| `.two-col` | 1 col → 2 col at 768px |
| `.two-col-sm` | 1 col → 2 col at 560px |
| `.sidebar-layout` | Full width → sidebar at 900px |
| `.sidebar-layout-lg` | Full width → sidebar at 960px |
| `.contact-grid` | Full width → 2 col at 860px |

---

## 📱 Mobile Responsiveness

- Header collapses to logo + icons + hamburger menu below **1024px**
- Slide-in drawer with full nav tree (including sub-categories)
- All page grids stack to single column on mobile
- Product gallery, cart, checkout, contact, and about pages fully responsive

---

## 📄 Pages Overview

| Route | Page |
|---|---|
| `/` | Home — Hero, Collections, New Arrivals, Brand Story, Best Sellers, Testimonials |
| `/collections` | All products with filter + sort |
| `/collections/[slug]` | Category-filtered products |
| `/products/[slug]` | Product detail — gallery, info, description, related |
| `/cart` | Shopping cart with order summary |
| `/checkout` | 3-step checkout (Address → Payment → Confirm) |
| `/checkout/success` | Order placed confirmation |
| `/wishlist` | Saved products |
| `/login` | Login / Register tabs |
| `/account` | Dashboard |
| `/account/orders` | Order history |
| `/account/orders/[id]` | Order detail |
| `/account/profile` | Edit profile |
| `/account/addresses` | Manage addresses |
| `/track-order` | Order tracking |
| `/search` | Search results |
| `/about` | Brand story |
| `/contact` | Contact form + info |
| `/faq` | FAQ accordion |

---

## 🔧 Configuration

### Image Domains (`next.config.ts`)

Remote images from Unsplash are whitelisted:

```ts
images: {
  remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }]
}
```

### Logo

The brand logo is stored at `public/logo.png` (transparent background PNG, converted from the original JPEG using PowerShell `System.Drawing`).

---

## 📝 Notes

- All product data is static (from `data/products.ts`). Replace with a CMS (Sanity) or eCommerce API (Shopify/Stripe) for production.
- Form submissions are mocked — wire up to a backend/serverless function for real use.
- Authentication is UI-only — integrate NextAuth.js or a custom JWT solution for production.

---

## 📦 License

Private — Tavare © 2024. All rights reserved.