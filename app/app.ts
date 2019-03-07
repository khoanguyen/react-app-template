import * as HTTP from 'http';
import { MY_STRING } from './public/scripts/main';

const http = HTTP.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(`
    <html><body>
      <h1>Hello, world!</h1>
      You asked for: ${request.url} - ${MY_STRING}
      <p>
        Everything good? Lets get going. 
      </p>
      <p>
        App was moved, but it's not refreshed.
        What are you thinking ?
        Cool, no nead to compile!!!:D
      </p>
    </body></html>`);
}).listen(3333);
