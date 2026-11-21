// import { MongoClient } from 'mongodb';

// const client = new MongoClient("mongodb+srv://<db_username>:jO2bwAUh0l8I33DA@cluster0.qjds24r.mongodb.net/");

// export async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log("You successfully connected to MongoDB!");
//     return client;
//   } catch (err) {
//     console.dir(err);
//   }
// }

// // Call this only when your application terminates
// export async function disconnectFromMongoDB() {
//   await client.close();
// }

const mongoose  = require("mongoose");

const connectDB = async () =>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  }catch (err){
    console.log("MongoDB connection failed.",err);
  }
}

module.exports = connectDB;