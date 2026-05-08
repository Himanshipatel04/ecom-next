"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import { PlusCircle, Loader2, ImageIcon, CheckCircle2 } from "lucide-react";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
  "software",
  "design resources",
  "seo tools",
  "wordpress themes",
];

interface FormData {
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const emptyForm: FormData = {
  title: "",
  description: "",
  price: "",
  category: "",
  image: "",
};

export default function AddProductPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const errs: Partial<FormData> = {};
    if (!form.title.trim()) errs.title = "Title is required";
    if (!form.description.trim()) errs.description = "Description is required";
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0)
      errs.price = "Enter a valid price";
    if (!form.category) errs.category = "Category is required";
    if (!form.image.trim()) errs.image = "Image URL is required";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      toast.error("Please fix the form errors");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: parseFloat(form.price),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add product");

      toast.success("Product added successfully! 🎉");
      setSuccess(true);
      setForm(emptyForm);
      setTimeout(() => {
        setSuccess(false);
        router.push("/admin/products");
      }, 2000);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-gray-900">
          Add New Product
        </h1>
        <p className="text-gray-500 mt-1">
          Fill in the details below to add a new deal.
        </p>
      </div>

      {success && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6 flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
          <div>
            <p className="font-semibold text-emerald-800">Product added!</p>
            <p className="text-emerald-600 text-sm">
              Redirecting to products list…
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5 shadow-sm">
        {/* Title */}
        <Field label="Product Title" error={errors.title} required>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Awesome SaaS Tool | Lifetime Access"
            className={inputClass(!!errors.title)}
          />
        </Field>

        {/* Description */}
        <Field label="Description" error={errors.description} required>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            placeholder="Describe what this product does and why it's great…"
            className={inputClass(!!errors.description)}
          />
        </Field>

        {/* Price + Category */}
        <div className="grid grid-cols-2 gap-4">
          <Field label="Price (USD)" error={errors.price} required>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                $
              </span>
              <input
                name="price"
                type="number"
                step="0.01"
                min="0"
                value={form.price}
                onChange={handleChange}
                placeholder="29.99"
                className={`${inputClass(!!errors.price)} pl-7`}
              />
            </div>
          </Field>

          <Field label="Category" error={errors.category} required>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputClass(!!errors.category)}
            >
              <option value="">Select category…</option>
              {categories.map((c) => (
                <option key={c} value={c} className="capitalize">
                  {c}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Image URL */}
        <Field label="Image URL" error={errors.image} required>
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/product-image.png"
            className={inputClass(!!errors.image)}
          />
        </Field>

        {/* Preview */}
        {form.image && (
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
              Image Preview
            </p>
            <div className="relative w-32 h-32 bg-white rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={form.image}
                alt="Preview"
                fill
                className="object-contain p-2"
                sizes="128px"
                onError={() => {}}
              />
            </div>
          </div>
        )}

        {/* Submit */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary flex-1 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Adding Product…
              </>
            ) : (
              <>
                <PlusCircle className="w-4 h-4" />
                Add Product
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => { setForm(emptyForm); setErrors({}); }}
            className="px-6 py-2.5 border-2 border-gray-200 rounded-md text-gray-600 hover:border-gray-400 font-semibold text-sm transition-all"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  children,
  error,
  required,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-brand-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors placeholder-gray-400 ${
    hasError
      ? "border-red-300 focus:border-red-500 bg-red-50"
      : "border-gray-200 focus:border-brand-400 bg-white"
  }`;
}