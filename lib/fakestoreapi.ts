// export async function getProducts() {
//   const res = await fetch('https://fakestoreapi.com/products', {
//     cache: 'no-store',
//   })

//   if (!res.ok) {
//     throw new Error('Failed to fetch products')
//   }

//   return res.json()
// }

// export async function getProduct(id: number) {
//     console.log(id)
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch product')
//   }

//   return res.json()
// }


import { Product } from "@/types";

const BASE_URL = "https://fakestoreapi.com";

export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data.map((p: Product, i: number) => ({
      ...p,
      originalPrice:
        i % 3 === 0
          ? parseFloat((p.price * 1.4).toFixed(2))
          : i % 5 === 0
          ? parseFloat((p.price * 2.2).toFixed(2))
          : undefined,

      badge:
        i % 7 === 0
          ? "Expiring Soon"
          : i % 4 === 0
          ? "Best Seller"
          : i < 4
          ? "New Deal"
          : undefined,
    }));
  } catch (error) {
    console.error(error);

    return [];
  }
}
export async function getProductById(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "force-cache",
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products/category/${category}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch category products");
  return res.json();
}

export async function getAllProductIds(): Promise<{ id: string }[]> {
  try {
    const products = await getAllProducts();

    return products.map((p) => ({
      id: p.id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch product IDs:", error);

    return [];
  }
}