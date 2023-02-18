import NewPost from './NewPost';
import Post from './post';
import classes from './PostList.module.css';

function PostList(props){
 return (
     <>
     <NewPost/>
     <ul className={classes.posts}>
    <Post author="Martin Morphins " body="this is First"/>
    <Post author="Jeniffa Possees " body="this is second"/>
     </ul>  
     </>

 );
}
export default PostList;