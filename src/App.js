import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [mode, setMode] = useState('lyrics')
  const [isLoading, setIsLoading] = useState(false)
  const [artist, setArtist] = useState('')
  const [title, setTitle] = useState('')
  const [lyrics, setLyrics] = useState('')

  const [search, setSearch] = useState('')
  const [movie, setMovie] = useState({})

  const getLyrics = async () => {
    setIsLoading(true)
    try {
      const lyricsData = await axios({
        url: `https://api.lyrics.ovh/v1/${artist}/${title}`,
        method: 'get'
      })
      console.log(lyricsData.data)
      setLyrics(lyricsData.data.lyrics)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container'>
      {
        isLoading ? <div class="loader loader--style3" title="2"><svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" xmlSpace="preserve"><path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/></path></svg></div> :
        <div>
          <div className='modes'>
            <p className={`mode ${mode === 'lyrics' && 'active-mode'}`} onClick={() => setMode('lyrics')}>Lyrics</p>
            <p className={`mode ${mode === 'movies' && 'active-mode'}`} onClick={() => setMode('movies')}>Movies</p>
          </div>
          {
            mode === 'lyrics' ?
            <div className='search-container'>
              <h1 className='title'>Search for the lyrics to any song</h1>
              <input type='text' placeholder='Taylor Swift' value={artist} onChange={e => setArtist(e.target.value)} />
              <input type='text' placeholder='All Too Well' value={title} onChange={e => setTitle(e.target.value)} />
              <button className='search' onClick={getLyrics}>Search</button>
              {
                lyrics &&
                <p className='lyrics'>{lyrics}</p>
              }
            </div>
            :
            <div className='search-container'>
              <h1 className='title'>Search for a movie</h1>
              <input type='text' placeholder='Movie Title' />
              <button className='search'>Search</button>
              {
                movie.Title &&
                <div className='movie-details'>
                  <img src={movie.Poster ?? 'https://via.placeholder.com/300x450'} />
                  <p className='movie-title'>{movie.Title} ({movie.Year})</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa diam, laoreet ac euismod eget, faucibus semper ligula. Praesent sed lacus ac tortor euismod varius. Vivamus sed diam libero. Duis.</p>
                  <p>Runtime:</p>
                  <p>Director:</p>
                  <p>Stars:</p>
                </div>
              }
            </div>
          }
        </div>
      }
    </div>
  )
}

export default App
