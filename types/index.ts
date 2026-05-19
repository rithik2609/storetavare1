export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  mrp: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  fabric: string;
  color: string;
  colorHex: string;
  occasion: string[];
  category: string;
  categorySlug: string;
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  sareeLength: string;
  blousePiece: string;
  work: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  count: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  items: CartItem[];
  total: number;
  address: Address;
  paymentMethod: string;
  trackingId?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  productName?: string;
}
