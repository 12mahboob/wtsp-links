// src/components/Admin/ManageCategories.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/api';

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from('categories').select('*');
      if (error) {
        console.error(error);
      } else {
        setCategories(data);
      }
    };

    fetchCategories();
  }, []);

  const deleteCategory = async (id) => {
    const { error } = await supabase.from('categories').delete().eq('id', id);
    if (error) {
      console.error('Error deleting category:', error.message);
    } else {
      setCategories(categories.filter(category => category.id !== id));
    }
  };

  const addCategory = async () => {
    if (!categoryName || !categoryDescription) return;

    const { data, error } = await supabase.from('categories').insert([
      {
        name: categoryName,
        description: categoryDescription,
      },
    ]);

    if (error) {
      console.error('Error adding category:', error.message);
    } else {
      setCategories([...categories, data[0]]);
      setCategoryName('');
      setCategoryDescription('');
    }
  };

  return (
    <div className="manage-categories p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-5">Manage Categories</h1>

      {/* Add Category Form */}
      <div className="add-category mb-5">
        <h2 className="text-xl font-semibold mb-2">Add New Category</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Category Name"
            className="w-full p-2 border border-gray-300 rounded"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Category Description"
            className="w-full p-2 border border-gray-300 rounded"
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          onClick={addCategory}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Category
        </button>
      </div>

      {/* Categories List */}
      <div className="category-list">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.id} className="category-item flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-4">
              <div>
                <h2 className="text-xl font-semibold">{category.name}</h2>
                <p>{category.description}</p>
              </div>
              <button
                onClick={() => deleteCategory(category.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No categories available to manage.</p>
        )}
      </div>
    </div>
  );
};

export default ManageCategories;
