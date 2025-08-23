const pessoa = {
    nome: "Guilherme",
    idade: 18
}

function apresentation(prefix) {
    console.log(prefix, this.nome)
}

apresentation("Olá")
apresentation.call(pessoa, "Hello");
apresentation.apply(pessoa, ["Hello"])