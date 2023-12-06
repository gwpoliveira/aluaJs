$(document).ready(function(){

    // Função para ocultar parágrafos com diferentes velocidades
    $('#btnHide').click(function(){
        // Oculta o parágrafo com a classe .01 instantaneamente
        $('p.01').fadeOut();
        // Oculta o parágrafo com a classe .02 rapidamente
        $('p.02').fadeOut('fast');
        // Oculta o parágrafo com a classe .03 lentamente
        $('p.03').fadeOut('slow');
        // Oculta o parágrafo com a classe .04 em 50 milissegundos
        $('p.04').fadeOut(50);
        // Oculta o parágrafo com a classe .05 em 2000 milissegundos (2 segundos)
        $('p.05').fadeOut(2000);       
    });

    // Função para mostrar parágrafos com diferentes velocidades
    $('#btnShow').click(function(){
        // Mostra o parágrafo com a classe .01 instantaneamente
        $('p.01').fadeIn();
        // Mostra o parágrafo com a classe .02 rapidamente
        $('p.02').fadeIn('fast');
        // Mostra o parágrafo com a classe .03 lentamente
        $('p.03').fadeIn('slow');
        // Mostra o parágrafo com a classe .04 em 50 milissegundos
        $('p.04').fadeIn(50);
        // Mostra o parágrafo com a classe .05 em 2000 milissegundos (2 segundos)
        $('p.05').fadeIn(2000);       
    });
});
