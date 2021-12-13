export const Input = (props) => {
    return (
        <input type={props.type} id={props.id} onChange={() => props.onChoise(props.id)} />
    )
}