const list = [1, 2, 3, 5, 4, 5, 0, 9, 6, 8]
const users = [
    {id: 1, nome: "Gui"},
    {id: 2, nome: "Isa"},
    {id: 3, nome: "Marcia"}
]

// Forma reduzida de percorrer as listas
list.forEach((value, i, listRef) => {
    console.log(value, i, listRef)
})

let maiorid = users[0].id // começa assumindo o primeiro

users.forEach(user => {
    if (user.id > maiorid) {
        maiorid = user.id
    }
})

console.log("Maior id:", maiorid)