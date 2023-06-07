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


    $('#eliminarRuta').on('click', function(){
        let eliminar_ruta = $('#idRutaEli').val();
        console.log(eliminar_ruta)
        $.ajax({
            url: "http://localhost:8080/Ruta/EliminarRuta/"+parseInt(eliminar_ruta),
            type: "DELETE",
            datatype: "JSON",
            success: function eliminar_ruta(respuesta) {
                if (respuesta){
                    Swal.fire({
                        title: 'Eliminada!',
                        text: 'Se elimino la ruta 🗺',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        })
    });


    $('#agregarRuta').on('click', function(){
        let datos = {
            LugarInicio: $('#LugarInicio').val(),
            LugarFinal: $('#LugarFinal').val(),
            HI: $('#HI').val(),
            HF: $('#HF').val(),
        }
        let datosEnvio = JSON.stringify(datos)
        $.ajax({
            url: "http://localhost:8080/Ruta/AgregarRuta",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function agregar_ruta(respuesta){
                if (respuesta){
                    Swal.fire({
                        title: 'Agregada!',
                        text: 'Se agrego la ruta ⭐',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        });
    });

});