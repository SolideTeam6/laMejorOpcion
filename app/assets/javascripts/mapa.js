var nuevos_marcadores = [];
    var mapa = null; 
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

           formulario.find("input[name='cx']").val(lista[0]);
           formulario.find("input[name='cy']").val(lista[1]);
           
           
           var marcador = new google.maps.Marker({
               position:direccion,
               map: mapa, 
               animation:google.maps.Animation.DROP,
               draggable:false
           });
           //ALMACENAR UN MARCADOR EN EL ARRAY nuevos_marcadores
           nuevos_marcadores.push(marcador);
           
           google.maps.event.addListener(marcador, "click", function(){

           });
           limpiar_marcadores(nuevos_marcadores);
           marcador.setMap(mapa);
        });

        
        
    });
  $(document).ready(function(){
    $("#btnGas").on( "click", function() {
      
        if ($('#info').is(':hidden')){
           $('#info').show(1000);
          $("#mapa").animate({width: '100%'});
        }
        else{
          $("#mapa").animate({width: '125%'});
          $('#info').hide(1000);
        } 
       });



      
  });

 