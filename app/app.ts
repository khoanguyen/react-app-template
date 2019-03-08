import express from 'express';
import * as path from 'path';

const app = express();
console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.send('Text');
});

app.listen(3333);

// const http = HTTP.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/html' });
//   response.end(`
//     <html><body>
//       <h1>Hello, world!</h1>
//       You asked for: ${request.url}
//       <p>
//         Everything good? Lets get going. 
//       </p>
//       <p>
//         App was moved, but it's not refreshed.
//         What are you thinking ?
//         Cool, no nead to compile!!!:D
//       </p>
//     </body></html>`);
// }).listen(3333);
