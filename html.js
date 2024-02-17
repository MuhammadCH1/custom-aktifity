const http = require("http");
http.createServer((_, res) => res.end("Bot Is Ready")).listen(8000)