import React, { useState } from "react";
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import cpu1 from "../../assets/cpu1.jpg";
import g1 from "../../assets/g1.jpg";
import k1 from "../../assets/k1.jpg";
import k2 from "../../assets/k2.jpg";
import k3 from "../../assets/k3.jpg";
import m1 from "../../assets/m1.jpg";

const categoryList = ["เมาส์", "คีย์บอร์ด", "เคส", "หน้าจอ", "CPU", "Power Supply"];

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
    const [products, setProducts] = useState(initialProducts);
    const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "" });
    const [editingProduct, setEditingProduct] = useState(null); // สำหรับแก้ไขสินค้า

    // เพิ่มสินค้าใหม่
    const addProduct = () => {
        if (!newProduct.name || !newProduct.price || !newProduct.category) return;
        setProducts([...products, { ...newProduct, id: products.length + 1, image: c1 }]);
        setNewProduct({ name: "", price: "", category: "" });
    };

    // ลบสินค้า
    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    // เริ่มแก้ไขสินค้า
    const startEditProduct = (product) => {
        setEditingProduct(product);
        setNewProduct(product);
    };

    // บันทึกการแก้ไข
    const saveEditProduct = () => {
        setProducts(products.map((p) => (p.id === editingProduct.id ? newProduct : p)));
        setEditingProduct(null);
        setNewProduct({ name: "", price: "", category: "" });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">จัดการสินค้า</h2>

            {/* ฟอร์มเพิ่มหรือแก้ไขสินค้า */}
            <div className="mb-4 p-4 border rounded-lg shadow-md bg-white">
                <input
                    type="text"
                    placeholder="ชื่อสินค้า"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="border p-2 w-full mb-2"
                />
                <input
                    type="number"
                    placeholder="ราคา"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="border p-2 w-full mb-2"
                />
                <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="border p-2 w-full mb-2"
                >
                    <option value="">เลือกประเภทสินค้า</option>
                    {categoryList.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                {editingProduct ? (
                    <button onClick={saveEditProduct} className="bg-yellow-500 text-white px-4 py-2 rounded-md w-full">
                        บันทึกการแก้ไข
                    </button>
                ) : (
                    <button onClick={addProduct} className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                        เพิ่มสินค้า
                    </button>
                )}
            </div>

            {/* รายการสินค้า */}
            {categoryList.map((category, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-lg mb-4">
                    <h3 className="text-xl font-bold mb-2">{category}</h3>
                    {products.filter((p) => p.category === category).length === 0 ? (
                        <p className="text-gray-500">ไม่มีสินค้า</p>
                    ) : (
                        <ul className="space-y-2">
                            {products
                                .filter((p) => p.category === category)
                                .map((product) => (
                                    <li
                                        key={product.id}
                                        className="flex justify-between items-center border p-2 rounded-lg"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <img src={product.image} alt={product.name} className="w-16 h-16 object-contain" />
                                            <div>
                                                <h3 className="font-semibold">{product.name}</h3>
                                                <p className="text-gray-600">฿{product.price}</p>
                                            </div>
                                        </div>
                                        <div className="space-x-2">
                                            <button
                                                onClick={() => startEditProduct(product)}
                                                className="bg-yellow-500 text-white px-2 py-1 rounded-md"
                                            >
                                                แก้ไข
                                            </button>
                                            <button
                                                onClick={() => deleteProduct(product.id)}
                                                className="bg-red-500 text-white px-2 py-1 rounded-md"
                                            >
                                                ลบ
                                            </button>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ManageCategorypage;
