data_now = new Date().toLocaleString()

// Criando uma Classe

class Pessoa {
    name;
    age;
    register;

    bater_ponto_entrada() {
        console.log(`Colaborador ${this.nome} bateu o ponto às: ${timestamp}`)
    };

    bater_ponto_saida() {
        console.log(`Colaborador ${this.nome} bateu o ponto às: ${timestamp}`)
    }
}

const guilherme = new Pessoa();
guilherme.name = "Guilherme"
guilherme.age = 18
guilherme.register = 2234234

console.log(guilherme)
guilherme.bater_ponto_entrada
guilherme.bater_ponto_saida