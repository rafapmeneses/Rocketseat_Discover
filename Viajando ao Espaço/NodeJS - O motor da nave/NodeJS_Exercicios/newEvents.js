const { inherits } = require('util'); // herança
const { EventEmitter } = require('events');

function Character(name){
    this.name = name;
}

inherits(Character, EventEmitter); // character recebe por herança eventEmitter

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`));

console.log('Oh! e agora, quem poderá me defender?');
chapolin.emit('help');