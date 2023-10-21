import { defineStore } from "pinia";
import jwt_decode from 'jwt-decode';
import { prestamoApi } from "../api";
import { getConfigHeader } from "../helpers";

export const useUserStore = defineStore({
    id:'usuario',
    state: () => ({
        usuario:{},
        roles:[],
        menus:[],
        permisos:[]
    }),
    actions:{
        async cargarDatosSession(id) {
            let respond = await prestamoApi.get('/api/users/data?id='+id, getConfigHeader())
                            .then(respuesta => respuesta.data)
            ;
            this.usuario = jwt_decode(respond).usuario
            this.usuario.foto = import.meta.env.VITE_APP_API_URL+this.usuario.foto;
            // this.roles = this.usuario.roles.map(role => role.slug) ?? [];
            this.menus = this.usuario.menus ?? [];
            this.permisos = this.usuario.permisos ?? [];
        },
        puede(slug) {
            if(this.permisos)
            {
                const todo = this.permisos.find(p => p.slug == slug)
                if(todo)
                {
                    return true;
                }
            }
            return false;
        }
    }
});