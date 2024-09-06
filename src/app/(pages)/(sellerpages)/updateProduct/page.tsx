import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function UpdateProduct() {
    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-green-50 rounded-lg shadow-md">
            <Link href="/sellerProductPage" className="text-2xl font-semibold mb-4 text-green-800  border-b-2 border-green-500">Update Product</Link>
            <p className="text-green-600 mb-6 py-2">Add a new agriculture-related product to your store.</p>
            <form>
                <div className="mb-4">
                    <Label htmlFor="text" className="block text-sm font-medium text-green-700 mb-1">
                        Name <span className="text-red-500">*</span>
                    </Label>
                    <Input type="text" id="text" className="w-full border border-green-300 rounded-md p-2 focus:border-green-500 focus:ring-green-500" />
                    <p className="text-green-500 text-sm mt-1">Give your product a short and clear name.</p>
                </div>

                <div className="mb-4">
                    <Label htmlFor="description" className="block text-sm font-medium text-green-700 mb-1">
                        Description
                    </Label>
                    <Textarea className="w-full border border-green-300 rounded-md p-2 focus:border-green-500 focus:ring-green-500" rows={3} />
                    <p className="text-green-500 text-sm mt-1">Give your product a short and clear description.</p>
                </div>

                <div className="mb-4">
                    <Label htmlFor="price" className="block text-sm font-medium text-green-700 mb-1">
                        Price <span className="text-red-500">*</span>
                    </Label>
                    <Input type="text" id="price" className="w-full border border-green-300 rounded-md p-2 focus:border-green-500 focus:ring-green-500" value="100" />
                    <p className="text-green-500 text-sm mt-1">Price of your product</p>
                </div>

                <div className="mb-6">
    <Label htmlFor="picture" className="block text-sm font-medium text-green-700 mb-1">Images</Label>
    <div className="border-2 border-dashed border-green-300 rounded-md p-6 text-center">
        <i className="fas fa-upload text-green-500 text-3xl mb-3"></i>
        <p className="text-green-500 mb-2">Drop your images here, or click to browse</p>
        <Input id="picture" type="file" className="bg-white border border-green-300 rounded-md px-4 py-2 text-sm font-medium text-green-700" />
    </div>
    <p className="text-green-500 text-sm mt-1">
        Add up to 10 images to your product. Used to represent your product during checkout, in email, social sharing, and more.
    </p>
</div>

                <div className="flex justify-end items-end">
                    <Button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                        Save
                    </Button>
                </div>
            </form>
        </div>
    );
}
