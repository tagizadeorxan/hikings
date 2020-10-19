import React, { Component } from 'react';
import './Home.css'
import Trails from '../Trails';


class Home extends Component {
    render() {
        return (
            <>
            <div className="home-container">
                <h1><span style={{fontSize:'70px'}}>WELC<img className="App-logo" src={require('../icons/earth.png')} />ME</span></h1>

                <div>
                    <span>Trails:</span>
                </div>

                

            </div>
           
            </>
        )
    }
}

export default Home;