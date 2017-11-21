var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest(); // Como os dados estão disponibilizados em uma estrutura que conhecemos, será fácil trazê-los para dentro do código. 
    								//Ele está com uma notação bastante parecida com o JavaScript.Para fazer essa requisição, temos o XMLHttpRequest:
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); /*O primeiro será o método open(), com o qual especificaremos tipo de requisição queremos fazer, no caso, GET. Também indicaremos para onde queremos fazer a requisição:*/

	xhr.addEventListener("load", function(){
		var erroAjax = document.querySelector("#erro-ajax"); // span de erro

		if(xhr.status == 200){
			erroAjax.classList.add("invisivel");
			var resposta =xhr.responseText; // E para acessar os dados da resposta, acessaremos a propriedade responseText do XMLHttpRequest
        	console.log(resposta);
        	console.log(typeof resposta);

        	var pacientes = JSON.parse(resposta);

        	pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
        }else{
        	erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});