/*
----------------------------------Quartzo, pergaminho, podador------------------------------------
Codelab semana 02 do módulo 01: programar um jogo de jokenpô do usuário contra a máquina. Nesse jogo, o usuário define quantas rodadas serão jogadas
e a pontuação de cada rodada é salva e contada, para declarar um vencedor ao final.
A única diferença que você verá para um jokenpô normal é: 
---------pedra é   QUARTZO
---------papel é   PERGAMINHO
---------tesoura é PODADOR
O motivo dessa nomenclatura é um episódio da série 'Regular Show', que eu gosto bastante.

*/

const prompt = require('prompt-sync')();
escolhas = ['quartzo', 'pergaminho', 'podador']

//funcoes usadas em cada rodada
function escolhaJogador(){
    let escolha = prompt(`Faça sua escolha [quartzo, pergaminho ou podador]: `).toLowerCase();
    while ((escolha != 'quartzo') && (escolha != 'pergaminho') && (escolha != 'podador')){
        escolha = prompt('Faça uma escolha válida [quartzo, pergaminho ou podador]: ');
    }
    return escolha
}

function escolhaMaquina(){
    indice = Math.floor(Math.random() * 3 );
    return escolhas[indice]
}

while(true){
    //intro
    console.clear();
    console.log(`----------------------------------Quartzo, pergaminho, podador------------------------------------
        Codelab semana 02 do módulo 01: programar um jogo de jokenpô do usuário contra a máquina. Nesse jogo, o usuário define quantas rodadas serão jogadas
        e a pontuação de cada rodada é salva e contada, para declarar um vencedor ao final.
        A única diferença que você verá para um jokenpô normal é: 
        ---------pedra é   QUARTZO
        ---------papel é   PERGAMINHO
        ---------tesoura é PODADOR`);
    let pontosMaquina = 0
    let pontosJogador = 0

    //pegar o total de rodadas como número inteiro
    let totalDeRodadas = parseInt(prompt("Digite o número de rodadas que você quer jogar contra o computador: "));
    while (isNaN(totalDeRodadas)){
        console.log('Você precisa digitar um número!')
        totalDeRodadas = parseInt(prompt("Digite o número de rodadas que você quer jogar contra o computador: "));
    }

    function rodada(){
        console.clear();
        console.log('Rodada', contadorDeRodadas, 'de', totalDeRodadas);

        let jog = escolhaJogador();
        console.log("Sua escolha foi:", jog);
        let maq = escolhaMaquina();
        console.log("A máquina escolheu:", maq);
        console.log();

        if((jog == 'quartzo' && maq == 'podador') || (jog == 'pergaminho' && maq == 'quartzo') || (jog == 'podador' && maq == 'pergaminho')){
            //jogador venceu a rodada
            pontosJogador ++;
            console.log("Você venceu a rodada! Ganhou um ponto!");
        } else if(maq == jog){
            console.log("Essa rodada empatou. Ninguém pontua.");
        } else{
            pontosMaquina ++;
            console.log("A máquina venceu a rodada! A máquina pontua.");
        }
        console.log();
        prompt("Pressione ENTER para continuar");
    }

    //inicio das rodadas
    let contadorDeRodadas = 0;
    for( ; contadorDeRodadas < totalDeRodadas; contadorDeRodadas++){
        rodada();
    }

    //resultado
    console.clear();
    if (pontosJogador > pontosMaquina){
        console.log("Você venceu!");
    } else if (pontosJogador == pontosMaquina){
        console.log("Deu empate!");
    } else{
        console.log("A máquina venceu!");
    }
    console.log("Você marcou", pontosJogador, "pontos.");
    console.log("e a máquina marcou", pontosMaquina, "pontos.");

    console.log();
    let continuar = prompt("Você deseja jogar novamente?(s/sim/n/mao) ").toLowerCase();
    //normalização de resposta
    while(true){
        if ((continuar == "s") || (continuar == 'n') || (continuar == 'sim') || (continuar == 'nao')){
            break
        } else{
            continuar = prompt("Digite uma resposta válida(s/sim/n/nao): ").toLowerCase();
        }
    }

    //sim ==> reinicia // não ==> acaba
    if (continuar == 'nao' || continuar == 'n'){
        break
    }
}
