let registros = [
    { re: 23243, nome: "João" },
    { re: 28393, nome: "Maria" },
    { re: 21324, nome: "José" },
    { re: 21312, nome: "Ana" }
];

const verify_last_employeer = () => {
    let ultimo = registros[0];

    for (let i = 1; i < registros.length; i++) {
        if (registros[i].re > ultimo.re) {
            ultimo = registros[i];
        }
    }
    return ultimo;
};

const insert_employeer = (nome) => {
    const last_employeer = verify_last_employeer();
    let new_id = last_employeer.re + 1; // pega o re e soma 1
    registros.push({ re: new_id, nome });
    console.log(`Colaborador ${nome} inserido com sucesso! Registro: ${new_id}`);
};

insert_employeer("Guilherme");
console.log(registros);