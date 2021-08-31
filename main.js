const counter = document.getElementById('counter');
const incr = document.querySelector('.incr');
const decr = document.querySelector('.decr');

var count = 0;
incr.addEventListener("click", function(){
    count++;
    counter.innerHTML = count;
});

decr.addEventListener("click", function(){
    count--;
    counter.innerHTML = count;
});