$(document).ready(function(){

    let selectParadasIni = document.querySelector('#lugar_inicio')
    let selectParadasFin = document.querySelector('#lugar_fin')
    let selectParadasBuscar = document.querySelector('#ver_paradas')
    $.ajax({
        url: "http://localhost:8080/parada/listar",
        type: "GET",
        datatype: "JSON",
        success:function ver_parada_mapa(respuesta){
            for (i = 0; i <= respuesta.length; i++){
                selectParadasIni.innerHTML += '<option value="'+respuesta[i].latitudPar+','+respuesta[i].longitudPar+'">'+respuesta[i].nombrePar+'</option>'
                selectParadasFin.innerHTML += '<option value="'+respuesta[i].latitudPar+','+respuesta[i].longitudPar+'">'+respuesta[i].nombrePar+'</option>'
                selectParadasBuscar.innerHTML += '<option id="'+respuesta[i].idPar+'" onclick="nombreParadaVer()" value="'+respuesta[i].latitudPar+','+respuesta[i].longitudPar+'">'+respuesta[i].nombrePar+'</option>'

                let parada = respuesta[i].imgPar
                //alert(parada)
                document.getElementById('ver_paradas').addEventListener('change',function(e){
                    let coords = e.target.value.split(",");
                    map.flyTo(coords,19);
                    L.marker(coords,{alt: 'Parada Ver'}).addTo(map).bindPopup(function nombreParadaVer(){
                        if (e.target.value += respuesta){
                            
                            Swal.fire({
                                title: "a",
                                text: "Esto deberia ser el",
                                imageUrl: parada,
                                imageWidth: 400,
                                imageHeight: 200,
                                imageAlt: 'Custom image',
                                customClass: {
                                    confirmButton: 'btn btn-dark'
                                  },
                                  buttonsStyling: false
                            })

                        }
                    });
                });
            }
        }
    });

});