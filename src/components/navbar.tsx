'use client'

import React, { useState } from 'react'
import { Menu, X, ChevronDown, ChevronRight, ChevronUp } from 'lucide-react'
import { useRouter } from 'next/navigation'

const menuItems = [
  {
    name: 'Buyer',
    href: '/buyer',
  },
  {
    name: 'Contractor',
    href: '/contractor',
  },
  {
    name: 'Seller',
    href: '/seller',
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false) // Control signup dropdown
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen)
  }

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div className="relative max-w-full bg-green-700 py-1">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-white cursor-pointer" onClick={handleClick}>
            Far From Home
          </span>
        </div>

        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-green-300 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={toggleSignup}
            className="bg-white text-green-700 px-4 py-2 rounded-md hover:bg-green-200 transition-colors"
          >
            Sign Up
            {isSignupOpen ? (
              <ChevronUp className="ml-2 inline-block h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 inline-block h-4 w-4" />
            )}
          </button>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
            onClick={() => router.push('/login')}
          >
            Login
          </button>
        </div>

        <div className="ml-2 lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 text-white cursor-pointer" />
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold text-green-700">Far From Home</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <nav className="mt-6 grid gap-y-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-green-700 hover:bg-gray-50"
                    >
                      {item.name}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  ))}
                </nav>

                <div className="mt-6 flex space-x-2">
                  <button
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-800 transition-colors"
                    onClick={() => router.push('/login')}
                  >
                    Login
                  </button>
                  <button
                    className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-colors"
                    onClick={toggleSignup}
                  >
                    Sign Up
                    {isSignupOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Signup Dropdown Options */}
      {isSignupOpen && (
        <div className="absolute right-0 top-16 z-40 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="/signup/contractor"
              className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100"
            >
              Sign Up as Contractor
            </a>
            <a
              href="/signup/buyer"
              className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100"
            >
              Sign Up as Buyer
            </a>
            <a
              href="/signup/seller"
              className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100"
            >
              Sign Up as Seller
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
