import React, { Component } from 'react'
import App from '../App'

export class Movie extends Component {
  render() {
    return (
      <section className="movieCard">
        <section className={this.props.id}>
          <section className="posterOverview">
            <head>{this.props.original_title}</head>
            <img
              alt={this.props.title}
              src={`https:image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.poster_path}`}
            ></img>
            <h2>{this.props.original_title}</h2>
            <p>{this.props.overview}</p>
          </section>
          <section className="movieCardNumbers">
            <p> Release Date: {this.props.releaseDate}</p>
            <p>
              <strong>Popularity:</strong> {this.props.popularity}
            </p>
            <p>
              <strong>Vote Count:</strong> {this.props.voteCount}
            </p>
          </section>
        </section>
      </section>
    )
  }
}

export default Movie
