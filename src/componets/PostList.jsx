import React, { useState } from 'react';
import Post from './Post';
import styles from './PostList.module.css';
import NewPost from './NewPost';
import Modal from './Module';

function PostList(props) {
    const[enterBody,setEnterBody] = useState('');
    const[author,setAuthor] = useState('');
    

    function bodyChangeHandler(e){
      // alert(e.target.value);
      setEnterBody(e.target.value);
    }
    function authorChangeHandler(e){
      // alert(e.target.value);
      setAuthor(e.target.value);
    }
    
    return (
       <>
       {props.isPosting && (
        <Modal onClose={props.hideModal} >
        <NewPost onClose={props.hideModal} 
        onBodyChange={bodyChangeHandler} 
        onAuthorChange={authorChangeHandler}/>
        </Modal>
       )}
       <div className={styles.postContainer}>
        
            <Post author="Lipu" body="Next.js course." />
            <Post  body={enterBody} author={author} />
        </div>
       </>
    );
}

export default PostList;
