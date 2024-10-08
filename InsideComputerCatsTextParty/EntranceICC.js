/*
Hello Dani :) This is just a warning for you, my code is a little bit messy but i hope that you get to
recognise my processes and understand the ids, classes and other tags, if you have any problem or doubt understanding the process
you can ask me about anything. I hope that you enjoy the experience and i will be really looking forward to any feedback <3

Btw, in case you haven't interacted with the mouse in the main page you should tho ;)
*/
var pupila = document.getElementsByClassName("pupila");

document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";
  /*
  
  event.clientX => get the horizontal coordinate of the mouse
  event.clientY => get the Vertical coordinate of the mouse
  window.innerWidth => get the browser width
  window.innerHeight => get the browser height

  Obviously i didn't come up with this incredible idea of translating the mouse's coordinates with a "regla de tres"
  to coordinates inside de "ojos" with the "pupila" acting as the mouse cursor position in relation to the screen but inside 
  the div, but i found this proyect that applied it in an easy
  and conciese way that i was able to understand and implement in my proyect :)

  "https://www.youtube.com/watch?v=AixAmLWzXYg"

  */
  for(var i=0;i<2;i++){
    pupila[i].style.left = x;
    pupila[i].style.top = y;
    pupila[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}

var cm = document.getElementById("rm");
var rata = document.getElementById("rp");
var m1 = document.getElementById("emensaje1");
var m2 = document.getElementById("emensaje2");
var m3 = document.getElementById("emensaje3");
var m4 = document.getElementById("emensaje4");
var meflag = 0;

/*
I also added sound to the 3 of the main pages, I encourage you to turn on your computer's
volume to have a full inmmersive experience :)
*/

const audio = document.getElementById("audio");
const mouseSound1 = document.getElementById("audior1");
const mouseSound2 = document.getElementById("audior2");
const mouseSound3 = document.getElementById("audior3");
const playButton = document.getElementById("start");
var g = 0;

playButton.onclick = function(){
  audio.play();
  playButton.style.display = 'none';
}

function grito(){
  if(g==1){
      mouseSound1.play();
  }else if(g==2){
      mouseSound2.play();
  }else if(g==3){
      mouseSound3.play();
  }else if(g==4){
      mouseSound2.play();
  }else if(g==5){
    g = 0;
}}

function where() {
if(meflag ===0){
cm.style.display = 'flex';
m1.style.display = 'flex';   
}else if(meflag === 1){
m1.style.display = 'none';
m2.style.display = 'flex';
}else if(meflag === 2){
m2.style.display = 'none';
m3.style.display = 'flex';
}else if(meflag === 3){
m3.style.display = 'none';
m4.style.display = 'flex';
}else if(meflag === 4){
m4.style.display = 'none';
cm.style.display = 'none';
rata.style.display = 'none';
}
}

rata.onclick = function(){

    where();
    meflag++;
    g++;
    grito();
}


