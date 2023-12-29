import Swal from "sweetalert2";

export const showAlertSuccess = (title, text) => {
    Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 2000,
    });
}

export const showAlertError = (message, button) => {
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: button,
        timer: 2000,
    });
}