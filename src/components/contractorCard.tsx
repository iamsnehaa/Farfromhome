'use client'
import { FarmersList } from "@/lib/data/farmersList";
import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";
import { Button } from "./ui/button";


export default function FarmerCard() {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [filteredFarmers, setFilteredFarmers] = useState(FarmersList);
    const [currentPage, setCurrentPage] = useState(1);
    const [farmersPerPage] = useState(20);
    const [viewAll, setViewAll] = useState(false);
    const [showProfileCard, setShowProfileCard] = useState(false);
    const [buyerName, setBuyerName] = useState<string>("Shiv");


    const handleSearch = () => {
        if (selectedState || selectedDistrict) {
            const filtered = FarmersList.filter((farmer) => {
                return (
                    (selectedState ? farmer.state.toLowerCase() === selectedState.toLowerCase() : true) &&
                    (selectedDistrict ? farmer.district.toLowerCase() === selectedDistrict.toLowerCase() : true)
                );
            });
            setFilteredFarmers(filtered);
        } else {
            setFilteredFarmers(FarmersList);
        }
        setCurrentPage(1);
    };

    const handleViewAll = () => {
        setFilteredFarmers(FarmersList);
        setViewAll(true);
        setCurrentPage(1);
    };

    const indexOfLastFarmer = currentPage * farmersPerPage;
    const indexOfFirstFarmer = indexOfLastFarmer - farmersPerPage;
    const currentFarmers = filteredFarmers.slice(indexOfFirstFarmer, indexOfLastFarmer);

    const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

    const toggleProfileCard = () => setShowProfileCard(!showProfileCard);
    return (
        <div>
            <div className="flex items-end justify-end relative mt-2 mb-2 mr-4">
                <div
                    className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full cursor-pointer ml-4"
                    onClick={toggleProfileCard}
                >
                    <span className="text-white text-center text-sm font-semibold break-words px-2">
                        Contract
                    </span>
                </div>
            </div>


            {/* Profile Card (shown when buyer name is clicked) */}
            {showProfileCard && (
                <div className="bg-white p-4 rounded-lg shadow-lg ml-4 mt-2 max-w-xs">
                    <h3 className="text-lg font-semibold text-green-800">Buyer Profile</h3>
                    <p className="text-green-700">Name: {buyerName}</p>
                    <p className="text-green-700">Location: Bhopal</p>
                    <p className="text-green-700">Email: shiv@gmail.com</p>
                    <button
                        className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                        onClick={toggleProfileCard}
                    >
                        Close Profile
                    </button>
                </div>
            )}

            <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 bg-green-50 min-h-screen">
                {/* Hero Image */}
                <div className="relative h-[200px] sm:h-[300px] w-full py-3 mt-0">
                    <Image
                        src="/Farmer.jpg"
                        alt="farmer"
                        layout="fill"
                        objectFit="cover"
                        className="w-full rounded-lg"
                    />
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mt-8 mb-6">
                    Find Farmer by Region
                </h2>

                {/* Selection and Button Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 mb-6 w-full">
                    {/* State Selector */}
                    <div className="flex flex-col items-center w-full sm:w-auto">
                        <label className="text-green-700 mb-2 block font-semibold">Select State</label>
                        <select
                            className="p-3 border border-green-300 rounded bg-green-100 text-green-800 w-full sm:w-64"
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                        >
                            <option value="">--Select State--</option>
                            {[...new Set(FarmersList.map((farmer) => farmer.state))].map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* District Selector */}
                    <div className="flex flex-col items-center w-full sm:w-auto">
                        <label className="text-green-700 mb-2 block font-semibold">Select District</label>
                        <select
                            className="p-3 border border-green-300 rounded bg-green-100 text-green-800 w-full sm:w-64"
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                            disabled={!selectedState}
                        >
                            <option value="">--Select District--</option>
                            {[...new Set(FarmersList.filter((farmer) => farmer.state === selectedState).map((farmer) => farmer.district))].map(
                                (district) => (
                                    <option key={district} value={district}>
                                        {district}
                                    </option>
                                )
                            )}
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-center space-x-4">
                        <Button className="bg-green-700 text-white px-4 py-2 mt-8 text-sm rounded-full hover:bg-green-600" onClick={handleSearch}>
                            Search
                        </Button>
                        <Button className="border mt-8 border-green-500 text-green-700 px-4 py-2 text-sm rounded-full hover:bg-green-100" onClick={handleViewAll}>
                            View All
                        </Button>
                    </div>
                </div>

                {/* Farmers List */}
                <div className="w-full sm:w-3/4 overflow-x-auto rounded-lg">
                    <table className="min-w-full bg-white border border-green-200 shadow-md ">
                        <thead>
                            <tr className="bg-green-800 text-white">
                                <th className="py-2 px-4 border-b">Sr. No.</th>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Regional Council</th>
                                <th className="py-2 px-4 border-b">State</th>
                                <th className="py-2 px-4 border-b">District</th>
                                <th className="py-2 px-4 border-b">Get Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentFarmers.length > 0 ? (
                                currentFarmers.map((farmer, index) => (
                                    <tr
                                        key={farmer.id}
                                        className={index % 2 === 0 ? "bg-green-100" : "bg-white"}
                                    >
                                        <td className="py-2 px-4 border-b">{indexOfFirstFarmer + index + 1}</td>
                                        <td className="py-2 px-4 border-b">{farmer.name}</td>
                                        <td className="py-2 px-4 border-b">{farmer.regional_council}</td>
                                        <td className="py-2 px-4 border-b">{farmer.state}</td>
                                        <td className="py-2 px-4 border-b">{farmer.district}</td>
                                        <td className="py-2 px-4 border-b text-green-600">
                                            <a href="/farmerDetails" target="_blank" rel="noopener noreferrer" className="hover:text-green-950">
                                                Get Details
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="py-2 px-4 border-b text-center" colSpan={6}>
                                        No farmers found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex items-center justify-center mt-4 mb-2">
                        <button
                            className={`px-3 py-1 mx-1 rounded-full ${currentPage === 1
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-gray-200 text-black"
                                }`}
                            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {Array.from({ length: Math.ceil(filteredFarmers.length / farmersPerPage) }).map(
                            (_, i) => (
                                <button
                                    key={i + 1}
                                    className={`px-3 py-1 mx-1 rounded-full ${currentPage === i + 1
                                        ? "bg-green-700 text-white"
                                        : "bg-gray-200 text-black"
                                        }`}
                                    onClick={() => paginate(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            )
                        )}

                        <button
                            className={`px-3 py-1 mx-1 rounded-full ${currentPage === Math.ceil(filteredFarmers.length / farmersPerPage)
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-gray-200 text-black"
                                }`}
                            onClick={() => currentPage < Math.ceil(filteredFarmers.length / farmersPerPage) && paginate(currentPage + 1)}
                            disabled={currentPage === Math.ceil(filteredFarmers.length / farmersPerPage)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
