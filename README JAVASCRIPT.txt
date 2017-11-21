Consultar pasta Javascript para maiores informações.


>>>AULA 02 Olá Mundo <<<

alert() invoca um popup de alerta ao carregar a página

	<script>
		alert("Olá mundo!");
	</script>

>>>Aula 03 <<<

Aqui criamos uma var largura que recebe a função innerwidth do objeto raíz window.
embaixo, fazemos ele declarar na tela a var largura por meio de um alert

	<script>
		var largura = window.innerWidth;
		window.alert(largura);
	</script>

	EX2.:

	window.alert(window.document.title)

	O código acima mostrará o título do documento, percebe que ele especifícia do mais geral pro mais específico WINDOW > DOC > TITLE

	Podemos criar funções declarando-as ou através de expressões.

	Declaração de função:
	function minhaFuncao() {}

	Expressões de funções:
	var minhaFuncao = function() {}

	ou

	var minhaFuncao = function minhaFuncao() {};

>>> Aula 04 Manipuladores de eventos <<<

Abaixo temos as propriedades:

onmouseover="alert('Mostra esse alerta ao hover');"
onclick="alert('Mostra esse alerta ao click');"
onload="alert('Mostra esse alerta ao carregar');"

<body>
<img id="xti"
	onmouseover="alert('Hover');"
	onclick="window.alert('Mensagem');"
	src="img/off.jpg"/>
</body>

Podemos também criar uma função Javascript e alterar propriedades da mesma imagem puxando pelo seu ID="xti":

	<script type="text/javascript">
		function ligar(){
			document.getElementById('xti').src="img/on.png"; 	<!--o document.getelementbyid('xti') puxa o documento que será trabalhado, após o ponto, alteramos a src da imagem-->
		}
	</script>
</head>
<body>
<img id="xti"
	onclick="ligar();"
	src="img/off.jpg"/>


>>>Aula 05 Variáveis <<<

Abaixo criaremos duas funções nomeadas por nós mesmos, a primeira, function nome mostrará um alerta com o primeiroNome, a segunda, um alerta com a idade!

Específicamos as variáveis e a ação da função entre chaves, e invocamos a função no objeto do html, nesse caso, a div, que ao clicar, receberá a função

<script>
function nome(){
	var primeiroNome = 'Junior';
	 var idade = 23;
	 var casado = false;

	 alert(primeiroNome)
}

function idade(){
	var idade = (23 + ' anos');
	var casado = false;
	alert(idade);
}
</script>

<div onclick="nome();" style="background-color:black; width:300px;height: 300px;">
Nome
</div>

<div onclick="idade();" style="background-color:black; width:300px;height: 300px;">
Idade
</div>

>>>Aula 06 Constantes <<<

const SOME_VALUE = "Your string";
This const means that you can't reassign it to any other value.

>>> Aula 07 Camadas e Input <<<

Abaixo vemos uma função que pede um input como variável, assim como o x=int(input('Digite x')) do python

<script>

function nome(){
	var primeiroNome = prompt('Qual é o seu nome?');
	 alert("Nice " + primeiroNome)
}
</script>

>>>Aula 08 Operadores <<<

<script>
var x = 9 + 4;
alert(x);

function soma(){ alert(3+3);
}
</script>

>>>Aula 09 Operadores Matemáticos <<<

Mesma coisa da aula anterior

>>>Aula 10 Operadores de compração<<<

==
=
>
<
===

>>>Aula 11 Operadores lógicos<<<


>>> Pr1v8 8 Redirect Refresh <<<

<button onclick="window.location.href= 'http://google.com.br'"> Ir para o Google </button>
<button onclick="window.location.reload()"> Refresh </button>

>>>Mudar dados dentro de uma DIV puxando pelo ID <<<

<button onclick="document.getElementById('area').innerHTML = prompt('Digite algo')"> Refresh </button>
<button onclick="this.innerHTML = prompt('Mudar o nome do botão')"> Mudar meu nome </button>


