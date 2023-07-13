var map = L.map('map', {
  center: [4.70612, -74.2307],
  zoom: 13
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Crear el ícono personalizado del bus
var busIcon = L.icon({
  iconUrl: 'images/bus-pin.png',  
  iconSize: [40, 40],  
  iconAnchor: [16, 16]  
});

var mosquera = L.marker([4.70612, -74.2307],
{alt: 'Mosquera'}).addTo(map)
.bindPopup('Esto es Mosquera - Cundinamarca!');

var marker = L.marker([4.70612, -74.2307],{ icon: busIcon }).addTo(map);

var coordinates = [
  [4.709189281272594, -74.22617911556067],
  [4.707136295601411, -74.2288345023973],
  [4.707088178677684, -74.2292529269617],
  [4.708237637627642, -74.23064767561131],
  [4.706783438067569, -74.23184930526398],
  [4.710857327672821, -74.23694013792701],
  [4.711621847622489, -74.23761069025763],
  [4.7126376420172456, -74.2381954117643],
  [4.712963765189879, -74.23847436160504],
  [4.712958418909996, -74.23880159107208],
  [4.7329763452361675, -74.26304615833237]
  // Añadir más coordenadas si es necesario
];

var currentIndex = 0;

// Mover el marcador
function moveMarker() {
  if (currentIndex < coordinates.length) {
    marker.setLatLng(coordinates[currentIndex]).update();
    currentIndex++;
    setTimeout(moveMarker, 2000); // Mover cada 2 segundos
  }
}

// Iniciar el movimiento del marcador
moveMarker();

/* TOMA COORDENADA DE INICIO Y FIN */
document.getElementById('lugar_inicio').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,17);
  L.marker(coords,{alt: 'Inicio de la Ruta'}).addTo(map).bindPopup('Inicio 🚩');
});

document.getElementById('lugar_fin').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,17);
  L.marker(coords,{alt: 'Fin de la Ruta'}).addTo(map).bindPopup('Fin 🏁');
});

// TRAZAR COORDENADAS CON SMART MAP
document.getElementById('lugar_inicio').addEventListener('change',function(e){
  let coords_ini = e.target.value.split(","); 
  console.log("INICIO ",coords_ini)

  document.getElementById('lugar_fin').addEventListener('change',function(e){
      let coords_fin = e.target.value.split(",");
      console.log("FIN ",coords_fin)

      L.Routing.control({
        waypoints: [
          L.latLng(coords_ini),
          L.latLng(coords_fin)
        ],
        language: 'es'
      }).addTo(map);
  });
});

//// PARTE LOGICA HTML
//Cerrar Sesion
function cerrar_sesion() {
  Swal.fire({
      title: 'Sesión Cerrada!',
      text: 'Hasta Pronto',
      icon: 'success',
      confirmButtonText: 'Bye Bye!',
      customClass: {
          confirmButton: 'disabled btn btn-success',
      },
      buttonsStyling: false
  })

  localStorage.clear(); //Modificar variable para cierre

  //Redirección a index.html
  setTimeout( function() { window.location = "index.html"; }, 2000 );
}

//Eliminar Fav
function eliminarFavorito(index) {
  //alert(index)
  const usuarioHasRutaModelo = {
    correoUsu: localStorage.getItem("UsuCorreo"), // Reemplaza con el correo del usuario
    idRut: index, // Reemplaza con el ID de la ruta correspondiente
  };

  // Realizar la solicitud AJAX
  $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/ruta/eliminarFav',
    data: JSON.stringify(usuarioHasRutaModelo),
    contentType: 'application/json',
    success: function (response) {
      //console.log(response)
      if (response == "{'respuesta': 'Eliminada de favoritos'}") {
          // La ruta favorita se eliminó correctamente
          // Realiza las acciones necesarias, como actualizar la interfaz de usuario
          Swal.fire({
              title: 'Bye bye!',
              text: 'Se elimino tu favorito 😏',
              icon: 'success',
              confirmButtonText: 'Ok!'
          })
          setTimeout( function() { window.location = "favoritos.html"; }, 1500 );
      } else {
          // No se pudo eliminar la ruta favorita
          Swal.fire({
              title: 'Oh oh!',
              text: 'Hubo un error al eliminar 😥',
              icon: 'error',
              confirmButtonText: 'Vale!'
          })
          setTimeout( function() { window.location = "favoritos.html"; }, 1500 );
      }
    },
    error: function () {
      // Ocurrió un error en la solicitud AJAX
      console.log('Error al realizar la solicitud AJAX');
    }
  });
}

//Agregar Fav
function agregarFavorito(index) {
  const usuarioHasRutaModelo = {
    correoUsu: localStorage.getItem("UsuCorreo"), 
    idRut: index, 
  };

  // Realizar la solicitud AJAX
  $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/ruta/agregarFav',
    data: JSON.stringify(usuarioHasRutaModelo),
    contentType: 'application/json',
    success: function (response) {
      if (response == "{'respuesta': 'Agregada a favoritos'}") {
          // La ruta se agregó como favorita correctamente
          // Realiza las acciones necesarias, como actualizar la interfaz de usuario
          Swal.fire({
          title: 'Añadido!',
          text: 'Se agrego tu favorito 💖',
          icon: 'success',
          confirmButtonText: 'Super!'
          })
      } else {
          // No se pudo agregar la ruta como favorita
          Swal.fire({
              title: 'Oh oh!',
              text: 'Hubo un error al agregar tu favorito 💔',
              icon: 'error',
              confirmButtonText: 'Vale!'
          })
      }
    },
    error: function () {
      // Ocurrió un error en la solicitud AJAX
      console.log('Error al realizar la solicitud AJAX');
    }
  });
}
