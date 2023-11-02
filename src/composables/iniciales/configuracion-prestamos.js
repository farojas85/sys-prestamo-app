import { ref } from "vue";
import jwt_decode from 'jwt-decode';
import { prestamoApi } from "../../api";
import { getConfigHeader, getdataParamsPagination, getConfigHeaderPost } from "../../helpers";

export const useConfiguracionPrestamo = () => {
    const errors = ref([]);
    const respuesta = ref([]);
    const config = getConfigHeader();
    const configPost = getConfigHeaderPost();
    const tipoConfiguraciones = ref([]);
    const frecuenciaPagos = ref([]);
    const aplicacionIntereses = ref([]);
    const aplicacionMoras = ref([]);

    const obtenerTipoConfiguraciones = async () => {
        let respond = await prestamoApi.get('/api/tipo-configuraciones/todos',config)

        if(respond.status == 404)
        {
            errors.value = respond.data.error
        }

        if(respond.status == 200)
        {
            tipoConfiguraciones.value = jwt_decode(respond.data).tipo_configuraciones
        }
    }

    const obtenerFrecuenciaPagos = async () => {
        let respond = await prestamoApi.get('/api/frecuencia-pagos/list',config)

        if(respond.status == 404)
        {
            errors.value = respond.data.error
        }

        if(respond.status == 200)
        {
            frecuenciaPagos.value = jwt_decode(respond.data).frecuencia_pagos
        }
    }

    const obtenerAplicacionIntereses = async () => {
        let respond = await prestamoApi.get('/api/aplicacion-intereses/list',config)

        if(respond.status == 404)
        {
            errors.value = respond.data.error
        }

        if(respond.status == 200)
        {
            aplicacionIntereses.value = jwt_decode(respond.data).aplicacion_intereses
        }
    }

    const obtenerAplicacionMoras = async () => {
        let respond = await prestamoApi.get('/api/aplicacion-moras/list',config)

        if(respond.status == 404)
        {
            errors.value = respond.data.error
        }

        if(respond.status == 200)
        {
            aplicacionMoras.value = jwt_decode(respond.data).aplicacion_moras
        }
    }

    const guardarConfiguracionPrestamo = async(data) => {
        errors.value = [];
        respuesta.value = []
        try {
            let respond = await prestamoApi.post('/api/configuracion-prestamos',data,configPost);

            respond = jwt_decode(respond.data)
            errors.value = []
            if(respond.ok==1)
            {
                respuesta.value = respond
            }

        } catch (error) {
            errors.value = [];
            if(error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }

    return {
        tipoConfiguraciones, frecuenciaPagos, aplicacionIntereses, aplicacionMoras, errors,
        respuesta,
        obtenerTipoConfiguraciones, obtenerFrecuenciaPagos, obtenerAplicacionIntereses,
        obtenerAplicacionMoras, guardarConfiguracionPrestamo
    }
}