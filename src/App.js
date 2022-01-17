import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [artist, setArtist] = useState('')
  const [title, setTitle] = useState('')
  const [lyrics, setLyrics] = useState('')

  const getLyrics = async () => {
    setIsLoading(true)
    try {
      const lyricsData = await axios({
        url: `https://api.lyrics.ovh/v1/${artist}/${title}`,
        method: 'get'
      })
      console.log(lyricsData.data.lyrics)
      setLyrics(lyricsData.data.lyrics)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='container'>
        {
          isLoading ? <div>Loading...</div> :
          <>
            <h1>Search for the lyrics to any song</h1>
            <input type='text' placeholder='Taylor Swift' value={artist} onChange={e => setArtist(e.target.value)} />
            <input type='text' placeholder='All Too Well' value={title} onChange={e => setTitle(e.target.value)} />
            <button className='button' onClick={getLyrics}>Search</button>
            {
              lyrics &&
              <p style={{'whiteSpace': 'pre'}}>{lyrics}</p>
            }
          </>
        }
      </div>
    </div>
  )
}

export default App
