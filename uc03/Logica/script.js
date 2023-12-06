const prompt = require("prompt-sync")({ sigint: true });


// Questão 01 criar função que imprima "Bom dia, Mundo!!"

function olaMundo(){
    console.log("Bom dia, Mundo!!!");
}


//Questão 02 Escreva uma função que retorne o cubo de um número fornecido pelo usuario
function cubo(){
    let cuboNumero = parseInt(prompt('Digite um sumero para sabe seu cubo: '));
    cuboNumero = cuboNumero**3;
    console.log('O cubo é ' +cuboNumero)
}

// Questão 03 Escreva uma função que retorne a área de uma trinagulo, a partir dos valores
// de base e altura fornecida

function areaTiangulo() {
    let base, altura, area;
    base = parseFloat(prompt("Digite o valor que correspode a base do triangulo: "));
    altura = parseFloat(prompt("Digite o valor que correspode a altura do triangulo: "));
    area = (base*altura)/2;
    console.log(' A área de um triangulo de base '+area+ ' e altura '+altura+ ' é '+area)
}

// Questão 04 Escreva uma função que retorne a área do perimetro de um circulo, a partir do raio fornceido

function areaCirculo() {
    let raio, area;
    raio = parseFloat(prompt("Digite o valor que correspode ao raio do circulo: "));
    area = 3.1415*(raio)**2;
    console.log(' A área do circulo é: '+area)
}

// Questão 05 Escreva uma função que tranforme de Faheneit para Celcius

function convFahreneitTOCelsius() {
    let F, C;
    F = parseFloat(prompt("Digite a temperatura em Fahreneit: "));
    C = (F-32)*(5/9);
    console.log(' A temperatura de Fahreneit de  '+F+'f'+' tranformada em Celsius é '+C+'ºc')
}

function menu(){
    console.log('************************************');
    console.log('************* Menu *****************');
    console.log('*  Opção 1 - Print:                *');
    console.log('*  Opção 2 - Cubo de um numero:    *');
    console.log('*  Opção 3 - Área de um trinagulo: *');
    console.log('*  Opção 4 - Área de um circulo:   *');
    console.log('*  Opção 5 - converter Fº em Cº:   *');
    console.log('*  Opção 6 - sar:                  *\n');
}


menu()
var opcao = null;
while (opcao !== 6) {
    opcao = parseInt(prompt("Digite a opção desejada: "));
    switch (opcao) {
        case 1:
            olaMundo();
            console.log('** ------------------ **\n\n');
            menu()
            break;
        case 2:
            cubo();
            console.log('** ------------------ **\n\n');
            menu()
            break;
        case 3:
            areaTiangulo();
            console.log('** ------------------ **\n\n');
            menu()
            break;
        case 4:
            areaCirculo();
            console.log('** ------------------ **\n\n');
            menu()
            break;
        case 5:
            convFahreneitTOCelsius();
            console.log('** ------------------ **\n\n');
            menu()
            break;
        case 6:            
            break;
        default:
            console.log('Opção inválida.');
            menu()
            break;
    }
}