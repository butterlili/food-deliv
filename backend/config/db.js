import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://saintsouveraine:bagong24@cluster0.udmgekd.mongodb.net/food').then(()=>console.log("DB Connected"));
}