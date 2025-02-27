import React, { useState } from "react";
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import cpu1 from "../../assets/cpu1.jpg";
import g1 from "../../assets/g1.jpg";
import k1 from "../../assets/k1.jpg";
import k2 from "../../assets/k2.jpg";
import k3 from "../../assets/k3.jpg";
import m1 from "../../assets/m1.jpg";

const initialCategories = ["เมาส์", "คีย์บอร์ด", "เคส", "หน้าจอ", "CPU", "Power Supply"];
const initialProducts = [
    { id: 1, name: "เคส 1", price: 50, image: c1, category: "เคส" },
    { id: 2, name: "เคส 2", price: 55, image: c2, category: "เคส" },
    { id: 3, name: "ซีพียู 1", price: 250, image: cpu1, category: "CPU" },
    { id: 4, name: "การ์ดจอ 1", price: 400, image: g1, category: "หน้าจอ" },
    { id: 5, name: "คีย์บอร์ด 1", price: 30, image: k1, category: "คีย์บอร์ด" },
    { id: 6, name: "คีย์บอร์ด 2", price: 35, image: k2, category: "คีย์บอร์ด" },
    { id: 7, name: "คีย์บอร์ด 3", price: 40, image: k3, category: "คีย์บอร์ด" },
    { id: 8, name: "เมาส์ 1", price: 20, image: m1, category: "เมาส์" },
];

const ManageCategorypage = () => {
    const [categories, setCategories] = useState(initialCategories);
    const [products, setProducts] = useState(initialProducts);
    const [newCategory, setNewCategory] = useState("");
    const [editingCategory, setEditingCategory] = useState(null);
    const [categoryName, setCategoryName] = useState("");
    
    // เพิ่มประเภทสินค้า
    const addCategory = () => {
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
            setNewCategory("");
        }
    };

    // ลบประเภทสินค้า
    const deleteCategory = (category) => {
        setCategories(categories.filter(cat => cat !== category));
        setProducts(products.filter(p => p.category !== category));
    };

    // เริ่มแก้ไขประเภทสินค้า
    const startEditCategory = (category) => {
        setEditingCategory(category);
        setCategoryName(category);
    };

    // บันทึกประเภทสินค้า
    const saveEditCategory = () => {
        setCategories(categories.map(cat => (cat === editingCategory ? categoryName : cat)));
        setProducts(products.map(p => (p.category === editingCategory ? { ...p, category: categoryName } : p)));
        setEditingCategory(null);
        setCategoryName("");
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">จัดการประเภทสินค้า</h2>

            {/* ฟอร์มเพิ่มหรือแก้ไขประเภทสินค้า */}
            <div className="mb-4 p-4 border rounded-lg shadow-md bg-white">
                <input
                    type="text"
                    placeholder="เพิ่มประเภทสินค้า"
                    value={editingCategory ? categoryName : newCategory}
                    onChange={(e) => editingCategory ? setCategoryName(e.target.value) : setNewCategory(e.target.value)}
                    className="border p-2 w-full mb-2"
                />
                {editingCategory ? (
                    <button onClick={saveEditCategory} className="bg-yellow-500 text-white px-4 py-2 rounded-md w-full">
                        บันทึกการแก้ไข
                    </button>
                ) : (
                    <button onClick={addCategory} className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                        เพิ่มประเภทสินค้า
                    </button>
                )}
            </div>

            {/* รายการประเภทสินค้า */}
            <div className="mb-4">
                {categories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-2">
                        <h3 className="text-lg font-semibold">{category}</h3>
                        <div className="space-x-2">
                            <button
                                onClick={() => startEditCategory(category)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                            >
                                แก้ไข
                            </button>
                            <button
                                onClick={() => deleteCategory(category)}
                                className="bg-red-500 text-white px-3 py-1 rounded-md"
                            >
                                ลบ
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageCategorypage;