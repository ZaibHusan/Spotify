import React, { useContext } from 'react'
import "./Left.css"
import { assets } from '../../../assets/assets'
import Playlist from './playlist/playlist'
import { Datacontext } from '../../../appContext/appContext'
export default function Left() {
  const { songData } = useContext(Datacontext)
  return (
    <div className="left">
      <div className="header">
        <div className="header_part1">
          <h3><img className='invert hides' src={assets.hide} alt="" />Your Library</h3>
          <div className="header_part1_right">
            <div className="plus">
              <img className='invert' src={assets.plus} alt="" />
            </div>
            <div className="zoom">
              <img className='invert' src={assets.zoom} alt="" />
            </div>
          </div>
        </div>
        <div className="playlist_name">
          <h4>Playlists</h4>
          <h4>Artists</h4>
        </div>
        <div className="header_last">
          <div className="header_input">
            <img src={assets.search_icon} alt="" />
            <input placeholder='Search in your library' type="text" />
          </div>
          <p>Recent<img className='invert' src={assets.button} alt="" /></p>
        </div>
      </div>
      <div className="playlist">
        {songData.map((song , index) => {
          return (
            <Playlist key={index} song={song} />
          )
        })}

      </div>
    </div>
  )
}
