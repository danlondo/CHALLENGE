"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tareasDisponibles = exports.estadoTarea = void 0;
var estadoTarea;
(function (estadoTarea) {
    estadoTarea["Activo"] = "Activo";
    estadoTarea["Inactivo"] = "Inactivo";
})(estadoTarea || (exports.estadoTarea = estadoTarea = {}));
var tareasDisponibles;
(function (tareasDisponibles) {
    tareasDisponibles["EntregaDeQA"] = "Entrega a QA de HU";
    tareasDisponibles["AceptarPR"] = "Aceptar PR";
    tareasDisponibles["DesplegarPDN"] = "Desplegar PDN";
    tareasDisponibles["DesplegarQA"] = "Desplegar QA";
})(tareasDisponibles || (exports.tareasDisponibles = tareasDisponibles = {}));
