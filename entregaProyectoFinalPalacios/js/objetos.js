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


class Usuario{
    constructor(nombre,clave,tipo){
        this.nombre = nombre
        this.clave = clave
        this.tipo = tipo
    }
  
  
  }

  class Juego{

    constructor(nombre,precio,categoria,id){
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.id = id
    }
}
  



