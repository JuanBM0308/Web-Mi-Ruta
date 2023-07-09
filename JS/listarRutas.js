$(document).ready(function(){

    let contenedorCardsRuta = document.querySelector('#contenedorCardsRuta');
    contenedorCardsRuta.innerHTML = '';

    $.ajax({
        url: "http://localhost:8080/ruta/listar",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            for (i = 0; i < respuesta.length; i++){
                contenedorCardsRuta.innerHTML += `
                  <div class="m-4">
                    <div class="card text-center">
                      <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab">
                          <li class="nav-item">
                            <a style="color: #ff9933;" href="#lugarInicio${i}" class="nav-link active" data-bs-toggle="tab">Lugar Inicial</a>
                          </li>
                          <li class="nav-item">
                            <a style="color: #ff9933;" href="#lugarFin${i}" class="nav-link" data-bs-toggle="tab">Lugar Final</a>
                          </li>
                          <li class="nav-item">
                            <a style="color: #ff9933;" href="#horaInicio${i}" class="nav-link" data-bs-toggle="tab">Hora Inicial</a>
                          </li>
                          <li class="nav-item">
                            <a style="color: #ff9933;" href="#horaFinal${i}" class="nav-link" data-bs-toggle="tab">Hora Final</a>
                          </li>
                          <li class="nav-item">
                            <a style="color: #ff9933;" href="#diasDispo${i}" class="nav-link" data-bs-toggle="tab">Días Disponibles</a>
                          </li>
                          <li class="nav-item">
                            <a style="color: #00cc00;" href="#agregarFavorito${i}" class="nav-link" data-bs-toggle="tab">Agregar Favorito</a>
                          </li>
                        </ul>
                      </div>
                      <div class="card-body">
                        <div class="tab-content">
                          <div class="tab-pane fade show active" id="lugarInicio${i}">
                            <h5 class="card-title">${respuesta[i].lugarInicioRut}</h5>
                            <img style="width: 50px;" src="images/bandera-inicio.png" alt="FotoBanderaRoja">
                          </div>
                          <div class="tab-pane fade" id="lugarFin${i}">
                            <h5 class="card-title">${respuesta[i].lugarDestinoRut}</h5>
                            <img style="width: 50px;" src="images/bandera-fin.png" alt="FotoBanderaNegra">
                          </div>
                          <div class="tab-pane fade" id="horaInicio${i}">
                            <h5 class="card-title">${respuesta[i].horaInicioRut}</h5>
                            <img style="width: 50px;" src="images/hora-inicio.png" alt="FotoReloj">
                          </div>
                          <div class="tab-pane fade" id="horaFinal${i}">
                            <h5 class="card-title">${respuesta[i].horaFinalRut}</h5>
                            <img style="width: 50px;" src="images/hora-llegada.png" alt="FotoCampana">
                          </div>
                          <div class="tab-pane fade" id="diasDispo${i}">
                            <h5 class="card-title">${respuesta[i].diasDisponiblesRut}</h5>
                            <img style="width: 50px;" src="images/calendario.png" alt="fotoCalendario">
                          </div>
                          <div class="tab-pane fade" id="agregarFavorito${i}">
                            <h5 class="card-title">Agregar Favorito</h5>
                            <button onclick="agregarFavorito(${respuesta[i].idRut})" class="btn btn-success">Agregar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`;
            }
        }  
    });

});

  