class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const list = [new Pessoa("Gui"), new Pessoa("Bário"), new Pessoa("Hélio")];

const data = list.map((pessoa => {
    return pessoa.nome
}))

console.log(data)