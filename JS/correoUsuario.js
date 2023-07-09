$(document).ready(function(){

    let nombreUsuarioInicioSesion = document.querySelector('#nombreUsuarioInicioSesion')
    nombreUsuarioInicioSesion.innerHTML = ''
    $.ajax({
        url: "http://localhost:8080/usuario/listar",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            nombreUsuarioInicioSesion.innerHTML += `<h5>${localStorage.getItem("UsuCorreo")}</h5>`   
            if (localStorage.getItem("UsuCorreo") == null){
                nombreUsuarioInicioSesion.innerHTML = '<h5>Invitado</h5>'
            }
        }
    });

});