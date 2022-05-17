const initialState: RecoveryStateType = {}

export const recoveryReducer = (state: RecoveryStateType = initialState, action: RecoveryActionType): RecoveryStateType => {
    switch (action.type) {
        case 'type':
        default:
            return state
    }
}


//types
export type RecoveryStateType = {}
export type RecoveryActionType =
    | ActionType

export type ActionType = {
    type: 'type'
}
