var map = L.map('map', {
    center: [4.70612, -74.2307],
    zoom: 13
});

var marker = L.marker([4.70612, -74.2307],
    {alt: 'Mosquera'}).addTo(map)
    .bindPopup('Esto es Mosquera - Cundinamarca!');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/* TOMA COORDENADA DE INICIO Y FIN */
document.getElementById('lugar_inicio').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,19);
    L.marker(coords,{alt: 'Inicio de la Ruta'}).addTo(map).bindPopup('Inicio 🚩');
});

document.getElementById('lugar_fin').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,19);
    L.marker(coords,{alt: 'Fin de la Ruta'}).addTo(map).bindPopup('Fin 🏁');
});

// TRAZAR COORDENADAS CON POLILINEA
document.getElementById('lugar_inicio').addEventListener('change',function(e){
    let coords_ini = e.target.value.split(","); 
    console.log("INICIO ",coords_ini)

    document.getElementById('lugar_fin').addEventListener('change',function(e){
        let coords_fin = e.target.value.split(",");
        console.log("FIN ",coords_fin)

        var coord_camino = [
            coords_ini,
            coords_fin
        ];
        
        var camino = L.polyline(coord_camino, {
            color: '#3990ff'
        }).addTo(map);
    });
});

// PARTE LOGICA HTML

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

    localStorage.setItem("UsuCorreo", "Cierre##@##gmail.com"); //Modificar variable para cierre

    //Redirección a index.html
    setTimeout( function() { window.location = "index.html"; }, 2000 );
}

//Eliminar Favoritos
function eliminar_favorito() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
}