function leiaMais(){
    let pontos = document.getElementById("pontos");
    let maisTexto=document.getElementById("mais");
    let btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display==="none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";

    } else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
}


function leiaMaisMusica(){
    let pontos = document.getElementById("pontosmusica");
    let maisTexto=document.getElementById("maismusica");
    let btnLeiaMusica=document.getElementById("btnLeiaMusica");

    if(pontos.style.display==="none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMusica.innerHTML="Leia Mais";

    } else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMusica.innerHTML="Leia Menos";
    }
}

function leiaMaisTrompete(){
    let pontos = document.getElementById("pontostrompete");
    let maisTexto=document.getElementById("maistrompete");
    let btnLeiaTrompete=document.getElementById("btnLeiaTrompete");

    if(pontos.style.display==="none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaTrompete.innerHTML="Leia Mais";

    } else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaTrompete.innerHTML="Leia Menos";
    }
}

function leiaMaisTrompetehistoria(){
    let pontos = document.getElementById("pontostrompetehistoria");
    let maisTexto=document.getElementById("maistrompetehistoria");
    let btnLeiaTrompetehistoria=document.getElementById("btnLeiaTrompetehistoria");

    if(pontos.style.display==="none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaTrompetehistoria.innerHTML="Leia Mais";

    } else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaTrompetehistoria.innerHTML="Leia Menos";
    }
}