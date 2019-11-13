const bodyParser = require("body-parser");
const login = require("../routes/login");
const users = require("../routes/users");
const topics = require("../routes/topics");
const error = require("../middleware/error");

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use("/api/login", login);
    app.use("/api/users", users);
    app.use("/api/topics", topics);
    app.use(error); // keep this last
};
