import axios from 'axios'

const BASE_URL = "https://cheeky-ecom.herokuapp.com/";
//const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2ZjNGYwNWYzYjg4MmVmNmU3MTY1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjg5NTkzNSwiZXhwIjoxNjUzMTU1MTM1fQ.Tu988SZR4q745Ev2ejONBgUKFTvHE4TGBLQk97rsBJw";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { authentication: `Bearer ${TOKEN}` }
});