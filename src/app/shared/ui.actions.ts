import { Action } from '@ngrx/store';

export const ACTIVAR_LOADING = '[UI Loading] Cargando';
export const DESCACTIVAR_LOADING = '[UI Loading] Fin de carga.';

export class ActivarLoadingAction implements Action {
    readonly type = ACTIVAR_LOADING;
}

export class DesacctivarLoadingAction implements Action {
    readonly type = DESCACTIVAR_LOADING;
}

export type acciones = ActivarLoadingAction | DesacctivarLoadingAction;
