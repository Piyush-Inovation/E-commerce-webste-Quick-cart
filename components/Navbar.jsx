"use client"
import React, { useState } from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk()
  const [search, setSearch] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearch = () => {
    if (search) {
      router.push('/all-products?search=' + search);
    }
  }

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <div className={`group relative flex items-center border ${isSearchOpen ? 'border-gray-300' : 'border-transparent'} rounded-full px-2 py-1 transition-all duration-300 bg-white/50 backdrop-blur-sm`}>
          <input
            type="text"
            placeholder="Search for products..."
            className={`outline-none text-sm text-gray-700 transition-all duration-300 bg-transparent placeholder-gray-500 ${isSearchOpen ? 'w-64 px-2' : 'w-0 px-0 opacity-0'}`}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            value={search}
          />
          <button onClick={() => {
            if (isSearchOpen && search) {
              handleSearch();
            } else {
              setIsSearchOpen(prev => !prev);
            }
          }}>
            <Image
              className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200 text-gray-600"
              src={assets.search_icon}
              alt="search icon"
            />
          </button>
        </div>
        {user
          ?
          <>
            <UserButton >
              <UserButton.MenuItems>
                <UserButton.Action label='Cart' labelIcon={<CartIcon />} onClick={() => router.push('/cart')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label='My orders' labelIcon={<CartIcon />} onClick={() => router.push('/my-orders')} />
              </UserButton.MenuItems>



            </UserButton>
          </> :
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        {user
          ?
          <>
            <UserButton >
              <UserButton.MenuItems>
                <UserButton.Action label='Home' labelIcon={<HomeIcon />} onClick={() => router.push('/')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label='Products' labelIcon={<box />} onClick={() => router.push('/all-products')} />
              </UserButton.MenuItems>

              <UserButton.MenuItems>
                <UserButton.Action label='Cart' labelIcon={<CartIcon />} onClick={() => router.push('/cart')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label='My orders' labelIcon={<BagIcon />} onClick={() => router.push('/my-orders')} />
              </UserButton.MenuItems>



            </UserButton>
          </> : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>}
      </div>
    </nav>
  );
};

export default Navbar;