import React from 'react'
import BurnSmall from '../images/burnSmall.svg'

const LeftPanel = (props) => {
    return (
        <div
            className='purpleDiv'
            style={{ margin: 0, padding: 0 }}>
            <div
                className='row d-flex align-items-center text-center text-white'
                style={{ height: '100%' }}>
                <div
                    className='col-md-12'
                    style={{ fontSize: '64px' }}>
                    {props.sonuc === '' ? '--' : props.sonuc}
                    <img src={BurnSmall} alt='Burn Calori' />
                    <br />
                    <p
                        style={{ fontSize: '20px', marginTop: '-20px' }}>
                        {props.altText}
                    </p>
                </div>
                <div
                    className='col-md-12'
                    style={{ fontSize: '32px' }}>
                    <div
                        className='row'>
                        <div
                            className='col-md-6'>
                            {props.sonuc === '' ? '--' : props.sonuc + 600}
                            <img src={BurnSmall} height={32} alt='Burn Calori' />
                            <br />
                            <p
                                style={{ fontSize: '16px' }}>
                                En fazla almanız gereken kalori
                            </p>
                        </div>
                        <div
                            className='col-md-6'>
                            {props.sonuc === '' ? '--' : props.sonuc - 600}
                            <img src={BurnSmall} height={32} alt='Burn Calori' /><br />
                            <p
                                style={{ fontSize: '16px' }}>
                                Minimum almanız gereken kalori
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className='col-md-12'>
                    <img
                        src={BurnSmall}
                        height={150}
                        alt='Burn Calori' />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default LeftPanel
