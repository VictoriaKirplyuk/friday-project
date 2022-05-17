import s from './ErrorPage.module.css'

export const ErrorPage = () => {
    return (
        <div className={s.container}>
            <div className={s.error}>404 PAGE NOT FOUND</div>
            <div className={s.errorText}>This page isn't available. Sorry about that.
                <br/>Try searching for something else.
            </div>
        </div>
    )
}
