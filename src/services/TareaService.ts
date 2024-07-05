import { Database } from "../mysql";
import { TareaEntry, nuevaTareaEntry } from "../types";
import toNuevaTareaEntry from "../utils";

export class TareasService {
    private database = new Database();

    constructor() {
        this.database.connect();
    }

    public async getAllTareas(): Promise<TareaEntry[]> {
        const connection = this.database.getConnection();
        const [rows] = await connection.query('SELECT * FROM tareas');
        return rows as TareaEntry[];
    }

    public async createTarea(tarea: nuevaTareaEntry): Promise<number | string> {
        const connection = this.database.getConnection();
        try {
            const tareaAGuardar = toNuevaTareaEntry(tarea);
            await connection.execute('INSERT INTO tareas (tarea, estado, comentario) VALUES (?, ?, ?)', [tareaAGuardar.tarea, tareaAGuardar.estado, tareaAGuardar.comentario]);
            return "Guardado exitoso";
        } catch (e:any) {
            console.log(e.message)
            return e.message
        }   
    }
}
