var botaoDiurno = document.querySelector("#diurno");

botaoDiurno.addEventListener("click", function(){
	corpo = document.querySelector(".akibody");
	geral = document.querySelectorAll(".aki");
	corpo.classList.remove("bodybranco");
	corpo.classList.add("bodypreto");
	for (var i = 0; i <= geral.length; i++) {
		geral[i].classList.remove("branco");
		geral[i].classList.add("preto");
	}
});

var botaoNoturno = document.querySelector("#noturno");

botaoNoturno.addEventListener("click", function(){
	corpo = document.querySelector(".akibody");
	geral = document.querySelectorAll(".aki");
	corpo.classList.remove("bodypreto");
	corpo.classList.add("bodybranco");	
	for (var i = 0; i <= geral.length; i++){
	geral[i].classList.remove("preto");
	geral[i].classList.add("branco");
	}	
});