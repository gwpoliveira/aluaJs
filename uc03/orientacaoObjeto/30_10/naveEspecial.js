
        let naveEspecial = {
            passageiros:[{nome:'cachorro'}, {nome:'gato'}],
            tripulacao:{
                capitao:{
                    nome: 'Daniel',
                    especilidade:'Engenharia da Computação',
                    'comidas favoritas':['bolo','cuscuz','pipoca'],
                    cumprimentar(){ console.log('Olá, sou o Cap. Daniel')}
                }
            },
            motor:{
                modelo:'RocketDyne F1',
                ano:2017,
                potencia:4400
            }
        }

        console.log(naveEspecial);
        naveEspecial.tripulacao.capitao.cumprimentar();