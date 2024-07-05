import { estadoTarea, nuevaTareaEntry, tareasDisponibles } from "./types"

const parseComentario = (comentarioDelRequest: any):string =>{
    if(!isString(comentarioDelRequest)){ throw new Error('Comentario incorrecto o no se envía'); }
    return comentarioDelRequest
}

const parseNombreTarea = (nombreTareaDelRequest: any):tareasDisponibles =>{
    if(!isTarea(nombreTareaDelRequest)){
        throw new Error('Tarea incorrecta o no se envía');        
    }
    return nombreTareaDelRequest
}

const parseEstado = (estadoDelRequest: any):estadoTarea =>{
    if(!isEstado(estadoDelRequest)){
        throw new Error('Estado incorrecto o no se envía');        
    }
    return estadoDelRequest
}


//REUTILIZAMOS ESTA SECCIÓN PARA VERIFICAR QUE SE INTRODUZCAN STRINGS
const isString = (string:string):boolean => {
    return typeof string === 'string'
}
//REUTILIZAMOS ESTA SECCIÓN PARA VERIFICAR QUE SE INTRODUZCAN TAREAS
const isTarea = (param:any):boolean => {
    return Object.values(tareasDisponibles).includes(param)
}
//REUTILIZAMOS ESTA SECCIÓN PARA VERIFICAR QUE SE INTRODUZCAN ESTADOS
const isEstado = (param:any):boolean => {
    return Object.values(estadoTarea).includes(param)
}

const toNuevaTareaEntry = (object: any):nuevaTareaEntry => {
    const nuevaTarea: nuevaTareaEntry ={
        comentario: parseComentario(object.comentario),
        tarea: parseNombreTarea(object.tarea),
        estado: parseEstado(object.estado)
    }

    return nuevaTarea
}

export default toNuevaTareaEntry
