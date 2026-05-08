import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "products.json");

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export function getAdminProducts(): Product[] {
  try {
    const fileData = fs.readFileSync(filePath, "utf-8");

    if (!fileData) return [];

    return JSON.parse(fileData);
  } catch {
    return [];
  }
}

export function addAdminProduct(
  product: Omit<Product, "id">
): Product {
  const products = getAdminProducts();

  const newProduct: Product = {
    id: Date.now(),
    ...product,
  };

  products.push(newProduct);

  fs.writeFileSync(
    filePath,
    JSON.stringify(products, null, 2),
    "utf-8"
  );

  return newProduct;
}