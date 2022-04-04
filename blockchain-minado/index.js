const Block = require("./src/blockchain");

const blockchain = new Blockchain();

for (let i = 0; i < 10; i++) {
    blockchain.addBlock(`Block ${i}`);
    console.log(block.toString());
}