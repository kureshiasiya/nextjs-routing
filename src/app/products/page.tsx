"use client"; // Ensure this is a client-side component

import Link from "next/link";
import { useState } from "react";

const ProductPage = () => {
  // Simulate fetching products data
  const [products] = useState([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Link href="/products/add">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Product
        </button>
      </Link>
      <ul className="mt-4 space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>{product.name}</span>
            <Link href={`/products/edit/${product.id}`}>
              <button className="text-blue-500 hover:underline">Edit</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
