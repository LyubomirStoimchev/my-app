(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(7),r=t.n(i),c=(t(13),t(1)),s=t(2),l=t(4),u=t(3),d=t(5),m=(t(14),a.a.Component,function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).state={showPopup:!1,message:""},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("a-scene",{arjs:"sourceType: webcam; debugUIEnabled: false"},a.a.createElement("a-anchor",{"hit-testing-enabled":"true"},a.a.createElement("a-entity",{position:"0 0 0",scale:"0.05 0.05 0.05",rotation:"200 0 0","obj-model":"obj: url(models/dog.obj); mtl: url(models/dog.mtl)"}),a.a.createElement("a-box",{position:"0 0 0.5",material:"opacity: 0.7; color: yellow;"})),a.a.createElement("a-assets",null,a.a.createElement("img",{crossorigin:"anonymous",id:"linkedinTexture",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"})),a.a.createElement("a-link",{class:"clickable",href:"https://www.linkedin.com/",title:"",image:"",position:"-1.4 0.0 0.333",rotation:"-67.42 0 0",scale:"0.6 0.6 0.6",geometry:"primitive:circle;segments:64",material:"shader:portal;side:double;visible:false",link:"title:."},a.a.createElement("a-box",{scale:"0.8 0.8 1.05",material:"src:#linkedinTexture",position:"-0.09854454977856898 -0.0036935886841299587 -0.2155814669584256",radius:"2","segments-height":"84",rotation:"-23.450000000000003 0 0",geometry:""},a.a.createElement("a-animation",{attribute:"rotation",begin:"mouseenter",loop:"true",end:"mouseleave",dur:"2000",fill:"backwards",to:"335 360 360",ease:"linear"}))),a.a.createElement("a-camera-static",{preset:"hiro"})))}}]),n}(a.a.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/my-app","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(n,e)}))}}()},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.817e096e.chunk.js.map