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
                <a-scene arjs="sourceType: webcam; debugUIEnabled: false">
                    <a-anchor hit-testing-enabled="true">
                        <a-entity position="0 0 0" scale="0.05 0.05 0.05" rotation="200 0 0" obj-model="obj: url(models/dog.obj); mtl: url(models/dog.mtl)"></a-entity>
                        <a-box position="0 0 0.5" material="opacity: 0.7; color: yellow;"></a-box>
                    </a-anchor>

                    <a-assets>
                        <img crossOrigin="anonymous" id="linkedinTexture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" />
                    </a-assets>

                    <a-link class="clickable" href="https://www.linkedin.com/" title="" image="" position="-1.4 0.0 0.333" rotation="-67.42 0 0" scale="0.6 0.6 0.6" geometry="primitive:circle;segments:64" material="shader:portal;side:double;visible:false" link="title:.">
                        <a-box scale="0.8 0.8 1.05" material="src:#linkedinTexture" position="-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256" radius="2" segments-height="84" rotation="-23.450000000000003 0 0" geometry="">
                            <a-animation attribute="rotation" begin="mouseenter" loop="true" end="mouseleave" dur="2000" fill="backwards" to="335 360 360" ease="linear" />
                        </a-box>
                    </a-link>

                    <a-camera-static preset="hiro" />
                </a-scene>
            </div>
        );
    }
}

export default App;