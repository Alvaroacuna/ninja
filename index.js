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
    drinkSake() {
        this.vida += 10
        console.log("10 mas de Salud")
    }
}

class Sensei extends Ninja {
    constructor(nombre, vida, velocidad = 3, fuerza = 3, sabiduria = 10){
        super (nombre, vida, velocidad, fuerza)
        this.sabiduria = sabiduria;
  }
  speakWisdom() {
    console.log('Hola, soy Master Splinter, me tomé un sake de naranja, taba weno');
    super.drinkSake();
  }
}

const ninja_1 = new Ninja('Shen', 10);
const ninja_2 = new Ninja('Naruto', 13, 4, 5);
const ninja_3 = new Ninja('Sasuke', 8, 6, 7);
const superSensei = new Sensei("Master Splinter", 200);







