import React from 'react';
import './App.css';
import ArButton from './components/ArButton';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            message: ''
        };
    }

    // togglePopup() {
    //     this.setState({
    //         showPopup: !this.state.showPopup,
    //         message: ''
    //     });

    //     // console.log(this.state);
    // }

    render() {
        return (
            <div className="App">
                <a-scene embedded arjs="sourceType: webcam;" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" aframe-inspector-removed-embedded="undefined">
                    
                        <a-marker preset="hiro">
                            <a-box position='0 0.5 0' material='color: yellow;'></a-box>
                        </a-marker>
                        <a-entity camera></a-entity>
                    
                </a-scene>
            </div>
        );
    }
}

export default App;