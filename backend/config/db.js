import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
}

// add your mongoDB connection string in .env file as MONGODB_URI
// Do not use '@' symbol in your database user's password else it will show an error.