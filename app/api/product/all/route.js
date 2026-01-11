import { NextResponse } from 'next/server';
import connectDB from '@/components/config/db';
import Product from '@/components/models/Product';

export async function GET(request) {
    try {
        // Database connect karein
        await connectDB();

        // Saare products fetch karein
        const products = await Product.find({});

        return NextResponse.json({
            success: true,
            count: products.length,
            products
        });

    } catch (error) {
        console.error("Fetch All Products Error:", error);
        return NextResponse.json({
            success: false,
            message: "Failed to fetch products",
            error: error.message
        }, { status: 500 });
    }
}
