import React, { useContext, useEffect } from 'react'
import "./middle.css"
import Mplaylist from './Mplaylist/Mplaylist'
import Song from './Song/Song'
import Footer from '../Footer/Footer'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Library from './Library/Library'
import { assets } from '../../../assets/assets'
import { Datacontext } from '../../../appContext/appContext'


export default function Middle({ songData }) {
  const { playlist } = useContext(Datacontext)
  const location = useLocation().pathname;
  const { id } = useParams();
  const navigation = useNavigate();
  if (location === "/") {
    return (
      <div className="middle">
        <div className="to_pro">
          <button><img onClick={() => navigation(1)} src={assets.arrow_right} alt="" /></button>
          <button><img onClick={() => navigation(-1)} src={assets.arrow_left} alt="" /></button>
        </div>
        <div className="middle_part1">
          <div className="middle_part1_button">
            <button>Music</button>
            <button>All</button>
          </div>
          <div className="middle_part1_playlist">
            {playlist.map((playlist) => {
              return (
                <Mplaylist key={playlist.id} playlist={playlist} />
              )
            })}

          </div>
        </div>
        <div className="middle_part2">
          <div className="see_all">
            <h2>It's New music Firday!</h2>
            <p>Show all</p>
          </div>
          <div className="middle_part2_song">
            {songData.map((song => {
              return (
                <Song key={song.id} song={song} />
              )
            }))}
          </div>
        </div>
        <div className="middle_part3">
          <Footer />
        </div>
      </div>
    )
  }
  if (location.includes("playlist", id)) {
    return (
      <div className="middles">
        <div className="to_pro">
          <button><img onClick={() => navigation(1)} src={assets.arrow_right} alt="" /></button>
          <button><img onClick={() => navigation(-1)} src={assets.arrow_left} alt="" /></button>
        </div>
        <Library id={id} />
      </div>
    )
  }
}
