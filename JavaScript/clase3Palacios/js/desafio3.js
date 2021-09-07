let juego = prompt("Que juego te gustaría jugar?")
const permiso = "Puedes jugarlo"

while(juego != ""){
  switch (juego.toLocaleUpperCase()){
    case "THE LAST OF US":
      const edad = prompt("Que edad tenes?")
      if (edad > 17){
        alert(permiso)
        juego = ""
      }else{
        const crash = prompt("Te gustaria Jugar a Crash Bandicoot")
          if(crash.toLocaleUpperCase() != "SI"){
            alert("Lo sentimos, no hay un juego apropiado para tu edad")
            juego = ""
          }else{
            alert(permiso)
            juego = ""
            }
          }
      break;
    case "CRASH BANDICOOT":
      alert(permiso);
      juego = "";
     break;
    default:
      alert("Ese juego no esta disponible en nuestra pagina")     
      juego = prompt("¿Que juego te gustaria jugar?")
    break
  }
}