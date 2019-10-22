import config from "./config";
import app from "./app";
import favicon from "express-favicon";

async function startServer(app) {
    app.use(favicon(__dirname + "/../public/favicon.ico"));

    app.listen(config.port, err => {
        if (err) {
            console.error(err);
            process.exit(1);
            return;
        }
        console.info(`
        ####################################
        🛡️  Server listening on port: ${config.port} 🛡️
        ####################################
    `);
    });
}

startServer(app);
