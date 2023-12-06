const mensagens = ['Mensagem 1', 'Mensagem 2', 'Mensagem 3'];
mensagens.splice(1,1);
document.write(mensagens);
mensagens.splice(1,0, 'nova Mesagem');
document.write(mensagens);
mensagens.splice(2,1, 'nova Mesagem 3');
document.write(mensagens);
