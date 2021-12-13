import React, { useState } from "react";

import { Button } from '../button/Button';
import { PostCard } from '../postCard/PostCard';
import { posts, categorys, getAltText } from "../../constans/index";
import { Input } from "../input/Input";

export const BlockPosts = () => {

    const [shownPosts, setShownPosts] = useState();
    // const [numberPost, setNumberPost] = useState();

    const displayPost = () => {
        const numberPost = Math.round(Math.random() * (posts.length - 1));
        setShownPosts([posts[numberPost]]);
    }

    const displayPosts = () => {
        setShownPosts(posts);
    }

    const toggleShowByCategories = () => {
        const categoryChoise = document.querySelector('.choise');
        categoryChoise.classList.toggle('active');
    }

    const onCardClose = (choiseCardId) => {
        setShownPosts(shownPosts.filter((item) => item.id !== choiseCardId));
    }

    const onCategoryCheckChange = (choiseCategory) => {
        const checkedElement = document.getElementById(choiseCategory);
        if(checkedElement.checked) {
            setShownPosts(posts.filter((item) => item.category === choiseCategory));
        }else {
            setShownPosts([]);
        }
    }

    return (
        <div className="App">
            <div>
                <Button text="Post" onClick={displayPost} />
                <Button text="Posts" onClick={displayPosts} />
                <Button text="Posts by categories" onClick={toggleShowByCategories} className="longButton" />
            </div>
            <div className="choise">
                {categorys.map(item => 
                    <React.Fragment key={item}>
                        <Input type='checkbox' id={item} onChoise={onCategoryCheckChange} />
                        <label htmlFor={item}>{item}</label>
                    </React.Fragment>
                )
                }
            </div>
            <div className='blockPosts'>
                {shownPosts?.map(post => 
                    <PostCard 
                        key={post.id}
                        dataPost={post}
                        alternativText={getAltText(post.category)}
                        onClose={onCardClose}
                    />
                )}
            </div>
        </div>
    )
}