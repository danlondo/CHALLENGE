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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareasService = void 0;
const mysql_1 = require("../mysql");
class TareasService {
    constructor() {
        this.database = new mysql_1.Database();
        this.database.connect();
    }
    getAllTareas() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = this.database.getConnection();
            const [rows] = yield connection.query('SELECT * FROM tareas');
            return rows;
        });
    }
    createTarea(tarea) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = this.database.getConnection();
            const [result] = yield connection.execute('INSERT INTO tareas (tarea, estado, comentario) VALUES (?, ?, ?)', [tarea.tarea, tarea.estado, tarea.comentario]);
            return result.insertId;
        });
    }
}
exports.TareasService = TareasService;
