const getFlagValue = require('./flags');

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`);

// node greetings --greeting "tudo bem?" --name "Rafael Meneses"