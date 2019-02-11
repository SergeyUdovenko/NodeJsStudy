const http = require('http');
const fs = require('fs');

const port = 3011;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  const htmlFile = fs.readFileSync('./files/index.html', 'utf8');
  const htmlWithMessage = htmlFile.replace('{message}', 'Message from server');

  res.end(htmlWithMessage)
});
server.listen(port, () => console.log(`Listening: localhost:${port}`));