import mongoose from "mongoose";

// Global cache taaki baar-baar connection open na ho
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        // process.env.MONGODB_URI aapke .env file se link uthayega
        cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => {
            console.log("✅ MongoDB Connected Successfully to QuickCartDB");
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error("❌ MongoDB connection error:", e);
        throw e;
    }

    return cached.conn;
};

export default connectDB;