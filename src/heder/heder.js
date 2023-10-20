import logo from '../img/yellow.png'
import img_h1 from '../img/youtube logo.png'
import img_h2 from '../img/vk logo.png'
import img_h3 from '../img/facebook-rect logo.png'
import img_h4 from '../img/twitter-square logo.png'
import img_h5 from '../img/twitch logo.png'
import img_h6 from '../img/instagram-square logo.png'

function Heder({image}){
    return(
        <div className="heder">
            <div className="flexr">
                <img className="img-heder0" src={logo}></img>
                <img className="img-heder2" src={img_h1}></img>
                <img className="img-heder1" src={img_h2}></img>
                <img className="img-heder1" src={img_h3}></img>
                <img className="img-heder1" src={img_h4}></img>
                <img className="img-heder1" src={img_h5}></img>
                <img className="img-heder1" src={img_h6}></img>
            </div>
            <div className="block">
                <h2 className="h2-block">Доступно на всех платформах</h2>
                <button className="buton-block">Узнать больше</button>
            </div>
        </div>
        )}


export default Heder;