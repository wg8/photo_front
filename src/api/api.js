import axios from 'axios';

let base = 'http://192.168.2.98:8081/baby';

export const requestLogin = params => { return axios.post(`${base}/user/login`, params).then(res => res.data); };
export const photoList = params => { return axios.post(`${base}/photo/user`, params).then(res => res.data); };
export const getCommemoration = params => { return axios.get(`${base}/commemoration`).then(res => res.data); };
export const uploadPhoto = params =>{ return axios.post(`${base}/photo/upload`,params).then(res => res.data)}