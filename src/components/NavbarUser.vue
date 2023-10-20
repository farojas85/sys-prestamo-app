<script setup></script>
<template>
    <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
            <img src="foto.png"  class="img-circle img-sm mr-1"/>Admin Master
        </a>
        <div class="dropdown-menu dropdown-menu-right">
            <!-- <span class="dropdown-item dropdown-header">15 Notifications</span> -->
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
                <i class="fas fa-id-badge fa-fw mr-2"></i> Mi Perfil
                <!-- <span class="float-right text-muted text-sm">3 mins</span> -->
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
                <i class="fas fa-users mr-2"></i> 8 friend requests
                <!-- <span class="float-right text-muted text-sm">12 hours</span> -->
            </a>
            <div class="dropdown-divider"></div>
            <a href="" class="dropdown-item" @click.prevent="cerrarSesion">
                <i class="fas fa-power-off fa-fw mr-2"></i> Cerrar Sesi&oacute;n
                <!-- <span class="float-right text-muted text-sm">2 days</span> -->
            </a>
            <!-- <div class="dropdown-divider"></div> -->
            <!-- <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a> -->
        </div>
    </li>
</template>