// npm i react-router-dom -S (se index.js)

// npm i date-fns -S  ---- for date functions ---

// npm i axios

// npx json-server -p 3500 -w data/db.json

/* custom hooks: 
  https://nikgraf.github.io/react-hooks/
  https://www.npmjs.com/package/react-use
*/

import { useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

import Home from './Home';
import NewPost from './NewPost';
import EditPost from './EditPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';

import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';

// import { DataProvider } from './context/DataContext';

function App() {
  /* 
  Ersatt av useAxiosFetch
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (error) {
          if(error.response) {
          // Not in the 200 response range
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error ${error.message}`);
        }
      }
    }

    fetchPosts();
  }, []) */

  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div className="App">
      <Header title="React JS Blog"/>
      {/* <DataProvider> */}
        <Nav />
        <Routes>
          <Route path="/" element={ <Home isLoading={isLoading} fetchError={fetchError} /> } />
          <Route path="/post" element={ <NewPost/> } />
          <Route path="/edit/:id" element={ <EditPost /> } />
          <Route path="/post/:id" element={ <PostPage /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="*" element={ <Missing /> } />
        </Routes>
      {/* </DataProvider> */}
      <Footer />
    </div>
  );
}

export default App;
