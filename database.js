const { readFileSync, writeFileSync, existsSync } = require('fs')
//const dataJson = require('./herois.json')

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }

    async arquivoExists(){
        return await existsSync(`./${this.NOME_ARQUIVO}`)
    }

    async criarArquivoJson(){
        if (await writeFileSync('./herois.json','[]')){
            return true
        }
    }
    
    async obterDadosArquivo() {   
        return JSON.parse((await readFileSync(this.NOME_ARQUIVO, 'utf8')).toString())
    }

    async escreverArquivo(dados) {
        await writeFileSync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastrar(heroi){
        const dados = (await this.obterDadosArquivo())
        let { id } = heroi

        dados.forEach(element => {
            if (element.id === id){
                id++
            }
        });

        heroi.id = id

        if(this.escreverArquivo([...dados,heroi])){
            return heroi.id
        }
    }

    async removerHeroiPorId(id){
        return false
    }

    async listar(id) {
        return (await this.obterDadosArquivo()).filter(item => item.id === id ? true : false)
    }
}

module.exports = new Database()