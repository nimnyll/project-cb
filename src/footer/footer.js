import cd from "../img/CD_Projekt_logo 1.png"
import logo from '../img/yellow.png'


function Foot ({image}){return(
    <div>
        <div className="div-foot1">
            <img src={logo}></img>
            <img src={cd} className="cd-foot"></img>
            <a className="a-foot">Лицензия</a>
            <a className="a-foot">Политика конфиденциальности</a>
        </div>
        <div className="div-foot2">
            <p className="p-foot">CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</p>
        </div>
    </div>
)}

export default Foot;