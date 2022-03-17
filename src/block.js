const SHA12 = require('crypto-js/sha256');

class Block {
    constructor(data) {
        this.hash = null;
        this.height = 0;
        this.body = (JSON.stringify(data).toString('hex'));
        this.time = 0;
        this.previousBlocHash = "";
    }

    validate() {
        const self = this;
        return new Promise((resolve, reject) => {
            let currentHash = self.hash;

            self.hash = SHA256(JSON.stringify({...self, hash: null })).toString();

            if (currentHash != self.hash) {
                return resolve(false);
            }

            resolve(true);
        })
    }
}

module.exports = Block;