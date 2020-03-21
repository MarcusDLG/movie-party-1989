import React, { Component } from 'react'
import Movie from './components/Movie'
import Header from './components/Header'
// import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    movieItems: [],
    totalResults: 0,
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=bacaaf4eaf8460f869017fcbe5649411'
    )
      .then(response => {
        console.log('then-response' + response)
        return response.json()
      })
      .then(data => {
        console.log('then-data' + data)
        this.setState({
          movieItems: data.results,
          totalResults: data.total_results,
        })
      })
  }
  render() {
    return (
      <>
        <body>
          <Header />
          <h1>The Most Popular Movies of 1989!!!</h1>
          <main>
            {this.state.movieItems.map(movie => {
              return (
                <Movie
                  original_title={movie.title}
                  alt={movie.title}
                  poster_path={movie.poster_path}
                  overview={movie.overview}
                  popularity={movie.popularity}
                  voteCount={movie.vote_count}
                  releaseDate={movie.release_date}
                />
              )
            })}
          </main>
          <footer>
            <p>
              This product uses the TMDb API but is not endorsed or certified by
              TMDb.
            </p>
          </footer>
        </body>
      </>
    )
  }
}

export default App
