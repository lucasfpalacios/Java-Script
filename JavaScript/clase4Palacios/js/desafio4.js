/*Este es un sitio web destinado a la informacion sobre los distintos video juegos que hay para jugar, podras encontrar tambien para que consolas son los diferentes juegos y que categorias de juegos existen. Mi idea es que los usuarios puedan tener un buscador para buscar dentro de cada seccion ya que es un tema bastante amplio, tambien que dentro de este sitio se puedan ver trailers solo apretando un boton(como por ejemplo se puede ver en la seccion de juegos), tambien quisiera que los usuarios puedan crearse una cuenta y asi poder dejar sus comentarios sobre los diferentes juegos y consolas*/

let juego = prompt("Ingresa el nombre del juego que estas buscando")
const disponible = "Esta disponible para esta consola, puedes ver el trailer en la seccion Juegos"

while(juego != ""){
    switch(juego.toUpperCase()){
        case "THE LAST OF US 2":
            const consola = prompt("Que consola tienes?")
                if(consola.toUpperCase = "PS4"){    
                    alert(disponible)
                    juego = ""
                }else {
                    const otros = prompt("No esta disponible para tu consola. Quieres entrar a la seccion de juegos y buscar alguno disponible?")
                        if(otros.toUpperCase() != "SI"){
                            alert("Lo sentimos pero este juego no esta disponible en la consola que buscas")
                            juego = ""
                        } 
                }
                
    }
}


 






