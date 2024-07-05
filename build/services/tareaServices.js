"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTarea = exports.findById = exports.getTareas = void 0;
const tareas_json_1 = __importDefault(require("./tareas.json"));
const tareas = tareas_json_1.default;
/* Creo una constante que se llama tareas, de tipo Array y le digo a typescript que tareaData va a ser del tipo Array<TareaEntry>*/
const getTareas = () => tareas;
exports.getTareas = getTareas;
const findById = (id) => {
    const entry = tareas.find(t => t.id === id);
    return entry;
};
exports.findById = findById;
const addTarea = (nuevaTareaEntry) => {
    const nuevaTarea = Object.assign({ id: Math.max(...tareas.map(t => t.id)) + 1 }, nuevaTareaEntry);
    tareas.push(nuevaTarea);
    return nuevaTarea;
};
exports.addTarea = addTarea;
