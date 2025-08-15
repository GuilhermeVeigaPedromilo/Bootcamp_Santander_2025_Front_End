data_now = new Date().toLocaleString()

class Pessoa {
    name;
    age;
    register;

    constructor(name, age, register) {
        this.name = name;
        this.age = age;
        this.register = register;
    }

    bater_ponto_entrada() {
        console.log(`Colaborador ${this.name} bateu o ponto às: ${data_now}`)
    };

    bater_ponto_saida() {
        console.log(`Colaborador ${this.name} bateu o ponto às: ${data_now}`)
    }
}

const guilherme = new Pessoa("Guilherme", 18, 243243);

console.log(guilherme)
guilherme.bater_ponto_entrada()
guilherme.bater_ponto_saida()