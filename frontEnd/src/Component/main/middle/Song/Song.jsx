import React, { useContext } from 'react'
import "./Song.css"
import { assets } from '../../../../assets/assets'
import { Datacontext } from '../../../../appContext/appContext'
export default function Song({ song }) {

    const { setsongIndex, audioRefs, setaudiostate } = useContext(Datacontext);

    const cliked = () => {
        setsongIndex(song.id)
        setaudiostate(true)
        setTimeout(() => {
            audioRefs.current.play();

        }, 1000);
    }
    return (
        <div className="outline">
            <div className="Song">
                <div className="Song_thumbnial">
                    <img src={song.image} alt="" />
                </div>
                <div className="Song_title">
                    <p>{song.desc}</p>
                </div>
            </div>
            <div className="play_icon">
                <img className='invert' onClick={cliked} src={assets.play_icon} alt="" />
            </div>
        </div>
    )
}
