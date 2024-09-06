'use client'
import { useRouter } from "next/navigation";
import { Button } from "./ui/button"; // Ensure you have this component

export default function FarmerDetailsCard() {
    const router = useRouter();

    const handleDocumentation = () => {
        router.push("/documentation"); // Navigates to the documentation page
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-200 to-yellow-200"> {/* Agriculture-inspired background */}
            <div className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2 border border-green-600"> {/* Green border to emphasize the agricultural theme */}
                <div className="flex justify-between items-center p-4 border-b border-green-600 bg-green-700 text-white"> {/* Green header */}
                    <h2 className="text-xl font-bold">Farmer Detail For Contract</h2>
                </div>
                <div className="p-4 bg-green-50"> {/* Light green background for the main content */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="font-semibold text-green-800">Farmer Code :</div>
                        <div>IF0500074621</div>
                        <div className="font-semibold text-green-800">State :</div>
                        <div>HARYANA</div>
                        <div className="font-semibold text-green-800">District :</div>
                        <div>GURGAON</div>
                        <div className="font-semibold text-green-800">Block :</div>
                        <div>GURGAON</div>
                        <div className="font-semibold text-green-800">Village :</div>
                        <div>Pataudi</div>
                        <div className="font-semibold text-green-800">Name :</div>
                        <div>ARCHANA JHA</div>
                        <div className="font-semibold text-green-800">Mobile Number :</div>
                        <div>1234567890</div>
                        <div className="font-semibold text-green-800">Email ID :</div>
                        <div>assetsindia@gmail.com</div>
                    </div>
                </div>
                {/* New Documentation Button */}
                <div className="p-4 border-t bg-green-100 flex justify-end"> {/* Light green background for the footer */}
                    <button 
                        onClick={handleDocumentation}
                        className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-500"
                    >
                        Documentation for Contract
                    </button>
                </div>
            </div>
        </div>
    );
}
