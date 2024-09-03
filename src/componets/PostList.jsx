import React, { useState } from 'react';
import Post from './Post';
import styles from './PostList.module.css';
import NewPost from './NewPost';
import Modal from './Module';

function PostList(props) {
  const [posts,setPosts] = useState([]);
   function dataHandler(formData){
    setPosts((existingPost)=>[formData,...existingPost]);
    alert(JSON.stringify(formData));
   }
        
    return (
       <>
       {props.isPosting && (
        <Modal onClose={props.hideModal} >
        <NewPost onClose={props.hideModal}  
         addData={dataHandler}/>
        </Modal>
       )}
       <div className={styles.postContainer}>
        {
          posts.length>0 ?(
          posts.map((post)=>(
            <Post  author={post.name} body={post.body} />
          ))
          ) : (<p>No post found...!</p>)
        }
      
           
         
        </div>
       </>
    );
}

export default PostList;
