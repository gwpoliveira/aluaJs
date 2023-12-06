function FabricaDeRobos(modelo,material) {
    this.modelo= modelo;
    this.material = material;
    this.nivelEnegia = 100;
    this.pegarInfo = () => `Eu sou o ${this.modelo} e meu nivel de energia é ${this.nivelEnegia}%.`;
}

let robo1 = new FabricaDeRobos('R2D2', 'Liga de Titânio');
let robo2 = new FabricaDeRobos('C3PO', 'Latão');
let robo3 = new FabricaDeRobos(' Mega Man', 'Adamantium');

console.log(robo1.pegarInfo())
console.log(robo2.pegarInfo())
console.log(robo3.pegarInfo())