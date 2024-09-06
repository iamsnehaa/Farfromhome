import SellerProductCard from '@/components/sellerProductCard';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Product {
    title: string;
    image: string;
    description: string;
    price?: string;
}

const products: Product[] = [
    {
        title: "Corn",
        image: "/corn.jpg",
        description: "Yellow corn kernels spilled out of a burlap bag with a cob of corn next to it",
        price: "$499.99"
    },
    {
        title: "Cotton",
        image: "/cotton.jpg",
        description: "Fluffy white cotton balls arranged in a basket with a cotton field in the background",
        price: "$149.99"
    },
    // Add more products as needed
];

export default function Home() {
    return (
        <div className="container mx-auto p-4 bg-beige">
            <header className="flex justify-between items-center py-4 border-b-2 border-green-700">
                <Link href="/seller" className="text-2xl font-bold text-green-900 hover:border-b-2 hover:border-green-800 transition-all duration-300">
                    Seller Product
                </Link>
            </header>

            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {products.map((product, index) => (
                    <SellerProductCard key={index} product={product} />
                ))}
            </div>

            {/* Footer */}
            <footer className="bg-green-900 text-white py-8 mt-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* About Us */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="font-bold text-lg mb-2">About Us</h3>
                        <p>We are committed to providing the best agricultural products to our customers. Our mission is to support sustainable farming.</p>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                        <p>Email: contact@agrimarket.com</p>
                        <p>Phone: +1 800 123 456</p>
                        <p>Address: 123 Farm Road, Countryside</p>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:underline">Facebook</a>
                            <a href="#" className="hover:underline">Twitter</a>
                            <a href="#" className="hover:underline">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p>&copy; 2024 AgriMarket. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
