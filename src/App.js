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
                    <canvas class="a-canvas" data-aframe-canvas="true" width="300" height="150"/>

                    <a-anchor hit-testing-enabled="true">
                        <a-entity position='0 0 0' scale='0.05 0.05 0.05' rotation='200 0 0' obj-model='obj: url(models/dog.obj); mtl: url(models/dog.mtl)'></a-entity>
                        <a-box position='0 0 0.5' material='opacity: 0.7; color: yellow;'></a-box>
                    </a-anchor>
                    <a-camera-static preset="hiro" />

                    {/* <ArButton /> */}

                </a-scene>
            </div>
        );
    }
}

export default App;