

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
// Assuming you have these components built
import { FaSeedling, FaTractor, FaLeaf, FaPhone, FaHome } from "react-icons/fa"; // Agriculture-related icons

export default function SignupForm() {
    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
            {/* Background and theme */}
            <div className="w-full max-w-md space-y-8 bg-white p-6 shadow-xl rounded-lg border border-green-200">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-green-700">Join the Agriculture Community</h1>
                    <p className="text-sm text-green-500">Empowering farmers, contractors, and sellers.</p>
                </div>

                <form className="mt-8 space-y-6">
                    {/* Full Name Field */}
                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Label htmlFor="fullname" className="flex items-center space-x-2 text-green-700">
                            <FaLeaf /> <span>Full Name</span>
                        </Label>
                        <Input type="text" id="fullname" placeholder="Your Full Name" className="border-green-300" />
                    </div>

                    {/* Phone Number Field */}
                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Label htmlFor="phone" className="flex items-center space-x-2 text-green-700">
                            <FaPhone /> <span>Phone Number</span>
                        </Label>
                        <Input type="text" id="phone" placeholder="Phone Number" className="border-green-300" />
                    </div>

                    {/* Password Field */}
                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Label htmlFor="password" className="flex items-center space-x-2 text-green-700">
                            <FaSeedling /> <span>Password</span>
                        </Label>
                        <Input type="password" id="password" placeholder="Your Password" className="border-green-300" />
                    </div>

                    {/* Address Field */}
                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Label htmlFor="address" className="flex items-center space-x-2 text-green-700">
                            <FaHome /> <span>Your Address</span>
                        </Label>
                        <Textarea placeholder="Type your address here." id="address" className="border-green-300" />
                    </div>

                    {/* Checkbox for Buyer */}
                    <div className="flex items-center space-x-2">
                        <Checkbox id="buyer" />
                        <Label htmlFor="buyer" className="text-green-700">
                            Signup as Buyer
                        </Label>
                    </div>

                    {/* Checkbox for Seller */}
                    <div className="flex items-center space-x-2">
                        <Checkbox id="seller" />
                        <Label htmlFor="seller" className="text-green-700">
                            Signup as Seller
                        </Label>
                    </div>

                    {/* Checkbox for Contractor */}
                    <div className="flex items-center space-x-2">
                        <Checkbox id="contractor" />
                        <Label htmlFor="contractor" className="text-green-700">
                            Signup as Contractor
                        </Label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all">
                            <FaTractor className="inline-block mr-2" /> Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};


