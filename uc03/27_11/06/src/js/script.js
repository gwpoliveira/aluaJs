$(document).ready(function(){

    // Função para ocultar parágrafos com diferentes velocidades
    $('#btnHide').click(function(){
        // Oculta o parágrafo com a classe .01 instantaneamente
        $('p.01').slideUp();
        // Oculta o parágrafo com a classe .02 rapidamente
        $('p.02').slideUp('fast');
        // Oculta o parágrafo com a classe .03 lentamente
        $('p.03').slideUp('slow');
        // Oculta o parágrafo com a classe .04 em 50 milissegundos
        $('p.04').slideUp(50);
        // Oculta o parágrafo com a classe .05 em 2000 milissegundos (2 segundos)
        $('p.05').slideUp(2000);       
    });

    // Função para mostrar parágrafos com diferentes velocidades
    $('#btnShow').click(function(){
        // Mostra o parágrafo com a classe .01 instantaneamente
        $('p.01').slideDown();
        // Oculta o parágrafo com a classe .02 rapidamente
        $('p.02').slideDown('fast');
        // Oculta o parágrafo com a classe .03 lentamente
        $('p.03').slideDown('slow');
        // Oculta o parágrafo com a classe .04 em 50 milissegundos
        $('p.04').slideDown(50);
        // Oculta o parágrafo com a classe .05 em 2000 milissegundos (2 segundos)
        $('p.05').slideDown(2000);        
    });       
    
});
