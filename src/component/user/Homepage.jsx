import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// นำเข้ารูปโปรโมชั่นจาก assets
import promo1 from '../../assets/promo1.png';
import promo2 from '../../assets/promo2.jpg';
import promo3 from '../../assets/promo3.jpg';

// นำเข้ารูปสินค้าจาก assets
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product1.jpg';
import product4 from '../../assets/product2.jpg';

const promotions = [
    { id: 1, image: promo1, title: 'Discount 50% on Gaming Laptops' },
    { id: 2, image: promo2, title: 'Buy 1 Get 1 Free on Accessories' },
    { id: 3, image: promo3, title: 'Free Shipping for Orders Over $100' }
];

const recommendedProducts = [
    { id: 1, name: 'Gaming Laptop', price: '$999', image: product1 },
    { id: 2, name: 'Mechanical Keyboard', price: '$129', image: product2 },
    { id: 3, name: 'Gaming Mouse', price: '$59', image: product3 },
    { id: 4, name: 'Ultra HD Monitor', price: '$399', image: product4 }
];

const Homepage = () => {
    return (
        <div className="container mx-auto p-4">
            {/* Promotion Slider */}
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="w-full h-64 mb-8"
            >
                {promotions.map(promo => (
                    <SwiperSlide key={promo.id}>
                        <img src={promo.image} alt={promo.title} className="w-full h-full object-cover rounded-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Recommended Products */}
            <h2 className="text-2xl font-bold mb-4">สินค้าแนะนำ</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {recommendedProducts.map(product => (
                    <div key={product.id} className="bg-white p-4 shadow-md rounded-lg text-center">
                        {/* ปรับขนาดรูปสินค้าให้เท่ากัน */}
                        <div className="w-full h-40 flex justify-center items-center">
                            <img src={product.image} alt={product.name} className="w-32 h-32 object-contain" />
                        </div>
                        <h3 className="font-semibold mt-2">{product.name}</h3>
                        <p className="text-gray-600">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
