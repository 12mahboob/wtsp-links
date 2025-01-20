<<<<<<< HEAD
// src/components/Admin/ManageCategories.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
=======
import React, { useState, useEffect } from "react";
import supabase from "../../services/api";
>>>>>>> f4ff1c57 (hi)

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select("*");
      if (!error) setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("categories")
      .insert([{ name: categoryName }]);

    if (!error) {
      setCategories([...categories, ...data]);
      setCategoryName("");
    }
  };

  const handleDelete = async (id) => {
    await supabase.from("categories").delete().eq("id", id);
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Manage Categories</h1>
      <form
        onSubmit={handleAddCategory}
        className="w-full max-w-md bg-white p-6 rounded shadow mb-6"
      >
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-800"
        >
          Add Category
        </button>
      </form>
      <ul className="w-full max-w-2xl bg-white rounded shadow p-6">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex justify-between items-center py-3 border-b"
          >
            <p className="font-bold">{category.name}</p>
            <button
              onClick={() => handleDelete(category.id)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCategories;
