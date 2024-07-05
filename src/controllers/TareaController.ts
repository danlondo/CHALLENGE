import { Request, Response } from 'express';
import { TareasService } from '../services/TareaService';
import { TareaEntry } from '../types';

const tareasService = new TareasService();

export const getAllTareas = async (_req: Request, res: Response) => {
    try {
        const tareas = await tareasService.getAllTareas();
        res.json(tareas);
    } catch (error) {
        console.error('Error fetching tareas:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const createTarea = async (req: Request, res: Response) => {
    console.log(req.body)
    const newTarea: TareaEntry = req.body;
    try {
        const id = await tareasService.createTarea(newTarea);
        res.status(201).json({ id });
    } catch (error) {
        console.error('Error creating tarea:', error);
        res.status(500).send('Internal Server Error');
    }
};