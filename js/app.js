// efecto splash
$('#splash-js').delay(2500).fadeOut('slow');

// Obteniendo información
var container = $('.row');
var modal = $('.modal');
// Función que muestra todos los restaurantes
function allFood() {
  for (i = 0; i < data.length; i++) {
    container.append('<div class="col-xs-5 col-md-2 box-restaurant collection" data-name="' + data[i].name + '" data-toggle="modal" data-target=".bs-example-modal-sm" ><p class="name-restaurant">' + data[i].name + '</p><img class="img-restaurant"  src=' + data[i].image + '><div class="opacity"></div> </div>');
  }
}
// Ejecutando la función al iniciar
allFood();

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

/** Filtrando por tipo */

$('#food').change(function() {
  $('.collection').remove();
  var selectedOption = $('#food option:selected');
  
  if (selectedOption.val() === 'fish') {
    create('fish');
  }

  if (selectedOption.val() === 'meat') {
    create('meat');
  }

  if (selectedOption.val() === 'japanese') {
    create('japanese');
  }

  if (selectedOption.val() === 'fusion') {
    create('fusion');
  }

  if (selectedOption.val() === 'all') {
    allFood();
  }
});

/* *Función que filtra por tipo de comida */
function create(food) {
  var type = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].type === food) {
      type.push(data[i]);
    }
  }
  for (k = 0; k < type.length; k++) {
    container.append('<div class="col-xs-5 col-md-2 box-restaurant-filter collection" data-name="' + type[k].name + '" data-toggle="modal" data-target=".bs-example-modal-sm" ><p class="name-restaurant">' + type[k].name + '</p><img class="img-restaurant"  src=' + type[k].image + '><div class="opacity"></div> </div>');
  }
}

/** Contenido Modal*/
$('.box-restaurant').on('click', function() {
  for (i = 0; i < data.length;i++) {
    if ($(this).data('name') === data[i].name) {
      $('.logo-restaurant').attr('src', data[i].logo);
      $('.address-restaurant').text(data[i].description);
      $('.city-restaurant').text(data[i].address);
      $('.star-restaurant').text(data[i].stars);
      $('.price-restaurant').text(data[i].money);
    }
  }
});

$('.box-restaurant-filter').on('click', function() {
  for (i = 0; i < type().length;i++) {
    if ($(this).data('name') === type()[i].name) {
      $('.logo-restaurant').attr('src', type()[i].logo);
      $('.address-restaurant').text(type()[i].description);
      $('.city-restaurant').text(type()[i].address);
      $('.star-restaurant').text(type()[i].stars);
      $('.price-restaurant').text(type()[i].money);
    }
  }
});

function type() {
  var type = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].type === food) {
      type.push(data[i]);
    }
  }
  return type;
}