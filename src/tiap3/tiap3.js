import ecran from '../img/c06611743 1.png'
import hp from '../img/hp-2 logo.png'
import logo from '../img/yellow.png'
import X from '../img/Group 235.png'
import palitra from '../img/color_lens.png'
import shaini from '../img/auto_awesome.png'
import copi from '../img/auto_awesome_motion.png'

function Tiap3 ({image}){
    return(
        <div className="tiap3 flexr">
            <div className="tiap31">
                <img src={ecran} className="ecran"></img>
                <div className="">
                    <img className="hp tiap31-imgs" src={hp}></img>
                    <img className="X tiap31-imgs" src={X}></img>
                    <img className="tiap31-imgs" src={logo}></img>
                </div>
            </div>
            <div className="tiap32">
                <h2 className="h2-tiap32">Полное погружение вместе с HP</h2>
                <p className="p-tiap32">Погрузись в современные экшен-игры с реалистичным
                 изображением
                 с помощью монитора с диагональю 23,8 дюйма, созданном для отображения
                  максимально насыщенных
                  цветов. Успевай реагировать
                 на любые события с временем отклика 1 мс и частотой в 144 Гц!</p>
                <article className="art-tiap32 flexr">
                    <img className="img-art-tiap32" src={palitra}></img>
                    <p className="p-art-tiap32">Яркие насыщенные цвета</p>
                </article>
                <article className="art-tiap32 flexr">
                    <img className="img-art-tiap32"  src={shaini}></img>
                    <p className="p-art-tiap32">Кристальная четкость изображения</p>
                </article>
                <article className="art-tiap32 flexr">
                    <img className="img-art-tiap32"  src={copi}></img>
                    <p className="p-art-tiap32">Быстрые движения и плавный геймплей</p>
                </article>
                <button className="buton-tiap32">Подробнее</button>
            </div>
        </div>
    )
}

export default Tiap3;