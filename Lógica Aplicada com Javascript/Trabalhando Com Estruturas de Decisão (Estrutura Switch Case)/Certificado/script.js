// Exemplo: Sistema que reage de forma diferente dependendo do tipo de usuário

function verificarAcesso(tipoUsuario) {
    switch (tipoUsuario) {
        case 'admin':
            console.log("Acesso total concedido. Você pode gerenciar usuários e produtos.");
            break;

        case 'gerente':
            console.log("Acesso de gerente: você pode adicionar, editar e visualizar produtos.");
            break;

        case 'vendedor':
            console.log("Acesso de vendedor: você pode visualizar produtos e registrar vendas.");
            break;

        case 'cliente':
            console.log("Acesso de cliente: você pode visualizar e comprar produtos.");
            break;

        default:
            console.log("Tipo de usuário inválido ou não registrado.");
            break;
    }
}

// Testando diferentes usuários
verificarAcesso("admin");     // Acesso total
verificarAcesso("vendedor");  // Acesso de vendedor
verificarAcesso("cliente");   // Acesso de cliente
verificarAcesso("hacker");    // Tipo inválido


// Agora, outro exemplo com produtos
function verificarProduto(codigoProduto) {
    switch (codigoProduto) {
        case 101:
            console.log("Produto: Notebook - Estoque disponível: 12 unidades.");
            break;

        case 102:
            console.log("Produto: Smartphone - Estoque disponível: 25 unidades.");
            break;

        case 103:
            console.log("Produto: Impressora - Estoque disponível: 5 unidades.");
            break;

        case 104:
            console.log("Produto: Monitor - Estoque disponível: 8 unidades.");
            break;

        default:
            console.log("Produto não encontrado no sistema.");
            break;
    }
}

// Testando produtos
verificarProduto(101);
verificarProduto(105);
