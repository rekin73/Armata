var http = require("http");
var qs = require("querystring");
var fs = require("fs");
var users = [];
var servres = function (req, res) {
    var allData = "";
    req.on("data", function (data) {
        console.log("data: " + data)
        allData += data;
    })
    req.on("end", function (data) {
        var finishObj = qs.parse(allData)

        switch (finishObj.akcja) {
            //dodanie nowego usera

                
            case "INNA_AKCJA":
                console.log("inna akcja")
                break;
        }
    })



}


var server = http.createServer(function (req, res) {
    switch (req.method) {
        case "GET":
            // tu wykonaj załadowanie statycznej strony z formularzem
            console.log("żądany przez przeglądarkę adres: " + req.url)
            if (req.url === "/") {
                fs.readFile("static/index.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                })
            }

            else if (req.url === "/style.css") {
                fs.readFile("static/css/style.css", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.write(data);
                    res.end();
                })
            }

            else if (req.url === "/Game.js") {
                fs.readFile("static/js/Game.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            /*
            else if (req.url === "/TEST.js") {
                fs.readFile("static/js/TEST.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            */
            else if (req.url === "/Siatka.js") {
                fs.readFile("static/js/Siatka.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }

            else if (req.url === "/Main.js") {
                fs.readFile("static/js/Main.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }

            else if (req.url === "/Kula.js") {
                fs.readFile("static/js/Kula.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/THREE.js") {
                fs.readFile("static/libs/three.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Armata.js") {
                fs.readFile("static/js/Armata.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }


            break;
        case "POST":
            // tu wywołaj funkcję "servResponse", która pobierze dane przesłane 
            // w formularzu i odpowie do przeglądarki 
            // (uwaga - adres żądania się nie zmienia)

            servres(req, res)

            break;

    }



})


server.listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});