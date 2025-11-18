import React, { createContext, use, useEffect, useState } from 'react'
import { songsData } from '../assets/assets';
import { Pause } from './mediaControle';
import { Play } from './mediaControle';
export const Datacontext = createContext();
import { Volume } from './mediaControle';
import { getAudioDuration } from './mediaControle';
import { albumsData } from '../assets/assets';
export default function AppContext(props) {

    const [songData, setsongData] = useState(songsData)
    const [songIndex, setsongIndex] = useState(0)
    const [currentSong, setcurrentSong] = useState(songData[0].file)
    const [audioRefs, setaudioRefs] = useState();
    const [audiostate, setaudiostate] = useState(false)
    const [playlist, setplaylist] = useState(albumsData)
    const [TotalDuration, setTotalDuration] = useState({
        minute: 0,
        second: 0,
    });
    const [currentTime, setcurrentTime] = useState({
        currentminute: "00",
        currentsecond: "00",
    })





    const [songinfo, setsonginfo] = useState({
        name: "",
        imgae: "",
        desc: "",
    })


    useEffect(() => {

        let presentSong = songData.filter(song => {
            return song.id === songIndex
        })

        setsonginfo({
            name: presentSong[0].name,
            image: presentSong[0].image,
            desc: presentSong[0].desc,
        })


    }, [currentSong])



    const Next = () => {
        const nextIndex = songIndex + 1;

        if (nextIndex >= songData.length) {
            // optional: loop to start
            setsongIndex(0);
            setcurrentSong(songData[0].file);
        } else {
            setsongIndex(nextIndex);
            setcurrentSong(songData[nextIndex].file);
        }

    }
    const Back = () => {
        const nextIndex = songIndex - 1;

        if (nextIndex < 0) {
            // optional: loop to start
            setsongIndex(0);
            setcurrentSong(songData[0].file);
        } else {
            setsongIndex(nextIndex);
            setcurrentSong(songData[nextIndex].file);
        }

    }

    const [Range, setRange] = useState(0)

    const Data = {
        songData,
        Pause,
        Play,
        currentSong,
        Next,
        Back,
        Volume,
        getAudioDuration,
        setsongIndex,
        audioRefs,
        setaudioRefs,
        audiostate,
        setaudiostate,
        songinfo,
        Range,
        setRange,
        TotalDuration,
        setTotalDuration,
        currentTime,
        setcurrentTime,
        playlist
    }

    useEffect(() => {
        setcurrentSong(songData[songIndex].file)
    }, [songIndex])

    useEffect(() => {
        setsongData(songsData)
    }, [songsData])
    return (
        <Datacontext.Provider value={Data} >
            {props.children}
        </Datacontext.Provider>
    )
}
