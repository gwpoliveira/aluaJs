let numeros = [12 , 19, 9, 89, 32, 23, 90];
// every todos são
let todos = numeros.every(n => {return n > 30});

document.writeln('Os números são maiores que 30? '+ todos);
let numeros2 = [12 , 19, 9, 89, 32, 23, 90];
// some como se fosse algum que seja menor que 30

let algum = numeros2.some(n => {return n > 30});
document.writeln('--'+'Os números são maiores que 30? '+ algum);

//filter filtra o arrey
const palavras = ['aaa', 'b', 'ccc', 'dd', 'e','ff']
const resultado = palavras.filter(palavra => palavra.length > 2);
document.writeln('--'+resultado)

//cria uma novo arrey
const array3 = [1,4,9,26];
const resultado2 = array3.map(x=> x*2);
document.writeln('--'+resultado2);

//soma os valores dentro do arry
const array4 =[1,4,9,16];
const resultado3 = array4.reduce((lado, valor) => lado +valor);
document.writeln('--'+resultado3)

//Sort tranforma as texto em oredem alfabetica, tem está no formato
var exemplo2 = ['Bob', 'Alice','Carlos','João','Antonio'];
document.writeln('--'+exemplo2.sort());

var exemplo2 = ['Bob', 'Alice','Carlos','João','Antonio'];
document.writeln('--'+exemplo2.reverse());

//não funciona
const exemplo = [61, 32,245,82,12];
document.writeln('--'+exemplo.sort());

//como o arry de forma decrescente
var elements = [32,134,44,234,52];
var sorted = elements.reduce((acc,cur) => {
    acc.push(cur);
    acc.sort((a,b) => b - a);

    return acc;
}, []);
document.writeln('--'+sorted);

//como o arry de forma Crescente
var elements = [32,134,44,234,52];
var sorted = elements.reduce((acc,cur) => {
    acc.push(cur);
    acc.sort((a,b) => a - b);
    return acc;
}, []);
document.writeln('--'+sorted);

//indexOf
var mesagens = ['Msg1','Msg2','Msg3','Msg2'];
var busca = mesagens.indexOf('Msg2');
document.writeln('--'+busca);

//pega o proximo maior que 10
var array = [5,12,8,130,44];
var valor = array.find(item => item >10);
document.writeln('--'+valor);

//pega todos maiores q 10
var array = [5,12,8,130,44];
var valor = array.filter(item => item >10);
document.writeln('--'+valor);

//pega o proximo index maior que a da posição maior que ao elemento 10
var array = [5,12,8,130,44];
var valor = array.findIndex(item => item >10);
document.writeln('--'+valor);

