$(document).ready(function(){

    $('#eliminarParada').on('click', function(){
        let eliminar_parada = $('#idParadaEli').val();
        console.log(eliminar_parada)
        $.ajax({
            url: "http://localhost:8080/Parada/EliminarParada/"+parseInt(eliminar_parada),
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
            nombrePara: $('#nombreParada').val(),
            direccionPara: $('#direcParada').val(),
            latitud: $('#latiParada').val(),
            longitud: $('#longiParada').val(),
            imgParada: $('#imgParada').val()
        }
        let datosEnvio = JSON.stringify(datos)
        $.ajax({
            url: "http://localhost:8080/Parada/AgregarParada",
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

});