const readline = require('readline');

let input = [];
let results = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (mass) => {
	input.push(mass);

	let sum = 0;

	while (mass > 0) {
		mass = Math.floor(mass/3) - 2;
		if (mass > 0)
			sum += mass;
	}

	results.push(sum);
});

rl.on('pause', () => {
  
  	let sum1 = 0, sum2 = 0;
	for (i in input) {
		sum1 += Math.floor(input[i]/3) - 2;
		sum2 += results[i];
	}
	
	console.log("Part 1", sum1);
	console.log("Part 2", sum2);

});

