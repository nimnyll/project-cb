import './App.css';
import Heder from './heder/heder';
import Tiap1 from './tiap1/tiap1';
import G from './g/g';
import Tiap2 from './tiap2/tiap2';
import GY from './gy/gy';
import Tiap3 from './tiap3/tiap3';
import Tiap4 from './tiap4/tiap4';
import Foot from './footer/footer';
import Politika from './politika/politika';
import cd from "./img/CD_Projekt_logo 1.png"
import logo from './img/yellow.png'
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';

function App(){
    return(
        <Router>
            <Routes>

                <Route path={'/polit'} element={<Politika></Politika>}/>
            </Routes>
            <div>
                <Heder></Heder>
                <Tiap1></Tiap1>
                <G></G>
                <Tiap2></Tiap2>
                <GY></GY>
                <Tiap3></Tiap3>
                <Tiap4></Tiap4>
                <Foot></Foot>
            </div>
        </Router>
)

}
export default App;