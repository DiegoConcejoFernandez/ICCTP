var mensaje = document.getElementById("rat");
var rata = document.getElementById("rpf");
var si = document.getElementById("si");
var no = document.getElementById("no");
var fumar = document.getElementById("fumar");
var cenicero = document.getElementById("cenicero");
var anti = document.getElementById("anti");
var pro = document.getElementById("anoGato");
var nein = document.getElementById("nein");
const mouseSound1 = document.getElementById("audioNO");
const mouseSound3 = document.getElementById("audior3");
const mouseSound2 = document.getElementById("audioFumar");

rata.onclick = function(){
    mensaje.style.display = 'flex';
    mouseSound3.play();
}

no.onclick = function(){
    mensaje.style.display = 'none';
}   

si.onclick = function(){
    mouseSound2.play();
    fumar.style.display = 'flex';
    mensaje.style.display = 'none';
    anti.style.display= 'flex';
    anoGato.style.display= 'none';
}   

cenicero.onclick = function(){
    fumar.style.display = 'none';
    anti.style.display= 'none';
    anoGato.style.display= 'flex';
}   

anti.onclick = function(){
    nein.style.display = 'flex';
    mouseSound1.play();
}

nein.onclick = function(){
    nein.style.display = 'none';
}

var h1 = document.getElementById("h1");
var v2 = document.getElementById("v2");
const ambienceSound = document.getElementById("audiof");

h1.onclick = function(){
    h1.style.display = 'none';
    ambienceSound.play();
}

v2.onclick = function(){
    v2.style.display = 'none';
}