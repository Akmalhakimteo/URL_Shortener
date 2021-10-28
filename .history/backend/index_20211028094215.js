const fs = require("fs");
const app = require("./app");
const http = require("http");
const https = require("https");
var
const config = require("./config/db.config");
const logger = require("./utils/logger");

const server = http.createServer(app);

const PORT = process.env.PORT || 8080; //TODO: Fix Environment variables
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
