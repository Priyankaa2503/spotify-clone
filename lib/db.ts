import mongoose from "mongoose"
const url = process.env.MONGO_URL as string;
let connection : typeof mongoose
const db = async ()=>{
    if(!connection) connection = await mongoose.connect(url);
    console.log("db")
    return connection;

}
export default db;