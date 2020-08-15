import React from "react";

import Row from "../src/components/Row/Row";
import Banner from "../src/components/Banner/Banner";

import requests from "../src/api/requests";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Banner />
      <Row
        isLargeRow={true}
        title="Netlix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
