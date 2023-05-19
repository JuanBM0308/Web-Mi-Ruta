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
function envio() {
    var usu_ing = document.getElementById('usuario_ing').value
    var pass_ing = document.getElementById('contraseña_ing').value

    if (usu_ing == 'Juan.Barbosa@miruta.com' && pass_ing == 12345) {
        alert("Bienvenido al sistema")
    } else {
        alert("Usuario o contraseña incorrectos")
    }
}