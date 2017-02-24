var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var authServer = 'https://gadai-auth.herokuapp.com',
    backendServer = 'https://gadai-backend.herokuapp.com';

app.all("/oauth/**", function (req, res) {
    console.log('redirecting to auth server');
    apiProxy.web(req, res, { target: authServer, secure :true });
});

app.all("/api/**", function (req, res) {
    console.log('redirecting to backend server');
    apiProxy.web(req, res, { target: backendServer });
});

app.use(express.static(__dirname + '/dist'));
console.log("Aplikasi sudah dijalankan");
app.listen(process.env.PORT || 4200);