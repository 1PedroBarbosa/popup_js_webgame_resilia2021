function acoesluizfilho(){
    var escolhaUm = 1;
     var escolhaDois = 2;
    var escolhaTres = 3;
    var escolha = prompt (" Você está no subsolo e tem algumas decisões a fazer: \n 1-  Grita por socorro \n 2 -  Ir em direção a escada de incêndio.  \n 3 - Tenta escapar pelas frestras dos destroços.   ");
    
    if (escolha == escolhaDois){
          alert ("Prossiga")
          faseTres ()
      } else if (escolha == 1){
          alert ("Um grupo de humanos ouve sua voz e ateiam fogo em todo subsolo. Você morre queimado. Fim de jogo")
      } else if (escolha == 3) {
          alert ("Você encontra um grupo de humanos que o apedrejam. Você está morto. Fim de jogo.");
      }
    }
    
    function faseTres (){
        var escolhaCerta = "Sobe";
        var escolhaDigitada = prompt ("Você encontrou a escada de incêndio. O que você faz? \n 1- Desce para o segundo subsolo em busca de proteção \n 2 - Sobe para o terreo.", "Desce ou Sobe");
        if (escolhaCerta == escolhaDigitada){
            alert ("Você encontra seus pais e vão até o outro lado do shopping juntos. Parabéns!");
        } else {
            alert ("Um grupo de humanos o encontra e atira em você. Fim de jogo.");
        }
    }