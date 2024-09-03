import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({onClose,addData}) {
  const[formData,setFormData] = useState({name:'',body:''});
  function authorChangeHandler(e){
       setFormData({
        name:e.target.value,
        body: formData.body
       });
  }
  function bodyChangeHandler(e){
     setFormData({
      ...formData,
      body : e.target.value

     })
    
  }
  function formHandler(){
  //  alert(JSON.stringify(formData));
  addData(formData);
   alert("Data Submitted Successfully");
   onClose();
  }
  
  return (
    <form className={classes.form} onSubmit={formHandler}>
      <div className={classes.inputGroup}>
        <label htmlFor="text">Text</label>
        <textarea
          placeholder="something"
          className={classes.text}
          name="text"
          id="text"
          cols="30"
          rows="10"
          onChange={bodyChangeHandler}
        ></textarea>
      </div>
      <div className={classes.inputGroup}>
        <label htmlFor="author">Author</label>
        <input
          className={classes.author}
          type="text"
          onChange={authorChangeHandler}
          name='author'
        />
      </div>
      <div className={classes.btnGroup}>
        <button
          type="button"
          className={`${classes.modernbutton} ${classes.canBtn}`}
          onClick={onClose}
        >
          Cancel
        </button>
        <button className={classes.modernbutton} onClick={formHandler}>Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
