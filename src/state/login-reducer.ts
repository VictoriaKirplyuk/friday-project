const initialState: LoginStateType = {}

export const loginReducer = (state: LoginStateType = initialState, action: LoginActionType): LoginStateType => {
    switch (action.type) {
        case 'type':
        default:
            return state
    }
}


//types
export type LoginStateType = {}
export type LoginActionType =
    | ActionType

export type ActionType = {
    type: 'type'
}
