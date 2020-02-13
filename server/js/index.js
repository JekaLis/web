const http = require("http");
const fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.body)
    if (req.url.startsWith("/public/")) {

        var filePath = req.url.substr(1);
        fs.readFile(filePath, function (error, data) {

            if (error) {
                f404(res);
            } else {
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
        })
    } else {
        f404(res);
    }
}).listen(3000);

function f404(res) {
    res.statusCode = 404;
    res.end("Resourse not found!");
}