export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  originalPrice?: number;
  badge?: "New Deal" | "Expiring Soon" | "Best Seller";
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AdminProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  createdAt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  title: string;
  content: string;
}

export interface ToastType {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}