//Parte logica HTML Alertas
//Favoritos
function favoritos() {
    Swal.fire({
        title: 'Agregado!',
        text: 'Se agregó a fovoritos 💖',
        icon: 'success',
        confirmButtonText: 'Super!'
    })
}

//Eliminar Favoritos
function eli_favoritos() {
    Swal.fire({
        title: 'Eliminado!',
        text: 'Se elimino de fovoritos 😴',
        icon: 'success',
        confirmButtonText: 'Ok!'
    })
}

//Login Temporal 
/* function ingresar() {
    var usu_ing = document.getElementById('correo_ing').value
    var pass_ing = document.getElementById('contraseña_ing').value

    //Guardado usuarios
    let usuarios = new Map()
    usuarios.set('Juan.Barbosa@miruta.com', '12345')
    usuarios.set('Johan.Lopez@miruta.com', '0000')

    if (usu_ing == 'Juan.Barbosa@miruta.com' && pass_ing == "12345") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
          
        Toast.fire({
            icon: 'success',
            title: 'Bienvenido al sistema'
        })

        //Redirección a admin.html
        setTimeout( function() { window.location = "administrador.html"; }, 3200 );
    } else {
        Swal.fire({
            title: 'Denegado!',
            text: 'Usuario no encontrado 😓',
            icon: 'error',
            confirmButtonText: 'Ok!'
        })
    }
} */

//Ver parada mapa
function ver_parada_mapa() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
      
    Toast.fire({
        icon: 'info',
        title: 'Preparando el mapa! 🌍'
    })
}