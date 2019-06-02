import axios from 'axios';

let base = 'http://47.95.236.106:8081/baby';

export const requestLogin = params => { 
    axios.defaults.withCredentials = false;
    return axios.post(`${base}/user/login`, params).then(res => res.data); 
};
export const photoList = params => { 
    axios.defaults.withCredentials = true;
    return axios.post(`${base}/photo/user`, params).then(res => res.data); 
};
export const getCommemoration = params => {
    axios.defaults.withCredentials = true;
    return axios.get(`${base}/commemoration`).then(res => res.data); 
};
export const uploadPhoto = params =>{ 
    axios.defaults.withCredentials = true;
    return axios.post(`${base}/photo/upload`,params).then(res => res.data)
}