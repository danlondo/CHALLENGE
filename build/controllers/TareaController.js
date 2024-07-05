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
exports.createTarea = exports.getAllTareas = void 0;
const TareaService_1 = require("../services/TareaService");
const tareasService = new TareaService_1.TareasService();
const getAllTareas = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tareas = yield tareasService.getAllTareas();
        res.json(tareas);
    }
    catch (error) {
        console.error('Error fetching tareas:', error);
        res.status(500).send('Internal Server Error');
    }
});
exports.getAllTareas = getAllTareas;
const createTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const newTarea = req.body;
    try {
        const id = yield tareasService.createTarea(newTarea);
        res.status(201).json({ id });
    }
    catch (error) {
        console.error('Error creating tarea:', error);
        res.status(500).send('Internal Server Error');
    }
});
exports.createTarea = createTarea;
// Puedes agregar más controladores aquí para actualizar y eliminar tareas
