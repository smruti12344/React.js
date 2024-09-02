import classes from './Post.module.css'
function Post(props){
    return(
       <div className={classes.container}>
        <p className={classes.author}>{props.author}</p>
       <p className={classes.text}>{props.body}</p>
       </div>
    )
}
export default Post;