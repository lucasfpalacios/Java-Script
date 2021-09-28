class Consola{
   
	constructor(ps5){
		this.consola;
        this.juego = ps5.juego
        this.joystick = ps5.joystick

	}

    entregaConsola(){
            if(this.consola.toUpperCase() == "COMPLETA"){
            
            this.consola = "PS5 completa"

        }else{
            this.consola = "PS5 base"

        }

        if(this.auriculares != "" && this.joystick != ""){
            console.log ("Aqui tiene su consola " + this.consola + " con el juego " + this.juego + " y un joystick color " + this.joystick )

        }else if(this.juego != "" && this.joystick == ""){
            console.log ("Aqui tiene su consola " + this.consola + " con su juego " + this.juego)

        }else{

            return "Aqui tiene su consola " + this.consola + "con su " + this.joystick + "joystick"

        }

    }
}

let consola = new Consola({consola:"", juego:"", joystick:"",})
consola["consola"] = prompt("Que PS5 te gustaria la completa que viene con un y joystick a eleccion o la base solo con un juego a eleccion?")
consola.juego = prompt("Que juego quisieras agregarle?")
consola.joystick = prompt("De que color te gustaria tu joystick?")

console.log(consola.entregaConsola())