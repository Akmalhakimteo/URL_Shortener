const app = require("./app"); // the actual Express app
const http = require("http");
const config = require("./config/db.config");


const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
