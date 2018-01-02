$(document).ready(function() {
  // Obteniendo información
  var container = $('.row');
  var modal = $('.modal');
  // Función que muestra todos los restaurantes
  function allFood() {
    for (i = 0; i < data.length; i++) {
      container.append('<div class="col-xs-5 col-md-2 box-restaurant collection" data-name="' + data[i].name + '" data-type="' + data[i].type + '" data-city="' + data[i].address + '" data-toggle="modal" data-target="#myModal" ><p class="name-restaurant">' + data[i].name + '</p><p class="popular"></p><img class="img-restaurant"  src=' + data[i].image + '><div class="opacity"></div> </div>');
    }
  }
  // Ejecutando la función al iniciar
  allFood();

  // Filtros del input
  $('.search').keyup(function() {
    var name = $(this).val().toLowerCase();
    $('.collection').hide();
    $('.collection').each(function() { // filtro por nombre
      var search = $(this).text();
      if (search.indexOf(name) !== -1) {
        $(this).show();
      }
    });
    $('.collection').each(function() { // filtro por tipo
      var search = $(this).text();
      var type = $(this).data('type');
      if (type.indexOf(name) !== -1) {
        $(this).show();
      }
    });
    $('.collection').each(function() { // filtro por distrito
      var search = $(this).text();
      var city = $(this).data('city');
      if (city.indexOf(name) !== -1) {
        $(this).show();
      }
    });
  });


  /** Contenido Modal*/
  $('.box-restaurant').on('click', function() {
    $('.icon-star').remove();
    for (i = 0; i < data.length;i++) {
      if ($(this).data('name') === data[i].name) {
        $('.logo-restaurant').attr('src', data[i].logo);
        $('.local-restaurant').attr('src', data[i].local);
        $('.address-restaurant').text(data[i].description);
        $('.city-restaurant').text(data[i].address);
      
        $('.price-restaurant').text(data[i].money);
        for (j = 0; j < data[i].stars;j++) {
          $('.star-restaurant').append('<span class="glyphicon glyphicon-star icon-star"></span>');
        }
      }
    }
  });

  $('.box-restaurant').on('mouseover', function() {
    $('.white').remove();
    for (i = 0; i < data.length;i++) {
      if ($(this).data('name') === data[i].name) {
        $(this).append('<p class="white">' + data[i].address + '</p>');
      }
    }
  });
});

