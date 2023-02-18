import classes from './NewPost.module.css'

function NewPost(){
    function changeBodyhandler(event){
        console.log(event.target.value); 
    }
    return(
<form className={classes.form}>
    <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyhandler}/>
    </p>
    <p>
        <label htmlFor="name">Your Name</label>
        <textarea type="text" required/>
    </p>
</form>
    );
}
export default NewPost;