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
    <div>
      <div>
        {
          isLoading ? <div>Loading...</div> :
          <div>
            <div>
              <p onClick={() => setMode('lyrics')}>Lyrics</p>
              <p onClick={() => setMode('movies')}>Movies</p>
            </div>
            {
              mode === 'lyrics' ?
              <>
                <h1>Search for the lyrics to any song</h1>
                <input type='text' placeholder='Taylor Swift' value={artist} onChange={e => setArtist(e.target.value)} />
                <input type='text' placeholder='All Too Well' value={title} onChange={e => setTitle(e.target.value)} />
                <button onClick={getLyrics}>Search</button>
                {
                  lyrics &&
                  <p style={{'whiteSpace': 'pre'}}>{lyrics}</p>
                }
              </>
              :
              <>
                <h1>Search for a movie</h1>
                <input type='text' placeholder='Movie Title' />
                <button>Search</button>
                {
                  movie.Title &&
                  <div>
                    <img src='https://via.placeholder.com/300x450' alt="" />
                    <p>Title (Year)</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa diam, laoreet ac euismod eget, faucibus semper ligula. Praesent sed lacus ac tortor euismod varius. Vivamus sed diam libero. Duis.</p>
                    <p>Runtime:</p>
                    <p>Director:</p>
                    <p>Stars:</p>
                  </div>
                }
              </>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default App
