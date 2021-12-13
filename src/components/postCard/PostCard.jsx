import { Button } from "../button/Button";

import './PostCard.scss'

export const PostCard = (props) => {
    return (
        <div className="post">
            <h1>{props.dataPost.title}</h1>
            <h2>{props.dataPost.category}</h2>
            <span>{props.dataPost.text}</span>
            <img src={props.dataPost.img} alt={props.alternativText} />
            <Button text="Close" onClick={() => props.onClose(props.dataPost.id)} />
        </div>
    )
}