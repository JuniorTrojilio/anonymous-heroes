const commander = require('commander')
const database = require('./database')
const Heroi = require('./heroi')
const chalk = require('chalk');

async function main() {
    commander
        .version('v0.0.1')
        .option('-n --nome [value]', 'Nome do herói')
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
                console.log(chalk.redBright(`
                █████████
                █▄█████▄█
                █▼▼▼▼▼
                █           O Herói cadastrado na Sociedade com sucesso!               
                █▲▲▲▲▲      e tem o ID:${chalk.green(resultado)}
                █████████   se chama: ${chalk.green('não vou contar é anônimo')}
                ██ ██       e tem o poder: ${chalk.green(heroi.power)}
                `))
            } else {
                console.error(chalk.red('Herói não cadastrado!'))
            }
        }

        if (commander.listar) {
            const resultado = await database.listar(heroi.id)
            if(heroi.id === true){
                heroi.id = 0
            }

            if (!resultado[0]) {
                console.log(chalk.red(`[Não localizado nenhum herói com o id : ${chalk.green(heroi.id)}]`))
                return;
            } else {
                console.log(resultado)
            }
        }

        if (commander.remover) {
            if(heroi.id === true){
                heroi.id = 0
            }

            const resultado = await database.removerHeroiPorId(heroi.id)
            if (!resultado) {
                console.log(chalk.red(`[Não localizado nenhum herói com o id : ${heroi.id}]`))
                return;
            } else {
                console.log(chalk.blue(`
                    ███   ███
                    █▄█   █▄█
                    ███▼▼▼███  O Herói com id: ${chalk.redBright(heroi.id)}, 
                    █▲▲▲▲▲▲▲█  foi removido da sociedade com sucesso!
                    ███   ███  
                    ███   ███
                `))
            }
        }

        if(commander.atualizar){
            if(heroi.id === true){
                heroi.id = 0
            }
            const resultado = await database.atualizarHeroi(heroi.id, heroi)

            if(!resultado[0]){
                console.log(chalk.blueBright(`
                █████████
                █▄█████▄█
                █▼▼▼▼▼▼▼█
                █▲▲▲▲▲▲▲█  Herói Atualizado com sucesso! ID:${chalk.green(resultado.id)}                               
                ███ █ ███  Nome ${chalk.gray('a̶n̶ô̶n̶i̶m̶o̶')}: ${chalk.green(resultado.nome)} 
                ██     ██  Poder: ${chalk.green(resultado.power)}
                `))
            }

        }
    } catch (error) {
        console.error(chalk.red(`Ops, ${error.message}!`))
    }
}

main()