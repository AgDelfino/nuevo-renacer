import axios from "axios";

const BASE_URL = "https://tflzabeiafnjurcbqwtv.supabase.co/rest/v1"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmbHphYmVpYWZuanVyY2Jxd3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0MTQ2MjEsImV4cCI6MTk5MTk5MDYyMX0.-3ug8UlugLKdo52GFNPqiX6WejkS1FkNvOg-Lf71_Kk"

export const $client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "apikey": TOKEN,
    "Authorization": `Bearer ${TOKEN}`
  }
})