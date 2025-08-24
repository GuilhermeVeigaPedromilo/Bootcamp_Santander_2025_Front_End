const fs = require('fs').promises
const path = require('path');

// const data_tarefas = fs.readFile('./data/tarefas.csv')

const filePathData = path.resolve(__dirname, './data')
const data_tarefas = fs.readFile(filePathData + `/tarefas.csv`)

data_tarefas.then((arquivo) => {
    console.log(arquivo.toString('utf-8'));
}).catch((error) => {
    console.error(error)
})