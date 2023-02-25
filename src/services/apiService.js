import axios from "axios";
import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWI3YmM1NjY3MGM3YjI2YTRkZGVlNjZiNTIyOGFiNyIsInN1YiI6IjYzZWU4YzE3N2YxZDgzMDBkYjhmYzAxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LnJ9hk8leW_b3weS3B3qxOfyP9m3IuVGNu3gMfATU9I';

    console.log(config)
    return config;
});

export {apiService}