const fs = require('fs').promises
const path = require('path');

const filePathData = path.resolve(__dirname, './data')
const data_tarefas = fs.readFile(filePathData + `/tarefas.csv`)

const ReadFileDataTarefas = async () => {
    try {
        const file = (await data_tarefas).toString('utf-8');
        console.log(file)
    } catch (err) {
        console.error(err)
    }
}

ReadFileDataTarefas()