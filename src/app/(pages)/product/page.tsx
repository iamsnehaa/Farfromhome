// ProductPage.tsx
'use client'
import { useState, useEffect } from "react";
import { data, iProduct } from "@/lib/data/data";
import SearchInput from "@/app/components/searchInput";
import ProductCard from "@/app/components/productCard";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ProductPage() {
    const [profileData, setProfileData] = useState<iProduct[]>([]);
    const [cart, setCart] = useState<iProduct[]>([]);
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

    return (
        <section className="min-h-screen w-screen px-4 md:px-14 mt-0 bg-gray-50">
    <p className="mb-8 text-lg font-medium">
        Showing {totalUser} {totalUser > 1 ? "Products" : "Product"}
    </p>

    <SearchInput defaultValue={searchQuery} />

    <div className="mt-6">
        <Link href="/cart" className="text-blue-600 hover:underline">
            Go to Cart ({cart.length})
        </Link>
        {totalUser === 0 ? (
            <p className="mt-4 text-gray-600">No result returned</p>
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
