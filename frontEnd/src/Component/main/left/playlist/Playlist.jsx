import React, { useContext } from 'react'
import "./Playlist.css"
import { assets } from '../../../../assets/assets'
import { Datacontext } from '../../../../appContext/appContext';
export default function Playlist({ song }) {
  const { setsongIndex, audioRefs, setaudiostate } = useContext(Datacontext);
  const cliked = () => {
    setsongIndex(song.id)
    setaudiostate(true)
    setTimeout(() => {
      audioRefs.current.play();

    }, 1000);
  }
  return (
    <div className="Playlist" onClick={cliked}>
      <div className="playlist_thumbnial">
        <img src={song.image} alt="" />
      </div>
      <div className="Playlist_detils">
        <h4>{song.name}</h4>
        <p>{song.desc.split(0, 5)}</p>
      </div>
    </div>
  )
}
