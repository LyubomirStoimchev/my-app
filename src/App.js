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
                {/* <a-scene arjs="sourceType: webcam; debugUIEnabled: false">
                    <a-anchor hit-testing-enabled="true">
                        <a-entity position="0 0 0" scale="0.05 0.05 0.05" rotation="200 0 0" obj-model="obj: url(models/dog.obj); mtl: url(models/dog.mtl)"></a-entity>
                        <a-box position="0 0 0.5" material="opacity: 0.7; color: yellow;"></a-box>
                    </a-anchor>

                    <a-assets>
                        <img crossOrigin="anonymous" id="linkedinTexture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" />
                    </a-assets>

                    <a-link class="clickable" href="https://www.linkedin.com/" title="" image="" position={"-1.4 0.0 0.333"} rotation="-67.42 0 0" scale="0.6 0.6 0.6" geometry="primitive:circle;segments:64" material="shader:portal;side:double;visible:false" link="title:.">
                        <a-box scale="0.8 0.8 1.05" material="src:#linkedinTexture" position="-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256" radius="2" segments-height="84" rotation="-23.450000000000003 0 0" geometry="">
                            <a-animation attribute="rotation" begin="mouseenter" loop="true" end="mouseleave" dur="2000" fill="backwards" to="335 360 360" ease="linear" />
                        </a-box>
                    </a-link>

                    <a-camera-static preset="hiro" />
                </a-scene> */}
                <a-scene embedded arjs='trackingMethod: best;'>

                    <a-assets>
                        <img id="github_icon" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-512.png" />
                        <img id="insta_icon" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_instagram-512.png" />
                        <img id="linkedin_icon" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_likedin-512.png" />
                        <img id="facebook_icon" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_facebook-512.png" />
                    </a-assets>

                    <a-plane rotation="-90 0 0" color="#3199f9" opacity="0.95" navigate-on-click="url: https://www.linkedin.com/in/utkarshgpta/">
                        <a-image src="https://s.gravatar.com/avatar/78156753f9d8feaebe2418780bdc262b?s=250"></a-image>
                        <a-text align="center" value="Hello, World!\nThis is a business card.\nMade by Utkarsh\nSociete Generale GSC\nFind below the links to various platforms.\P.S.Exhibits random behaviour when opening links." color="black" width="1" z-offset="0.1"></a-text>
                    </a-plane>

                    <a-plane position="0 0 0.8" color="transparent" opacity="0" width="2" height="0.3" rotation="-90 0 0">
                        <a-box src="#github_icon" position="-0.4 0 0" depth="0.15" height="0.15" width="0.15" navigate-on-click="url: http://github.com/UtkarshGpta">
                            <a-animation attribute="rotation" dur="7000" to="0 360 0" easing="linear" repeat="indefinite"></a-animation>
                        </a-box>
                        <a-box src="#insta_icon" position="0 0 0" depth="0.15" height="0.15" width="0.15" navigate-on-click="url: http://instagram.com/utkarshgpta">
                            <a-animation attribute="rotation" dur="7000" to="0 360 0" easing="linear" repeat="indefinite"></a-animation>
                        </a-box>
                        <a-box src="#linkedin_icon" position="0.4 0 0" depth="0.15" height="0.15" width="0.15" navigate-on-click="url: https://www.linkedin.com/in/utkarshgpta/">
                            <a-animation attribute="rotation" dur="7000" to="0 360 0" easing="linear" repeat="indefinite"></a-animation>
                        </a-box>
                        <a-box src="#facebook_icon" position="0.8 0 0" depth="0.15" height="0.15" width="0.15" navigate-on-click="url: http://facebook.com/utkarshgpta">
                            <a-animation attribute="rotation" dur="7000" to="0 360 0" easing="linear" repeat="indefinite"></a-animation>
                        </a-box>
                    </a-plane>

                    <a-plane position="1.2 0 0" width="1" height="1" rotation="-90 0 0" opcatity="1">
                        <a-image src="img/assets/nyancat.jpg"></a-image>
                    </a-plane>

                    <a-entity id="camera" cursor="rayOrigin: mouse"></a-entity>
                    <a-marker-camera preset='hiro'></a-marker-camera>
                </a-scene>
            </div>
        );
    }
}

export default App;