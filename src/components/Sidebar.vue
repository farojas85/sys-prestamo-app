<script setup>
import { toRefs } from 'vue';
import {useRoute } from 'vue-router';
import Brandlogo from './Brandlogo.vue';
import SidebarSearch from './SidebarSearch.vue';
import SidebarUser from './SidebarUser.vue';
import SidebarMenu from './SidebarMenu.vue';

const props = defineProps({
    usuario: Object,
    menus: Array
});

const { usuario, menus } = toRefs(props);

</script>
<template>
    <aside class="main-sidebar elevation-4 sidebar-light-success">
        <Brandlogo></Brandlogo>
        <div class="sidebar">
            <SidebarUser :usuario="usuario"></SidebarUser>
            <!-- <SidebarSearch></SidebarSearch> -->
            <SidebarMenu :menus="menus"></SidebarMenu>
        </div>
    </aside>
</template>
