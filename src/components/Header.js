import React, { Component } from 'react'
import Moviedb from '../components/Images/Moviedb.png'

export class Header extends Component {
  render() {
    return (
      <header className="headTop">
        <img className="Logo" src={Moviedb}></img>
        <nav>
          <ul>
            <li>
              <a href="https://www.kastlekreative.com">Home</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">Showtimes</a>
            </li>
            <li>
              <a href="">Theaters</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
