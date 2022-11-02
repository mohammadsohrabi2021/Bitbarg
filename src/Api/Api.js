import axios from "axios";

const options = axios.create ({
    method: 'GET',
    baseURL: 'https://coinranking1.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': 'dabeea4bd2msh3ce49274ccab7e2p1cb983jsn36cde7bd0b72',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
})
export default options