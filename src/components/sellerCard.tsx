'use client'

import { Url } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SellerCard() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            if (target && !target.closest('.menu-button') && !target.closest('.menu-card')) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-200 via-yellow-200 to-green-400 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-green-800">Welcome, Seller!</h1>
                <button 
                    className="menu-button bg-green-500 rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-600 transition-colors"
                    
                    onClick={toggleMenu}
                >
                    <i className="fas fa-seedling text-white text-xl"> Seller</i>
                </button>

                {menuOpen && (
                    <div className="menu-card absolute top-16 right-4 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-10">
                        <button 
                            className="block px-4 py-2 text-gray-700 hover:bg-green-100 w-full text-left"
                            onClick={() => handleNavigation('/logout')}
                        >
                            <i className="fas fa-sign-out-alt mr-2"></i>Logout
                        </button>
                        <button 
                            className="block px-4 py-2 text-gray-700 hover:bg-green-100 w-full text-left"
                            onClick={() => handleNavigation('/view-profile')}
                        >
                            <i className="fas fa-user-circle mr-2"></i>View Profile
                        </button>
                        <button 
                            className="block px-4 py-2 text-gray-700 hover:bg-green-100 w-full text-left"
                            onClick={() => handleNavigation('/find-contractors')}
                        >
                            <i className="fas fa-tractor mr-2"></i>Find Contractors Nearby
                        </button>
                    </div>
                )}
            </header>

            {/* Sidebar + Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="bg-green-600 shadow-lg p-4 w-64">
                    <button 
                        className="bg-yellow-500 text-white w-full py-3 rounded-lg hover:bg-yellow-600 transition-colors"
                        onClick={() => handleNavigation('/')}
                    >
                        <i className="fas fa-home mr-2"></i>Home
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    {/* Welcome Message */}
                    <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">
                            Welcome to Your Dashboard, Seller!
                        </h2>
                        <p className="text-gray-600">
                            Manage your products, update your profile, and find contractors nearby. Let&aposs grow your business together!
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4 space-x-4">
                        <button 
                            className="bg-green-500 text-white w-64 py-4 rounded-lg hover:bg-green-600 transition transform hover:scale-105"
                            onClick={() => handleNavigation('/add-product')}
                        >
                            <i className="fas fa-plus-circle mr-2"></i>Add Product
                        </button>
                        <button 
                            className="bg-yellow-500 text-white w-64 py-4 rounded-lg hover:bg-yellow-600 transition transform hover:scale-105"
                            onClick={() => handleNavigation('/update-product')}
                        >
                            <i className="fas fa-edit mr-2"></i>Update Product
                        </button>
                        <button 
                            className="bg-red-500 text-white w-64 py-4 rounded-lg hover:bg-red-600 transition transform hover:scale-105"
                            onClick={() => handleNavigation('/delete-product')}
                        >
                            <i className="fas fa-trash-alt mr-2"></i>Delete Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
