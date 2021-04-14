function acoesluizh() {
    var escolhaUm = 1;
    var escolhaDois = 2;
    var escolhaTres = 3;
    var escolha = prompt(" Você está no primeiro andar, e tem algumas decisões a fazer: \n 1-  Vai em direção aos banheiros \n 2 -  Ir em direção a escada de incêndio.  \n 3 -  Atravessar a praça de alimentação.   ");

    if (escolha == escolhaDois) {
        alert("Prossiga")
        faseDois()
    } else if (escolha == 1) {
        alert("Você encontra um grupo de crianças. Elas estão armadas, você não consegue ataca-las. Elas te atacam. Fim de jogo")
    } else if (escolha == 3) {
        alert("Você encontra um grupo de humanos sem tempo hábil para produzir uma arma. Eles atiram em você. Fim de jogo.");
    }
}

function faseDois() {
    var escolhaCerta = "Desce";
    var escolhaDigitada = prompt("Você encontrou a escada de incêndio. O que você faz? \n 1- Desce para o terreo. \n 2 - Sobe para o segundo andar.", "Desce ou Anda");
    if (escolhaCerta == escolhaDigitada) {
        alert("Você encontrou uma porta com senha. Descubra qual é para abrir a porta:");
        faseQuatro()
    } else {
        alert("Um grupo de humanos o encontra e atira em você. Fim de jogo.");
    }
}
function faseQuatro() {
    alert("O número natural que segue o nove e precede o onze")
    var senhaCerta = 10;
    var senha = 0;
    while (senha < 3) {
        var adivinha = prompt("Qual é a senha?");
        if (senhaCerta == adivinha) {
            alert("Você venceu!!!!!!!!")
            break
        } else {
            alert("Não foi dessa vez");
        }
    }

}