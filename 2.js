const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = []

//part 1

/*
rl.on('line', (intcode) => {
	original = intcode.split(',');

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
	console.log(original[0]);
});
*/


//part 2
rl.on('line', (intcode) => {
	original = intcode.split(',');

	for (let noun = 0; noun < 100; noun++) {
		for (let verb = 0; verb < 100; verb++) {
			let array = [...original]
			
			array[1] = noun;
			array[2] = verb;
			for (let i = 0; i < array.length; i += 4) {
				if (array[i] == 1) {
					array[array[i + 3]] = parseInt(array[array[i + 1]]) + parseInt(array[array[i + 2]]);
				} else if (array[i] == 2) {
					array[array[i + 3]] = parseInt(array[array[i + 1]]) * parseInt(array[array[i + 2]]);
				} else if (array[i] == 99) {
					break;
				}
			}

			if (array[0] == 19690720) {
				console.log(100 * parseInt(noun) + parseInt(verb));
				return;
			}
		}
	}
}); 