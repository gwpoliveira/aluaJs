$(document).ready(function(){

    // Função para ocultar parágrafos com diferentes velocidades
    $('#btnHide').click(function(){
        // Oculta o parágrafo com a classe .01 instantaneamente
        $('p.01').fadeTo('fast',0.1);
        // Oculta o parágrafo com a classe .02 rapidamente
        $('p.02').fadeTo('fast',0.4);
        // Oculta o parágrafo com a classe .03 lentamente
        $('p.03').fadeTo('fast',0.1);
        // Oculta o parágrafo com a classe .04 em 50 milissegundos
        $('p.04').fadeTo('fast',0.1);
        // Oculta o parágrafo com a classe .05 em 2000 milissegundos (2 segundos)
        $('p.05').fadeTo('fast',0.75);       
    });

    // Função para mostrar parágrafos com diferentes velocidades
    $('#btnShow').click(function(){
        // Mostra o parágrafo com a classe .01 instantaneamente
        $('p.01').fadeTo('fast',1);
        // Oculta o parágrafo com a classe .02 rapidamente
        $('p.02').fadeTo('fast',1);
        // Oculta o parágrafo com a classe .03 lentamente
        $('p.03').fadeTo('fast',1);
        // Oculta o parágrafo com a classe .04 em 50 milissegundos
        $('p.04').fadeTo('fast',1);
        // Oculta o parágrafo com a classe .05 em 2000 milissegundos (2 segundos)
        $('p.05').fadeTo('fast',1);       
    });       
    
});
