import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header>
          <img src="/images/Spotify_Logo_CMYK_Green.png" height={40} />
          <nav>
            <ul>
              <Link to="/"><li>Song</li></Link>
              <Link to="/playlist"><li>Playlist</li></Link>
              {/* <li><a href="play.html">Play</a></li> */}
            </ul>
          </nav>
        </header>
        
    );
}

export default Nav;