

import Image from "next/image";
import { iProduct } from "@/lib/data/data";

interface ProductCardProps extends iProduct {
    onAddToCart: (product: iProduct) => void; // Prop function to handle add to cart
}

export default function ProductCard(props: ProductCardProps) {
    const { name, price, image, description, onAddToCart } = props;

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-300">
            <div className="relative w-full h-40 bg-green-100 rounded-md overflow-hidden mb-4">
                {/* Image Adjustments */}
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-green-800">{name}</h3>
            <p className="text-green-700 mb-2 font-medium">Price: ${price}</p>
            <p className="text-green-600 mb-4">{description}</p>
            <button
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
                onClick={() => onAddToCart(props)}
            >
                Add to Cart
            </button>
        </div>
    );
}


