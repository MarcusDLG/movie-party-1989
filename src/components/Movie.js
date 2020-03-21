import React, { Component } from 'react'
import App from '../App'

export class Movie extends Component {
  render() {
    return (
      <section className="movieCard">
        <section className={this.props.id}>
          <head>{this.props.original_title}</head>
          <img
            alt={this.props.title}
            src={`https:image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.poster_path}`}
          ></img>
          <p>{this.props.overview}</p>
          <p>
            <strong>Popularity:</strong> {this.props.popularity}
          </p>
          <p>
            <strong>Vote Count:</strong> {this.props.voteCount}
          </p>
        </section>
      </section>
    )
  }
}

export default Movie
