'use client'
import { useState, useEffect } from "react";
import { data, iProduct } from "@/lib/data/data";

import ProductCard from "@/components/productCard";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import SearchInput from "@/components/searchInput";

export default function ProductPage() {
    const [profileData, setProfileData] = useState<iProduct[]>([]);
    const [cart, setCart] = useState<iProduct[]>([]);
    const [showProfileCard, setShowProfileCard] = useState(false);
    const [buyerName, setBuyerName] = useState<string>("Ramesh patel"); // Example buyer name
    const searchParams = useSearchParams();
    const searchQuery = searchParams?.get("q");

    // Load cart from localStorage on page load
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        setProfileData(data); // Initialize with full data
    }, []);

    useEffect(() => {
        const handleSearch = () => {
            if (searchQuery) {
                const findUser = data.filter((user) =>
                    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    user.price.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setProfileData(findUser);
            } else {
                setProfileData(data); // Show all data if no search query
            }
        };

        handleSearch();
    }, [searchQuery]);

    const addToCart = (product: iProduct) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Store cart in localStorage
    };

    const totalUser = profileData.length;

    // Toggle Profile Card
    const toggleProfileCard = () => setShowProfileCard(!showProfileCard);

    return (
        <section className="min-h-screen w-screen px-4 md:px-14 mt-0 bg-green-50">
            {/* Buyer Info */}
            <div
                className="flex items-center justify-center mt-2 py-1 w-16 h-16 bg-green-500 rounded-full cursor-pointer"
                onClick={toggleProfileCard}
            >
                <span className="text-white text-lg font-semibold">Buyer</span>
            </div>
            {/* Profile Card (shown when buyer name is clicked) */}
            {showProfileCard && (
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex items-center space-x-4 max-w-xs mt-1 py-1">
                    <div>
                        <h3 className="text-lg font-semibold text-green-800">Buyer Profile</h3>
                        <p className="text-green-700">Name: {buyerName}</p>
                        <p className="text-green-700">Location: Indore</p>
                        <p className="text-green-700">Email: rameshPatel@gmail.com</p>
                        <button
                            className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                            onClick={toggleProfileCard}
                        >
                            Close Profile
                        </button>
                    </div>
                </div>
            )}
            <p className="mb-8 text-lg font-medium text-green-800">
                Showing {totalUser} {totalUser > 1 ? "Products" : "Product"}
            </p>

            <SearchInput defaultValue={searchQuery} />

            <div className="mt-6">
                <Link href="/cart" className="text-green-600 hover:underline">
                    Go to Cart ({cart.length})
                </Link>
                {totalUser === 0 ? (
                    <p className="mt-4 text-green-700">No result returned</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                        {profileData.map(({ name, price, image, description }: iProduct) => (
                            <ProductCard
                                key={name}
                                name={name}
                                image={image}
                                price={price}
                                description={description}
                                onAddToCart={addToCart}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
