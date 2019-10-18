(function(t){function e(e){for(var n,i,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)i=r[u],s[i]&&f.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},o=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4dc528be"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(t),o=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,a[1](i)}s[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0418":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("h1",{staticClass:"header__title"},[t._v("B F")]),a("nav",[a("ul",{staticClass:"header__navigation"},[a("li",{staticClass:"header__navigation-item"},[a("NowPlaying")],1),a("li",{staticClass:"header__navigation-item"},[a("router-link",{staticClass:"header__navigation-link",attrs:{to:"/"}},[a("i",{staticClass:"fas fa-paper-plane"})])],1)])])])},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"now-playing-widget"},[a("div",{staticClass:"now-playing-widget__container"},[a("img",{staticClass:"now-playing-widget__artwork",attrs:{src:t.track.image[2]["#text"],alt:""}}),t._v("\n        Currently Listening: "),a("a",{staticClass:"now-playing-widget__link",attrs:{href:t.track.url,target:"_blank"}},[t._v(" "+t._s(t.track.artist["#text"])+" - "+t._s(t.track.name))]),a("div",{class:t.glow,on:{click:function(e){t.$parent.$parent.$emit("toggle-albums")&&t.toggleAlbumsOpen()}}},[t._m(0)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"now-playing-widget__link now-playing-widget__link--black",attrs:{target:"_blank"}},[a("i",{staticClass:"fab fa-lastfm"})])}],r=a("bc3a"),l=a.n(r),c={name:"NowPlaying",data:function(){return{playingNow:!1,track:[],albumsOpen:!1}},computed:{glow:function(){return this.albumsOpen?"now-playing-widget__icon now-playing-widget__icon--active":"now-playing-widget__icon now-playing-widget__icon--glow"}},mounted:function(){this.getCurrentlyPlaying()},methods:{toggleAlbumsOpen:function(){this.albumsOpen=!this.albumsOpen},getCurrentlyPlaying:function(){var t=this;l.a.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bfrable&api_key=c152ef462199b4430eec28a1727dc218&format=json&nowplaying=true",{headers:{"Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET","Access-Control-Allow-Headers":"application/json"}}).then(function(e){t.track=e.data.recenttracks.track[0],t.playingNow=e.data.recenttracks.track[0]["@attr"].nowplaying})}}},u=c,d=(a("497f"),a("2877")),f=Object(d["a"])(u,o,i,!1,null,"55565b13",null),m=f.exports,p={name:"Header",components:{NowPlaying:m}},h=p,g=(a("a3bb"),Object(d["a"])(h,n,s,!1,null,"66ec430a",null));e["a"]=g.exports},"0e2e":function(t,e,a){"use strict";var n=a("6d53"),s=a.n(n);s.a},3103:function(t,e,a){"use strict";var n=a("7e1b"),s=a.n(n);s.a},"3b72":function(t,e,a){},"491a":function(t,e,a){"use strict";var n=a("927f"),s=a.n(n);s.a},"497f":function(t,e,a){"use strict";var n=a("a6be"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.1/css/all.css",integrity:"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",crossorigin:"anonymous"}}),a("transition",{attrs:{name:"bounce"}},[t.showAlbums?a("TopAlbums",{attrs:{getAlbums:t.albums}}):t._e()],1),a("div",{staticClass:"container"},[a("Header"),a("router-view"),a("svg",{staticClass:"scene",attrs:{width:"100%",height:"100vh",preserveAspectRatio:"none",viewBox:"0 0 1440 800","xmlns:pathdata":""}},[a("path",{attrs:{d:"M -84.52,-81.13 C -94.62,-73.4 -88.88,-59.55 -90.33,-48.91 -89.29,27.31 -89.61,103.5 -88.33,179.8 -85.99,416.1 -81.32,888.9 -81.32,888.9 -81.32,888.9 974.5,888.7 1587,891.9 1518,719.9 1487,644 1429,533 1388,437.7 1447,259.7 1400,187 1362,132 1270,90.53 1207,39.93 1161,2.932 1071,-74.45 1071,-74.45 1071,-74.45 914.5,-77.77 848.2,-80.17 537.6,-80.84 227,-81.38 -83.6,-81.6 -83.91,-81.44 -84.21,-81.29 -84.52,-81.13 Z","pathdata:id":"M -84.52,-81.13 C -94.62,-73.4 -88.88,-59.55 -90.33,-48.91 -89.29,27.31 -89.61,103.5 -88.33,179.8 -85.99,416.1 -81.32,888.9 -81.32,888.9 -81.32,888.9 974.5,888.7 1587,891.9 1576,704.7 1517,625.7 1459,514.7 1418,419.4 1430,288.5 1382,187 1349,116.3 1296,54.47 1240,0.3429 1205,-33.51 1120,-83.59 1120,-83.59 1120,-83.59 914.5,-77.77 848.2,-80.17 537.6,-80.84 227,-81.38 -83.6,-81.6 -83.91,-81.44 -84.21,-81.29 -84.52,-81.13 Z"}}),a("path",{attrs:{d:"M 665.2,-83.08 C 413.7,-81.89 162.2,-82.43 -89.29,-81.61 -90.35,164.3 -85.06,410.2 -84.09,656.1 -83.37,733.7 -82.64,811.3 -81.92,888.9 442.4,889.8 966.7,890.7 1491,891.6 1253,747.5 1417,429.4 1286,245.4 1227,163.2 1107,142.1 1043,64.54 1009,24.41 973,-76.01 973,-76.01 973,-76.01 706.6,-83.67 665.2,-83.08 Z","pathdata:id":"M 665.2,-83.08 C 413.7,-81.89 162.2,-82.43 -89.29,-81.61 -90.35,164.3 -85.06,410.2 -84.09,656.1 -83.37,733.7 -82.64,811.3 -81.92,888.9 442.4,889.8 966.7,890.7 1491,891.6 1253,747.5 1349,460.4 1243,260.6 1199,176.6 1145,96.92 1083,24.95 1050,-12.63 973,-76.01 973,-76.01 973,-76.01 706.6,-83.67 665.2,-83.08 Z"}}),a("path",{attrs:{d:"M -85.01,-74.02 C -92.39,-66.64 -85.37,-55.79 -87.81,-46.91 -86.65,265.1 -84.66,577.2 -83.18,889.2 317.2,888.3 717.5,885.8 1118,890.4 1152,890.6 1187,890.9 1221,890 1219,768.3 1224,643.6 1187,526 1153,417 1091,319.3 1029,224.1 998.8,178.5 968.8,132.6 936.6,88.23 891.7,27.39 772.2,-78.96 772.2,-78.96 772.2,-78.96 222.1,-81.07 -85.01,-74.02 Z","pathdata:id":"M -85.01,-74.02 C -92.39,-66.64 -85.37,-55.79 -87.81,-46.91 -86.65,265.1 -84.66,577.2 -83.18,889.2 317.2,888.3 717.5,885.8 1118,890.4 1152,890.6 1187,890.9 1221,890 1219,768.3 1175,659.3 1150,544.3 1128,438.4 1143,312.6 1081,227.1 1004,121.1 925.8,114.8 851.3,54.73 762,-17.34 772.2,-78.96 772.2,-78.96 772.2,-78.96 222.1,-81.07 -85.01,-74.02 Z"}}),a("path",{attrs:{d:"M -92.42,-79.11 C -89.97,243.8 -87.52,566.7 -85.07,889.6 201.8,889.9 488.7,889.9 775.5,895.6 880.4,896.9 985.2,894 1090,892.5 1064,773.3 1037,651.6 976.1,544.8 946.7,495.8 914.6,448.3 882,401.3 820.9,314.4 742.3,252 666.4,177.4 583.2,98.01 496.5,12.18 386.7,-23.38 328.4,-45.64 232.6,-81.38 232.6,-81.38 232.6,-81.38 9.82,-84.94 -92.42,-79.11 Z","pathdata:id":"M -92.42,-79.11 C -89.97,243.8 -87.52,566.7 -85.07,889.6 201.8,889.9 488.7,889.9 775.5,895.6 880.4,896.9 1063,889.5 1063,889.5 1063,889.5 1081,768.2 997.4,608.7 958.5,534.8 969.9,436.8 918.5,370.8 848.4,280.8 717,260.3 629.9,186.5 552.6,121.2 491.5,38.73 426.3,-38.61 412.9,-54.44 387.9,-87.47 387.9,-87.47 387.9,-87.47 9.82,-84.94 -92.42,-79.11 Z"}}),a("path",{attrs:{d:"M -88.6,95.54 C -90.38,166.1 -88.23,236.7 -88.68,307.4 L -86.19,890 C 229.7,890.2 939.8,892.4 939.8,892.4 855.2,767 831,639.4 721.4,519.4 634.7,424.5 526.4,360.9 428.8,281.8 332.7,204 251.6,102.3 140.1,48.9 70.75,15.73 -24.82,24.2 -85.28,0.03 Z","pathdata:id":"M -88.6,95.54 C -90.38,166.1 -88.23,236.7 -88.68,307.4 L -86.19,890 C 229.7,890.2 939.8,892.4 939.8,892.4 906.9,734.7 779.3,676 721.4,519.4 676.8,398.8 566.5,307.1 458.9,236.6 355.2,168.7 220.3,165.7 107.8,113.5 40.05,82.12 -24.82,24.2 -85.28,0.03 Z"}}),a("path",{attrs:{d:"M -95.69,252.3 -87.65,890.4 698.1,892 C 698.1,892 599.1,687.7 518.9,610.6 348,446.2 131.4,466.5 -95.69,252.3 Z","pathdata:id":"M -95.69,252.3 -87.65,890.4 698.1,892 C 698.1,892 569.8,587.1 448.9,482.7 299.7,353.9 131.4,466.5 -95.69,252.3 Z"}}),a("path",{attrs:{d:"M -85.59,444.4 -85.59,890.6 489,895.6 C 489,895.6 436.8,745.3 382.5,690.8 258.1,565.8 57.98,629.2 -85.59,444.4 Z","pathdata:id":"M -85.59,444.4 -85.59,890.6 546.9,895.6 C 546.9,895.6 517.4,695.4 339.9,593.4 187.7,505.9 57.98,629.2 -85.59,444.4 Z"}})])],1)],1)},o=[],i=a("774e"),r=a.n(i),l=(a("ac6a"),a("1209")),c=a("0418"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-albums"},[a("Carousel",{staticClass:"albums",attrs:{perPage:8,paginationColor:"#E7C7E8",paginationActiveColor:"#f3118b"}},t._l(t.albums[0],function(e){return e.image[3]["#text"]?a("Slide",{key:e.image[3]["#text"],staticClass:"album"},[a("div",{staticClass:"album__wrapper"},[a("div",{staticClass:"album__details"},[a("p",{staticClass:"album__artist"},[t._v(t._s(e.artist.name))]),a("p",{staticClass:"album__title"},[t._v(t._s(e.name))])]),a("img",{staticClass:"album__image",attrs:{src:e.image[3]["#text"]}})])]):t._e()}),1),a("div",{staticClass:"close-top-albums"},[a("i",{staticClass:"fa fa-times",on:{click:function(e){return t.$parent.$emit("toggle-albums")}}})])],1)},d=[],f=a("bc3a"),m=a.n(f),p=a("0a63"),h={name:"TopAlbums",components:{Carousel:p["Carousel"],Slide:p["Slide"]},props:{getAlbums:Array},data:function(){return{albums:[]}},mounted:function(){this.getAlbums.length?this.albums.push(this.getAlbums[0][0]):this.getTopAlbums()},methods:{getURL:function(t,e){m.a.get("http://ws.audioscrobbler.com/2.0/?method=user.".concat(t," &user=bfrable&api_key=c152ef462199b4430eec28a1727dc218&format=json"),{headers:{"Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET","Access-Control-Allow-Headers":"application/json"}}).then(function(t){e(t)})},addTopAlbums:function(t){this.albums.push(t.data.topalbums.album)},getTopAlbums:function(){this.getURL("gettopalbums",this.addTopAlbums),this.$parent.$emit("store-albums",this.albums)}}},g=h,b=(a("0e2e"),a("deca"),a("2877")),_=Object(b["a"])(g,u,d,!1,null,"8b2fceda",null),v=_.exports,C=(a("fa6d"),{name:"app",components:{TopAlbums:v,Header:c["a"]},data:function(){return{showAlbums:!1,albums:[]}},created:function(){var t=this;window.addEventListener("load",function(){t.setHeight()}),this.$on("toggle-albums",function(){t.showAlbums=!t.showAlbums}),this.$on("store-albums",function(e){t.albums.push(e)})},mounted:function(){this.animate()},methods:{animate:function(){r()(document.querySelector("svg.scene").querySelectorAll("path")).forEach(function(t){setTimeout(function(){Object(l["a"])({targets:t,duration:l["a"].random(3e3,5e3),d:t.getAttribute("pathdata:id"),loop:!0,direction:"alternate"})},l["a"].random(0,3e3))})},setHeight:function(){var t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);document.querySelector("svg.scene").setAttribute("style","height: ".concat(t+60,";"))}}}),w=C,y=(a("5c0b"),Object(b["a"])(w,s,o,!1,null,null,null)),k=y.exports,A=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("main",{staticClass:"main-content"},[a("div",{staticClass:"main-content__column"},[t._m(0),a("div",{staticClass:"projects"},t._l(t.projects[0],function(t){return a("ProjectCard",{key:t.guid,attrs:{bgColor:t.bgColor,title:t.title}})}),1)]),t._m(1)]),a("Footer")],1)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"main-content__intro"},[t._v("Hello! I’m Brett Frable. I specialize in front-end development and UX/UI design. I'm\n       currently employed at "),a("a",{staticClass:"link",attrs:{href:""}},[t._v("Duke Energy")]),t._v(" as a Front End Developer.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content__column"},[a("img",{staticClass:"profile",attrs:{src:"assets/images/me2.jpg"}})])}],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("p",{staticClass:"footer__copy"},[t._v("© 2018")]),a("nav",[a("ul",{staticClass:"footer__navigation"},[a("li",{staticClass:"footer__navigation-item"},[a("router-link",{staticClass:"footer__navigation-link",attrs:{to:"/about"}},[a("i",{staticClass:"fab fa-codepen"})])],1),a("li",{staticClass:"footer__navigation-item"},[a("router-link",{staticClass:"footer__navigation-link",attrs:{to:"/about"}},[a("i",{staticClass:"fab fa-github-alt"})])],1),a("li",{staticClass:"footer__navigation-item"},[a("router-link",{staticClass:"footer__navigation-link",attrs:{to:"/about"}},[a("i",{staticClass:"fab fa-spotify"})])],1),a("li",{staticClass:"footer__navigation-item"},[a("router-link",{staticClass:"footer__navigation-link",attrs:{to:"/about"}},[a("i",{staticClass:"fab fa-facebook-square"})])],1),a("li",{staticClass:"footer__navigation-item"},[a("router-link",{staticClass:"footer__navigation-link",attrs:{to:"/about"}},[a("i",{staticClass:"fab fa-instagram"})])],1),a("li",{staticClass:"footer__navigation-item"},[a("router-link",{staticClass:"footer__navigation-link",attrs:{to:"/about"}},[a("i",{staticClass:"fas fa-paper-plane"})])],1)])])])},E=[],M={name:"Footer"},x=M,$=(a("3103"),Object(b["a"])(x,P,E,!1,null,"7fe2be98",null)),S=$.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project-card",style:"background:"+t.bgColor+";"},[a("h2",{staticClass:"project-card__title"},[t._v(" "+t._s(t.title)+" ")])])},H=[],Z={name:"ProjectCard",props:{bgColor:String,title:String}},q=Z,L=(a("871e"),Object(b["a"])(q,T,H,!1,null,"3edf1626",null)),F=L.exports,U=a("abc1"),I=a.n(U),N={name:"home",components:{ProjectCard:F,Footer:S},data:function(){return{projects:[]}},mounted:function(){this.setOridomi()},created:function(){this.getProjects()},methods:{getProjects:function(){var t=this;m.a.get("../data/projects.json").then(function(e){t.projects.push(e.data)})},showProjects:function(){for(var t=document.querySelectorAll(".project-card"),e=0,a=function(a){0!==a?setTimeout(function(){e+=47,t[a].style.top="".concat(e,"px"),t[a].style.opacity=1},250*a):t[a].style.opacity=1},n=0;n<t.length;n+=1)a(n)},activePhoto:function(){var t=document.querySelectorAll(".profile")[1];t.classList.add("unfolded")},setOridomi:function(){var t=this,e=I.a,a=new e(document.querySelectorAll(".main-content__column")[1],{shading:"soft",vPanels:3,ripple:.2});a.wait(250).setSpeed(250).stairs(25).accordion(-25).stairs(-25).curl(-25,function(){t.activePhoto(),t.showProjects()}).reveal(),a.disableTouch()}}},B=N,J=(a("491a"),Object(b["a"])(B,j,O,!1,null,"301793f7",null)),R=J.exports;n["a"].use(A["a"]);var z=new A["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),D=a("2f62");n["a"].use(D["a"]);var G=new D["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:z,store:G,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(t,e,a){},"6d53":function(t,e,a){},"7e1b":function(t,e,a){},"871e":function(t,e,a){"use strict";var n=a("a7ad"),s=a.n(n);s.a},"927f":function(t,e,a){},a3bb:function(t,e,a){"use strict";var n=a("ff74"),s=a.n(n);s.a},a6be:function(t,e,a){},a7ad:function(t,e,a){},deca:function(t,e,a){"use strict";var n=a("3b72"),s=a.n(n);s.a},ff74:function(t,e,a){}});
//# sourceMappingURL=app.9d61d76c.js.map