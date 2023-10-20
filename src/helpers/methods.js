export const defineTitle = (title) => {
    document.title =title + ' | PRESTAMOS'
}

export const getdataParamsPagination = ( data) => {
    return "?page=" + data.page + "&paginacion="+ data.paginacion + "&buscar=" +data.buscar;
}
