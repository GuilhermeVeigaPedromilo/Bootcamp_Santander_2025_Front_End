const timestamp = new Date().toLocaleString();

const pessoa = {
    nome: "Gui",
    idade: 18,

    // Criando um método
    bater_ponto_entrada: function () {
        console.log(`Colaborador ${this.nome} bateu o ponto às: ${timestamp}`)
    },

    bater_ponto_saida: function () {
        console.log(`Colaborador ${this.nome} bateu o ponto às: ${timestamp}`)
    }
}

// Chamando o método
pessoa.bater_ponto_entrada()

console.log(pessoa)

// Adicionando informações
pessoa.registro = 404030

console.log(pessoa)

// Deletando idade do objeto
delete pessoa.idade;

console.log(pessoa)

// Chamando o método
pessoa.bater_ponto_saida()