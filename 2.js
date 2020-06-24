const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = []

rl.on('line', (intcode) => {
	array = intcode.split(',');

	array[1] = 12;
	array[2] = 2;
	for (let i = 0; i < array.length; i += 4) {
		if (array[i] == 1) {
			array[array[i + 3]] = parseInt(array[array[i + 1]]) + parseInt(array[array[i + 2]]);
		} else if (array[i] == 2) {
			array[array[i + 3]] = parseInt(array[array[i + 1]]) * parseInt(array[array[i + 2]]);
		} else if (array[i] == 99) {
			break;
		}
	}

	console.log(array[0]);
});