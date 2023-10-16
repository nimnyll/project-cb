import img1 from '../img/Layer 1.png';
import img2 from '../img/Playstation-5-games-console-transparent-background-png-image.png';
import img3 from '../img/Layer 6.png';
import img4 from '../img/Layer 5.png';

function Tiap2 ({image}){
    return(
        <div className="tiap2 flexr">
            <div className="flexr">
                <div className="divt2-1 flexc">
                    <input type="text" placeholder="Как тебя зовут?" className="inp-tiap2"/>
                    <input className="inp-tiap2" type="emeil" placeholder="Твой е-mail"/>
                    <input type="file" className="inp-f"/>
                </div>
                <img className="img-y" src={img1}></img>
                <img className="img-y1" src={img2}></img>
                <img className="img-y2" src={img3}></img>
                <img className="img-y3" src={img4}></img>
            </div>
        </div>
)}



export default Tiap2;