>>>pr1v8 11 Pegando elementos por ID e manipulando suas propriedades <<<

	<h3>Ingredientes do bolo</h3>
	<input type="text" id="ingrediente">
	<button onclick="adicionarIngrediente()">Adicionar</button><br/><br/>
	<ul id="lista">
	</ul>

	<script>
function adicionarIngrediente(){
	var ing = document.getElementById("ingrediente").value;
	var listahtml = document.getElementById("lista").innerHTML;
	listahtml = listahtml + "<li>"+ing+"</li>"; /* Substituição */
	document.getElementById("lista").innerHTML = listahtml;
}
	</script>

criamos uma variável ingrediente refelente ao valor digitado do input com.value no final
Depois chamamos o interior da camada UL que será manipulada, utilizando o getelementbyid.innerhtml e nomeando-o como uma variável listahtml
após isso mudamos seu próprio valor, fazendo uma atribuição de si mesmo +"<li>"+ing+"</li>""
Abaixo, pegamos a lista pelo seu ID e a escrevemos usando a variável usada acima.

>>>pr1v8 12 Operações e ParseINT(conversão para Inteiros)<<<

Mesmo esquema do de cima, pegamos um id do input digitado pelo usuário, x e y, fazemo um botão que ativa a função somar, uma div de resultado onde será escrita e por fim o nosso script que define o que serão nossas variáveis e como serão escritas


<input label="Digite um n" type="text" id="x">
<input label="Digite um n" type="text" id="y">
<button onclick="somar()">Somar</button>
<div id="result">
</div>

function somar(){
	var x = parseInt(document.getElementById('x').value);
	var y = parseInt(document.getElementById('y').value);
	var soma = x+y;
	inside = document.getElementById('result').innerHTML;
	inside = inside + "<h2>"+soma+"</h2>"
	document.getElementById('result').innerHTML = soma;
}

>>> Pr1V8 13 Arrays <<<

Parecido com Python

var lista = ["Aqui", "Dois", "Feijão", "Pão", "Macarrão", "Carner"];
alert(lista[0]);
alert(lista.lenght)

>>> Pr1v8 13 Manipulação de Arrays <<<

<script>
var lista = ["arroz", "feijo", "macarro", "teste"]
lista.indexOf("feijo"); ~> Mostra a posição do item
lista.join(",") ~> Divide os itens do array em uma string separado por virgul
lista.join("/") ~> Divide os itens do array em uma string separado por barra
lista.pop();    ~> Remove o último item do array
lista.shift();  ~> Remove o primeiro item do array
lista.push();   ~> Adiciona itens no array, funciona como o lista.append() do Python.

</script>

<script>

===ex.:

if(lista.indexOF("Feijão") > -1) {
alert("Tem na lista");
}else{
	alert("Não tem");
}

===ex.:

var pessoas = new Array();
pessoas[0] = new Array("Ricardo"; "M");

===exemplo de Arr@y Multidimensional.:

var pessoas = 	[	["Ricardo","M"]
					["Sanra", "F"]
				]

alert pessoas([1][0]) ~> O primeiro é pro array, o segundo é pra posição

===exemplo de Arr@y Associativo.:

Nesse utilizamos chaves:

var pessoa = {nome:"Beatriz", cidade:"Brasilia"};
alert (pessoa.nome)
alert (pessoa.cidade)

===exemplo de funções de Arr@y:

</script>


>>> pr1v8 14 Verificadores (IF) <<<
<script>
if(nome=="Fulano"){
	alert("Sim");
}else{
	alert("Não");
}

>>>Pr1v8 15 LOOPS<<<

var x = 0;
while (x < 10) {

	document.write("Numero:"+x+"<br/>");
	x++;
}

for(x = 0; x<10; $x++){
	document.write(x);
}

>>>pr1v8 16 Switch <<<

x = prompt("Qual é o numero?");
switch(x){
	case 0:
		alert("X é o 0");
		break;
	case 1:
		alert("X é o 1"):
		break;
}

>>>pr1v8 Intermediário 1 EVENTOS<<<

