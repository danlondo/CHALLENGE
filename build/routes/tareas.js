"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TareaController_1 = require("../controllers/TareaController");
/* import toNuevaTareaEntry from '../utils'
import * as tareaServices from '../services/tareaServices' */
const router = express_1.default.Router();
router.get('/', TareaController_1.getAllTareas);
router.post('/add', TareaController_1.createTarea);
/* router.get('/', (_req, res) => {
    res.send(tareaServices.getTareas())
})

router.get('/:id', (req, res) => {
    const tarea = tareaServices.findById(+req.params.id)
    return (tarea !== null)
        ? res.send(tarea)
        : res.sendStatus(404)
})

router.post('/', (req, res) => {
    try {
        const nuevaTareaEntry = toNuevaTareaEntry(req.body)
        const nuevaTareaEntryCreada = tareaServices.addTarea(nuevaTareaEntry)
        res.json(nuevaTareaEntryCreada)
    } catch (e) {
        res.status(400).send(e)
    }
}) */
exports.default = router;
