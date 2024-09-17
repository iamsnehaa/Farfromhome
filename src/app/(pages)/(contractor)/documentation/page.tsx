'use client'


import { useState } from 'react';
import { jsPDF } from 'jspdf';
import Link from 'next/link';

export default function Home() {
  const [contractText, setContractText] = useState('Sample Agriculture Contract: \nThis is a sample contract...');

  // Function to handle downloading the contract as a PDF
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(contractText, 10, 10);
    doc.save('contract.pdf');
  };

  // Function to handle file upload and update the contract text
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setContractText(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col py-4 mt-5-">
      {/* Header */}
      <header className="text-center p-6  text-green-800 text-3xl font-bold">
        Agriculture Contract Documentation
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Link href="/contractor" className="text-2xl font-semibold mb-4">Contract</Link>
          <textarea
            className="w-full h-96 p-4 border border-gray-300 rounded-lg"
            value={contractText}
            onChange={(e) => setContractText(e.target.value)}
          />
          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleDownload}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Download Contract
            </button>
            <input
              type="file"
              onChange={handleUpload}
              className="bg-gray-100 py-2 px-4 rounded cursor-pointer"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 bg-green-600 text-white">
        © 2024 Agriculture Contracts. All Rights Reserved.
      </footer>
    </div>
  );
}
