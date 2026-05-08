import { AdminProduct } from "@/types";

// In-memory store for admin products
let adminProducts: AdminProduct[] = [];

export function getAdminProducts(): AdminProduct[] {
  return adminProducts;
}

export function addAdminProduct(
  product: Omit<AdminProduct, "id" | "createdAt">
): AdminProduct {
  const newProduct: AdminProduct = {
    ...product,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  adminProducts = [newProduct, ...adminProducts];
  return newProduct;
}