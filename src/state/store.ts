import {combineReducers, createStore} from "redux";
import {loginReducer} from "./login-reducer";
import {recoveryReducer} from "./password-recovery-reducer";
import {updatePassReducer} from "./password-update-reducer";
import {profileReducer} from "./profile-reducer";
import {registrationReducer} from "./registration-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    recovery: recoveryReducer,
    updatePass: updatePassReducer,
    profile: profileReducer,
    registration: registrationReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;