import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-mj47unl-shard-00-00.qxabv4p.mongodb.net:27017,ac-mj47unl-shard-00-01.qxabv4p.mongodb.net:27017,ac-mj47unl-shard-00-02.qxabv4p.mongodb.net:27017/?ssl=true&replicaSet=atlas-v4snik-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;