// var program = require('commander');

// program
// 	.version('0.1.0')
// 	.option('-a, --actions', 'Add action type')
// 	.option('-f, --file', 'Add file path')
// 	.option('-h, --help', 'Request Help')
// 	.parse(process.argv);

// console.log(program.actions)


// if(program.actions) {
// 	console.log('-actions worked')
// 	if(program.file) {
// 		console.log(' -file called as 2nd argument')
// 	}
// }


function reverse(str) {
	if(typeof str === 'string' ) {
		return console.log([...str].reverse().join(""))
	}
}

function transform(str) {
	return console.log(str.toUpperCase());
}

function outputFile(filePath) {

}

function convertFromFile(filePath) {

}

function converToFile(filePath) {

}

const actions = process.argv.slice(2);

function commandLineHandler() {
	if( actions[0] === '--help' || actions[0] === '-h' ) {
		console.log(
`					Please use --action or -a for action possible methods for action: 	
						reverse
						transform
						ontpurFile
						convertFromFile
						convertToFile
					Optional you can use -f or --file for specifying file name
					Use -h or --help for getting help again=)`)
		return;
	}

	if( actions[0].indexOf('-a') === 0 || actions[0].indexOf('--action') === 0 ) {
		let argumentsToProceed;
		if( actions[0].indexOf('=') > 0 ) {
			argumentsToProceed = actions[0].split('=')[1];
		} else if (actions[1] !== '--file' || actions[1] !== '-f') {
			argumentsToProceed = actions[1];
		}
		console.log(argumentsToProceed)
		switch(argumentsToProceed){
			case 'reverse': 
				const textToReverse = actions[actions.findIndex((el) => el.indexOf('reverse') > -1 ) + 1 ]
				reverse(textToReverse);
				break;
			case 'transform':
				const textToTransform = actions[actions.findIndex((el) => el.indexOf('transform') > -1 ) + 1 ]
				transform(textToTransform);
				break;
			case 'outputFile':
				onputFile(path)
				break;
			case 'convertFromFile':
				convertFromFile(path);
				break;
			case 'convertToFile':
				convertFromFile(path);
				break;
			default: 
				console.log(
					`Please choose one of possible options:
							reverse
							transform
							ontpurFile
							convertFromFile
							convertToFile`
					)
		}
	} else {
		console.log(`Please use -a or --action first, for detailed information use -h or --help`)
	}
}
commandLineHandler();