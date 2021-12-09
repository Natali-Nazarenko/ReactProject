import { Button } from "../button/Button";

import './PostCard.scss'

export const PostCard = (props) => {
    const closeBlock = () => {
        const eventElement = document.querySelector('.post');
        eventElement.classList.remove('active');
        eventElement.innerHTML = '';
    }
    
    return (
        <div className="post">
            <h1>{props.title}</h1>
            <h2>{props.category}</h2>
            <span>{props.text}</span>
            <img src={props.url} alt={props.alternativText} />
            <Button text="Close" onClick={closeBlock} />
        </div>
    )
}