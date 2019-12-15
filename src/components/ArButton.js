import React from 'react';

class ArButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "-1.4 0.0 0.333",
            href: "https://www.linkedin.com/",
            assetId: "linkedinTexture",
            assetSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
        };
    }

    render() {
        return (
            <React.Fragment>
                <a-assets>
                    <img crossorigin="anonymous" id={this.state.assetId} src={this.state.assetSrc} />
                </a-assets>

                <a-link class="clickable" href={this.state.href} title="" image="" position={this.state.position} rotation="-67.42 0 0" scale="0.6 0.6 0.6" geometry="primitive:circle;segments:64" material="shader:portal;side:double;visible:false" link="title:.">
                    <a-box scale="0.8 0.8 1.05" material={"src:#" + this.state.assetId} position="-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256" radius="2" segments-height="84" rotation="-23.450000000000003 0 0" geometry="">
                        <a-animation attribute="rotation" begin="mouseenter" loop="true" end="mouseleave" dur="2000" fill="backwards" to="335 360 360" ease="linear" />
                    </a-box>
                </a-link>
            </React.Fragment>
        );
    }
}

export default ArButton;