import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({ onCancel, onAddPost}){

  const [enteredBody, setEnteredBody]= useState('');
  const [enteredAuthor, setEnteredAuthor]= useState('');

  function changeBodyhandler (event){
      setEnteredBody(event.target.value); 
  }

  function changAuthorHandler (event){
    setEnteredAuthor(event.target.value); 
  }
  function submitHandler(event){
    event.preventDefault();
    const postData={
      body:enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData);
    console.log(postData);
    onCancel();
  }
    return(
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyhandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changAuthorHandler }/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
    );
}
export default NewPost;