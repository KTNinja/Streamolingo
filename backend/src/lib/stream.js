import {StreamChat} from "stream-chat"
import "dotenv/config"

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.error("Stream API key or secret is missing")
    process.exit(1);
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export default async function upsertStreamUser(userData){
    try{
        await streamClient.upsertUsers([userData]);
        return userData;
    } catch(error){
        console.error("Error upserting Stream user:", error);
    }
}

// Todo: do it later

export const generateStreamToken = (userId) => {};