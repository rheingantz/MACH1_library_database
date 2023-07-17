"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const router = (0, express_2.Router)();
const app = (0, express_1.default)();
router.get("/", (req, res) => {
    res.json({ message: 'conexao bem sucedida' });
});
app.listen(3000, () => "server is running in port 3000");
