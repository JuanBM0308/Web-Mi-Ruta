var map = L.map('map', {
    center: [4.70612, -74.2307],
    zoom: 13
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([4.70612, -74.2307],
{alt: 'Mosquera'}).addTo(map)
.bindPopup('Esto es Mosquera - Cundinamarca!');

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
                text: 'Hubo un error al agrgar tu favorito 💔',
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
  