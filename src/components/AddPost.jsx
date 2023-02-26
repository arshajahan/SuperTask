import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../redux/apiCalls';
import './addPost.css'
import Loading from './Loading';

function AddPost() {
  const [added, setAdded] = useState(false);
  const [newPost, setNewPost] = useState({})

  const dispatch = useDispatch();
  const {data, pending} = useSelector((state) => state.posts);

  const inputChangeHandler = (e) => {
    setNewPost({...newPost, [e.target.name]:e.target.value})
  }

const submitHandler = async(e) =>{
  e.preventDefault();
  const res = await addPost(newPost, dispatch);
  if(res.status === 201){
    setAdded(true);
    alert("New Post added Successfully");
    e.target.reset();
  }
}

const closeAlert = () => {
  setAdded(false);
}


  return (
    <div className='container'>
      {pending && <Loading/>}
      <h2>Add New Post</h2><hr/>
      <form onSubmit={submitHandler} className='addForm'>
        <div className='inputs'>
          <label>UserId</label>
          <input
            required
            placeholder='Enter user id'
            name='userId'
            type='number'
            onChange = {e => inputChangeHandler(e)} 
          />
        </div>
        <div className='inputs'>
          <label>Post Title</label>
          <input
            required
            placeholder='Enter user the title'
            name='title'
            onChange = {e => inputChangeHandler(e)} 
          />
        </div>
        <div className='inputs'>
          <label>Post Body</label>
          <textarea
            required
            placeholder='Enter user the body'
            name='body'
            onChange = {e => inputChangeHandler(e)} 
          />
        </div>
        <button className='link'>Add Post</button>
      </form>
      { added &&
        <div className='added'>
          <span onClick={()=>closeAlert()} id='close'>X</span>
          <h2>Latest Post Details</h2>
          <p>Post Id: {data.id}</p>
          <p>User Id: {data.userId}</p>
          <p>Post title: {data.title}</p>
          <p>Post content: {data.body}</p>
        </div>  
      }
      
    </div>
  )
}

export default AddPost