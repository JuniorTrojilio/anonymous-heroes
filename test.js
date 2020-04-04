const { deepEqual, notDeepEqual } = require('assert')
const database = require('./database')
const DEFAULT_ITEM_CADASTRAR = {
    id : 0,
    name : 'Flash',
    power : 'Speed'
}
const DEFAULT_ITEM_ATUALIZAR = {
    id : 0,
    name : 'Batman',
    power : 'Dinheiro' 
}

describe('Suite de manipulação de heróis', ()=>{
    before(async ()=>{
        await database.criarArquivoJson()
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR) 
    })

    it('O arquivo Json chamado herois.json deve existir', async ()=>{
        expected = true
        const result = await database.arquivoExists()
        deepEqual(result, true)
    })

    it('Deve pesquisar um herói usando id', async ()=>{
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)
    })

    it('Deve remover um heroi, usando id', async ()=>{
        const expected = true
        const resultado = await database.removerHeroiPorId(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })

    it('Deve cadastrar um heroí', async ()=>{
        const expected = ''
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(resultado)
        notDeepEqual(actual, expected)
    })

    it('Deve atualizar um herói usando id', async ()=>{
        const expected = DEFAULT_ITEM_ATUALIZAR
        const resultado = await database.atualizarHeroi(DEFAULT_ITEM_CADASTRAR.id, expected)
        deepEqual(resultado, expected)
    })

    it('Deve apagar o arquivo herois.json', async ()=>{
        const expected = true
        const resultado = await database.deletarArquivoJson()
        deepEqual(resultado, expected)
    })
})