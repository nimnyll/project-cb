import cd from "../img/CD_Projekt_logo 1.png"
import logo from '../img/yellow.png'
import { Link } from "react-router-dom";
import Politika from "../politika/politika";


function Foot ({image}){return(
    <div>
        <div className="div-foot1">
            <img src={logo}></img>
            <img src={cd} className="cd-foot"></img>
            <Link className="a-foot">Лицензия</Link>
            <Link to={'/polit'} element={<Politika></Politika>} className="a-foot">Политика конфиденциальности</Link>
        </div>
        <div className="div-foot2">
            <p className="p-foot">CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</p>
        </div>
    </div>
)}

export default Foot;