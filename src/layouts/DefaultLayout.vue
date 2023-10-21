<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { cargarClasesDefaultLayout } from '../helpers';
import Preloader from '../components/Preloader.vue';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';
import Aside from '../components/Aside.vue';

import { useDatosSession } from '../composables/session';

const {usuario, menus, puede} = useDatosSession();

onMounted(() => {
    cargarClasesDefaultLayout();
});


</script>
<template>
    <div class="wrapper">
        <Preloader></Preloader>
        <Navbar :usuario="usuario"></Navbar>
        <Sidebar :usuario="usuario" :menus="menus"></Sidebar>
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
        <Footer></Footer>
        <Aside></Aside>
    </div>
</template>
