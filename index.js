var quantidadeBotao = document.querySelectorAll(".bateria").length;


for ( var i = 0 ; i < quantidadeBotao ; i++ ) {
    
    document.querySelectorAll(".bateria")[i].addEventListener("click", function () {

        var botaoPressionado = this.innerHTML;

        tocaSom(botaoPressionado);

        animacao(botaoPressionado);
    });

}

document.addEventListener("keydown", (evento) => {
    var botaoPressionado = evento.key;
    tocaSom (botaoPressionado);
    animacao(botaoPressionado);
});

function animacao(botaoPressionado) {
    var botaoAtivo = document.querySelector("." + botaoPressionado);
    botaoAtivo.classList.add("pressionado");

    setTimeout(() => {
        botaoAtivo.classList.remove("pressionado");
    }, 100); 
}

function tocaSom (botaoPressionado) {
    switch (botaoPressionado) {
        case "w" :
            var crash = new Audio("sons/crash.mp3");
            crash.play();
            break;
        case "a" :
            var snare = new Audio("sons/snare.mp3");
            snare.play();
            break;
        case "s" :
            var tom1 = new Audio("sons/tom-1.mp3");
            tom1.play();
            break;
        case "d" :
            var tom2 = new Audio("sons/tom-2.mp3");
            tom2.play();
            break;
        case "j" :
            var tom3 = new Audio("sons/tom-3.mp3");
            tom3.play();
            break;
        case "k" :
            var tom4 = new Audio("sons/tom-4.mp3");
            tom4.play();
            break;
        case "l" :
            var kick = new Audio("sons/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    }

}