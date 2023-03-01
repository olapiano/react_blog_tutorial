import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className="Home">

      {isLoading && <p className='statusMsg'>Loadning posts...</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{ color: 'red' }}>Error: {fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} />: <p className='statusMsg'>No posts to display.</p>)}

      
      {/* {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: '2rem' }}>
          No posts to display.
        </p>
      )} */}
    </main>
  )
}

export default Home;