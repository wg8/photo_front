import Login from './views/Login.vue'
import Photo from './views/Photo'
import Upload from './views/Upload'

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
    },
    {
        path: '/upload',
        component: Upload,
        name: '',
        hidden: true
    },
];

export default routes;