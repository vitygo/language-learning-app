import "./Hero.css"
import {Link} from 'react-router-dom'



export default function Hero(){

    return (
        <div className="hero">
            <div className="hero__left-side"></div>
            <div className="hero__right-side">
                <h1>some text</h1>
                <div className="hero__buttons">
                    <button className='buttons__btn'><Link to='/language'>GET STARTED</Link></button>
                    <button className='buttons__btn'>SOME BUTTON</button>
                </div>
            </div>
            
        </div>
    )
}