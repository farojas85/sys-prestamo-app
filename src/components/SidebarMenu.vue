<script setup>
import { toRefs } from 'vue';
import {useRoute } from 'vue-router';

const props = defineProps({
    menus: Array
});

const { menus } = toRefs(props);

const route = useRoute();
const ruta = (String(route.path).toLowerCase()).substring(1);

</script>
<template>
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-header">MEN&Uacute; PRINCIPAL</li>
            <li class="nav-item" v-for="menu in menus" :key="menu.id">
                <a :href="menu.slug" class="nav-link" 
                    :class="{ 'active': menu.slug == ruta }">
                    <i class="nav-icon" :class="menu.icono"></i>
                    <p>{{ menu.nombre }}</p>
                </a>
            </li>
        </ul>
    </nav>
</template>