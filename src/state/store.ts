import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./login-reducer";
import {recoveryReducer} from "./password-recovery-reducer";
import {updatePassReducer} from "./password-update-reducer";
import {profileReducer} from "./profile-reducer";
import {registrationReducer} from "./registration-reducer";
import thunkMiddleware from "redux-thunk"

const rootReducer = combineReducers({
    login: loginReducer,
    recovery: recoveryReducer,
    updatePass: updatePassReducer,
    profile: profileReducer,
    registration: registrationReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;