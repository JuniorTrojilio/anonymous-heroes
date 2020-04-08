class Heroi {
    constructor({ name, power, id }){
        if(!id && id !== 0) id = 0
        this.name = name,
        this.power = power,
        this.id = id
    }
}

module.exports = Heroi