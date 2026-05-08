import { NextRequest, NextResponse } from "next/server";
import { getAdminProducts, addAdminProduct } from "@/lib/store";

export async function GET() {
  const products = getAdminProducts();
  return NextResponse.json({ success: true, data: products });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, price, category, image } = body;

    if (!title || !description || !price || !category || !image) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      return NextResponse.json(
        { success: false, error: "Price must be a positive number" },
        { status: 400 }
      );
    }

    const product = addAdminProduct({
      title: title.trim(),
      description: description.trim(),
      price: parseFloat(parseFloat(price).toFixed(2)),
      category: category.trim(),
      image: image.trim(),
    });

    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}