import { updateError, updateStart, updateSuccess, fetchStart, 
fetchSuccess, fetchError, addError, addStart, addSuccess, deleteError, deleteStart,
deleteSuccess } from "./postsSlice";
import axios from 'axios';

export const updatePost = async (post, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.put(
            "https://jsonplaceholder.typicode.com/posts/"+post.id, 
            post
        );
        dispatch(updateSuccess(res.data))
        console.log(res.data)
    } catch (err) {
        dispatch(updateError())
    }
}

export const addPost = async (post, dispatch) => {
    dispatch(addStart());
    try {
        const res = await axios.put(
            "https://jsonplaceholder.typicode.com/posts", 
            post
        );
        dispatch(addSuccess(res.data))
    } catch (err) {
        dispatch(addError())
    }
}

export const fetchPosts = async (dispatch) => {
    dispatch(fetchStart());
    try {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch(fetchSuccess(res.data))
    } catch (error) {
        dispatch(fetchError());
    }
}

export const deletePost = async (id, dispatch) => {
    dispatch(deleteStart());
    try {
        const res = await axios.delete(
            "https://jsonplaceholder.typicode.com/posts/"+id
        );
        dispatch(deleteSuccess())
        return res.status
    } catch (error) {
        dispatch(deleteError());
        return 'error'
    }
}