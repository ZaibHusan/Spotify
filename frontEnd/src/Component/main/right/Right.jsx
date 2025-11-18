import React, { useContext } from 'react'
import "./right.css"
import { assets } from '../../../assets/assets'
import { Datacontext } from '../../../appContext/appContext';

export default function Right() {

  const {currentTime , audioRefs, Range, setRange, TotalDuration , songinfo } = useContext(Datacontext)

  const range = (e) => {
    const newTime = (audioRefs.current.duration * e.target.value) / 100;
    audioRefs.current.currentTime = newTime;
    setRange(e.target.value)
  };


  return (
    <div className="right">
      <div className="right_part1">
        <img src={assets.stack_icon} alt="" />
        <h3>Shah Farooq</h3>
      </div>
      <div className="right_thumbnial">
        <img src= {songinfo.image } alt="" />
      </div>
      <div className="title">
        <h2>{songinfo.desc.slice(0,30)}</h2>
      </div>
      <div className="plus_singer">
        <h3>{songinfo.name}</h3>
        <div className="player_plus">
          <img className='invert' src={assets.plus} alt="" />
        </div>
      </div>
      <div className="Right_player_part2_2">
        <p>{currentTime.currentminute}:{currentTime.currentsecond}</p>
        <input onChange={range} value={Range} type="range" />
        <p>{TotalDuration.minute}:{TotalDuration.second}</p>
      </div>
    </div>
  )
}
