// efecto splash
$('#splash-js').delay(2500).fadeOut('slow');

// Obteniendo información
var container = $('.row');
// creando los contenedores de información por cada restaurante
for (i = 0; i < data.length; i++) {
  container.append('<div class="col-xs-5 box-restaurant collection"><p class="name-restaurant">' + data[i].name + '</p><img class="img-restaurant"  src=' + data[i].image + '><div class="opacity"></div> </div>');
}
// Filtrando por Nombre 
$('.search').keyup(function() {
  var name = $(this).val();
  $('.collection').hide();
  $('.collection').each(function() {
    var search = $(this).text();
    if (search.indexOf(name) !== -1) {
      $(this).show();
    }
  });
});