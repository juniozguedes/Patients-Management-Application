    var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();


    var form = document.querySelector("#form-adiciona");
    //Extraindo data do form por meio da function que recebe info do #form-adiciona
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);
    //Criando elementos tag HTML
    var pacienteTr = montaTr(paciente)

    //linkando todos os elementos do pai (TR) ao seu superior (TBody)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
});

     function obtemPacienteDoFormulario(form){
    //Aqui dentro da function que retorna dados do form criaremos um objeto em Javascript usando chaves e dois pontos, separando suas atribuicoes por virgula
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;        
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

