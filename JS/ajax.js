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

});