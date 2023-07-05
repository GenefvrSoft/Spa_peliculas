import Swal from 'sweetalert2';


export const alertErrors = async (msgTitle , title = "Ha ocurrido un error") => {
    Swal.fire({
        title,
        position: 'center',
        icon: 'error',
        text: msgTitle,
        showConfirmButton: true
    })

    
}

export const alertSuccess = (msg, position = 'top-end') => {
    Swal.fire({
        position,
        icon: 'success',
        text: msg,
        showConfirmButton: false,
        timer: 1300
    })
}


