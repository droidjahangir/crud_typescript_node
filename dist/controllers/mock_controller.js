"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMock = exports.updateMock = exports.getMockData = exports.createMock = void 0;
var mockModel_1 = require("../models/mockModel");
var mock_data_json_1 = __importDefault(require("../mock_data.json"));
var mock = [];
mock = mock_data_json_1.default;
// Create
var createMock = function (req, res, next) {
    var id = req.body.id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var gender = req.body.gender;
    var newMock = new mockModel_1.Mock(id, first_name, last_name, email, gender);
    mock.push(newMock);
    res.status(201).json({ message: 'Created the Mock.', createMock: newMock });
};
exports.createMock = createMock;
// get
var getMockData = function (req, res, next) {
    res.json({ data: mock_data_json_1.default });
};
exports.getMockData = getMockData;
// update
var updateMock = function (req, res, next) {
    var mockId = req.params.id;
    var update_first_name = req.body.first_name;
    var update_last_name = req.body.last_name;
    var update_email = req.body.email;
    var update_gender = req.body.gender;
    var mockIndex = mock.findIndex(function (moc) { return moc.id === mockId; });
    if (mockIndex < 0) {
        throw new Error('Could not find Mock data!');
    }
    mock[mockIndex] = new mockModel_1.Mock(mock[mockIndex].id, update_first_name, update_last_name, update_email, update_gender);
    res.json({ message: 'Updated! ', updateMock: mock[mockIndex] });
};
exports.updateMock = updateMock;
// delete
var deleteMock = function (req, res, next) {
    var mockId = req.params.id;
    var mockIndex = mock.findIndex(function (moc) { return moc.id === mockId; });
    if (mockIndex < 0) {
        throw new Error('Could not find mock!');
    }
    mock.splice(mockIndex, 1);
    res.json({ message: 'Mock deleted!' });
};
exports.deleteMock = deleteMock;
