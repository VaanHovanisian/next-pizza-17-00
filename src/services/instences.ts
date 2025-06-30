import axios from "axios";

export const axsiosInstance =  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})