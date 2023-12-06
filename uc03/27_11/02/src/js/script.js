// Função para alternar a visibilidade dos parágrafos quando o botão #btnShow é clicado
$(document).ready(function(){
    $('#btnShow').click(function(){
        $('p').toggle(); // Alternar a visibilidade dos parágrafos
    });
});

// Função para aplicar um efeito de fadeToggle nos parágrafos quando o botão #btnShow2 é clicado
$(document).ready(function(){
    $('#btnShow2').click(function(){
        $('p').fadeToggle(); // Alternar a visibilidade dos parágrafos com efeito de fade
    });
});

// Função para tornar visíveis todos os parágrafos quando o botão #btnShow3 é clicado
$(document).ready(function(){
    $('#btnShow3').click(function(){
        $('p').show(); // Tornar visíveis todos os parágrafos
    });
});

// Função para tornar invisíveis todos os parágrafos quando o botão #btnHide é clicado
$(document).ready(function(){
    $('#btnHide').click(function(){
        $('p').hide(); // Tornar invisíveis todos os parágrafos
    });
});

// Função para aplicar um efeito de fadeOut nos parágrafos quando o botão #btnHide2 é clicado
$(document).ready(function(){
    $('#btnHide2').click(function(){
        $('p').fadeOut(); // Aplicar efeito de fadeOut nos parágrafos
    });
});

// Função para aplicar um efeito de fadeIn nos parágrafos quando o botão #btnShow4 é clicado
$(document).ready(function(){
    $('#btnShow4').click(function(){
        $('p').fadeIn(); // Aplicar efeito de fadeIn nos parágrafos
    });
});

// Função para aplicar um efeito de slideDown nos parágrafos quando o botão #btnShow5 é clicado
$(document).ready(function(){
    $('#btnShow5').click(function(){
        $('p').slideDown(); // Aplicar efeito de slideDown nos parágrafos
    });
});

// Função para aplicar um efeito de slideUp nos parágrafos quando o botão #btnHide3 é clicado
$(document).ready(function(){
    $('#btnHide3').click(function(){
        $('p').slideUp(); // Aplicar efeito de slideUp nos parágrafos
    });
});


// com o fadeToggle ele ermanece mais lento
$(document).ready(function(){
    $('#btnHide3').click(function(){
        $('p').slideUp();
    });
});