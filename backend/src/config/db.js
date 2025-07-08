import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        if (!ENV.MONGO_URI) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }

        await mongoose.connect(ENV.MONGO_URI);
        console.log('Connected to MongoDB Successfully💹');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};