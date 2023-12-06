
        let naveEspecial = {
            
            tripulacao: 5,
            'Missão Ativa': true,
            trajeto:['Vênus', 'Marte', 'Saturno']
        }
        function desativarMisao(obj){
            obj['Missão Ativa'] = false
        }

        let adicionarJupiterNoTrajeto = (obj)=>{
            obj.trajeto.push('Júpter')
            // o push adcionar na lista trtajeto
        }
        
        desativarMisao(naveEspecial);
        adicionarJupiterNoTrajeto(naveEspecial);

        console.log(naveEspecial);


        