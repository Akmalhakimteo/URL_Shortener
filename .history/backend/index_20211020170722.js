const app = require("./app"); // the actual Express app
const http = require("http");


const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
