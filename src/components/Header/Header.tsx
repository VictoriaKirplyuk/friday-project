import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/recovery'>Recovery password</NavLink>
            <NavLink to='/update'>Update password</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/registration'>Registration</NavLink>
            <NavLink to='/test'>Test page</NavLink>
        </div>
    )
}