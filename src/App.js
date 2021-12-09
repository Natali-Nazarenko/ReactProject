import './App.scss';
import { Button } from './components/button/Button';
import { PostCard } from './components/postCard/PostCard';
import { posts } from "./constans/posts"

function App() {
  const numberPost = Math.round(Math.random() * posts.length);
  let altText = '';
  if (posts[numberPost].category === 'Dog') {
    altText = 'here is a picture of a dog';
  }else {
    altText = 'here is a picture of a cat';
  }
  const displayPost = () => {
    const eventElement = document.querySelector('.post');
    eventElement.classList.add('active');
  }
  const displayPosts = () => {
    const eventElement = document.querySelector('.post');
    eventElement.classList.add('active');
  }
  return (
    <div className="App">
      <Button text="Post" onClick={displayPost} />
      <Button text="Posts" onClick={displayPosts} />
      <div className='blockPosts'>
          <PostCard 
          title = {posts[numberPost].title}
          category = {posts[numberPost].category}
          text = {posts[numberPost].text}
          url = {posts[numberPost].img}
          alternativText = {altText} 
          />
      </div>
    </div>
  );
}

export default App;
