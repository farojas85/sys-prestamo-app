import {createRouter, createWebHistory} from 'vue-router';
//LAYOUTS
import LoginLayout from '../layouts/LoginLayout.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';

//PAGES
import Login from '../pages/auth/Login.vue';
import Dashboard from '../pages/Dashboard.vue';
// import Sistema from '../Pages/Sistema/Inicio.vue';
// import Configuraciones from '../Pages/Configuraciones/Inicio.vue';
// import Profile from '../Pages/Profile/Inicio.vue'
// import Almacen from '../Pages/Almacen/Inicio.vue';
// import Cotizaciones from '../Pages/Cotizacion/Inicio.vue';


const routes = [
    {
        path: '/', name:'Login', component: Login,
        meta: {layout: LoginLayout}
    },
    {
        path: '/dashboard', name:'Dashboard', component: Dashboard,
        meta: {layout: DefaultLayout, icono:'fas fa-tachometer-alt fa-fw'}
    },
    // {
    //     path: '/sistema', name:'Sistema', component: Sistema,
    //     meta: { layout: DefaultLayout, icono:'fab fa-windows fa-fw fa-fw'}
    // },
    // {
    //     path: '/configuraciones', name:'Configuraciones', component: Configuraciones ,
    //     meta:{ layout: DefaultLayout, icono: 'fas fa-cogs fa-fw'}
    // },
    // {
    //     path: '/perfil', name:'Perfil', component: Profile ,
    //     meta:{layout: DefaultLayout}
    // },
    // {
    //     path: '/almacen', name:'Almacén', component: Almacen ,
    //     meta:{ layout: DefaultLayout, icono: 'fa-solid fa-boxes-stacked fa-fw'}
    // },
    // {
    //     path: '/cotizaciones', name:'Almacén', component: Cotizaciones ,
    //     meta:{ layout: DefaultLayout, icono: 'fas fa-shopping-cart'}
    // }    
];

export default createRouter({
    history: createWebHistory(),
    routes
})