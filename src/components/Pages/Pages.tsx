import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {ErrorPage} from "../ErrorPage";
import {PasswordRecovery} from "../PasswordRecovery";
import {PasswordUpdate} from "../PasswordUpdate";
import {ProfilePage} from "../ProfilePage";
import {RegistrationPage} from "../RegistrationPage";
import {TestPage} from "../TestPage";

export const PATH = {
    LOGIN_PAGE: '/login',
    RECOVERY: '/recovery',
    UPDATE: '/update',
    PROFILE_PAGE: '/profile',
    REGISTRATION: '/registration',
    TEST_PAGE: '/test'
}

export const Pages = () => {
    return (<Routes>
        <Route path={'/'} element={<Navigate to={PATH.REGISTRATION}/>}/>
        <Route path={PATH.RECOVERY} element={<PasswordRecovery/>}/>
        <Route path={PATH.UPDATE} element={<PasswordUpdate/>}/>
        <Route path={PATH.PROFILE_PAGE} element={<ProfilePage/>}/>
        <Route path={PATH.REGISTRATION} element={<RegistrationPage/>}/>
        <Route path={PATH.TEST_PAGE} element={<TestPage/>}/>
        <Route path={'*'} element={<ErrorPage/>}/>
    </Routes>)
}
