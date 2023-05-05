import axios from "axios";

export const Api =axios.create({
baseURL:"https://motolink.onrender.com/",
timeout:50000

})