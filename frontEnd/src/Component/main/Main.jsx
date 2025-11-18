import React, { useContext, useEffect } from 'react'
import "./main.css"
import Right from './right/Right'
import Middle from "./middle/Middle"
import Left from './left/Left'
import { Datacontext } from '../../appContext/appContext'
export default function Main() {
    const { songData } = useContext(Datacontext)
    return (
        <div className="main">
            <Left />
            <Middle songData={songData} />
            <Right />
        </div>
    )
}
