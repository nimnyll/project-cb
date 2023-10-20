import chekt from '../img/Check.png'
import ps from '../img/Layer 1.png'
import gy from '../img/Layer 5.png'
import ps1 from '../img/ps2.png'
import gb from '../img/Layer 6.png'

function Tiap2 ({image}){
    return(
        <div className="tiap2">
            <div className="flexr">
                <div className="ax"><p className="ax-p">акция</p></div>
                <h2 className="h2-tiap2">Играй и выигрывай!</h2>
            </div>
            <p className="p-tiap2">Играй в 
                <span className="p-b"> Cyberpunk 2077</span>    
                 и получи возможность выиграть консоль 
                 <span className="p-b"> Xbox Series X</span> или 
                 <span className="p-b"> Sony PlayStation 5!</span> Заполни форму ниже и приложи
                  скриншот о покупке игры. Итоги розыгрыша
                  будут подведены 1 февраля. Удачи! ;)</p>
            <div className="flexr tiap21">
                <div className="tiap22">
                    <input className="input-tiap2" placeholder="Как тебя зовут?"></input>
                    <input className="input-tiap21" placeholder="Твой е-mail"></input>
                    <div className="div-b">
                        <input className="a-tiap2" placeholder="Прикрепить скриншот"></input>
                        <p className="p-tiap21">.png / .jpg / .pdf</p>
                    </div>
                    <button className="buton-tiap2">Отправить</button>
                    <article className="art-tiap2 flexr">
                        <img className="chekt" src={chekt}></img>
                        <p className="p-chekt">Согласен на обработку персональных данных</p>
                    </article>
                </div>
                <img className="ps" src={ps}></img>
                <img className="gy" src={gy}></img>
                <img className="ps1" src={ps1}></img>
                <img className="gb" src={gb}></img>
            </div>
        </div>
    )
}

export default Tiap2;