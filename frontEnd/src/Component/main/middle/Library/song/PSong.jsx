import React, { useContext, useState } from 'react'
import "./PSong.css"
import { assets } from '../../../../../assets/assets'
import { Datacontext } from '../../../../../appContext/appContext';
export default function PSong({ song, index }) {
  const { setsongIndex, audioRefs, setaudiostate } = useContext(Datacontext);
  const cliked = () => {
    setsongIndex(song.id)
    setaudiostate(true)
    setTimeout(() => {
      audioRefs.current.play();

    }, 1000);
  }

  return (
    <div className="psong" >
      <div className="psong_part1">
        <p className='index'>{index + 1}</p>
        <div className="psong_thumbnial">
          <img src={song.image} alt="" />
        </div>
        <p>{song.name}</p>
      </div>
      <div className="psong_part2">
        <p>2342342</p>
      </div>
      <div className="psong_part3">
        <p className='ulta'>{song.duration}</p>
           <div className="playicon">
          <img className='invert' onClick={cliked} src={assets.play_icon} alt="" />
        </div>
     
      </div>
    </div>
  )
}
