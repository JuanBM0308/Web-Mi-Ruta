$(document).ready(function(){

    let correoUsuarioInicio = document.querySelector('#correoUsuarioInicio')
    correoUsuarioInicio.innerHTML = ''
    $.ajax({
        url: "http://localhost:8080/usuario/listar",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            correoUsuarioInicio.innerHTML += `<h5>${localStorage.getItem("UsuCorreo")}</h5>`   
            if (localStorage.getItem("UsuCorreo") == null){
                correoUsuarioInicio.innerHTML = '<h5>Invitado</h5>'
            }
        }
    });

});