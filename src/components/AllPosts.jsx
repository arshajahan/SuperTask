import './allPosts.css';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts } from '../redux/apiCalls';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Loading from './Loading';

function AllPosts() {
  const dispatch = useDispatch();
  const {data, pending, error} = useSelector((state) => state.posts);

  useEffect(() => {
    fetchPosts(dispatch);
    // eslint-disable-next-line
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 5;
  const pagesVisited = pageNumber * postsPerPage;
  const pageCount = Math.ceil(data.length / postsPerPage);

  const displayPosts = data
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return(
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <p>
                <strong>User ID:</strong> {post.userId}
              </p>
              <p>
                <strong>ID:</strong> {post.id}
              </p>
              <button>Edit</button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
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
    <div className="App">
      <button>Add New Post</button>
        {data &&
        <div> 
          {displayPosts}
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
        </div>}
      {pending && <Loading/>}
      {error && <h1>Loading Error!....</h1>}
    </div>
  );
}


export default AllPosts;
