const SHA256 = require('crypto-js/sha256');
const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [];
        this.height = -1;
        this.initializeChain();
    }

    async initializeChain() {
        if (this.height === -1) {
            const block = new Block({ data: 'Genesis Block' });
            await this.addBlock(block);
        }
    }

    addBlock(Block) {
        let self = this;
        return new Promise((resolve, reject) => {
            block.height = self.chain.length;
            block.time = new Date().getTime().toString().slice();

            if (self.chain.length > 0) {
                block.previousBlockHash = self.chain[self.chain.length - 1].hash;
            }

            let errors = await self.ValidateChain();
            if (errors.length > 0) {
                reject(new Error('The chain is not valid: ', errors));
            }

            block.hash = SHA256(JSON.stringify(block)).toString();
        });
    }
}

module.exports = Blockchain;