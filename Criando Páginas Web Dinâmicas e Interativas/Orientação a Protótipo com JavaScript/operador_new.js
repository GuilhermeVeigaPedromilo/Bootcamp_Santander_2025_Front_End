function Pessoa(nome, age) {
    this.nome = nome,
    this.age = age
} 

const guilherme = new Pessoa("Guilherme", 18)
 console.log(guilherme)

Pessoa.call(guilherme.nome = "Gui", 18)
console.log(guilherme)