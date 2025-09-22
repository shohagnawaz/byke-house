import axios from "axios";

const axiosSecure = axios.create({
    baseURL: `https://byke-house-server.vercel.app` 
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;