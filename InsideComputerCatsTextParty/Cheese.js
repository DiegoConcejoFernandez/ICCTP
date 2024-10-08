var t = document.getElementById("m1");
var m1 = document.getElementById("m2");
var m2 = document.getElementById("m3");
var m3 = document.getElementById("m4");
var m4 = document.getElementById("m5");

t.onclick = function(){
    t.style.display = 'none';
    m1.style.display = 'flex';
    m2.style.display = 'flex';
    m3.style.display = 'flex';
    m4.style.display = 'flex';
}