//
//
// $(document).on("ready", function(){
//
//
//         var formulario = $("#formulario");
//
//         var punto = new google.maps.LatLng(28.65195768363395,-106.08327761957402);
//         var config = {
//             zoom:12,
//             center:punto,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         var mapa = new google.maps.Map( $("#mapa")[0], config );
//
//         google.maps.event.addListener(mapa, "click", function(event){
//            var coordenadas = event.latLng.toString();
//
//            coordenadas = coordenadas.replace("(", "");
//            coordenadas = coordenadas.replace(")", "");
//
//            var lista = coordenadas.split(",");
//
//            var direccion = new google.maps.LatLng(lista[0], lista[1]);
//
//            var marcador = new google.maps.Marker({
//                position:direccion,
//                map: mapa,
//                animation:google.maps.Animation.DROP,
//                draggable:false
//            });
//
//
//
//            //PASAR LAS COORDENADAS  AL FORMULARIO
//            formulario.find("input[name='station[lat]']").val(lista[0]);
//            formulario.find("input[name='station[long]']").val(lista[1]);
//
//            limpiar_marcadores(nuevos_marcadores);
//         });
//
//     });

    //VARIABLES GENERALES
        //declaras fuera del ready de jquery
    var nuevos_marcadores = [];
    var marcadores_bd= [];
    var mapa = null; //VARIABLE GENERAL PARA EL MAPA
    //FUNCION PARA QUITAR MARCADORES DE MAPA
    function limpiar_marcadores(lista)
    {
        for(i in lista)
        {
            //QUITAR MARCADOR DEL MAPA
            lista[i].setMap(null);
        }
    }
    $(document).on("ready", function(){

        //VARIABLE DE FORMULARIO
        var formulario = $("#formulario");

        var punto = new google.maps.LatLng(28.65195768363395,-106.08327761957402);
        var config = {
            zoom:12,
            center:punto,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        mapa = new google.maps.Map( $("#mapa")[0], config );

        google.maps.event.addListener(mapa, "click", function(event){
           var coordenadas = event.latLng.toString();

           coordenadas = coordenadas.replace("(", "");
           coordenadas = coordenadas.replace(")", "");

           var lista = coordenadas.split(",");

           var direccion = new google.maps.LatLng(lista[0], lista[1]);

           formulario.find("input[name='station[lat]']").val(lista[0]);
           formulario.find("input[name='station[long]']").val(lista[1]);


           var marcador = new google.maps.Marker({
               //titulo:prompt("Titulo del marcador?"),
               position:direccion,
               map: mapa,
               animation:google.maps.Animation.DROP,
               draggable:false
           });
           //ALMACENAR UN MARCADOR EN EL ARRAY nuevos_marcadores
           nuevos_marcadores.push(marcador);

           google.maps.event.addListener(marcador, "click", function(){

           });

           //BORRAR MARCADORES NUEVOS
           limpiar_marcadores(nuevos_marcadores);
           marcador.setMap(mapa);
        });

    });
    //FUERA DE READY DE JQUERY
    //FUNCTION PARA RECUPERAR PUNTOS DE LA BD
    
    //PLANTILLA AJAX
;
