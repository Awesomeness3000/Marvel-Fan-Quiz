var points = sessionStorage.getItem("points");

function reset(){
    location.href="./index.html"
}

var head = document.getElementById("result-header");
var body = document.getElementById("result-body");

if(points>=5){
head.innerText="That's nice! You've got " +points+ "out of 6"
body.innerText="You worked hard and it payed off! Awesome job!!"
}
else{
head.innerText="Oops! You got only" +points+ "out of 6"
body.innerText="Marvel have created more Avengers than even the geekiest of geeks could remember, but that doesn’t mean you shouldn’t try!"
};