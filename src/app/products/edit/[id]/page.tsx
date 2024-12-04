"use client"; // Ensure this is a client-side component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EditProduct = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // Simulate fetching the product data based on the product id
  useEffect(() => {
    // Mock fetching product data, replace with your API call
    setName(`Product ${id}`);
    setPrice("100"); // mock price
    setDescription("This is a description for product " + id);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && price && description) {
      console.log(`Updated Product ${id}:`, { name, price, description });
      // You should call an API to update the product here
      router.push("/product"); // Redirect to products page after editing
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Product {id}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
