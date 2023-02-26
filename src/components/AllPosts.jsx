import './allPosts.css';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts } from '../redux/apiCalls';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Loading from './Loading';
import EditModal from './EditModal';
import { Link } from 'react-router-dom';

function AllPosts() {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [post, setPost] = useState(null);
  const {data, pending, error} = useSelector((state) => state.posts);

  useEffect(() => {
    fetchPosts(dispatch);
    // eslint-disable-next-line
  }, []);

  const openEdit = (p) => {
    setEditMode(true);
    setPost(p);
  }

  const closeModalHandler = () => {
    setEditMode(false);
}

  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 5;
  const pagesVisited = pageNumber * postsPerPage;
  const pageCount = Math.ceil(data.length / postsPerPage);
  
  const displayPosts = data
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return(
            <div key={post.id} className='one-post'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <p>
                <strong>User ID:</strong> {post.userId}
              </p>
              <p>
                <strong>ID:</strong> {post.id}
              </p>
              <div className='btns'>
                <span className='link' onClick={() => openEdit(post)}>Edit</span>&nbsp;&nbsp;
                <span className='link' onClick={() => handleDelete(post.id)}>Delete</span>
              </div>
            </div>
      )
    })

  const changePage = ({selected}) => {
    setPageNumber(selected);
  } 

  const handleDelete = async(id) => {
    if(window.confirm("Delete this post, are you sure?")){
        const res = await deletePost(id, dispatch);
        if(res === 200){
          alert("Post "+id+" deleted successfully.")
          fetchPosts(dispatch);
        }
        else{
          alert("Unable to delete, please try again.")
        }
    }
}

  return (
    <div className="container">
      <Link to='/add' className='link'>Add New Post</Link>
        {data &&
        <div className='post-grid'> 
          {displayPosts}
        </div>}
        <br/>
        <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"prevBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
      {(pending && !editMode) && <Loading/>}
      {error && <h1>Loading Error!....</h1>}
      {editMode && 
        <EditModal 
            post={post}
            onCloseModal={closeModalHandler}
        />
    }
    </div>
  );
}


export default AllPosts;
