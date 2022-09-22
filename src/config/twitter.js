import * as dotenv from 'dotenv';
dotenv.config();

export default {
    appKey      : process.env.APP_KEY || '',
    appSecret   : process.env.APP_SECRET || '',
    accessToken : process.env.ACCESS_TOKEN || '',
    accessSecret: process.env.ACCESS_SECRET || '',
}