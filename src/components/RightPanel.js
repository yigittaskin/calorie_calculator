import React, { useState } from 'react'
import BurnSmall from '../images/burnSmall.svg'
import Burn from '../images/burn.svg'

const RightPanel = (props) => {

    const [cins, setCins] = useState('')
    const [yas, setYas] = useState('')
    const [boy, setBoy] = useState('')
    const [kilo, setKilo] = useState('')
    const [hareket, setHareket] = useState('')
    const [hedef, setHedef] = useState('')

    const hesapla = (e) => {
        e.preventDefault()

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (cins === 'Erkek') {
            // [10*Kilogram(kg) + 6.25*Boy (cm) – 5*Yaş + 5] x Hareket
            if (hedef === 'Zayiflamak') {
                let hesap = Math.floor([(10 * kilo) + (6.25 * boy) - (5 * yas) + 5] * hareket) - 400
                props.setAltText('Zayıflamak için gereken kalori ihtiyacı')
                props.setSonuc(hesap)
            }
            else if (hedef === 'kiloal') {
                let hesap = Math.floor([(10 * kilo) + (6.25 * boy) - (5 * yas) + 5] * hareket) + 400
                props.setAltText('Kilo Almak için gereken kalori ihtiyacı')
                props.setSonuc(hesap)
            }
            else {
                let hesap = Math.floor([(10 * kilo) + (6.25 * boy) - (5 * yas) + 5] * hareket)
                props.setAltText('Günlük Almanız Gereken Kalori')
                props.setSonuc(hesap)
            }
        }
        else {
            // [10*Kilogram(kg) + 6.25*Boy (cm) – 5*Yaş – 161] x Hareket
            if (hedef === 'Zayiflamak') {
                let hesap = Math.floor([(10 * kilo) + (6.25 * boy) - (5 * yas) - 161] * hareket) - 400
                props.setAltText('Zayıflamak için gereken kalori ihtiyacı')
                props.setSonuc(hesap)
            }
            else if (hedef === 'kiloal') {
                let hesap = Math.floor([(10 * kilo) + (6.25 * boy) - (5 * yas) - 161] * hareket) + 400
                props.setAltText('Kilo Almak için gereken kalori ihtiyacı')
                props.setSonuc(hesap)
            }
            else {
                let hesap = Math.floor([(10 * kilo) + (6.25 * boy) - (5 * yas) - 161] * hareket)
                props.setAltText('Günlük Almanız Gereken Kalori')
                props.setSonuc(hesap)
            }
        }

        setCins('')
        setYas('')
        setBoy('')
        setKilo('')
        setHareket('')
        setHedef('')
    }

    return (
        <div
            className='container mt-4 ml-4 rightPanel'>
            <div
                className='row'>
                <div
                    className='col-md-12'>
                    <div
                        className='float-left mr-3'>
                        <img
                            src={Burn}
                            alt='Kalori Hesaplayıcı' />
                    </div>
                    <div>
                        <p
                            style={{ fontSize: '40px' }}>
                            Kalori hesaplayıcı
                        </p>
                        <p
                            style={{ fontSize: '20px', marginTop: '-30px' }}>
                            Günde kaç kalori almam lazım?
                        </p>
                    </div>
                </div>
                <div
                    className='col-md-12'
                    style={{ fontSize: '18px' }}>
                    <div
                        className='col-md-5 float-left formBg'>
                        <div
                            className='row align-items-center'>
                            <label
                                className='ml-3 mt-2'>
                                Cinsiyet:
                            </label>
                            <div
                                className="ml-3 form-check">
                                <input
                                    className="form-check-input"
                                    id='radioErkek'
                                    type="radio"
                                    value="Erkek"
                                    checked={cins === 'Erkek'}
                                    onChange={(e) => setCins(e.target.value)}
                                />
                                <label
                                    htmlFor='radioErkek'
                                    className="form-check-label">
                                    Erkek
                                </label>
                            </div>
                            <div
                                className="ml-3 form-check">
                                <input
                                    className="form-check-input"
                                    id='radioKadin'
                                    type="radio"
                                    value="Kadın"
                                    checked={cins === 'Kadın'}
                                    onChange={(e) => setCins(e.target.value)}
                                />
                                <label
                                    htmlFor='radioKadin'
                                    className="form-check-label">
                                    Kadın
                                </label>
                            </div>
                        </div>
                    </div>
                    <div
                        className='col-md-5 float-right mr-5 formBg'>
                        <div
                            className='row align-items-center'>
                            <label
                                className='ml-3 mt-2'>
                                Yaş:
                            </label>
                            <input
                                className="form-control h-50 ml-3 w-75"
                                type="number"
                                placeholder="Yaşınızı Girin"
                                min={0}
                                max={150}
                                pattern="\d{3}"
                                value={yas}
                                onChange={(e) => setYas(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div
                    className='col-md-12 mt-3'
                    style={{ fontSize: '18px' }}>
                    <div
                        className='col-md-5 float-left formBg'>
                        <div
                            className='row align-items-center'>
                            <label
                                className='ml-3 mt-2'>
                                Boy(CM):
                            </label>
                            <input
                                className="form-control h-50 ml-2"
                                style={{ width: '70%' }}
                                type="number"
                                placeholder="Boyunuzu Girin"
                                pattern="\d{3}"
                                min={50}
                                max={230}
                                value={boy}
                                onChange={(e) => setBoy(e.target.value)} />
                        </div>
                    </div>
                    <div
                        className='col-md-5 float-right mr-5 formBg'>
                        <div
                            className='row align-items-center'>
                            <label
                                className='ml-3 mt-2'>
                                Kilo(KG):
                            </label>
                            <input
                                className="form-control h-50 ml-2"
                                style={{ width: '70%' }}
                                type="number"
                                placeholder="Boyunuzu Girin"
                                pattern="\d{3}"
                                min={0}
                                max={500}
                                value={kilo}
                                onChange={(e) => setKilo(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div
                    className='col-md-12 mt-3'
                    style={{ fontSize: '18px' }}>
                    <div
                        className='col-md-11 float-left formBg'>
                        <div
                            className='row align-items-center'>
                            <label
                                className='ml-3 mt-2'>
                                Hareketlilik düzeyiniz:
                            </label>
                            <div
                                className="ml-3 form-check">
                                <input
                                    className="form-check-input"
                                    id='Hareketsiz'
                                    type="radio"
                                    value="1.2"
                                    checked={hareket === '1.2'}
                                    onChange={(e) => setHareket(e.target.value)}
                                />
                                <label
                                    htmlFor='Hareketsiz'
                                    className="form-check-label">
                                    Hareketsiz
                                </label>
                            </div>
                            <div
                                className="ml-3 form-check">
                                <input
                                    className="form-check-input"
                                    id='azhareketli'
                                    type="radio"
                                    value="1.3"
                                    checked={hareket === '1.3'}
                                    onChange={(e) => setHareket(e.target.value)}
                                />
                                <label
                                    htmlFor='azhareketli'
                                    className="form-check-label">
                                    Az hareketli
                                </label>
                            </div>
                            <div
                                className="ml-3 form-check">
                                <input
                                    className="form-check-input"
                                    id='orta'
                                    type="radio"
                                    value="1.4"
                                    checked={hareket === '1.4'}
                                    onChange={(e) => setHareket(e.target.value)}
                                />
                                <label
                                    htmlFor='orta'
                                    className="form-check-label">
                                    orta derece (hafta 2-5 gün egzersiz)
                                </label>
                            </div>
                            <div
                                className="ml-3 form-check">
                                <input
                                    className="form-check-input"
                                    id='hareketli'
                                    type="radio"
                                    value="1.55"
                                    checked={hareket === '1.55'}
                                    onChange={(e) => setHareket(e.target.value)}
                                />
                                <label
                                    htmlFor='hareketli'
                                    className="form-check-label">
                                    hareketli (haftada 5-7 gün egzersiz)
                                </label>
                            </div>
                            <div
                                className="ml-3 form-check">
                                <input
                                    className="form-check-input"
                                    id='cok'
                                    type="radio"
                                    value="1.8"
                                    checked={hareket === '1.8'}
                                    onChange={(e) => setHareket(e.target.value)}
                                />
                                <label
                                    htmlFor='cok'
                                    className="form-check-label">
                                    çok hareketli (sporcu vb.)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='col-md-12 mt-3'
                    style={{ fontSize: '18px' }}>
                    <div
                        className='col-md-11 float-left formBg'>
                        <div
                            className='row align-items-center'>
                            <label
                                className='ml-3 mt-2'>
                                Hedefiniz:
                            </label>
                            <div
                                className="ml-3 form-check">
                                <input
                                    className="form-check-input"
                                    id='Zayiflamak'
                                    type="radio"
                                    value="Zayiflamak"
                                    checked={hedef === 'Zayiflamak'}
                                    onChange={(e) => setHedef(e.target.value)}
                                />
                                <label
                                    htmlFor='Zayiflamak'
                                    className="form-check-label">
                                    Zayıflamak
                                </label>
                            </div>
                            <div
                                className="ml-3 form-check">
                                <input
                                    className="form-check-input"
                                    id='koruma'
                                    type="radio"
                                    value="koruma"
                                    checked={hedef === 'koruma'}
                                    onChange={(e) => setHedef(e.target.value)}
                                />
                                <label
                                    htmlFor='koruma'
                                    className="form-check-label">
                                    Kilo Koruması
                                </label>
                            </div>
                            <div
                                className="ml-3 form-check">
                                <input
                                    className="form-check-input"
                                    id='kiloal'
                                    type="radio"
                                    value="kiloal"
                                    checked={hedef === 'kiloal'}
                                    onChange={(e) => setHedef(e.target.value)}
                                />
                                <label
                                    htmlFor='kiloal'
                                    className="form-check-label">
                                    Kilo Almak
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='col-md-11 mt-5 text-center'>
                    <button
                        type='submit'
                        onClick={hesapla}
                        className='btn w-75 text-white'
                        style={{ fontSize: '30px' }}>
                        HESAPLA
                        <img
                            src={BurnSmall}
                            height={32}
                            alt='Burn Calori' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightPanel