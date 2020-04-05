const commander = require('commander')
const database = require('./database')
const Heroi = require('./heroi')

async function main() {
    commander
        .version('v0.0.1')
        .option('-n --name [value]', 'Nome do herói')
        .option('-p --power [value]', 'Poder do herói')
        .option('-c --cadastrar', 'Cadastrar um herói')
        .parse(process.argv)
    const heroi = new Heroi(commander)
    try {
        if (commander.cadastrar) {
            const resultado = await database.cadastrar(heroi)
        }
    } catch (error) {
        console.error('deu ruim', error)
    }
}

main()