export default function FarmerDetailsCard() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">Farmer Detail For contract</h2>
                    <button className="text-white bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="p-4 bg-green-100">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="font-semibold">Farmer Code :</div>
                        <div>IF0500074621</div>
                        <div className="font-semibold">State :</div>
                        <div>HARYANA</div>
                        <div className="font-semibold">District :</div>
                        <div>GURGAON</div>
                        <div className="font-semibold">Block :</div>
                        <div>GURGAON</div>
                        <div className="font-semibold">Village :</div>
                        <div>Pataudi</div>
                        <div className="font-semibold">Name :</div>
                        <div>ARCHANA JHA</div>
                        <div className="font-semibold">Mobile Number :</div>
                        <div>1234567890</div>
                        <div className="font-semibold">Email ID :</div>
                        <div>assetsindia@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );

}