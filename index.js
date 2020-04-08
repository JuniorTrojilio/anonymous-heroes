const commander = require('commander')
const database = require('./database')
const Heroi = require('./heroi')

async function main() {
    commander
        .version('v0.0.1')
        .option('-n --name [value]', 'Nome do herói')
        .option('-p --power [value]', 'Poder do herói')
        .option('-i --id [value]', 'ID do herói')
        .option('-c --cadastrar', 'Cadastrar um herói')
        .option('-l --listar', 'Listar herói por id, * se value === ""')
        .option('-r --remover', 'remove um herói pelo ID')
        .parse(process.argv)

        const heroi = new Heroi(commander)

    try {
        if (!await database.arquivoExists()){
            await database.criarArquivoJson()
        }

        if (commander.cadastrar) {
            const resultado = await database.cadastrar(heroi)
            if (resultado === 0 || resultado > 0){
            console.log(`🦸‍♂️ Herói cadastrado com sucesso! ID:${ resultado }`)
            }else{
                console.error('Herói não cadastrado!')
            }
        }

        if(commander.listar){
           const resultado = await database.listar(heroi.id) 
           console.log(resultado)
           return;
        }

        if(commander.remover){
            console.log(heroi)
            const resultado = await database.removerHeroiPorId(heroi.id)
            if(!resultado){
                console.error('Não foi possível remover o herói.')
                return
            }
            console.log('Herói removido com sucesso!')
        }
    } catch (error) {
        console.error('deu ruim', error)
    }
}

main()