import axios from 'axios';

let base = 'http://127.0.0.1:8081/baby';

export const requestLogin = params => { return axios.post(`${base}/user/login`, params).then(res => res.data); };
export const photoList = params => { return axios.post(`${base}/photo/user`, params).then(res => res.data); };