(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),s=(n(13),n(1)),c=n(2),l=n(4),d=n(3),u=n(5),m=(n(14),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={position:"-1.4 0.0 0.333",href:"https://www.linkedin.com/in/jo",assetId:"linkedinTexture",assetSrc:"https://cdn.glitch.com/6f8b5a13-fd4d-445d-b9eb-57c735d720ea%2FPostLinkedin.png?1528821333139"},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("a-assets",null,o.a.createElement("img",{crossorigin:"anonymous",id:this.state.assetId,src:this.state.assetSrc})),o.a.createElement("a-link",{class:"clickable",href:this.state.href,title:"",image:"",position:this.state.position,rotation:"-67.42 0 0",scale:"0.6 0.6 0.6",geometry:"primitive:circle;segments:64",material:"shader:portal;side:double;visible:false",link:"title:."},o.a.createElement("a-box",{scale:"0.8 0.8 1.05",material:"src:#"+this.state.assetId,position:"-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256",radius:"2","segments-height":"84",rotation:"-23.450000000000003 0 0",geometry:""},o.a.createElement("a-animation",{attribute:"rotation",begin:"mouseenter",loop:"true",end:"mouseleave",dur:"2000",fill:"backwards",to:"335 360 360",ease:"linear"}))))}}]),t}(o.a.Component)),h=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("a-scene",{embedded:!0,arjs:"sourceType: webcam;",inspector:"","keyboard-shortcuts":"",screenshot:"","vr-mode-ui":"","aframe-inspector-removed-embedded":"undefined"},o.a.createElement("canvas",{class:"a-canvas","data-aframe-canvas":"true",width:"300",height:"150"}),o.a.createElement("a-anchor",{"hit-testing-enabled":"true"},o.a.createElement("a-entity",{position:"0 0 0",scale:"0.05 0.05 0.05",rotation:"200 0 0","obj-model":"obj: url(models/dog.obj); mtl: url(models/dog.mtl)"}),o.a.createElement("a-box",{position:"0 0 0.5",material:"opacity: 0.7; color: yellow;"})),o.a.createElement("a-camera-static",{preset:"hiro"}),o.a.createElement(m,null)))}}]),t}(o.a.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/my-app","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.24d3c142.chunk.js.map