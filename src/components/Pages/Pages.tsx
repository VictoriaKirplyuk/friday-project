import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {ErrorPage} from "./ErrorPage/ErrorPage";
import {PasswordRecovery} from "./PasswordRecovery/PasswordRecovery";
import {PasswordUpdate} from "./PasswordUpdate/PasswordUpdate";
import {ProfilePage} from "./ProfilePage/ProfilePage";
import {RegistrationPage} from "./RegistrationPage/RegistrationPage";
import {TestPage} from "./TestPage/TestPage";
import {LoginPage} from "./LoginPage/LoginPage";
import s from './Pages.module.css'

export const PATH = {
    LOGIN_PAGE: '/login',
    RECOVERY: '/recovery',
    UPDATE: '/update',
    PROFILE_PAGE: '/profile',
    REGISTRATION: '/registration',
    TEST_PAGE: '/test'
}

export const Pages = () => {
    return (<div className={s.pages}>
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.REGISTRATION}/>}/>
            <Route path={PATH.RECOVERY} element={<PasswordRecovery/>}/>
            <Route path={PATH.UPDATE} element={<PasswordUpdate/>}/>
            <Route path={PATH.PROFILE_PAGE} element={<ProfilePage/>}/>
            <Route path={PATH.LOGIN_PAGE} element={<LoginPage/>}/>
            <Route path={PATH.REGISTRATION} element={<RegistrationPage/>}/>
            <Route path={PATH.TEST_PAGE} element={<TestPage/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    </div>)
}
