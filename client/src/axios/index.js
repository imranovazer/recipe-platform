import axios from "axios";


const token  = localStorage.getItem("token")
export const axiosPrivate = axios.create(
    {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
)