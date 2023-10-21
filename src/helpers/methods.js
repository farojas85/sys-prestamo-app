import jwt_decode from 'jwt-decode';

export const defineTitle = (title) => {
    document.title =title + ' | PRESTAMOS'
}

export const getdataParamsPagination = ( data) => {
    return "?page=" + data.page + "&paginacion="+ data.paginacion + "&buscar=" +data.buscar;
}

export const getConfigHeader = () => {

    if(localStorage.getItem('token-api'))
    {
        let decode =  jwt_decode(JSON.parse(localStorage.getItem('token-api')||null))

        let token = decode.token

        return {
            headers:{
                'Authorization': 'JWT ' + token
            }
        }
    }
}

export const getConfigHeaderPost = () => {
    if(localStorage.getItem('token-api'))
    {
        let decode =  jwt_decode(JSON.parse(localStorage.getItem('token-api')||null))

        let token = decode.token

        return {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'JWT ' + token
            }
        }
    }
}

export const getConfigHeaderUpload = () => {

    if(localStorage.getItem('token-api'))
    {
        let decode =  jwt_decode(JSON.parse(localStorage.getItem('token-api')||null))

        let token = decode.token

        return {
            headers:{
                'Authorization': 'JWT ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
    }
}