'use client'
import { FarmersList } from "@/lib/data/farmersList";
import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";

export default function FarmerCard() {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [filteredFarmers, setFilteredFarmers] = useState(FarmersList);
    const [currentPage, setCurrentPage] = useState(1);
    const [farmersPerPage] = useState(20);
    const [viewAll, setViewAll] = useState(false);

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

    return (
        <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
            <div className="relative h-[200px] sm:h-[300px] w-full py-2">
                <Image
                    src="/Farmer.jpg"
                    alt="farmer"
                    layout="fill"
                    objectFit="cover"
                    className="w-full"
                />
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 py-2 w-full">
                <div className="flex flex-col items-center w-full sm:w-auto">
                    <label className="text-gray-500 mb-2 block">Select State</label>
                    <select
                        className="p-2 border rounded bg-gray-100 text-gray-500 w-full sm:w-64"
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
                <div className="flex flex-col items-center w-full sm:w-auto">
                    <label className="text-gray-500 mb-2 block">Select District</label>
                    <select
                        className="p-2 border rounded bg-gray-100 text-gray-500 w-full sm:w-64"
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
                <div className="mt-5 py-3 sm:mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                    <button className="bg-blue-800 text-white px-4 py-2 text-sm rounded w-full sm:w-auto" onClick={handleSearch}>
                        Search
                    </button>
                    <button className="border border-green-500 text-green-500 px-4 py-2 text-sm rounded w-full sm:w-auto" onClick={handleViewAll}>
                        View All Farmers
                    </button>
                </div>
            </div>

            <div className="w-full sm:w-3/4 overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-blue-900 text-white">
                            <th className="py-2 px-2 sm:px-4 border-b">Sr. No.</th>
                            <th className="py-2 px-2 sm:px-4 border-b">Name</th>
                            <th className="py-2 px-2 sm:px-4 border-b">Regional Council</th>
                            <th className="py-2 px-2 sm:px-4 border-b">State</th>
                            <th className="py-2 px-2 sm:px-4 border-b">District</th>
                            <th className="py-2 px-2 sm:px-4 border-b">Get Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentFarmers.length > 0 ? (
                            currentFarmers.map((farmer, index) => (
                                <tr
                                    key={farmer.id}
                                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                                >
                                    <td className="py-2 px-2 sm:px-4 border-b">{indexOfFirstFarmer + index + 1}</td>
                                    <td className="py-2 px-2 sm:px-4 border-b">{farmer.name}</td>
                                    <td className="py-2 px-2 sm:px-4 border-b">{farmer.regional_council}</td>
                                    <td className="py-2 px-2 sm:px-4 border-b">{farmer.state}</td>
                                    <td className="py-2 px-2 sm:px-4 border-b">{farmer.district}</td>
                                    <td className="py-2 px-2 sm:px-4 border-b text-blue-600">
                                        <a href="/farmerDetails" target="_blank" rel="noopener noreferrer">
                                            Get Details
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="py-2 px-2 sm:px-4 border-b text-center" colSpan={6}>
                                    No farmers found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(filteredFarmers.length / farmersPerPage) }).map(
                        (_, i) => (
                            <button
                                key={i + 1}
                                className={`px-3 py-1 mx-1 rounded ${currentPage === i + 1
                                    ? "bg-blue-800 text-white"
                                    : "bg-gray-200 text-black"
                                    }`}
                                onClick={() => paginate(i + 1)}
                            >
                                {i + 1}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
