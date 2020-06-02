// http://stackoverflow.com/questions/3459476/ddg#11267583

const fs = require('fs');

fs.appendFile('cible.json', 'data to append', function (err) {
    if (err) {
        throw err;
    }
    console.log('Saved!');
});