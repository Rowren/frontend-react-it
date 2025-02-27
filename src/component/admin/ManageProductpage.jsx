import React, { useState } from 'react';

// นำเข้ารูปภาพที่ใช้งาน
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import cpu1 from '../../assets/cpu1.jpg';
import g1 from '../../assets/g1.jpg';
import k1 from '../../assets/k1.jpg';
import k2 from '../../assets/k2.jpg';
import k3 from '../../assets/k3.jpg';
import m1 from '../../assets/m1.jpg';

const ManageProductpage = () => {
    const categories = ['เมาส์', 'คีย์บอร์ด', 'เคส', 'หน้าจอ', 'CPU', 'Power Supply'];

    const [products, setProducts] = useState([
        { id: 1, name: 'เคส 1', price: 50, image: c1 },
        { id: 2, name: 'เคส 2', price: 55, image: c2 },
        { id: 3, name: 'ซีพียู 1', price: 250, image: cpu1 },
        { id: 4, name: 'การ์ดจอ 1', price: 400, image: g1 },
        { id: 5, name: 'คีย์บอร์ด 1', price: 30, image: k1 },
        { id: 6, name: 'คีย์บอร์ด 2', price: 35, image: k2 },
        { id: 7, name: 'คีย์บอร์ด 3', price: 40, image: k3 },
        { id: 8, name: 'เมาส์ 1', price: 20, image: m1 },
    ]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
    const [editingProduct, setEditingProduct] = useState(null);

    // ฟังก์ชันเพิ่มสินค้า
    const addProduct = () => {
        setProducts([...products, { ...newProduct, id: products.length + 1 }]);
        setNewProduct({ name: '', price: '', image: '' });
    };

    // ฟังก์ชันแก้ไขสินค้า
    const editProduct = (product) => {
        setEditingProduct(product);
        setNewProduct({ name: product.name, price: product.price, image: product.image });
    };

    // ฟังก์ชันบันทึกการแก้ไขสินค้า
    const saveEditedProduct = () => {
        setProducts(products.map(product => 
            product.id === editingProduct.id ? { ...editingProduct, ...newProduct } : product
        ));
        setEditingProduct(null);
        setNewProduct({ name: '', price: '', image: '' });
    };

    // ฟังก์ชันลบสินค้า
    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="container mx-auto p-4 font-['Noto_Sans_Thai']">
            <h2 className="text-2xl font-bold mb-4 text-center">จัดการสินค้า</h2>

            {/* ฟอร์มเพิ่มหรือแก้ไขสินค้า */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="ชื่อสินค้า"
                    className="p-2 border border-gray-300 rounded-md"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="ราคาสินค้า"
                    className="p-2 border border-gray-300 rounded-md mx-2"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="ลิงค์รูปภาพ"
                    className="p-2 border border-gray-300 rounded-md"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                />
                <select
                    className="p-2 border border-gray-300 rounded-md m-2 "
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                >
                    <option value="">เลือกประเภทสินค้า</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
                <button
                    onClick={editingProduct ? saveEditedProduct : addProduct}
                    className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    {editingProduct ? 'บันทึกการแก้ไข' : 'เพิ่มสินค้า'}
                </button>

            </div>

            {/* รายการสินค้าที่สามารถจัดการได้ */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 shadow-md rounded-lg text-center">
                        <div className="w-full h-40 flex justify-center items-center">
                            <img src={product.image} alt={product.name} className="w-32 h-32 object-contain" />
                        </div>
                        <h3 className="font-semibold mt-2">{product.name}</h3>
                        <p className="text-gray-600">฿{product.price}</p>
                        <button
                            onClick={() => editProduct(product)}
                            className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md"
                        >
                            แก้ไข
                        </button>
                        <button
                            onClick={() => deleteProduct(product.id)}
                            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md"
                        >
                            ลบ
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageProductpage;
