import NewPost from './NewPost';
import Post from './post';
import classes from './PostList.module.css';
import {useState} from 'react';

function PostList(props){
    const [enteredBody, setEnteredBody]= useState('');
    const [enteredAuthor, setEnteredAuthor]= useState('');

    function changeBodyhandler (event){
        setEnteredBody(event.target.value); 
    }

    function changAuthorHandler (event){
      setEnteredAuthor(event.target.value); 
    }
 return (
     <>
     <NewPost onBodyChange={changeBodyhandler} onAuthorChange={changAuthorHandler} />
     <ul className={classes.posts}>
    <Post author={enteredAuthor} body={enteredBody}/>
    <Post author="Jeniffa Possees " body="this is second"/>
     </ul>  
     </>

 );
}
export default PostList;