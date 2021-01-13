var button1 = document.querySelector("#p1");
var button2 = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numinput=document.querySelector("input[type='number']");
var round =document.querySelector("p span");
var score1=0;
var score2=0;
var game_over=false;
var winscore=numinput;
//document.querySelector("#p11");

button1.addEventListener("click",function(){
	if (!game_over) {
	score1++;
	if(score1 === winscore){
		p11.classList.add("winner");
		game_over=true;
	}
	p11.textContent=score1;
	}
});
button2.addEventListener("click",function(){
	if (!game_over) {
	score2++;
	if(score2 === winscore){
		p22.classList.add("winner");
	 	game_over=true;
	}
	p22.textContent=score2;
}
});

resetButton.addEventListener("click",function(){
	reset();
});

function reset(){
	score1=0;
	score2=0;
	p11.textContent=0;
	p22.textContent=0;
	p11.classList.remove("winner");
	p22.classList.remove("winner");
	game_over=false;
}

numinput.addEventListener("change",function(){
	round.textContent = numinput.value;
	winscore=Number(numinput.value);
	reset();
});

