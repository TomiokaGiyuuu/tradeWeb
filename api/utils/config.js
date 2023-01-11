import dotenv from 'dotenv';
dotenv.config();

export const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/test';
export const SERVER_PORT = process.env.SERVER_PORT || 5000;