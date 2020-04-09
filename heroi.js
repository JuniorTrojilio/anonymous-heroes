class Heroi {
    constructor({ nome, power, id }){
        if(!id && id !== 0) id = 1
        this.nome = nome,
        this.power = power,
        this.id = id
    }
}

module.exports = Heroi