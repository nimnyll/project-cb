import art1 from '../img/disk.png'
import art2 from '../img/wysiwyg.png'
import art3 from '../img/collections.png'
import img1 from '../img/Frame 13.png'
import img2 from '../img/xbox-one-3 logo.png'
import img3 from '../img/stadia logo.png'
import img4 from '../img/Group.png'

function Tiap4 ({image}){return(
    <div className="flexr tiap4">
        <div className="tiap41"></div>
        <div  className="tiap42">
            <h2 className="h2-tiap42">Купить игру Cyberpunk 2077</h2>
            <p className="p-b p-tiap42">В комплект входит:</p>
            <article className="art-tiap42 flexr">
                <img className="img-art-tiap42" src={art1}></img>
                <p className="p-art-tiap42">Футляр с игровыми дисками</p>
            </article>
            <article className="art-tiap42 flexr">
                <img className="img-art-tiap42" src={art2}></img>
                <p className="p-art-tiap42">Футляр с кодом для загрузки игры и дисками (pc)</p>
            </article>
            <article className="art-tiap42 flexr">
                <img className="img-art-tiap42 flexr" src={art3}></img>
                <p className="p-art-tiap42">Справочник с информацией об игровом мире</p>
            </article>
            <p className="p-b p-tiap42 ">Выберите платформу:</p>
            <div className="flexr tiap43">
                <div className="flexc">
                    <img src={img1} className="img1-tiap42"></img>
                    <img src={img3} className="img3-tiap42"></img>
                </div>
                <div className="flexc">
                    <img src={img2} className="img2-tiap42"></img>
                    <img src={img4} className="img4-tiap42"></img>
                </div>
            </div>
        </div>
    </div>
)}

export default Tiap4;