var program = require('commander');
var through2 = require('through2');
var fs = require('fs');
const csv = require('csvtojson');

program
	.version('0.1.0')
	.option('-a, --action [actionName, arguments]', 'Add action type')
	.option('-f, --file [filePath]', 'Add file path')
	.option('-h, --help []', 'Request Help')
	.option('--cssBundler', 'Handle css bundler')
	.option('-p, --path [filePath]', 'Add path to css')
	.parse(process.argv);


if (program.rawArgs.length <= 2) {
	console.log('The module should be called with arguments');
	printHelpMsg();
	process.exit();
}

if (program.rawArgs[2] === '--help' || program.rawArgs[2] === '-h') {
	printHelpMsg();
}

if(program.cssBundler) {
	const filePath = program.path;
	let contentToWrite = [];
	if(!filePath) {
		console.log('Please enter correct path. You can use -p or --path');
	}
	if (!fs.existsSync(filePath)) {
		return console.log('File path is incorrect: ', filePath);
	}
	console.log( typeof filePath);
	let list = fs.readdirSync(filePath)
	let dataToWrite = [];
	const dataToAdd = `.ngmp18 {
	background-color: #fff;
	overflow: hidden;
	width: 100%;
	height: 100%;
	position: relative;
}

	.ngmp18__hw3 {
	color: #333;
}

.ngmp18__hw3--t7 {
	font-weight: bold;
}
	`

	let listPath = list.map((file) => {
		return `${filePath}\/${file}`
	})

	listPath.forEach((filePath)=> {
		const data = fs.readFileSync(filePath).toString();
		dataToWrite.push(data);
	});

	dataToWrite.push(dataToAdd);

	const dataToSend = dataToWrite.join('\n');
	const generatedFileName = `${filePath}\/bundle.css`;

	try {
		fs.appendFileSync(generatedFileName, dataToSend);
		console.log('The "data to append" was appended to file!');
	}
	catch (err) {
		console.log(err)
	}
	
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