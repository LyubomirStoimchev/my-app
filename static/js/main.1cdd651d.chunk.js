(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(7),r=n.n(i),c=(n(13),n(1)),s=n(2),l=n(4),u=n(3),p=n(5),h=(n(14),n(15),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"popup"},a.a.createElement("div",{className:"popup_inner"},a.a.createElement("h1",null,this.props.text),a.a.createElement("button",{onClick:this.props.closePopup},"close me")))}}]),t}(a.a.Component)),d=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={showPopup:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("a-scene",{arjs:"sourceType: webcam; debugUIEnabled: false"},a.a.createElement("a-anchor",{"hit-testing-enabled":"true"},a.a.createElement("a-entity",{position:"0 0 0",scale:"0.05 0.05 0.05",rotation:"200 0 0","obj-model":"obj: url(models/dog.obj); mtl: url(models/dog.mtl)"}),a.a.createElement("a-box",{position:"0 0 0.5",material:"opacity: 0.7; color: yellow;"})),a.a.createElement("a-camera-static",{preset:"hiro"})),a.a.createElement("h1",null," Simple Popup Example In React Application "),a.a.createElement("button",{onClick:this.togglePopup.bind(this),value:this.context.text="sdasd"}," Click To Launch Popup"),this.state.showPopup?a.a.createElement(h,{text:this.context.text,closePopup:this.togglePopup.bind(this)}):null)}}]),t}(a.a.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement(d,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/my-app","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.1cdd651d.chunk.js.map