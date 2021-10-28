// const fs = require("fs");
const app = require("./app");
const http = require("http");
// const https = require("https");
// const privateKey = fs.readFileSync('./www.akmalteo_xyz.key');
// const certificate = fs.readFileSync('./www_akmalteo_xyz.crt');
// const bundle = fs.readFileSync('./www_akmalteo_xyz.ca-bundle');
// const credentials = {key: privateKey, cert: certificate, ca:bundle};

const config = require("./config/db.config");
const logger = require("./utils/logger");

const server = http.createServer(app);
// const server = https.createServer(credentials,app);

const PORT = process.env.PORT || 8080; //TODO: Fix Environment variables
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
