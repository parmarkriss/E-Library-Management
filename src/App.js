import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/HeaderandFooter/Layout';
import Home from './components/pages/Home';
import ViewDetails from './components/pages/Viewdetails';
import TrendingBooks from './components/pages/TrendingBooks';
import AddBooks from './components/pages/AddBooks';
import NewBooks from './components/pages/NewBooks';
import EditBooks from './components/pages/EditBooks';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path="/details/:title" element={<ViewDetails />} />
          <Route path="/trending-books" element={<TrendingBooks />} />
          <Route path='/add-books' element={<AddBooks />}></Route>
          <Route path='/new-books' element={<NewBooks/>}></Route>
          <Route path='/edit-books/:title' element={<EditBooks/>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
