import Swal from "sweetalert2";

export const showAlertSuccess = (title, text) => {
    Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

export const showAlertError = (message, button) => {
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: button,
    });
}