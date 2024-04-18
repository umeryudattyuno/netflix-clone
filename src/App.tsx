import { Row } from './Row'
import './App.css'
import { requests } from './request'
import { Banner } from './Banner';
import { Nav } from './Nav';


function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
    </div>
  );
}
export default App
