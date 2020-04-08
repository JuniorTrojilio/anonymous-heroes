const commander = require('commander')
const database = require('./database')
const Heroi = require('./heroi')
const chalk = require('chalk');

async function main() {
    commander
        .version('v0.0.1')
        .option('-n --name [value]', 'Nome do herói')
        .option('-p --power [value]', 'Poder do herói')
        .option('-i --id [value]', 'ID do herói')
        .option('-c --cadastrar', 'Cadastrar um herói')
        .option('-l --listar', 'Listar herói por id, * se value === ""')
        .option('-r --remover', 'remove um herói pelo ID')
        .option('-a --atualizar [value]', 'atualiza um herói pelo ID')
        .parse(process.argv)

    const heroi = new Heroi(commander)

    try {
        if (!await database.arquivoExists()) {
            await database.criarArquivoJson()
        }

        if (commander.cadastrar) {
            const resultado = await database.cadastrar(heroi)
            if (resultado === 0 || resultado > 0) {
                console.log(`
                █████████
                █▄█████▄█
                █▼▼▼▼▼
                █         Herói cadastrado com sucesso! ID:${chalk.green(resultado)}               
                █▲▲▲▲▲
                █████████
                ██ ██
                `)
            } else {
                console.error(chalk.red('Herói não cadastrado!'))
            }
        }

        if (commander.listar) {
            const resultado = await database.listar(heroi.id)
            if (!resultado[0]) {
                console.log(chalk.red(`[Não localizado nenhum herói com o id : ${chalk.green(heroi.id)}]`))
                return;
            } else {
                console.log(resultado)
            }
        }

        if (commander.remover) {
            const resultado = await database.removerHeroiPorId(heroi.id)
            if (!resultado) {
                console.log(chalk.red(`[Não localizado nenhum herói com o id : ${heroi.id}]`))
                return;
            } else {
                console.log(chalk.blue(`O Herói com id: ${chalk.green(heroi.id)}, foi removido com sucesso!`))
            }
        }

        if(commander.atualizar){
            console.log(heroi.name)
            // const resultado = await database.atualizarHeroi(heroi.id, heroi)
            // console.log(resultado)
        }
    } catch (error) {
        console.error(chalk.red(`Ops, ${error.message}!`))
    }
}

main()