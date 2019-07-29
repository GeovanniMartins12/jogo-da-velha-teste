let velhas = document.querySelectorAll("header div");
let velhas2 = document.querySelectorAll("nav div");
let velhas3 = document.querySelectorAll("footer div");

let cores = ["red", "yellow"];

function gerarCor(){
    this.style.backgroundColor = "red";
}
function gerarCor2(){
    this.style.backgroundColor = "yellow";
}

for(let velha of velhas){
    velha.onclick = gerarCor;
    velha.ondblclick = gerarCor2;
}

for(let velha2 of velhas2){
    velha2.onclick = gerarCor;
    velha2.ondblclick = gerarCor2;
}

for(let velha3 of velhas3){
    velha3.onclick = gerarCor;
    velha3.ondblclick = gerarCor2;

 
function jogo(){

    if(velhas[0].style.backgroundColor == cores[0] && velhas[1].style.backgroundColor == cores[0] 
        && velhas[2].style.backgroundColor == cores[0]){
        alert("Voce venceu");
    }

    else if(velhas2[0].style.backgroundColor == cores[0] && velhas2[1].style.backgroundColor == cores[0] 
        && velhas2[2].style.backgroundColor == cores[0]){
        alert("Venceu");
    }

    else if(velhas3[0].style.backgroundColor == cores[0] && velhas3[1].style.backgroundColor == cores[0] 
        && velhas3[2].style.backgroundColor == cores[0]){
            alert("venceu");
    }

    else if(velhas[0].style.backgroundColor == cores[1] && velhas[1].style.backgroundColor == cores[1] 
        && velhas[2].style.backgroundColor == cores[1]){
        alert("Voce venceu jogador 2");
    }

    else if(velhas2[0].style.backgroundColor == cores[1] && velhas2[1].style.backgroundColor == cores[1] 
        && velhas2[2].style.backgroundColor == cores[1]){
        alert("Venceu jogador 2");
    }

    else if(velhas3[0].style.backgroundColor == cores[1] && velhas3[1].style.backgroundColor == cores[1] 
        && velhas3[2].style.backgroundColor == cores[1]){
        alert("Venceu jogador 2");
    }
}}
