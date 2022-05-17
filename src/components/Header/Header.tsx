import {NavLink} from "react-router-dom"
import {PATH} from "../Pages/Pages"
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.links}>
                    <NavLink to={PATH.LOGIN_PAGE} className={s.linkItem}>Login</NavLink>
                    <NavLink to={PATH.RECOVERY} className={s.linkItem}>Recovery password</NavLink>
                    <NavLink to={PATH.UPDATE} className={s.linkItem}>Update password</NavLink>
                    <NavLink to={PATH.PROFILE_PAGE} className={s.linkItem}>Profile</NavLink>
                    <NavLink to={PATH.REGISTRATION} className={s.linkItem}>Registration</NavLink>
                    <NavLink to={PATH.TEST_PAGE} className={s.linkItem}>Test page</NavLink>
            </div>
        </div>
    )
}