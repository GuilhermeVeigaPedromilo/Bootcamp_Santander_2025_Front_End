// for 
// para incrementar de um a um, utilize $nome_da_var.++

// for (let contador = 0; contador < 10; contador++) {
//     console.log("Contador Valor: ", contador)
// }

// Situação para verificar último ID

// Simulação de um banco de dados em array
let produtos = [
    { id: 1, nome: "Notebook" },
    { id: 2, nome: "Smartphone" },
    { id: 5, nome: "Impressora" },
    { id: 3, nome: "Monitor" },
];

// Função para encontrar o último produto (última posição do array)
function encontrarUltimoProduto(lista) {
    let ultimoProduto = null;

    for (let i = 0; i < lista.length; i++) {
        ultimoProduto = lista[i]; // Vai sendo substituído até o final
    }

    return ultimoProduto;
}

// Testando
let ultimo = encontrarUltimoProduto(produtos);
console.log("O último produto cadastrado foi:", ultimo);

