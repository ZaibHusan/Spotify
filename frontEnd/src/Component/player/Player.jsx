import React, { useContext, useEffect, useRef, useState } from 'react'
import "./player.css"
import { assets, songsData } from '../../assets/assets'
import { Datacontext } from '../../appContext/appContext'
export default function Player() {


  const {currentTime, setcurrentTime , TotalDuration, setTotalDuration ,Range, setRange, songinfo, Play, Pause, currentSong, Next, Back, Volume, getAudioDuration, setaudioRefs, audiostate, setaudiostate } = useContext(Datacontext)

 
 

  const audioRef = useRef(null);
  const pauseHandle = () => {
    setaudiostate(false)
    Play(audioRef)
  }

  const playHandle = () => {
    setaudiostate(true)
    Pause(audioRef)
  }

  const NextHandle = () => {
    Next();

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load();
        setaudiostate(true)     // reload new song
        audioRef.current.play().catch(() => {
          console.log("Autoplay blocked by browser due to");
        });
      }
    }, 0);
  }

  const BackHandle = () => {
    Back();
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load();
        setaudiostate(true)     // reload new song
        audioRef.current.play().catch(() => {
          console.log("Autoplay blocked by browser due to");
        });
      }
    }, 0);
  }

  const VolumHandle = (e) => {
    const level = e.target.value
    Volume(level, audioRef);
  }



  useEffect(() => {
    getAudioDuration(audioRef, (duration) => {
      const minute = Math.floor(duration / 60);
      const second = Math.floor(duration % 60);
      setTotalDuration({ minute, second })
    });
    setaudioRefs(audioRef)

    if (audioRef.current.Pause) {
      setInterval(() => {
        console.log("song is playing")
      }, 1000);
    }

  }, [currentSong]);

  useEffect(() => {
    if (!audioRef.current) return;

    let intervalId;

    if (audiostate) { // if audio is playing
      intervalId = setInterval(() => {
        let duration = audioRef.current.currentTime;
        const minute = Math.floor(duration / 60).toString().padStart(2, "0");
        const second = Math.floor(duration % 60).toString().padStart(2, "0");
        setcurrentTime({
          currentminute: minute,
          currentsecond: second,
        })
        const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setRange(Math.floor(progress));
      }, 1000);
    }

    // Cleanup function: stops interval when audio pauses or component unmounts
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [currentSong, audiostate]);

  const range = (e) => {
    const newTime = (audioRef.current.duration * e.target.value) / 100;
    audioRef.current.currentTime = newTime;
    setRange(e.target.value)
  };





  return (
    <div className="player">
      <div className="player_part1">
        <div className="player_thumbnial">
          <img src={songinfo.image} alt="" />
        </div>
        <div className="player_detils">
          <h4>{songinfo.desc.slice(0,20)}</h4>
          <p>{songinfo.name}</p>
        </div>
        <div className="player_plus">
          <img className='invert' src={assets.plus} alt="" />
        </div>
      </div>
      <div className="player_part2">
        <div className="player_part2_1">
          <img src={assets.shuffle_icon} alt="" />
          <img onClick={BackHandle} src={assets.prev_icon} alt="" />
          {audiostate ? <img onClick={pauseHandle} src={assets.pause_icon} alt="" /> : <img onClick={playHandle} src={assets.play_icon} alt="" />}
          <img onClick={NextHandle} src={assets.next_icon} alt="" />
          <img src={assets.loop_icon} alt="" />
        </div>
        <div className="player_part2_2">
          <p >{currentTime.currentminute}:{currentTime.currentsecond}</p>
          <audio src={currentSong} className='audio' ref={audioRef} preload="metadata"  ></audio>
          <input onChange={range} value={Range} type="range" />
          <p>{TotalDuration.minute}:{TotalDuration.second}</p>
        </div>
      </div>
      <div className="player_part3">
        <img className='hidden' src={assets.mic_icon} alt="" />
        <img className='hidden' src={assets.stack_icon} alt="" />
        <img src={assets.speaker_icon} alt="" />
        <img src={assets.volume_icon} alt="" />
        <input type="range" onChange={VolumHandle} />

        <img src={assets.mini_player_icon} alt="" />
        <img className='invert hidden' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}
