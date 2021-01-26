class Ninja {
    constructor(nombre, vida, velocidad = 3, fuerza = 3){
        this.nombre = nombre;
        this.vida = vida;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName() {
        console.log(`nombre: ${this.name}`)
    }
    showStats() {
        console.log(`nombre: ${this.name}\ vida: ${this.vida}\ velocidad: ${this.velocidad}\ fuerza: ${this.fuerza}`);
    }
    drinSake() {
        this.vida += 10
        console.log("10 mas de Salud")
    }
}

class Sensei extends Ninja {
      
}







