import './App.css';
import AllPosts from './components/AllPosts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddPost from './components/AddPost';
import Title from './components/Title';

function App() {

  return (
    <div className='App'>
    <Router>
    <Title/>
      <Routes>
        <Route path='/supertask' element={<Dashboard/>} />
        <Route path='/supertask/allposts' element={<AllPosts/>} />
        <Route path='/supertask/add' element={<AddPost/>}/> 
      </Routes>
    </Router>
    </div>
  );
}


export default App;
