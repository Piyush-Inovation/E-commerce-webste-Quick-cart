import { NextResponse } from 'next/server';
import connectDB from '@/components/config/db';
import Product from '@/components/models/Product';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('query');

        if (!query || query.trim() === "") {
            return NextResponse.json({ success: false, message: "Search term is required" }, { status: 400 });
        }

        // DB connect karein
        await connectDB();

        // Database mein search karein (Case-insensitive)
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
                { category: { $regex: query, $options: 'i' } }
            ]
        });

        return NextResponse.json({
            success: true,
            count: products.length,
            products
        });

    } catch (error) {
        console.error("Search API Error:", error);
        return NextResponse.json({
            success: false,
            message: "Database connection failed",
            error: error.message
        }, { status: 500 });
    }
}