import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../redux/apiCalls';
import './editModal.css'
import Loading from './Loading';

function EditModal(props) {
    const [updated, setUpdated] = useState(false);
    const {pending} = useSelector((state)=> state.posts)
    const [post, setPost] = useState(props.post)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const value = e.target.value;
        setPost({...post, [e.target.name]:value})
    }
    const submitHandler = async(e) =>{
        e.preventDefault();
        const res = await updatePost(post, dispatch);
        setPost(res);
        setUpdated(true);
    }

  return (
    <div className='modal'>
        <div className='modal-content'>
            <form onSubmit={submitHandler} className='modal-form'>
                {pending && <Loading/>}
                <span onClick={() => props.onCloseModal()} className='close'>X</span>
                {!updated &&
                <>
                <input 
                    type='number'
                    required
                    defaultValue={post.userId}
                    placeholder='User Id'
                    name= 'userId'
                    onChange = {e => handleChange(e)}
                />
                <input 
                    type='text'
                    defaultValue={post.title}
                    placeholder='Post Title'
                    name='title'
                    onChange = {e => handleChange(e)}
                />
                <input 
                    type='text'
                    defaultValue={post.body}
                    placeholder='Post body'
                    name='body'
                    onChange = {e => handleChange(e)}
                />
                <button>update</button>
                </>
                }
                { updated &&
                    <div>
                    <h2>Updated Post Details</h2>
                    <p>Post Id: {post.id}</p>
                    <p>User Id: {post.userId}</p>
                    <p>Post title: {post.title}</p>
                    <p>Post content: {post.body}</p>
                    </div>  
                }
            </form>
        </div>
    </div>
  )
}

export default EditModal;