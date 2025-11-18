import React from 'react'
import "./Mplaylist.css"
import { assets } from '../../../../assets/assets'
import { Link } from 'react-router-dom'
export default function Mplaylist({ playlist }) {
  return (
    <div className="Mplaylist">
      <div className="Mplaylist_thumbnial">
        <img src={playlist.image} alt="" />
      </div>
      <h4>{playlist.name}</h4>
      <div className="play_icon">
        <Link to={`/playlist/${playlist.id}`}>  <img className='invert' id='icon' src={assets.play_icon} alt="" /></Link>
      </div>
    </div>
  )
}
