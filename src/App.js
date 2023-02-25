import './App.css';
import AllPosts from './components/AllPosts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddPost from './components/AddPost';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/allposts' element={<AllPosts/>} />
        <Route path='/add' element={<AddPost/>}/> 
      </Routes>
    </Router>
    </>
  );
}


export default App;
