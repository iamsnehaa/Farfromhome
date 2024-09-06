'use client'
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

interface Product {
    title: string;
    image: string;
    description: string;
    price?: string; // Optional field for price
}

interface ProductCardProps {
    product: Product;
}

export default function SellerProductCard({ product }: ProductCardProps) {
    const router = useRouter()

    const onHandleClick = () => {
        router.push('/updateProduct')
    }
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <div className="h-40 w-full bg-green-200 flex items-center justify-center rounded-md mb-4 overflow-hidden">
                <Image
                    src={product.image}
                    alt="image"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-green-900">{product.title}</h2>
                <p className="text-green-700">{product.description}</p>
                {product.price && <p className="text-yellow-600 font-bold">{product.price}</p>}
            </div>
            <div className='flex flex-col items-stretch space-y-2 p-4'>
                <Button className='py-2 w-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 rounded-lg text-center'>
                    Delete Product
                </Button>
                <Button className='py-2 w-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-300 rounded-lg text-center'
                    onClick={onHandleClick}
                >
                    Update Product
                </Button>
            </div>
        </div>
    );
}
