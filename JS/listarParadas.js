$(document).ready(function(){

    let contenedorCardsRutas = document.querySelector('#contenedorCardsRutas')
    contenedorCardsRutas.innerHTML = ''
    $.ajax({
        url: "http://localhost:8080/Parada/ListarParada",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            for (i = 0; i <= respuesta.length; i++){
                contenedorCardsRutas.innerHTML += '<div style="margin: 5px;" class="col-lg-3 col-md-6 mb-3"> <div class="card card-cascade"> <!-- Parada imagen --> <div class="view view-cascade overlay"> <img style="height: 200px;" class="card-img-top" src="'+respuesta[i].imgParada+'"> </div> <!-- Parada contenido --> <div class="card-body card-body-cascade text-center"> <!-- Titulo Parada --> <h4 class="card-title"><strong>'+respuesta[i].nombrePara+'</strong></h4> <!-- Direccion --> <h6 class="font-weight-bold indigo-text py-2">'+respuesta[i].direccionPara+'</h6></div> </div> </div>'
            }
        }  
    });

});