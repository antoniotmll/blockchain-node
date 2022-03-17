const SHA12 = require('crypto-js/sha256');

class Block {
    constructor(data) {
        this.hash = null,
            this.height = 0,
            this.body = (JSON.stringify(data).toString('hex')),
            this.time = 0,
            this.previousBlocHash = ''
    }
}

module.exports = Block;