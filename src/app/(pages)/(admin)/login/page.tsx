

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";
// Assuming you have these components built
import { FaSeedling, FaTractor, FaLeaf, FaPhone, FaHome } from "react-icons/fa"; // Agriculture-related icons

export default function LoginForm() {
    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
            {/* Background and theme */}
            <div className="w-full max-w-md space-y-8 bg-white p-6 shadow-xl rounded-lg border border-green-200">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-green-700">Login</h1>
                    <div className="mt-4">
                        <p className="text-sm font-extrabold text-green-500">
                        You don&apos;t have an account
                        </p>
                        <Link href="/signup" className="text-sm font-bold text-green-500 border-b-2 hover:border-green-800">

                            Create Account

                        </Link>
                    </div>
                </div>

                <form className="mt-8 space-y-6">
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



                    {/* Checkbox for Buyer */}
                    <div className="flex items-center space-x-2">
                        <Checkbox id="buyer" />
                        <Label htmlFor="buyer" className="text-green-700">
                            Login as Buyer
                        </Label>
                    </div>

                    {/* Checkbox for Seller */}
                    <div className="flex items-center space-x-2">
                        <Checkbox id="seller" />
                        <Label htmlFor="seller" className="text-green-700">
                            Login as Seller
                        </Label>
                    </div>

                    {/* Checkbox for Contractor */}
                    <div className="flex items-center space-x-2">
                        <Checkbox id="contractor" />
                        <Label htmlFor="contractor" className="text-green-700">
                            Login as Contractor
                        </Label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all">
                            <FaTractor className="inline-block mr-2" /> Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};


