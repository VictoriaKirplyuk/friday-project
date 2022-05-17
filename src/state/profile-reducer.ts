const initialState: ProfileStateType = {}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case 'type':
        default:
            return state
    }
}


//types
export type ProfileStateType = {}
export type ProfileActionType =
    | ActionType

export type ActionType = {
    type: 'type'
}