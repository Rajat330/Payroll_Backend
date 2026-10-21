import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        phone: {
            type: String,
            required: false,
        },

        address: {
            type: String,
            required: false,
        },

        password: {
            type: String,
            required: true,
        },
        image : {
            type: String,
            required : false,
        }
    },
    {
        timestamps: true,
        collection: "userData"
    }
);

export default mongoose.model("userData", userSchema);