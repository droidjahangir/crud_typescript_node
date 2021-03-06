"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var mock_routes_1 = __importDefault(require("./routes/mock_routes"));
var app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/data', mock_routes_1.default);
app.use(function (err, req, res, next) {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
