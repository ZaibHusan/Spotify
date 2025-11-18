import React, { createContext, useContext, useEffect, useState } from 'react'
import "./Library.css"
import { assets } from '../../../../assets/assets'
import PSong from './song/PSong'
import Footer from '../../Footer/Footer'
import { useLocation } from 'react-router-dom'
import { Datacontext } from '../../../../appContext/appContext'
export default function Library() {
    const { playlist, songData } = useContext(Datacontext);
    const [playlistdata, setplaylistdata] = useState(``)
    const path = useLocation().pathname;
    const id = path.split("/")[2];

    useEffect(() => {
        let Pdata = playlist.filter((playlist) => {
            return playlist.id === parseInt(id);
        })
        setplaylistdata(Pdata[0])
    }, [playlist, id])


    return (
        <div className="library" style={{ background: playlistdata.bgColor }}>
            <div className="library_profile">
                <div className="library_profile_img">
                    <img src={playlistdata.image} alt="" />
                </div>
                <div className="profile_detils">
                    <div className="verified">
                        <p><img src={assets.verified} alt="" />Verified Artist</p>
                    </div>
                    <h1>{playlistdata.name}</h1>
                    <p>29,897 monthly listeners</p>
                </div>
            </div>
            <div className="playlist_detils">
                <div className="library_play_icon">
                    <img className='invert' src={assets.play_icon} alt="" />
                </div>
                <div className="librar_img">
                    <img src={assets.OIP} alt="" />
                </div>
                <div className="shuffle">
                    <img src={assets.shuffle_icon} alt="" />
                </div>
                <div className="following">
                    <button>Following</button>
                </div>
                <div className="three_dots">
                    <img className='invert' src={assets.more} alt="" />
                </div>
            </div>
            <div className="popular"><h1>Popular</h1></div>
            <div className="library_songs">
                {songData.map((song,index) => {
                    return (
                        <PSong key={index} song={song} index={index}/>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}
