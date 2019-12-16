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
                    <canvas className="a-canvas" data-aframe-canvas="true" width="300" height="150">
                    </canvas>
                    <a-assets>
                        <img crossOrigin="anonymous" id="skypeTexture" src="https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FPostSkype.png?1528821334003" />
                        <img crossOrigin="anonymous" id="phoneTexture" src="https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FPostPhone.png?1528821333458" />
                        {/* <img crossorigin="anonymous" id="messageTexture" src="https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FPostMessages.png?1528821333263">
                                    <img crossorigin="anonymous" id="emailTexture" src="https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FPostEmail.png?1528821333360">
                                        <img crossorigin="anonymous" id="linkedinTexture" src="https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FPostLinkedin.png?1528821333139">
                                            <img crossorigin="anonymous" id="githubTexture" src="https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FPostGithub.png?1528821333564">
                                                <img crossorigin="anonymous" id="resumeTexture" src="https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FPostResume.png?1528821333907">
                                                    <img crossorigin="anonymous" id="websiteTexture" src="https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FPostComputer.png?1528821332969">
                                                        <img crossorigin="anonymous" id="headshotTexture" src="https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FPostPostHeadshot.png?1528821994851">   */}
                    </a-assets>

                    <a-marker data-camera="active:false" preset="hiro" visible="false" material="" arjs-anchor="" arjs-hit-testing="">

                        <a-entity id="stars" data-particle-system="preset: default; color: #515; particleCount: 30; maxAge: 2; randomize: false; blending: 1; opacity: .5; velocityValue:'50 10 0'" data-position="0 0 0" data-rotation="-90 0 0" direction="-1"></a-entity>

                        {/* <a-entity position="-2 .5 2" rotation="-65.98 -4.56 5.28" scale="0.3 0.39 0.1" text-geometry="bevelEnabled:true;bevelSize:0.05;bevelThickness:0.05;font:https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2FdawningOfANewDayRegular.typeface.json?1490305922844;height:0;size:1;value:Think Outside the Box" material="color:lavenderblush;metalness:1;roughness:0;sphericalEnvMap:https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FneonGreeni.png?1528781747193"></a-entity>
                        <a-entity position="-2 .5 -1.4" rotation="-45.98 -4.56 5.28" scale="0.1 .25 .2" text-geometry="bevelEnabled:true;bevelSize:0.1;bevelThickness:0.1;curveSegments:1;font:https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2Fexo2Black.typeface.json?1490305922150;height:0.5;size:2;value:J O N A T H A N    S C H W A R T Z" material="color:pink;metalness:0.9;roughness:0.05;sphericalEnvMap:https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FTextureMap.png?1528781398531"></a-entity> */}

                        {/* <a-box scale="1 1 1" material="src: #headshotTexture" position="0 0 0" radius="2"
                            segments-height="84">
                        </a-box> */}

                        {/* <a-link class="clickable" href="https://www.linkedin.com/in/jonathanpschwartz" title="" image="" position="-1.4 0.0 0.333" rotation="-67.42 0 0" scale="0.6 0.6 0.6" geometry="primitive:circle;segments:64" material="shader:portal;side:double;visible:false" link="title:."><a-box scale="0.8 0.8 1.05" material="src:#linkedinTexture" position="-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256" radius="2" segments-height="84" rotation="-23.450000000000003 0 0" geometry="">
                            <a-animation attribute="rotation" begin="mouseenter" loop="true" end="mouseleave" dur="2000" fill="backwards" to="335 360 360" ease="linear"></a-animation>
                        </a-box></a-link> */}

                        <a-link class="clickable" href="tel:123123123" data-title="" data-image="" data-position="-2 0 -.333" data-rotation="-67.42 0 0" data-scale="0.6 0.6 0.6" data-geometry="primitive:circle;segments:64" data-material="shader:portal;side:double;visible:false" data-link="title:.">
                            <a-box data-scale="0.8 0.8 1.05" data-material="src:#phoneTexture" data-position="-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256" data-radius="2" data-segments-height="84" data-rotation="-23.450000000000003 0 0" data-geometry="">
                                <a-animation data-attribute="rotation" data-begin="mouseenter" data-loop="true" data-end="mouseleave" data-dur="2000" data-fill="backwards" data-to="335 360 360" data-ease="linear"></a-animation>
                            </a-box>
                        </a-link>

                        {/* <a-link class="clickable" href="mailto:jonathanpatrickschwartz@gmail.com" title="" image="" position="-.7 0 1" rotation="-67.42 0 0" scale="0.6 0.6 0.6" geometry="primitive:circle;segments:64" material="shader:portal;side:double;visible:false" link="title:."><a-box scale="0.8 0.8 1.05" material="src:#emailTexture" position="-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256" radius="2" segments-height="84" rotation="-23.450000000000003 0 0" geometry="">
                            <a-animation attribute="rotation" begin="mouseenter" loop="true" end="mouseleave" dur="2000" fill="backwards" to="335 360 360" ease="linear"></a-animation>
                        </a-box></a-link>

                        <a-link class="clickable" href="https://github.com/filmboy3/" title="" image="" position="-.7 0 -1" rotation="-67.42 0 0" scale="0.6 0.6 0.6" geometry="primitive:circle;segments:64" material="shader:portal;side:double;visible:false" link="title:."><a-box scale="0.8 0.8 1.05" material="src:#githubTexture" position="-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256" radius="2" segments-height="84" rotation="-23.450000000000003 0 0" geometry="">
                            <a-animation attribute="rotation" begin="mouseenter" loop="true" end="mouseleave" dur="2000" fill="backwards" to="335 360 360" ease="linear"></a-animation>
                        </a-box></a-link>

                        <a-link class="clickable" href="sms:9083766480" title="" image="" position=".8 0.0 -1" rotation="-67.42 0 0" scale="0.6 0.6 0.6" geometry="primitive:circle;segments:64" material="shader:portal;side:double;visible:false" link="title:."><a-box scale="0.8 0.8 1.05" material="src:#messageTexture" position="-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256" radius="2" segments-height="84" rotation="-23.450000000000003 0 0" geometry="">
                            <a-animation attribute="rotation" begin="mouseenter" loop="true" end="mouseleave" dur="2000" fill="backwards" to="0 360 0" ease="linear"></a-animation>
                        </a-box></a-link>

                        <a-link class="clickable" href="https://docs.google.com/document/d/1BdX3pEODMX-oyFSSQNg60VIDMhcEou6NY1sbp1pkp-Q/edit?usp=sharing" position="1.6 0.0 .333" title="" image="" rotation="-67.42 0 0" scale="0.6 0.6 0.6" geometry="primitive:circle;segments:64" material="shader:portal;side:double;visible:false" link="title:."><a-box scale="0.8 0.8 1.05" material="src:#resumeTexture" position="-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256" radius="2" segments-height="84" rotation="-23.450000000000003 0 0" geometry="">
                            <a-animation attribute="rotation" begin="mouseenter" loop="true" end="mouseleave" dur="2000" fill="backwards" to="0 360 0" ease="linear"></a-animation>
                        </a-box></a-link> */}

                        <a-link class="clickable" href="skype:me?chat" data-title="" data-image="" data-position="2.2 0.0 -.33" data-rotation="-67.42 0 0" data-scale="0.6 0.6 0.6" data-geometry="primitive:circle;segments:64" data-material="shader:portal;side:double;visible:false" data-link="title:.">
                            <a-box data-scale="0.8 0.8 1.05" data-material="src:#skypeTexture" data-position="-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256" data-radius="2" data-segments-height="84" data-rotation="-23.450000000000003 0 0" data-geometry="">
                                <a-animation data-attribute="rotation" data-begin="mouseenter" data-loop="true" data-end="mouseleave" data-dur="2000" data-fill="backwards" data-to="0 360 0" data-ease="linear"></a-animation>
                            </a-box>
                        </a-link>

                        {/* <a-link class="clickable" href="https://jonathanschwartz.surge.sh/" title="" image="" position=".8 0.0 1" rotation="-67.42 0 0" scale="0.6 0.6 0.6" geometry="primitive:circle;segments:64" material="shader:portal;side:double;visible:false" link="title:."><a-box scale="0.8 0.8 1.05" material="src:#websiteTexture" position="-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256" radius="2" segments-height="84" rotation="-23.450000000000003 0 0" geometry="">
                            <a-animation attribute="rotation" begin="mouseenter" loop="true" end="mouseleave" dur="2000" fill="backwards" to="0 360 0" ease="linear"></a-animation>
                        </a-box></a-link> */}
                    </a-marker>

                    <a-entity camera="" position="" rotation="" scale="" visible=""></a-entity>
                    <a-entity data-cursor="fuse: true; fuseTimeout: 2000" data-raycaster="objects: .clickable" data-position="0 0 -1" data-scale="0.01 0.01 0.01" data-geometry="primitive: ring" data-material="color: white; shader: flat" data-rotation="" data-visible="">
                        <a-animation data-begin="fusing" data-easing="ease-in" data-attribute="scale" data-fill="backwards" data-from="0.01 0.01 0.01" data-to="0.02 0.02 0.02" data-dur="3000"></a-animation>
                        <a-animation data-begin="fusing" data-easing="ease-in" data-attribute="material.color" data-from="white" data-to="orange" data-dur="3000"></a-animation>
                    </a-entity>

                </a-scene>
            </div>
        );
    }
}

export default App;