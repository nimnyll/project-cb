import tiap11 from '../img/tiap1.1.png'
import tiap12 from '../img/tiap1.2.png'
import tiap13 from '../img/tiap1.3.png'


function Tiap1({image}){
    return(<div className="tiap1">
            <h2 className="h2-tiap1">Найт-Сити изменит тебя навсегда!</h2>
            <p className="p-tiap1"><span className="p-b">Cyberpunk 2077</span>
                 — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации
                 тела ценятся выше всего. Ты играешь
                 за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа,
                 исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</p>
            <div className="flexr">
                <div className="tiap1.1 flexc" >
                    <img className="img1-tiap1" src={tiap11}></img>
                    <img className="img2-tiap1" src={tiap12}></img>
                </div>
                <div className="flexr">
                    <img className="img3-tiap1" src={tiap13}></img>
                </div>
            </div>
    </div>)
}

export default Tiap1;