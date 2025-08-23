// const pessoa = {
//     age: 18
// }

// const guilherme = {
//     nome: "Guilherme",
//     gender: "M",
//     __proto__: pessoa
// }

// console.log(guilherme)
// console.log(guilherme.age)

const pessoa = {
    habilitacao: "AB"
}

function Pessoa(nome, age) {
    this.nome = nome;
    this.age = age;
}

Pessoa.prototype.apresentation = function() {
    console.log(`Hello! My name is ${this.nome} and my age is ${this.age}`);
};

// const guilherme = new Pessoa("Guilherme", 18);

// console.log(guilherme)
// guilherme.apresentation(); // Hello! My name is Guilherme and my age is 18


const guilherme = Object.create(pessoa)

new Pessoa(guilherme.nome = "Guilherme", guilherme.age = 18)

console.log(guilherme, guilherme.habilitacao)
