const http = require('http');

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=testtext.csv");
    res.end(`id,name,email \n 1,James Bond,bond007@gmail.com`);
}).listen(8000);
