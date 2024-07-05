"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESModules (Cuando tenemos import y export)
//const express = require('express') -> Así sería commonjs
const tareas_1 = __importDefault(require("./routes/tareas"));
const mysql_1 = require("./mysql");
const app = (0, express_1.default)();
const database = new mysql_1.Database();
app.use(express_1.default.json()); //Este es el middleware que transforma la req.body a un json
const PORT = 3000;
app.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = database.getConnection();
        const [rows] = yield connection.query('SELECT * FROM tareas');
        res.json(rows);
    }
    catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.get('/ping', (_req, res) => {
    console.log('Alguien envio un ping');
    res.send('pong');
});
app.use('/', tareas_1.default);
database.connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database:', error);
});
/* app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) */ 
