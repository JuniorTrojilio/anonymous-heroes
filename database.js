const { readFileSync, writeFileSync, existsSync, unlinkSync } = require('fs')
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
        let {id} = heroi

        dados.forEach(element => {
            if (element.id === id){
                id++
            }
        })

        const novoId = id
        const heroiComId = {
            id : novoId,
            name : heroi.name,
            power : heroi.power
        }

        if(this.escreverArquivo([...dados, heroiComId])){
            return heroiComId.id
        }
    }

    async removerHeroiPorId(id){
        id = parseInt(id)
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(indice === -1){
            throw Error('Este herói não existe')
        }
        dados.splice(indice, 1)
        return await this.escreverArquivo(dados)
    }

    async deletarArquivoJson(){
        await unlinkSync(`./${this.NOME_ARQUIVO}`)
        return !(await existsSync(`./${this.NOME_ARQUIVO}`))
    }

    async atualizarHeroi(id, novoHeroi){
        id = parseInt(id)
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(indice === -1){
            throw Error('Este herói não existe')
        }else if(!(novoHeroi.name === String)){
            throw Error('Não foi passada a nova propriedade Nome do herói!')
        }else if(!novoHeroi.power){
            throw Error('Não foi passada a nova propriedade Poder do herói!')
        }

        dados.splice(indice, 1,novoHeroi)
        await this.escreverArquivo(dados)
        return dados[0]   
    }

    async listar(id) {
        id = parseInt(id)
        if (!id && id !== 0){
            return await this.obterDadosArquivo()
        }else {
            return (await this.obterDadosArquivo()).filter(item => item.id === id ? true : false)  
        }
        
    }
}

module.exports = new Database()