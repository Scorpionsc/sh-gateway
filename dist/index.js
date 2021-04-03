"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var routing_controllers_1 = require("routing-controllers");
var user_controller_1 = require("./controller/user-controller");
var home_controller_1 = require("./controller/home-controller");
dotenv_1["default"].config();
var port = process.env.PORT;
var app = routing_controllers_1.createExpressServer({
    controllers: [user_controller_1.UserController, home_controller_1.HomeController]
});
app.listen(port, function () { return console.log("Running on port " + port); });
//# sourceMappingURL=index.js.map