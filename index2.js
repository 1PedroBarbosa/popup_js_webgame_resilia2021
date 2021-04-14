function acoesanab() {
    var escolhaUm = 1;
    var escolhaDois = 2;
    var escolhaTres = 3;
    var escolha = prompt("Você tem três caminhos a seguir: \n 1-  Ir até a varanda do shopping \n 2 - Ir para a escada de incêndio \n 3 - Ir para o setor administrativo do shopping. Qual você escolhe: ");

    if (escolha == escolhaDois) {
        alert("Prossiga")
        faseDois()
    } else if (escolha == 1) {
        alert(" Você deu de frente com um ser humano armado e ele atira em você. Fim de jogo.")
    } else if (escolha == 3) {
        alert("Havia um grupo de humanos no telhado, a avistaram e atiraram em você. Fim de jogo.");
        window.location.href = "write.html"
    }
}

function faseDois() {
    var escolhaCerta = "Desce";
    var escolhaDigitada = prompt("Você encontrou a escada de incêndio. O que você faz? \n 1- Desce para o primeiro andar. \n 2 - Sobe para o terceiro andar.", "Desce ou Anda");
    if (escolhaCerta == escolhaDigitada) {
        alert("Você encontra Luiz H. e vocês vão até o outro lado do shopping. Parabéns!");
    } else {
        alert("Um grupo de humanos a encontra e atira em você. Fim de jogo.");
    }
}