// Script to insert sample products into MongoDB
// Run: node insert-sample-data.js

const mongoose = require('mongoose');
require('dotenv').config();

const productSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    offerPrice: { type: Number, required: true },
    image: { type: [String], required: true },
    category: { type: String, required: true },
    date: { type: Number, required: true },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

const sampleProducts = [
    {
        "userId": "seller_001",
        "name": "Premium Wireless Headphones",
        "description": "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality. Perfect for music lovers and professionals.",
        "price": 4999,
        "offerPrice": 3499,
        "image": [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
            "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80"
        ],
        "category": "Electronics",
        "date": 1736587446000
    },
    {
        "userId": "seller_002",
        "name": "Smart Fitness Watch",
        "description": "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS tracking, sleep analysis, and 7-day battery life.",
        "price": 6999,
        "offerPrice": 4999,
        "image": [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
            "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=800&q=80",
            "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80"
        ],
        "category": "Wearables",
        "date": 1736587500000
    },
    {
        "userId": "seller_001",
        "name": "Professional Camera Backpack",
        "description": "Durable and waterproof camera backpack with customizable compartments, padded laptop sleeve, and ergonomic design for photographers on the go.",
        "price": 3499,
        "offerPrice": 2299,
        "image": [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
            "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&q=80"
        ],
        "category": "Accessories",
        "date": 1736587600000
    },
    {
        "userId": "seller_003",
        "name": "Organic Cotton T-Shirt",
        "description": "Super soft and breathable 100% organic cotton t-shirt. Available in multiple colors. Perfect for casual wear and eco-conscious consumers.",
        "price": 899,
        "offerPrice": 599,
        "image": [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"
        ],
        "category": "Fashion",
        "date": 1736587700000
    },
    {
        "userId": "seller_002",
        "name": "Stainless Steel Water Bottle",
        "description": "Eco-friendly insulated water bottle that keeps drinks cold for 24 hours and hot for 12 hours. Leak-proof design with 1L capacity.",
        "price": 1299,
        "offerPrice": 799,
        "image": [
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
            "https://images.unsplash.com/photo-1588978830456-cf8b5e1d0e8a?w=800&q=80",
            "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80"
        ],
        "category": "Home & Kitchen",
        "date": 1736587800000
    }
];

async function insertSampleData() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Check if products already exist
        const existingProducts = await Product.countDocuments();
        if (existingProducts > 0) {
            console.log(`⚠️  Database already has ${existingProducts} products.`);
            console.log('Do you want to add more products? (This script will not delete existing ones)');
        }

        // Insert sample products
        const result = await Product.insertMany(sampleProducts);
        console.log(`✅ Successfully inserted ${result.length} products!`);

        // Display inserted products
        result.forEach((product, index) => {
            console.log(`${index + 1}. ${product.name} - ₹${product.offerPrice} (${product.category})`);
        });

        mongoose.connection.close();
        console.log('\n✅ Database connection closed');

    } catch (error) {
        console.error('❌ Error inserting data:', error);
        mongoose.connection.close();
    }
}

insertSampleData();
