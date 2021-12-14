//Array de juegos
const listaDeJuegos = [{id:"1", nombre:"Assassin Creed Valhalla", categoria:"accion/aventura", precio:30},
{id:"2", nombre:"The last of us part 2", categoria:"accion/aventura", precio:50},
{id:"3", nombre:"Cyberpunk 2077", categoria:"accion", precio:60},
{id:"4", nombre:"Death Stranding", categoria:"aventura", precio:45},
{id:"5", nombre: "Village", categoria: "accion/aventura", precio:60},
{id:"6", nombre:"Ghost of Tsushima", categoria:"aventura/accion", precio:60},
{id:"7", nombre:"Biomutant", categoria:"aventura", precio:50},
{id:"8", nombre:"Demon's Souls", categoria:"aventura/accion", precio:50},
{id:"9", nombre:"Spiderman Miles Morales", categoria:"aventura/accion", precio:50},
{id:"10", nombre:"Returnal", categoria:"aventura", precio:50},
{id:"11", nombre:"Watch Dogs Legion", categoria:"accion", precio:50},
{id:"12", nombre:"God of War 4", categoria:"aventura/accion", precio:50},
{id:"13", nombre:"Crash Bandicoot It's About Time", categoria:"aventura", precio:40},
{id:"14", nombre:"Worl of Warcraft", categoria:"rol", precio:50},
{id:"15", nombre:"Valorant", categoria:"shooter", precio:50},
{id:"16", nombre:"League Of Legends", categoria:"rol", precio:50},
{id:"17", nombre:"Counter-Strike: Global Offensive", categoria:"shooter", precio:10},
{id:"18", nombre:"Fortnite", categoria:"shooter", precio:50},
];

const juegosPrecios = () => {
  return listaDeJuegos.filter((listaDeJuegos) =>{
    if(listaDeJuegos.precio <= 50) return true
    return false
  })
}
console.log(juegosPrecios())

//Formulario de validacion en seccion Index

function captura(){
  var usuario =  document.getElementById("name").value;
  console.log(usuario)
  var pass = document.getElementById("password").value;
  console.log(pass)
  if(usuario == ""){
    alert("Este campo es obligarotrio");
    document.getElementById("name").focus();
  }else{
    if(pass == ""){
      alert("Este campo es obligarotrio");
      document.getElementById("password").focus();
    }else{
      console.log()
      document.getElementById("name").value="";
      document.getElementById("password").value="";
      document.getElementById("name").focus();
    }
  }
}  



//Modificacion del DOM

const encabezado__titulo = document.querySelector(".encabezado__titulo")

encabezado__titulo.style.color = "wheat"



//JS PARA MOSTRAR LOS TRAILERS EN LA SECCION DE JUEGOS

$("#valhallaYouTube").on( "click", function() { 
  $('#acVideo').show();
 });
  $( ".cerrar" ).click(function() {
  $('#acVideo').hide();
});

$("#tlouYouTube").click(()=>{
  $("#tlVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#tlVideo').hide();
});


$("#cyberpunkYouTube").click(()=>{
  $("#cVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#cVideo').hide();
});


$("#deathStrandingYouTube").click(()=>{
  $("#dsVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#dsVideo').hide();
});


$("#villageYouTube").click(()=>{
  $("#vVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#vVideo').hide();
});


$("#ghostYouTube").click(()=>{
  $("#gVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#gVideo').hide();
});


$("#biomutantYouTube").click(()=>{
  $("#bVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#bVideo').hide();
});


$("#demonYouTube").click(()=>{
  $("#dVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#dVideo').hide();
});


$("#spidermanYouTube").click(()=>{
  $("#mmVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#mmVideo').hide();
});


$("#returnalYouTube").click(()=>{
  $("#rVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#rVideo').hide();
});


$("#watchDogsYouTube").click(()=>{
  $("#wVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#wVideo').hide();
});


$("#gowYouTube").click(()=>{
  $("#gowVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#gowVideo').hide();
});


$("#crashYouTube").click(()=>{
  $("#cbVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#cbVideo').hide();
});


$("#wowYouTube").click(()=>{
  $("#wowVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#wowVideo').hide();
});


$("#valorantYouTube").click(()=>{
  $("#valVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#valVideo').hide();
});


$("#lolYouTube").click(()=>{
  $("#lolVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#lolVideo').hide();
});


$("#csgoYouTube").click(()=>{
  $("#csVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#csVideo').hide();
});


$("#fortniteYouTube").click(()=>{
  $("#fVideo").show()
})
$( ".cerrar" ).click(function() {
  $('#fVideo').hide();
});


$(".btn").click(()=>{
  $(".cerrar").show()
})
$( ".cerrar" ).click(function() {
  $('.cerrar').hide();
});

$(".cerrar").css({ "display" : "none" , "border-radius" : "4px" , "color" : "white" , "background-color" : "rgb(228, 105, 105)" , "border-color" : "rgb(228, 105, 105)" , "width" : "30px"});

















