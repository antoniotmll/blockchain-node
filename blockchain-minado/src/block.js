const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(time, previousHash, hash, data, nonce, difficult) {
        this.time = time;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficult = difficult;
    }

    static get genesis() {
        const time = new Date('2009-03-01').getTime();
        return new this(
            time,
            undefined,
            'genesis_hash',
            "Genesis Block",
            0,
            DIFFICULTY,
        );
    }
}