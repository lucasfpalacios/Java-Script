const lista = [{id:1, nombre:"Assassin Creed Valhalla", categoria:"accion/aventura", precio:30},
{id:2, nombre:"The last of us part 2", categoria:"accion/aventura", precio:50},
{id:3, nombre:"Ghost of Tsushima", categoria:"aventura/accion", precio:60},
{id:4, nombre:"Counter-Strike: Global Offensive", categoria:"shooter", precio:10},
{id:5, nombre:"Crash Bandicoot It's About Time", categoria:"aventura", precio:40},
{id:6, nombre:"Cyberpunk 2077", categoria:"accion", precio:60},
{id:7, nombre:"Resident Evil Village", categoria:"accion", precio:50}];

class Juego{
    constructor(juego){
        this.id = juego.id
        this.nombre = juego.nombre
        this.categoria = juego.categoria
        this.precio = juego.precio
    }
}

const returnal = new Juego({id:8, nombre:"Returnal", categoria:"aventura", precio:30})
lista.push(returnal)

const carrito = []

const comprar = (nombreJuego) =>{
    let juego = lista.find(juego => juego.nombre == nombreJuego)
    if(juego){
        carrito.push(juego)
    }else{
        console.log("No hay stock de ese juego")
    }
}

comprar("Assassin Creed Valhalla")
console.log(carrito)
const buscarCategoria = (categoriaJuego)=>{

    const busqueda = lista.filter(juego => juego.categoria === categoriaJuego)
    console.log(busqueda)
}

buscarCategoria("accion")