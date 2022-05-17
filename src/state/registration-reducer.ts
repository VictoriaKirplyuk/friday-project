const initialState: RegistrationStateType = {}

export const registrationReducer = (state: RegistrationStateType = initialState, action: RegistrationActionType): RegistrationStateType => {
    switch (action.type) {
        case 'type':
        default:
            return state
    }
}


//types
export type RegistrationStateType = {}
export type RegistrationActionType =
    | ActionType

export type ActionType = {
    type: 'type'
}