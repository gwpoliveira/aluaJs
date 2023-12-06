//serve para substituir um objeto
//Como uma apelido
const robo={
    modelo: 'T-800',
    energia: 90,
    pegarInfo(){
        return `Eu sou o ${this.modelo} a energia é ${this.energia}%.` ;
    },
    carregaBateria(){
        this.energia = 100;
        return `Eu sou o ${this.modelo} a energia é ${this.energia}%.` ;
    }
    
};

console.log(robo.pegarInfo());
console.log(robo.carregaBateria());
