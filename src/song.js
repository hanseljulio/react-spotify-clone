import React from 'react';
import './App.css';

function Song() {
  return (
    <div>
      <h1>Favorite Song</h1>
      <div className="container">
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Billie_Eilish_-_No_Time_to_Die.png" alt="NTTD cover" width={300} />
        </div>
        <div className="song-info">
          <div className="name">No Time To Die</div>
          <div className="artist">Billie Eilish · 2020 · No Time To Die </div>
        </div>
      </div>
      <iframe className="spotify-embed" src="https://open.spotify.com/embed/album/5sXSHscDjBez8VF20cSyad" width="100%" height={200} frameBorder={0} allowTransparency="true" allow="encrypted-media" />
    </div>
  );
}

export default Song;
