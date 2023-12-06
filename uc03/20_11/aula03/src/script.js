var campoTexto = document.querySelector('#nome');
var img = document.querySelector('img');
var btn = document.querySelector("#button");
btn.addEventListener('click', enviaRequisicao);

function enviaRequisicao() {
    var url, chave_api;
    chave_api = 'PHnrm2pALgoaz9Qy16dXoVOiWUoZmQsZliqv5lbkWNVAM6bu3g2Yd6CA';
    url = 'https://api.pexels.com/v1/search?query=' + campoTexto.value;
    console.log(url);
    
    var requisicao = new XMLHttpRequest();
    requisicao.onload = manipulaResposta;
    requisicao.open('GET', url);
    requisicao.setRequestHeader('Authorization', chave_api);
    requisicao.send();

    function manipulaResposta() {
        if (requisicao.status === 200) {
            var response = JSON.parse(requisicao.responseText);
            console.log(response);
            img.src = response.photos[0].src.large2x;
        } else {
            console.error('Erro na requisição. Status:', requisicao.status);
        }
    }
}
