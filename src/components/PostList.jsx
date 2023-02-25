import NewPost from './NewPost';
import Post from './post';
import classes from './PostList.module.css';
import Modal from './Modal';
import { useState } from 'react';

function PostList({isPosting, onStopPosting}){
const [posts, setPosts] = useState([]);

function addPostHandler(postData){
    setPosts((existingPosts)=>[postData,... existingPosts]);
}
    
 return (
     <>
     {isPosting &&  
        <Modal onClose={onStopPosting}>
            <NewPost 
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
            />
        </Modal>
 }
    {posts.length > 0 && ( <ul className={classes.posts}>
    {posts.map((post)=><Post key={post.body} author={post.author} body={post.body}
    />)}
     </ul> ) }
     {posts.length === 0 &&(
         <div style={{textAlign:'center', color:'white'}}>
             <h2>There are no posts yet!!</h2>
             <p>time to start posting. </p>

         </div>
     )}

     </>

 );
}
export default PostList;