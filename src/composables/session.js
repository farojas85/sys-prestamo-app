import jwt_decode from 'jwt-decode';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store';

export const useDatosSession = () => {
    const user_id = localStorage.getItem('token-api') ?
        JSON.parse( JSON.stringify(jwt_decode(localStorage.getItem('token-api')||""))).user : null;

    const { usuario, menus} = storeToRefs(useUserStore());
    const { cargarDatosSession, puede } = useUserStore();

    cargarDatosSession(user_id);

    //menus.value = user_menus

    return {
        usuario, menus,
        puede, cargarDatosSession
    }
}