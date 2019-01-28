var program = require('commander');
var through2 = require('through2');
var fs = require('fs');
const csv=require('csvtojson');

program
	.version('0.1.0')
	.option('-a, --action [actionName, arguments]', 'Add action type')
	.option('-f, --file [filePath]', 'Add file path')
	.option('-h, --help []', 'Request Help')
	.parse(process.argv);


if (program.rawArgs.length <= 2) {
	console.log('The module should be called with arguments');
	printHelpMsg();
	process.exit();
}

if (program.rawArgs[2] === '--help' || program.rawArgs[2] === '-h') {
	printHelpMsg();
	process.exit();
}

if (program.action) {
	const actionName = program.action;
	let path
	if(program.file) {
		path = program.file;
	}

	switch (actionName) {
		case 'reverse':
			reverse();
			break;
		case 'transform':
			transform()
			break;
		case 'outputFile':
			outputFile(path)
			break;
		case 'convertFromFile':
			convertFromFile(path);
			break;
		case 'convertToFile':
			convertToFile(path);
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
}

function reverse() {
	process.stdin
		.pipe(through2(function (chunk, enc, next) {
			this.push(chunk.toString().split('').reverse().join(''));
			return next();
		}))
		.pipe(process.stdout)
}

function transform() {
	process.stdin
		.pipe(through2(function (chunk, enc, next) {
			const transformData = chunk.toString().toUpperCase();
			this.push(transformData);
			next();
		}))
		.pipe(process.stdout)
}

function outputFile(filePath) {
	if(!filePath) {
		return console.log('File path is incorrect, use -f or --file to clarify correct pass after action ');
	}
	if (!fs.existsSync(filePath)) {
		return console.log('File path is incorrect: ', filePath);
	}

	fs.createReadStream(filePath)
		.pipe(process.stdout)
}

function convertFromFile(filePath) {
	if(!filePath) {
		return console.log('File path is incorrect, use -f or --file to clarify correct pass after action ');
	}
	if (!fs.existsSync(filePath)) {
		return console.log('File path is incorrect: ', filePath);
	}

	fs.createReadStream(filePath)
		.pipe(csv())
		.pipe(process.stdout)
}

function convertToFile(filePath) {
	if(!filePath) {
		return console.log('File path is incorrect, use -f or --file to clarify correct pass after action ');
	}
	if (!fs.existsSync(filePath)) {
		return console.log('File path is incorrect: ', filePath);
	}


	const jsonPath = filePath.substring(filePath.lastIndexOf('/')+1).replace(/\..+/, '.json');
	const writable = fs.createWriteStream(jsonPath);
	fs.createReadStream(filePath)
		.pipe(csv())
		.pipe(writable)
}

function printHelpMsg() {
	console.log(
		`Please use --action or -a for action possible methods for action: 	
	reverse
	transform
	ontpurFile
	convertFromFile
	convertToFile
Optional you can use -f or --file for specifying file name
Use -h or --help for getting help again=)`)
}