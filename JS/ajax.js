$(document).ready(function(){

    $('#eliminarParada').on('click', function(){
        let eliminar_parada = $('#idParadaEli').val();
        console.log(eliminar_parada)
        $.ajax({
            url: "http://localhost:8080/parada/eliminar/"+parseInt(eliminar_parada),
            type: "DELETE",
            datatype: "JSON",
            success: function eliminar_parada(respuesta) {
                if (respuesta){
                    Swal.fire({
                        title: 'Eliminada!',
                        text: 'Se elimino la parada 😴',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        })
    });

    $('#agregarParada').on('click', function(){
        let datos = {
            nombrePar: $('#nombreParada').val(),
            direccionPar: $('#direcParada').val(),
            latitudPar: $('#latiParada').val(),
            longitudPar: $('#longiParada').val(),
            imgPar: $('#imgParada').val()
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "http://localhost:8080/parada/guardar",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function agregar_parada(respuesta){
                if (respuesta){
                    Swal.fire({
                        title: 'Agregada!',
                        text: 'Se agrego la parada ⭐',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        });
    });


    $('#eliminarRuta').on('click', function(){
        let eliminar_ruta = $('#idRutaEli').val();
        console.log(eliminar_ruta)
        $.ajax({
            url: "http://localhost:8080/ruta/eliminar/"+parseInt(eliminar_ruta),
            type: "DELETE",
            datatype: "JSON",
            success: function eliminar_ruta(respuesta) {
                if (respuesta == "{'respuesta' : 'Ruta eliminada con exito'}"){
                    Swal.fire({
                        title: 'Eliminada!',
                        text: 'Se elimino la ruta 🗺',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al eliminar ruta 😫',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        })
    });


    $('#agregarRuta').on('click', function(){
        let datos = {
            lugarInicioRut: $('#LugarInicio').val(),
            lugarDestinoRut: $('#LugarFinal').val(),
            horaInicioRut: $('#HI').val(),
            horaFinalRut: $('#HF').val(),
            diasDisponiblesRut: $('#diasDisponibles').val()
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "http://localhost:8080/ruta/guardar",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function agregar_ruta(respuesta){
                if (respuesta == "{'respuesta': 'Ruta agregada con exito'}"){
                    Swal.fire({
                        title: 'Agregada!',
                        text: 'Se agrego la ruta ⭐',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al agregar ruta 🤔',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        });
    });

    $('#agregarBus').on('click', function(){
        let datos = {
            placaBus: $('#placa').val()
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "http://localhost:8080/bus/guardar",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function agregar_bus(respuesta){
                if (respuesta == "{'respuesta': 'Bus agregado con exito'}"){
                    Swal.fire({
                        title: 'Agregado!',
                        text: 'Se agrego un bus ⭐🚌',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al agregar bus 💔🚌',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        });
    });

    $('#eliminarBus').on('click', function(){
        let eliminar_bus = $('#BusEli').val();
        console.log(eliminar_bus)
        $.ajax({
            url: "http://localhost:8080/bus/eliminar/"+eliminar_bus,
            type: "DELETE",
            datatype: "JSON",
            success: function eliminar_bus(respuesta) {
                if (respuesta == "{'respuesta':'Bus eliminado con exito'}"){
                    Swal.fire({
                        title: 'Eliminado!',
                        text: 'Se elimino el bus 🥰',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al eliminar bus 💢',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        })
    });

    //Login
    $('#ingreso_usu').on('click', function(){
        let datos = {
            correoUsu: $('#correo_ing').val(),
            contraseniaUsu: $('#contraseña_ing').val()
        }
        let datosEnvio = JSON.stringify(datos)
        //console.log(datosEnvio)
        $.ajax({
            url: "http://localhost:8080/usuario/login",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function ingresar(respuesta){
                //let coco = JSON.stringify(respuesta)
                //console.log(coco)
                if (respuesta == "{\n\"acceso\": false\n}"){
                    Swal.fire({
                        title: 'Denegado!',
                        text: 'Usuario no encontrado 😓',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    if (respuesta == "{\n\"acceso\": true,\n\"idUsu\": 1\n}" || respuesta == "{\n\"acceso\": true,\n\"idUsu\": 2\n}" || respuesta == "{\n\"acceso\": true,\n\"idUsu\": 3\n}"){
                        let correoValLocal = $('#correo_ing').val()
                        localStorage.setItem("UsuCorreo", correoValLocal); //Esto guarda la variable de sesion
                        function readCookie(name) {

                            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
                          
                        }
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
                    } else  {
                        let correoValLocal = $('#correo_ing').val()
                        localStorage.setItem("UsuCorreo", correoValLocal); //Esto guarda la variable de sesion
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
                
                        //Redirección a index.html
                        setTimeout( function() { window.location = "index.html"; }, 3200 );
                    }
                }
            }
        });
    });

    //Agregar Usuario Admin
    $('#agregarNewUsu').on('click', function(){
        let datos = {
            correoUsu: $('#correoUsu').val(),
            contraseniaUsu: $('#contraseñaUsu').val(),
            nombreUsu: $('#nombreUsu').val(),
            fotoUsu: $('#fotoNewUsu').val(),
            tipoUsuario: $('#RolUsu').val()
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "http://localhost:8080/usuario/guardar",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function agregar_usuario(respuesta){
                if (respuesta == "{'respuesta': 'Usuario agregado con exito'}"){
                    Swal.fire({
                        title: 'Agregado!',
                        text: 'Se agrego el usuario 👍',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al agregar el usuario 👎',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        });
    });

    //Agregar usuario por la persona
    $('#boton_registrar').on('click', function(){
        let datos = {
            correoUsu: $('#correo_usu').val(),
            contraseniaUsu: $('#contraseña_usu').val(),
            nombreUsu: $('#nombre_completo_usu').val(),
            fotoUsu: $('#foto_usuario_regi').val(),
            tipoUsuario: 0
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "http://localhost:8080/usuario/guardar",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function agregar_usuario(respuesta){
                if (respuesta){
                    Swal.fire({
                        title: 'Felicitaciones!',
                        text: 'Se ha registrado con exito ❤',
                        icon: 'success',
                        confirmButtonText: 'Wow!'
                    })
                }
            }
        });
    });

});