//pontuacao dos jogadores
var pontuacao = [0, 0];
//pontuacao da rodada atual
var pontuacaoRodada = 0;
//jogador atual
var jogadorAtual = 0;
//botao lançar dado
var botaoLancarDado = document.querySelector("#botao-lancar-dado");
//botao passar vez
var botaoPassarVez = document.querySelector("#botao-passar-vez");
// pontuação rodada 0
var pontuacaoRodada0 = document.querySelector('#pontuacao-rodada-0');
// pontuação rodada 1
var pontuacaoRodada1 = document.querySelector('#pontuacao-rodada-1');

var pontuacaoGlobal0 = document.querySelector('#pontuacao-global-0');
var pontuacaoGlobal1 = document.querySelector('#pontuacao-global-1');
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];
botaoPassarVez.addEventListener("click", function () {
    jogadorAtual = 1 - jogadorAtual;
    })
botaoLancarDado.addEventListener("click", function () {
    var dado = Math.floor(Math.random() * 6) + 1;
    if (dado==1){
        pontuacao[jogadorAtual] = 0;
        pontuacoesRodadas[jogadorAtual].textContent = 0;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        jogadorAtual = 1 - jogadorAtual;
    }
    else{
        pontuacao[jogadorAtual] += dado;
        pontuacoesRodadas[jogadorAtual].textContent = dado;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
}
   })