import express from 'express'
import { getAllTareas, createTarea } from '../controllers/TareaController'
const router = express.Router()
router.get('/', getAllTareas);
router.get('/add', createTarea);
export default router