var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() { // Usamos essa função para esperar 500 milissegundos antes de remover o parent, senão a remoção seria brusca e instantânea. Como o computador é muito rápido, o browser processa as linhas do script instantaneamente
        event.target.parentNode.remove();
    }, 500);

});
/*
OU

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.remove();
});

OU PARA REMOVER O EVENTO MENCIONADO NO INÍCIO


pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
    this.remove();
    });
});*/