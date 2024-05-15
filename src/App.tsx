import { Row } from './Row'
import './App.css'
import { requests } from './requests'
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
      <Row title="News Movies" fetchUrl={requests.fetchNewsMovies} />
      <Row title="Document Movies" fetchUrl={requests.fetchDocumentMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Kids Movies" fetchUrl={requests.fetchKidsMovies} />
    </div>
  );
}
export default App
