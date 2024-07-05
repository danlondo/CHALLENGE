export interface TareaEntry {
    id: number,
    tarea: tareasDisponibles,
    estado: estadoTarea,
    comentario: string
}
export enum estadoTarea{
    Activo      = 'Activo',
    Inactivo    = 'Inactivo'
}
export enum tareasDisponibles{
    EntregaDeQA     = 'Entrega a QA de HU',
    AceptarPR       = 'Aceptar PR',
    DesplegarPDN    = 'Desplegar PDN',
    DesplegarQA     = 'Desplegar QA'
}
export type nuevaTareaEntry = Omit<TareaEntry,'id'>