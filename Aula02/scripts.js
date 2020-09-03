// Parte 1 da aula
function validarForm() {
    var nome = document.forms["meuForm"]["txtNome"].value;
    if (nome == "") {
        alert("O campo nome deve ser preenchido");
        return false;
    }
}

// Parte 2 da aula
function validarNumero() {
    var valor, texto;
    valor = document.getElementById("txtValor").value;
    if (isNaN(valor) || valor < 1 || valor > 10) {
        texto = "Valor inválido";
    } else {
        texto = "Valor OK";
    }
    document.getElementById("resultado").innerHTML = texto;
}

// Parte 3 da aula
function aulaObjeto() {
    var pessoa = {
        nome: "João",
        sobrenome: "da Silva",
        idade: 45,
        altura: 1.75,
        nomeCompleto: function(){
            return `${this.nome} ${this.sobrenome}`;
        },
        atualizarIdade: function(valor){
            var novaIdade = this.idade + valor;
            this.idade = novaIdade;
            return this.idade;
        }
        
    };
    var texto = `Nome: ${pessoa.nomeCompleto()} <br>`;
    texto += `Idade: ${pessoa.idade}`;
    document.write(texto);
    document.write(" --------------------- ");
    document.write(`Nova idade: ${pessoa.atualizarIdade(2)}`);
}