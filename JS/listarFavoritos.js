$(document).ready(function(){

    let contenedorCardsFavoritos = document.querySelector('#contenedorCardsFavoritos')
    $.ajax({
        url: "http://localhost:8080/ruta/listarFav/"+localStorage.getItem("UsuCorreo"),
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            //console.log(respuesta+"  ESTO ES RTA")
            for (i = 0; i <= respuesta.length; i++){
                if(respuesta == ''){
                    contenedorCardsFavoritos.innerHTML += '<h4 class="position-absolute top-50 start-50 translate-middle">Usted no tiene favoritos por el momento 😯</h4>'
                } else {
                    contenedorCardsFavoritos.innerHTML += '<div class="m-4"><div class="card text-center"><div class="card-header"><ul class="nav nav-tabs card-header-tabs" id="myTab"><li class="nav-item"><a style="color: #ff9933;" href="#lugarInicio'+i+'" class="nav-link active" data-bs-toggle="tab">Lugar Inicial</a></li><li class="nav-item"><a style="color: #ff9933;" href="#lugarFin'+i+'" class="nav-link" data-bs-toggle="tab">Lugar Final</a></li><li class="nav-item"><a style="color: #ff9933;" href="#horaInicio'+i+'" class="nav-link" data-bs-toggle="tab">Hora Inicial</a></li><li class="nav-item"><a style="color: #ff9933;" href="#horaFinal'+i+'" class="nav-link" data-bs-toggle="tab">Hora Final</a></li><li class="nav-item"><a style="color: #ff9933;" href="#diasDispo'+i+'" class="nav-link" data-bs-toggle="tab">Días Disponibles</a></li><li class="nav-item"> <button style="color: #ff9933;" id="eliFavorito" href="#eliminarFavorito'+i+'" value="'+respuesta[i].idRut+'" class="nav-link" data-bs-toggle="tab" onclick="eliminar_fav()"</button> <i class="bi bi-heartbreak"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heartbreak" viewBox="0 0 16 16"> <path d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38.094 38.094 0 0 0 .867-.59Zm-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922Zm-1.25 1.137a36.027 36.027 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3 1.815 4.537Zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z"/> </svg> </i> </a> </li></ul></div><div class="card-body"><div class="tab-content"><div class="tab-pane fade show active" id="lugarInicio'+i+'"><h5 class="card-title">'+respuesta[i].lugarInicioRut+'</h5><img style="width: 50px;" src="images/bandera-inicio.png" alt="FotoBanderaRoja"></div><div class="tab-pane fade" id="lugarFin'+i+'"><h5 class="card-title">'+respuesta[i].lugarDestinoRut+'</h5><img style="width: 50px;" src="images/bandera-fin.png" alt="FotoBanderaNegra"></div><div class="tab-pane fade" id="horaInicio'+i+'"><h5 class="card-title">'+respuesta[i].horaInicioRut+'</h5><img style="width: 50px;" src="images/hora-inicio.png" alt="FotoReloj"></div><div class="tab-pane fade" id="horaFinal'+i+'"><h5 class="card-title">'+respuesta[i].horaFinalRut+'</h5><img style="width: 50px;" src="images/hora-llegada.png" alt="FotoCampana"></div><div class="tab-pane fade" id="diasDispo'+i+'"><h5 class="card-title">'+respuesta[i].diasDisponiblesRut+'</h5><img style="width: 50px;" src="images/calendario.png" alt="fotoCalendario"></div></div></div></div></div></div>'
                }
            }
        }
    });

});