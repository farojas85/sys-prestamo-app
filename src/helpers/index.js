import { inject } from 'vue';

export * from './body';

export * from './methods';

export const useHelper = () => {
    const Swal = inject('Swal');

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    const soloNumeros = (evt) => {
        evt = (evt) ? evt : window.event
        var charCode = (evt.which) ? evt.which : evt.keyCode

        if((charCode > 31 && (charCode< 48 || charCode > 57)) && charCode !=48 )
        {
            evt.preventDefault()
        } else {
            return true
        }
    }

    return {
        Swal, Toast, soloNumeros
    }
}