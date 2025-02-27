import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { ShoppingCart } from 'lucide-react';
// นำเข้าฟอนต์ภาษาไทย
import '@fontsource/noto-sans-thai';

// นำเข้ารูปภาพสินค้า
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import cpu1 from '../../assets/cpu1.jpg';
import g1 from '../../assets/g1.jpg';
import k1 from '../../assets/k1.jpg';
import k2 from '../../assets/k2.jpg';
import k3 from '../../assets/k3.jpg';
import m1 from '../../assets/m1.jpg';

const products = [
    { id: 1, name: 'เคส 1', price: '฿50', image: c1 },
    { id: 2, name: 'เคส 2', price: '฿55', image: c2 },
    { id: 3, name: 'ซีพียู 1', price: '฿250', image: cpu1 },
    { id: 4, name: 'การ์ดจอ 1', price: '฿400', image: g1 },
    { id: 5, name: 'คีย์บอร์ด 1', price: '฿30', image: k1 },
    { id: 6, name: 'คีย์บอร์ด 2', price: '฿35', image: k2 },
    { id: 7, name: 'คีย์บอร์ด 3', price: '฿40', image: k3 },
    { id: 8, name: 'เมาส์ 1', price: '฿20', image: m1 },
];

const Productpage = () => {
    return (
        <div className="container mx-auto p-4 font-['Noto_Sans_Thai']">
            <h2 className="text-2xl font-bold mb-4 text-center">สินค้าทั้งหมด</h2>

            {/* Swiper สำหรับหน้าจอเล็ก */}
            <div className="block md:hidden">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={2}
                >
                    {products.map(product => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-white p-4 shadow-md rounded-lg text-center">
                                <div className="w-full h-40 flex justify-center items-center">
                                    <img src={product.image} alt={product.name} className="w-32 h-32 object-contain" />
                                </div>
                                <h3 className="font-semibold mt-2">{product.name}</h3>
                                <p className="text-gray-600">{product.price}</p>
                                <button className="mt-3 flex items-center justify-center gap-2 w-full px-4 py-2 
                                         bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium 
                                            rounded-lg shadow-md transition hover:from-blue-600 hover:to-blue-700">
                                <ShoppingCart size={16} /> เพิ่มลงตะกร้า
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Grid Layout สำหรับหน้าจอใหญ่ */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white p-4 shadow-md rounded-lg text-center">
                        <div className="w-full h-40 flex justify-center items-center">
                            <img src={product.image} alt={product.name} className="w-32 h-32 object-contain" />
                        </div>
                        <h3 className="font-semibold mt-2">{product.name}</h3>
                        <p className="text-gray-600">{product.price}</p>
                        <button className="mt-3 flex items-center justify-center gap-2 w-full px-4 py-2 
                                         bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium 
                                            rounded-lg shadow-md transition hover:from-blue-600 hover:to-blue-700">
                                <ShoppingCart size={16} /> เพิ่มลงตะกร้า
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productpage;
