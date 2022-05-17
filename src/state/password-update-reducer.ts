const initialState: UpdatePassStateType = {}

export const updatePassReducer = (state: UpdatePassStateType = initialState, action: UpdatePassActionType): UpdatePassStateType => {
    switch (action.type) {
        case 'type':
        default:
            return state
    }
}


//types
export type UpdatePassStateType = {}
export type UpdatePassActionType =
    | ActionType

export type ActionType = {
    type: 'type'
}