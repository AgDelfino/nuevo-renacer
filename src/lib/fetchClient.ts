import axios from "axios";

const BASE_URL = "https://tflzabeiafnjurcbqwtv.supabase.co/rest/v1"
const TOKEN = /* process.env.TOKEN || */process.env.NEXT_PUBLIC_TOKEN

export const $client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "apikey": TOKEN,
    "Authorization": `Bearer ${TOKEN}`
  }
})