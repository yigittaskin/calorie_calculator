import React, { useState } from 'react'
import '../styles/board.scss'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const Board = () => {

    const [sonuc, setSonuc] = useState('')
    const [altText, setAltText] = useState('Günlük Almanız Gereken Kalori')


    return (
        <div className='container board'>
            <div className='row'>
                <div
                    className='col-md-4 caloriImg'
                    style={{ margin: 0, padding: 0 }}>
                    <LeftPanel
                        sonuc={sonuc}
                        altText={altText} />
                </div>
                <div
                    className='col-md-8'>
                    <RightPanel
                        sonuc={sonuc}
                        setSonuc={setSonuc}
                        altText={altText}
                        setAltText={setAltText} />
                </div>
            </div>
        </div>
    )
}

export default Board
