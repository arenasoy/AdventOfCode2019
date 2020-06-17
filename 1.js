const readline = require('readline');

let input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (mass) => {
	input.push(mass);
});

rl.on('pause', () => {
  
  	let sum = 0;
	for (i in input) {
		sum += Math.floor(input[i]/3) - 2;
	}
	console.log(sum);

});
