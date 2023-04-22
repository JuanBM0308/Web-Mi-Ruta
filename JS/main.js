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
    let coords = e.target.value.split(",");
    
});

console.log(lpo)

document.getElementById('lugar_fin').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
});

var coord_camino = [
    coord_ini,
    coord_fin
];

var camino = L.polyline(coord_camino, {
    color: '#3990ff'
}).addTo(map);