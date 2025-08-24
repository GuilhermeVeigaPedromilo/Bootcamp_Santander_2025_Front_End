const list = [10 , 9, 8, 1, 8, 2, 7, 4, 8]

const soma_notas = list.reduce((acc, nota) => {
    return (acc + nota)
}, 0)

console.log("Media das Notas: ", soma_notas / list.length)