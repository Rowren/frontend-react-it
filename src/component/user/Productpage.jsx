import React, { useContext, useState } from 'react';
import { CartContext } from "../../component/user/CartContext";
import { ShoppingCart } from 'lucide-react';
import '@fontsource/noto-sans-thai';

import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import cpu1 from '../../assets/cpu1.jpg';
import g1 from '../../assets/g1.jpg';
import k1 from '../../assets/k1.jpg';
import k2 from '../../assets/k2.jpg';
import k3 from '../../assets/k3.jpg';
import m1 from '../../assets/m1.jpg';

const products = [
    { id: 1, name: 'เคส 1', price: 50, image: c1, category: 'case' },
    { id: 2, name: 'เคส 2', price: 55, image: c2, category: 'case' },
    { id: 3, name: 'ซีพียู 1', price: 250, image: cpu1, category: 'cpu' },
    { id: 4, name: 'การ์ดจอ 1', price: 400, image: g1, category: 'gpu' },
    { id: 5, name: 'คีย์บอร์ด 1', price: 30, image: k1, category: 'keyboard' },
    { id: 6, name: 'คีย์บอร์ด 2', price: 35, image: k2, category: 'keyboard' },
    { id: 7, name: 'คีย์บอร์ด 3', price: 40, image: k3, category: 'keyboard' },
    { id: 8, name: 'เมาส์ 1', price: 20, image: m1, category: 'mouse' },
];

const Productpage = () => {
    const { addToCart } = useContext(CartContext);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');

    const filteredProducts = products.filter(product =>
        product.name.includes(search) && (category === 'all' || product.category === category)
    );

    return (
        <div className="container mx-auto p-4 font-['Noto_Sans_Thai']">
            <h2 className="text-2xl font-bold mb-4 text-center">สินค้าทั้งหมด</h2>
            
            <div className="flex flex-col md:flex-row gap-4 mb-4 justify-center">
                <input 
                    type="text" 
                    placeholder="ค้นหาสินค้า..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="border px-3 py-2 rounded-lg w-full md:w-1/3"
                />
                <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    className="border px-3 py-2 rounded-lg w-full md:w-1/4"
                >
                    <option value="all">ทุกประเภท</option>
                    <option value="case">เคส</option>
                    <option value="cpu">ซีพียู</option>
                    <option value="gpu">การ์ดจอ</option>
                    <option value="keyboard">คีย์บอร์ด</option>
                    <option value="mouse">เมาส์</option>
                </select>
            </div>

            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white p-4 shadow-md rounded-lg text-center">
                        <div className="w-full h-40 flex justify-center items-center">
                            <img src={product.image} alt={product.name} className="w-32 h-32 object-contain hover:scale-150" />
                        </div>
                        <h3 className="font-semibold mt-2">{product.name}</h3>
                        <p className="text-gray-600">฿{product.price}</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-3 flex items-center justify-center gap-2 w-full px-4 py-2 
                                       bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium 
                                       rounded-lg shadow-md transition hover:from-blue-600 hover:to-blue-700"
                        >
                            <ShoppingCart size={16} /> เพิ่มลงตะกร้า
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productpage;
