require('dotenv').config();  // Load .env file

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Set the port (either from the environment or default to 3000)
const port = parseInt(process.env.PORT || '3000');  // Uses PORT from .env or defaults to 3000

// Determine if the app is in development mode
const dev = process.env.NODE_ENV !== 'production';

// Initialize the Next.js app
const app = next({ dev });

// Create a request handler
const handle = app.getRequestHandler();

// Prepare the Next.js app before starting the server
app.prepare().then(() => {
  // Create an HTTP server and handle requests
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true); // Parse the URL of the incoming request
    handle(req, res, parsedUrl); // Let Next.js handle the request
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    );
  });
});
