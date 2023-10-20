<script setup>
    import Brandlogo from './Brandlogo.vue';
    import SidebarSearch from './SidebarSearch.vue';
    import SidebarUser from './SidebarUser.vue';
    import SidebarMenu from './SidebarMenu.vue';
</script>
<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <Brandlogo></Brandlogo>
        <div class="sidebar">
            <SidebarUser></SidebarUser>
            <!-- <SidebarSearch></SidebarSearch> -->
            <SidebarMenu></SidebarMenu>
        </div>
    </aside>
</template>
