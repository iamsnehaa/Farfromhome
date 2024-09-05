import Image from "next/image";
import { iProduct } from "@/lib/data/data";

interface ProductCardProps extends iProduct {
    onAddToCart: (product: iProduct) => void; // Prop function to handle add to cart
}

export default function ProductCard(props: ProductCardProps) {
    const { name, price, image, description, onAddToCart } = props;

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-40 bg-gray-200 rounded-md overflow-hidden mb-4">
                {/* Image Adjustments */}
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
            <h3 className="font-semibold text-lg mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">Price: ${price}</p>
            <p className="text-gray-600 mb-4">{description}</p>
            <button
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => onAddToCart(props)}
            >
                Add to Cart
            </button>
        </div>
    );
}

