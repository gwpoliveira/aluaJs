const array =['João','Maria','Daniel', 'alice'];
array.forEach((elemento, indice)=> {
    array[indice] = elemento.toUpperCase();
});
document.writeln(array);

const array2 =['João','Maria','Daniel', 'alice'];
array2.forEach((elemento, indice)=> {
    array2[indice] = elemento.toLowerCase();
});

document.writeln(array2);