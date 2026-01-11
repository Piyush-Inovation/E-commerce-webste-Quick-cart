"use client"
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";
import { useSearchParams } from "next/navigation";

const AllProducts = () => {

    const { products: contextProducts } = useAppContext();
    const [displayProducts, setDisplayProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search');

    useEffect(() => {
        if (searchQuery) {
            setLoading(true);
            fetch(`/api/product/search?query=${encodeURIComponent(searchQuery)}`)
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setDisplayProducts(data.products);
                    } else {
                        setDisplayProducts([]);
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error searching products:", err);
                    setDisplayProducts([]);
                    setLoading(false);
                });
        } else {
            setDisplayProducts(contextProducts);
        }
    }, [searchQuery, contextProducts]);

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
                <div className="flex flex-col items-end pt-12">
                    <p className="text-2xl font-medium">
                        {searchQuery ? `Search Results for "${searchQuery}"` : 'All products'}
                    </p>
                    <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
                </div>
                {loading ? (
                    <div className="w-full flex justify-center items-center py-20">
                        <p className="text-gray-500">Searching...</p>
                    </div>
                ) : displayProducts.length === 0 && searchQuery ? (
                    <div className="w-full flex justify-center items-center py-20">
                        <p className="text-gray-500">No products found for "{searchQuery}"</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
                        {displayProducts.map((product, index) => <ProductCard key={index} product={product} />)}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default AllProducts;
