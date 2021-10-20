const app = require("./app"); 
const http = require("http");
const config = require("./config/db.config");
const logger = require("./utils/logger");

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
