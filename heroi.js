class Heroi {
    constructor({ nome, power, id }){
        if(id === undefined) id = 0
        this.nome = nome,
        this.power = power,
        this.id = id
    }
}

module.exports = Heroi