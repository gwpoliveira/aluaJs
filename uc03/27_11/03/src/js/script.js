$(document).ready(function(){

    // Função para ocultar parágrafos com diferentes velocidades
    $('#btnHide').click(function(){
        // Oculta o parágrafo com a classe .01 instantaneamente
        $('p.01').hide();
        // Oculta o parágrafo com a classe .02 rapidamente
        $('p.02').hide('fast');
        // Oculta o parágrafo com a classe .03 lentamente
        $('p.03').hide('slow');
        // Oculta o parágrafo com a classe .04 em 50 milissegundos
        $('p.04').hide(50);
        // Oculta o parágrafo com a classe .05 em 2000 milissegundos (2 segundos)
        $('p.05').hide(2000);       
    });

    // Função para mostrar parágrafos com diferentes velocidades
    $('#btnShow').click(function(){
        // Mostra o parágrafo com a classe .01 instantaneamente
        $('p.01').show();
        // Mostra o parágrafo com a classe .02 rapidamente
        $('p.02').show('fast');
        // Mostra o parágrafo com a classe .03 lentamente
        $('p.03').show('slow');
        // Mostra o parágrafo com a classe .04 em 50 milissegundos
        $('p.04').show(50);
        // Mostra o parágrafo com a classe .05 em 2000 milissegundos (2 segundos)
        $('p.05').show(2000);       
    });
});
