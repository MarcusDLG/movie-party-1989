import React, { Component } from 'react'
import Movie from './components/movie'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    movieItems: [],
    totalResults: 0,
  }

  componentDidMount() {
    fetch()
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
        <Movie
          original_title={item.original_title}
          poster_path={item.poster_path}
          overview={item.overview}
        />
      </>
    )
  }
}

export default App
