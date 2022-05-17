import s from './TestPage.module.css'
import SuperInputText from "../../../superComponents/SuperInputText/SuperInputText";
import SuperButton from "../../../superComponents/SuperButton/SuperButton";
import SuperCheckbox from "../../../superComponents/SuperCheckbox/SuperCheckbox";

export const TestPage = () => {
    return (
        <div className={s.container}>
            <SuperInputText/>
            <SuperButton>click</SuperButton>
            <SuperCheckbox/>
        </div>
    )
}