Para eventos de mouse e teclado, consulte o arquivo i2-eventos html e js

Aula muito extensa e tomaria muito desse documento pois existem diversas funções de mouse e teclado

>>>Pr1v8 Intermediário 4 Eventos de Página <<<

<body onload="carregouPag()">

function carregouPag(){
	alert("Loaded");
}

>>>pr1v8 Intermediário 5 Eventos de Formulário <<<

onsubmit > submit
onfocus > escolheu campo
onblur > saiu do campo
onchange=mudouOpcao(this) > mudou opção, this porque selecionou o interno

<form method="POST" onsubmit="return false">
	<input type="text" name="nome" onfocus="focou()" onblur="desfocou()" /><br/><br/>
	<select name="cidade" onchange="mudouOpcao(this)">
		<option>SP</option>
		<option>RJ</option>
		<option>BH</option>
		<option>RE</option>
	</select>
	<br/>
	<br/>
	<input type="submit" value="Enviar">

	function mudouOpcao(objeto){
	console.log("Cidade: "+objeto.value);
}

function focou(){
	console.log("Focou no campo 1");
}

function desfocou(){
	console.log("Desfocou do campo 1");
}


>>>pr1v8 Intermediário 6 (Jogo do Trump) <<<

>>>pr1v8 Intermediário 7 DATA <<<

var dt = new Date()
dt.getHours()
dt.getMinutes()
dt.getSeconds()

>>>Pr1V8 Avançado 1 Temporização <<<

setInterval(function acao(){ alert("Executou...<br/>"); }, 3000);
setTimeout(function action(){ document.write("Hello<br/>Hello"); }, 1000); //Só executa uma vez

>>> Pr1v8 Avançado 2, 3, 4, 5 Orientação a Objetos <<<

Exemplo de Classe e Objeto em JS: Aula 1~5:

function Animal(){
	this.raca = "Raça";
	this.nome = "Nome";
	this.peso = 2
	this.idade = "Idade";

	this.fazerXixi = function(){
		console.log("Xiiiiiiiiii...");
	}

	this.comer = function(kg){
		for(var i=0;i<kg;i++){ //*Função auxiliar *//
			this.mastigar();
		}
		console.log("Nice...");
		this.peso = this.peso + kg;
	}
}

this.mastigar = function(){ //*Função auxiliar criada em ref a primeira *//
	console.log("Nhoc...");
}

var lulu = new Animal();
lulu.raca = "Gato"
lulu.peso = 20
lulu.nome = "Lulu"
lulu.idade = "10"

var xuxu = new Animal();
xuxu.raca = "Elefante"
xuxu.nome = "Xuxu"
xuxu.peso = 2000
xuxu.idade = "10"

/**Exemplo Python:
class Trainer:
    def __init__(self, nome, idade, cao):
        self.nome = nome
        self.idade = idade
        self.cao = cao

    def skills(self):
        self.cao.daApatinha()
        self.cao.latir()

class Cachorro:
    def __init__(self, nome, cor):
        self.nome = nome
        self.cor = cor
        self.Trainer = Trainer

    def latir(self):
        print('{}: AUAUAUAUAUAUAUAUAUUA'.format(self.nome))

    def daApatinha(self):
        print('{} deu a patinha'.format(self.nome))

    def mudanome(self):
        self.nome = input('Digite o novo nome')
        **/

>>> Pr1v8 Avançado 6~7 Introdução a Web Storage <<<

localStorage.setItem("visitas", 1);

Após atualizar a pág, esses dados ficarão salvos no navegador

localStoraget.getItem("visitas")

----------------

>>>output: 1

----------------

para remover: localStorage.removeItem("visitas");

easymode: localStorage.visitas = "1"; //Adiciona visitas em uma linha só //

Escrever no HTML "<div id ="info"></div>":

var nome = '';

if (typeof localStorage.nome == "undefined"){
	localStorage.nome = prompt("Qual seu nome?");
}

var nome = localStorage.nome;
document.getElementById("info").innerHTML = nome
