const fs = require('fs').promises
const path = require('path')

const DataFilesPath = path.resolve('./data')

const GetUsers = async () => {
    console.time("Time")
    try {
        const readData = await fs.readFile(DataFilesPath + '/users.json', 'utf-8')
        const users = JSON.parse(readData)
        console.table(users)
        return users
    } catch (err) {
        console.error("Error in GetUsers: ", err)
    } finally {
        console.timeEnd("Time")
    }
}

const Get_Media_General = async () => {
    try {
        const users = await GetUsers()
        if (!users || users.length === 0) return

        let somaNotas = 0
        let totalNotas = 0

        users.forEach(user => {
            if (Array.isArray(user.grade)) {
                somaNotas += user.grade.reduce((acc, n) => acc + n, 0)
                totalNotas += user.grade.length
            }
        })

        const mediaGeral = somaNotas / totalNotas
        console.log("Média Geral:", mediaGeral.toFixed(2))
    } catch (err) {
        console.error("Error In Get Media General: ", err)
    }
}

GetUsers()
Get_Media_General()