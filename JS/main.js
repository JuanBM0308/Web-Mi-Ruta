function iniciarMapa(){
    var coord = {lat:4.7109346 ,lng: -74.2257983}
    var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
      });
}