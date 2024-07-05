"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseComentario = (comentarioDelRequest) => {
    if (!isString(comentarioDelRequest)) {
        throw new Error('Comentario incorrecto o no se envía');
    }
    return comentarioDelRequest;
};
const parseNombreTarea = (nombreTareaDelRequest) => {
    if (!isTarea(nombreTareaDelRequest)) {
        throw new Error('Tarea incorrecta o no se envía');
    }
    return nombreTareaDelRequest;
};
const parseEstado = (estadoDelRequest) => {
    if (!isEstado(estadoDelRequest)) {
        throw new Error('Estado incorrecto o no se envía');
    }
    return estadoDelRequest;
};
//REUTILIZAMOS ESTA SECCIÓN PARA VERIFICAR QUE SE INTRODUZCAN STRINGS
const isString = (string) => {
    return typeof string === 'string';
};
//REUTILIZAMOS ESTA SECCIÓN PARA VERIFICAR QUE SE INTRODUZCAN TAREAS
const isTarea = (param) => {
    return Object.values(types_1.tareasDisponibles).includes(param);
};
//REUTILIZAMOS ESTA SECCIÓN PARA VERIFICAR QUE SE INTRODUZCAN ESTADOS
const isEstado = (param) => {
    return Object.values(types_1.estadoTarea).includes(param);
};
const toNuevaTareaEntry = (object) => {
    const nuevaTarea = {
        comentario: parseComentario(object.comentario),
        tarea: parseNombreTarea(object.tarea),
        estado: parseEstado(object.estado)
    };
    return nuevaTarea;
};
exports.default = toNuevaTareaEntry;
