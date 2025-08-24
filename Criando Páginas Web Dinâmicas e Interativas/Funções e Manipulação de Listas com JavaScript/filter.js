const list = [1, 32, 324, 45, 43, 123, 201, 0, 3, 4, 8]

const num_pares = list.filter((num_par => {
    if (num_par % 2 == 0) {
        console.log(num_par)
    }
}));

const verify_values = list.filter((value =>{
    if (value > 80) return value
}))

console.log(verify_values)