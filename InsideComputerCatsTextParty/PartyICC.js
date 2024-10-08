var hv = document.getElementById("hv");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var r3 = document.getElementById("r3");

hv.onclick = function(){
    h1.style.display = 'none';
    h2.style.display = 'none';
    hv.style.display = 'none';
    mouseMusic2.play()
}

r1.onclick = function(){
    r1.style.display = 'none';
}
r2.onclick = function(){
    r2.style.display = 'none';
}
r3.onclick = function(){
    r3.style.display = 'none';
}

var mensaje1 = document.getElementById("rm1");
var rata1 = document.getElementById("rp1");
var mensaje2 = document.getElementById("rm2");
var rata2 = document.getElementById("rp2");
var mensaje3 = document.getElementById("rm3");
var rata3 = document.getElementById("rp3");
var mensaje4 = document.getElementById("rm4");
var rata4 = document.getElementById("rp4");
var mensaje5 = document.getElementById("rm5");
var rata5 = document.getElementById("rp5");
var mensaje6 = document.getElementById("rm6");
var rata6 = document.getElementById("rp6");
var mflag = false;

const mouseSound1 = document.getElementById("audior1");
const mouseSound2 = document.getElementById("audior2");
const mouseSound3 = document.getElementById("audior3");
var g = 0;

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

function Check(){
    if(mflag === true){
        mensaje1.style.display = 'none';
        mensaje2.style.display = 'none';
        mensaje3.style.display = 'none';
        mensaje4.style.display = 'none';
        mensaje5.style.display = 'none';
        mensaje6.style.display = 'none';
        mensajedj.style.display = 'none';
        mflag = false;
    }
}

rata1.onclick = function(){  
    Check();
    mensaje1.style.display = 'flex';
    mflag = true;
    g=1;
    grito();
}

rata2.onclick = function(){
    Check();
    mensaje2.style.display = 'flex';
    mflag = true;
    alert("Oops! Seems that this mouse is not responding");
    g=5;
    grito();
}

rata3.onclick = function(){
    Check();
    mensaje3.style.display = 'flex';
    mflag = true;
    g=2;
    grito();
}

rata4.onclick = function(){
    Check();
    mensaje4.style.display = 'flex';
    mflag = true;
    g=3;
    grito();
}

rata5.onclick = function(){
    Check();
    mensaje5.style.display = 'flex';
    mflag = true;
    g=2;
    grito();
}

rata6.onclick = function(){
    Check();
    mensaje6.style.display = 'flex';
    mflag = true;
    g=1;
    grito();
}

const mouseMusic1 = document.getElementById("banger1");
const mouseMusic2 = document.getElementById("banger2");
const mouseMusic3 = document.getElementById("banger3");
const mouseMusic4 = document.getElementById("banger4");
const adj = document.getElementById("audioDJ");
var mu1 = document.getElementById("mu1");
var mu2 = document.getElementById("mu2");
var mu3 = document.getElementById("mu3");
var mu4 = document.getElementById("mu4");
var mensajedj = document.getElementById("ratdjm");
var ratadj = document.getElementById("rdj1");
var html = document.getElementById("nombreMusica");
var m1 = true;
var m2 = true;
var m3 = true;
var m4 = false;

/*
There has to be an easier way to compress everything inside one "mCheck function, but the closest i got was with this:

function mCheck(){

    if(m1==false){
        m1=true;
        console.log("m1a is"+m4)
    }else if(m2==false){
        m2=true;
        console.log("m2a is"+m4)
    }else if(m3==false){
        m3=true;
        console.log("m3a is"+m4)
    }else if(m4==false){
        m4=true;
        console.log("m4a is"+m4)
    }

}

The proble is that with the "else if" once one statement matches it stops checking the rest and doesn't work, If you could tell me the
statement I should be using it would be amazing cause this have gave me a lot of headaches thinking about how to optimize it :)
*/
function mCheck1(){
    if(m1==false){
        m1=true;
    }
}
function mCheck2(){
    if(m2==false){
        m2=true;
    }
}

function mCheck3(){
    if(m3==false){
        m3=true;
    }
}

function mCheck4(){
    if(m4==false){
        m4=true;
    }
}


function mBecome1(){
    if(m1==true){
        mu1.style.display = 'flex';
    } 
}

function mBecome2(){
    if(m2==true){
        mu2.style.display = 'flex';
    } 
}

function mBecome3(){
    if(m3==true){
        mu3.style.display = 'flex';
    } 
}

function mBecome4(){
    if(m4==true){
        mu4.style.display = 'flex';
    } 
}

ratadj.onclick = function(){
    adj.play();
    Check();
    mensajedj.style.display = 'flex';
    mflag = true;
}

mu1.onclick = function(){
    html.innerHTML ="Deadmou5 - Hypnocurrency";
    mensajedj.style.display = 'none';
    mu1.style.display = 'none';
    mCheck1();
    mCheck2();
    mCheck3();
    mCheck4();
    m1 = false;
    mBecome1();
    mBecome2();
    mBecome3();
    mBecome4();
    mouseMusic1.pause();
    mouseMusic2.pause();
    mouseMusic4.pause();
    mouseMusic3.play();
}

mu2.onclick = function(){
    html.innerHTML = "Mouse on Venus - C418";
    mensajedj.style.display = 'none';
    mu2.style.display = 'none';
    mCheck1();
    mCheck2();
    mCheck3();
    mCheck4();
    m2 = false;
    mBecome1();
    mBecome2();
    mBecome3();
    mBecome4(); 
    mouseMusic2.pause();
    mouseMusic3.pause();
    mouseMusic4.pause();
    mouseMusic1.play();
}

mu3.onclick = function(){
    html.innerHTML = "MouseMusic - TwoFingerz";
    mensajedj.style.display = 'none';
    mu3.style.display = 'none';
    mCheck1();
    mCheck2();
    mCheck3();
    mCheck4();
    m3 = false;
    mBecome1();
    mBecome2();
    mBecome3();
    mBecome4();
    mouseMusic1.pause();
    mouseMusic3.pause();
    mouseMusic2.pause();
    mouseMusic4.play();
}

mu4.onclick = function(){
    html.innerHTML = "El Ratón - Cheo Feliciano";
    mensajedj.style.display = 'none';
    mu4.style.display = 'none';
    mCheck1();
    mCheck2();
    mCheck3();
    mCheck4();
    m4 = false;
    mBecome1();
    mBecome2();
    mBecome3();
    mBecome4();
    mouseMusic1.pause();
    mouseMusic3.pause();
    mouseMusic4.pause();
    mouseMusic2.play();
}