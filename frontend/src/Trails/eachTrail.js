import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './eachTrail.css';

class Trail extends Component {
    state = { data: [] }

    componentDidMount() {
        this.getHikingData();
    }

    getHikingData = () => {
     

        fetch(`http://localhost:8080/api/data/hikings/${this.props.match.params.id}`).then(res => res.json()).then(data => this.setState({ ...this.state, data }))
    }

    render() {

        let {data} = this.state;

        return (
            <>

            
                { data.length > 0 ? <div className="data-container">
                <button onClick={()=>this.props.history.goBack()} className="back-button">back</button>
                <div className="images">
               
            
                <img src={data[0].image1}/>
                
                <iframe src={data[0].location}
                         frameBorder="0" style={{ border: 0 }} aria-hidden="false" tabIndex="0"></iframe>
                
                </div>
                
                <div className="data-info">
              
                    <div><img className="icon" src={require(`../icons/${data[0].type}.png`)}/>{ReactHtmlParser(data[0].info)}</div>
                </div>
                    
                   
                </div> : <p>loading</p>}
            </>
        )
    }
}

export default Trail;