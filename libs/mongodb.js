import mongoose from "mongoose";

const connectMongDB = async () => {
    try{
        await mongoose.connect(process.env.MANGODB_URI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error);
    }
}

export default connectMongDB;