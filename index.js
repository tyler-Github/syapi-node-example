const { Client } = require('syapi-node');
const api = new Client();

api.fetchDomain("https://example.com").then(function (response) {
console.log(response);
});
