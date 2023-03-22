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