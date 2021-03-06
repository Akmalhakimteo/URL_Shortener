const app = require("./app"); // the actual Express app
const http = require("http");
const config = require("./config/db.config");

const server = http.createServer(app);

server.listen(config.PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
