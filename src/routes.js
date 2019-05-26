import Login from './views/Login.vue'
import Photo from './views/Photo'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/photo',
        component: Photo,
        name: '',
        hidden: true
    }
];

export default routes;