num_par = [];

let qtd_i = null;

const verify_num_par = () => {
    
    for (let i = 0; i < qtd_i; i++) {
        if (i % 2 === 0) {
        num_par.push(i)
    }
}

}

qtd_i = 200
verify_num_par();
console.log(num_par)