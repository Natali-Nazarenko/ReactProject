import './Button.scss'

export const Button = (props) => {
    return (
        <button type={props.type} className={props.className} onClick={props.onClick}>{props.text}</button>
    )
}