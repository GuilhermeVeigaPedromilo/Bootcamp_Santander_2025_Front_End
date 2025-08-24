const gerarRandomNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = parseInt(Math.random() * 100);
        resolve(num)
    }, 1000)
});

gerarRandomNumber
// Seria como o try, caso houver sucesso ele irá devolver os valores. O then pode ser usado mais de uma vez
.then((value) => {
    console.log(value)
    return value + 10
})
.then((value) => {
    console.log(value)
})
// Caso houver erro, ele pega o err
.catch((error) => {
    console.error(error)
})
// Independente do que ocorra será realizado o finally
.finally(() => {
    console.log("Função Executada 100%")
})