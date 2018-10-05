const braces = require('./src/braces');

const args = process.argv;

if(args.length !== 3) {
  console.error('Please input string argument inside double quotes, like this: "npm start "{{ this is my input string }}\"');
  process.exit(0);
}

const input = args[2];

console.log(braces(input));