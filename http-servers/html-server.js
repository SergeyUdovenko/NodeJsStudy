const http = require('http');
const fs = require('fs');

const port = 3011;


http
  .createServer()
  .on('request', (req, res) => {
    fs.readFile('./files/index.html','utf8', function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error occurred');
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data.replace('{message}', 'Message  from server'));
      res.end();
    });
  })
  .on('error', (err) => {
    console.log(err);
  })
  .listen(port, () => console.log(`Listening: localhost:${port}`));
// http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/html'
//   });


// //   const htmlFile = fs.readFileSync('./files/index.html', 'utf8');
// //   const htmlWithMessage = htmlFile.replace('{message}', 'Message from server');
// 	const htmlFileStream = fs.createReadStream('./files/index.html');
// 	let htmlWithMessage;
// 	htmlFileStream.on('readable', () => {
// 		const data = htmlFileStream.read();
// 		if (data !== null && data.toString().indexOf('{message}' > -1)) {
// 			htmlWithMessage = data.toString().replace('{message}', 'Message from server')
// 		}
// 	})
// 	htmlFileStream.on('end', () => {
// 		console.log("stream ended")
// 		res.end(htmlWithMessage)
// 	})
	

  
// });
