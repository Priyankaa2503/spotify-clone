import mongoose, { connection } from "mongoose"
export async function connect (){
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on('connection',()=>{
            console.log("db connected")
        })
        connection.on('error',(err)=>{
            console.log(err);
            process.exit()
        })

    }
    catch(error){
        console.log("Something went wrong")
        console.log(error)

    }
}
