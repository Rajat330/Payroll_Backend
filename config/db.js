import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const uri = process.env.USE_PROXY === 'true'
            ? process.env.MONGODB_URI_PROXY
            : process.env.MONGODB_URI
        const conn = await mongoose.connect(uri);

        console.log(`Database successfully connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Connection error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDb;