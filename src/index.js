const fs = require('fs');
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log(`iniciado na porta: 3000 // URL: http://localhost:3000`)
});

const routesFolder = fs.readdirSync('./src/routes');
for (const subFolders of routesFolder) {
    const files = fs.readdirSync(`./src/routes/${subFolders}`).filter(file => file.endsWith('.js'));
    for (const routeFiles of files) {
        const route = require(`./routes/${subFolders}/${routeFiles}`);
        if (String(route.method).toLowerCase() === 'post') {
            app.post(route.route, (...args) => route.execute(...args, app));
        };

        if (String(route.method).toLowerCase() === 'get') {
            app.get(route.route, (...args) => route.execute(...args, app));
        };
    };
};