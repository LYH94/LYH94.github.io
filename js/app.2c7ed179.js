(function(t){function e(e){for(var a,n,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,n=1;n<o.length;n++){var r=o[n];0!==i[r]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=o[0]))}return t}var a={},n={app:0},i={app:0},s=[];function r(t){return l.p+"js/"+({about:"about","admin-products":"admin-products",categories:"categories"}[t]||t)+"."+{about:"b9b1290f","admin-products":"f510ec11",categories:"04cc4a7a"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(t){var e=[],o={"admin-products":1,categories:1};n[t]?e.push(n[t]):0!==n[t]&&o[t]&&e.push(n[t]=new Promise((function(e,o){for(var a="css/"+({about:"about","admin-products":"admin-products",categories:"categories"}[t]||t)+"."+{about:"31d6cfe0","admin-products":"dd99721b",categories:"96bc9d19"}[t]+".css",i=l.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var c=s[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===a||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[t],f.parentNode.removeChild(f),o(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,o){a=i[t]=[e,o]}));e.push(a[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var o=i[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,o[1](d)}i[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(o,a,function(e){return t[e]}.bind(null,a));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"018e":function(t,e,o){"use strict";o("e45f")},"01f7":function(t,e,o){},"0240":function(t,e,o){"use strict";o("e835")},"16a3":function(t,e,o){"use strict";o("cd8c")},"408d":function(t,e,o){"use strict";o("ea3f")},"53d7":function(t,e,o){"use strict";o("01f7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("e792"),o("0cdd");var a=o("2b0e"),n=o("5f5b");o("ab8b"),o("2dd8");a["default"].use(n["a"]);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("loading",{attrs:{active:t.isLoading,"background-color":"#000",color:"#ff0",opacity:1,loader:"dots"},on:{"update:active":function(e){t.isLoading=e}}}),o("router-view")],1)},s=[],r=o("9062"),l=o.n(r),c=(o("e40d"),{name:"Home",data:function(){return{isLoading:!0}},components:{Loading:l.a},mounted:function(){var t=this;window.addEventListener("load",(function(){t.isLoading=!1}))}}),u=c,d=o("2877"),f=Object(d["a"])(u,i,s,!1,null,null,null),p=f.exports,m=o("9483");Object(m["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("d3b7"),o("3ca3"),o("ddb0");var v=o("8c4f"),b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"home"}},[o("Navbar"),o("introduce"),o("skill"),o("portfolio"),o("experience"),o("education"),o("Footer")],1)},h=[],g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{attrs:{fluid:"",id:"education"}},[o("b-container",[o("h1",{staticClass:"project-name"},[t._v("學歷")]),o("div",{attrs:{id:"timeline"}},[o("div",{staticClass:"timeline-item"},[o("div",{staticClass:"timeline-icon"},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","graduation-cap"]}})],1),o("div",{staticClass:"timeline-content"},[o("h4",[t._v("泰山職業訓練場, 前端網頁開發技術班")]),o("span",[t._v("2012/09 ~ 2016/06")]),o("p",[t._v(" 工作了一段時間之後，發現我所在的產業，在未來很容易被科技取代，想要趁年輕轉換跑道，想尋找不容易被 AI 替代的工作，研究了一段時間之後發現自己對於軟體工程師十分有興趣。所以為了實現當工程師的夢想，除了先上網自學基本知識，我選擇職訓課程幫助我入門，在職訓局學到了前端工程師的相關技能及知識，在職訓中也考取了網頁設計丙級，並且實際應用了所學的技術做出了多種作品。 ")])])]),o("div",{staticClass:"timeline-item"},[o("div",{staticClass:"timeline-icon"},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","graduation-cap"]}})],1),o("div",{staticClass:"timeline-content right"},[o("h4",[t._v("世新大學, 觀光系旅遊暨休閒事業管理")]),o("span",[t._v("2012/09 ~ 2016/06")]),o("p",[t._v(" 就學期間參與系上的世新觀光產學旅行社，從顧客諮詢、票務行政、產品研發與銷售，行銷策略策劃執行一手包辦。藉由學校提供的暑期企業實習、海外參訪等機會，大幅提升我的國際視野。 ")])])]),o("div",{staticClass:"timeline-item"},[o("div",{staticClass:"timeline-icon"},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","graduation-cap"]}})],1),o("div",{staticClass:"timeline-content"},[o("h4",[t._v("韓國西江大學, 非學位課程, 韓國語")]),o("span",[t._v("2018/08~ 2018/11")]),o("p",[t._v(" 西江大學韓國語讓我在密集訓練下提升韓語實力。 ")])])])])])],1)},y=[],_={},w=_,C=(o("018e"),Object(d["a"])(w,g,y,!1,null,null,null)),k=C.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{attrs:{fluid:"",id:"experience"}},[o("h1",[t._v("工作經歷")]),t._l(t.experiences,(function(e){return o("b-card",{key:e._id,staticClass:"overflow-hidden work-card",attrs:{"no-body":"","data-aos":e.dataAos,"data-aos-easing":"ease-out-cubic","data-aos-duration":e.aosDuration}},[o("b-row",{attrs:{"no-gutters":""}},[o("b-col",{staticClass:"col-left",attrs:{md:"3"}},[o("div",{staticClass:"circle"},[t._v(t._s(e.num))]),o("b-card-body",{staticClass:"card-left"},t._l(e.time,(function(e){return o("h4",{key:e.id},[t._v(t._s(e)+" ")])})),0)],1),o("b-col",{attrs:{md:"9"}},[o("b-card-body",{staticClass:"card-right",attrs:{title:e.company}},[o("b-card-text",[o("ul",t._l(e.duty,(function(e){return o("li",{key:e._id,staticClass:"work-duty"},[t._v(t._s(e))])})),0)])],1)],1)],1)],1)}))],2)},j=[],S={data:function(){return{experiences:[{num:"1",time:["2019/05 ~ 2020/06"],company:"正啟貿易股份有限公司 / 特別助理",duty:["負責公司 FB. IG 的社群，制定行銷方案提升產品 Syncfo 咖啡檢測儀、ICMC 國際咖啡大師賽的曝光度。","經營公司官網， Shopify 電商平台，負責貿易進出口訂單管理，隨時優化客戶服務流程。","與海外代理商書信往來，負責產品推廣，及客戶售後服務，協助準備公司自辦或協辦的大型活動，包含參加國內外展覽。","2019 WOC 柏林參展時，負責的咖啡檢測儀獲得最佳新產品的獎項，成功提升公司產品的曝光度，展會後將銷售提升 2 倍。"],dataAos:["fade-up"],aosDuration:"800"},{num:"2",time:["2017/06 ~ 2018/08"],company:"OH! Study 教育顧問中心 / 留遊學執行顧問",duty:["負責海外學校美、加、英、紐、澳的學校申請、入學文件、處理簽證、住宿、接機、行前說明會、一般會計、行政事務、學生出國後的聯繫、協助解決問題等事項。","支援公司的教育展及相關活動、參展、校園活動及說明會。"],dataAos:["fade-up"],aosDuration:"900"},{num:"3",time:["2016/06 ~ 2016/11","2015/06 ~ 2015/10"],company:"美國黃石國家公園 / 餐飲服務生 / 飯店工作人員",duty:["就學期間爭取到的海外企業實習機會","負責餐飲部門工作，提供客人滿意的服務及團隊合作","隨時提供專業的標準服務"],dataAos:["fade-up"],aosDuration:"1000"}]}}},A=S,E=(o("408d"),Object(d["a"])(A,x,j,!1,null,null,null)),O=E.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{attrs:{id:"footer"}},[o("div",{staticClass:"container-fluid h-100"},[o("b-row",{staticClass:"text-center"},[o("b-col",[t._v(" © 2021 All rights reserved | This page is made by Lee "),o("a",{attrs:{href:"https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=yuhsuanlee94@gmail.com",target:"_blank",title:"登入後即可直接寄信"}},[o("font-awesome-icon",{staticStyle:{"font-size":"16px",color:"white"},attrs:{icon:["far","envelope"]}})],1)])],1)],1),o("div",{directives:[{name:"show",rawName:"v-show",value:t.scrollPosition>550,expression:"scrollPosition > 550"}],staticClass:"animate__animated animate__bounce",staticStyle:{"animation-duration":"3s"},attrs:{id:"go_top_page"}},[o("a",{attrs:{href:"#"}},[o("font-awesome-icon",{staticStyle:{"font-size":"16px",color:"white"},attrs:{icon:["fas","chevron-up"]}})],1)])])},P=[],N={data:function(){return{scrollPosition:null}},methods:{onActivate:function(t){console.log("Receved Event: scrollspy::activate for target ",t)},updateScroll:function(){this.scrollPosition=window.scrollY}},created:function(){this.$root.$on("scrollspy::activate",this.onActivate)},mounted:function(){window.addEventListener("scroll",this.updateScroll)}},D=N,H=(o("53d7"),Object(d["a"])(D,L,P,!1,null,null,null)),V=H.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"p-0",attrs:{fluid:"",id:"introduce"}},[o("Particles",{attrs:{id:"tsparticles",options:{background:{color:{value:"#000000"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onHover:{enable:!0,mode:"grab",parallax:{enable:!1,force:2,smooth:10}},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:["#3998D0","#2EB6AF","#A9BD33","#FEC73B","#F89930","#F45623","#D62E32","#EB586E","#9952CF"]},links:{color:"#ffffff",distance:100,enable:!0,opacity:.5,width:1.5},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"destroy",random:!0,speed:2,straight:!1},number:{value:200,density:{enable:!0,area:700}},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:7}},detectRetina:!0}}}),o("div",{staticClass:"introduce-box"},[o("div",{staticClass:"home-photo",attrs:{"data-aos":"zoom-in"}}),o("vue-typed-js",{attrs:{strings:["李育瑄","前端工程師"],loop:!0,backDelay:1500,typeSpeed:150,width:150,height:150}},[o("h2",[t._v("我是"),o("span",{staticClass:"typing"})])]),o("div",{staticClass:"mt-2 about-me"},[o("b-button",{attrs:{variant:"light"},on:{click:function(e){t.show=!t.show}}},[t._v("關於我"),o("font-awesome-icon",{staticClass:"ml-2 about-icon",attrs:{icon:["fas","child"]}})],1)],1),o("transition",{attrs:{name:"top-left"}},[t.show?o("b-card",{staticClass:"mt-2 introduce-card"},[o("p",{staticClass:"card-text"},[t._v("我想轉職成為前端工程師，是因為我第一次接觸到程式是在幫公司用 GoDaddy 建立官網，在架設網站的過程中，發現網站設計會影響使用者與公司的互動，良好的網站規劃可以提供使用者好的體驗，也能降低公司客服的工作量，自己越做越有心得後，先在 Udemy 上購買程式課程學習，後來希望轉職成為前端工程師，所以加入泰山職訓局，得到系統化的訓練，往下看看我的作品吧。")])]):t._e()],1)],1)],1)},$=[],I={data:function(){return{show:!1}}},T=I,F=(o("b099"),Object(d["a"])(T,B,$,!1,null,null,null)),M=F.exports,Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"navabr"}},[o("b-navbar",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy",value:{offset:100,method:"auto"},expression:"{offset:100, method:'auto'}"}],staticClass:"home-navbar",class:{change_color:t.scrollPosition>300},attrs:{toggleable:"lg",type:"dark",fixed:"top"}},[o("b-navbar-brand",{attrs:{to:"/"}},[t._v("李育瑄的履歷表")]),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto"},[o("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#introduce",duration:500,easing:"linear"},expression:"{ element: '#introduce', duration: 500, easing: 'linear' }"}]},[t._v("自我介紹")]),o("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#skill",duration:500,easing:"linear"},expression:"{ element: '#skill', duration: 500, easing: 'linear' }"}]},[t._v("專業技能")]),o("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#portfolio",duration:500,easing:"linear"},expression:"{ element: '#portfolio', duration: 500, easing: 'linear' }"}]},[t._v("網頁作品")]),o("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#experience",duration:500,easing:"linear"},expression:"{ element: '#experience', duration: 500, easing: 'linear' }"}]},[t._v("個人經歷")]),o("b-nav-item",[o("router-link",{attrs:{to:"/categories/posts"}},[t._v("文章")])],1)],1)],1)],1)],1)},q=[],z={data:function(){return{scrollPosition:null}},methods:{onActivate:function(t){console.log("Receved Event: scrollspy::activate for target ",t)},updateScroll:function(){this.scrollPosition=window.scrollY}},created:function(){this.$root.$on("scrollspy::activate",this.onActivate)},mounted:function(){window.addEventListener("scroll",this.updateScroll)}},Q=z,R=(o("16a3"),Object(d["a"])(Q,Y,q,!1,null,null,null)),G=R.exports,U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{attrs:{fluid:"",id:"portfolio"}},[o("b-row",{staticClass:"portfolio-row m-0"},t._l(t.portfolios,(function(e){return o("b-col",{key:e._id,staticClass:"portfolio-col",attrs:{cols:"12",md:"6",lg:"4"}},[o("b-card",{staticClass:"portfolio-card",attrs:{"data-aos":e.dataAos,"data-aos-easing":"ease-out-cubic","data-aos-duration":"800"}},[o("b-card",{staticClass:"portfolio-img",attrs:{overlay:"","img-src":e.img,"img-alt":"Card Image","text-variant":"white",title:"Github repo"}},[o("b-card-text",[o("a",{attrs:{href:e.repo,target:"_blank"}},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","github"]}})],1)])],1),o("b-card-title",[t._v(t._s(e.title))]),o("b-card-text",{staticClass:"flex-fill"},[o("ul",t._l(e.text,(function(e){return o("li",{key:e._id},[t._v(t._s(e))])})),0),o("h5",{staticClass:"text-center"},t._l(e.skills,(function(e){return o("b-badge",{key:e,attrs:{pill:"",variant:"light"}},[t._v(t._s(e))])})),1)]),o("p",{staticClass:"text-center"},[o("b-button",{attrs:{href:e.link,variant:"outline-warning",target:"_blank"}},[t._v("DEMO")])],1)],1)],1)})),1)],1)},J=[],W={data:function(){return{portfolios:[{img:"./portfolio/portfolio-01.png",title:"Vue 電商網站",text:["可瀏覽商品，將商品加入購物車、註冊/登入會員、送出訂單","前端使用 Vue CLI、BootstrapVue、Responsive Web Design、Axios與後台要資料","後端使用Node.js、MongoDB"],link:"https://lyh94.github.io/Vue-Store/#/",skills:["Vue","Bootstrap-Vue","Scss","Axios","Vue-cli","MongoDB","body-parser"],repo:"https://github.com/LYH94/Vue-Store",dataAos:["flip-right"]},{img:"./portfolio/portfolio-02.jpg",title:"Vue 番茄鐘",text:["使用 Vuex 和 Vue-router","番茄鐘計時器包含 To Do List ，可以選擇鬧鐘聲音","支援 PWA"],link:"https://lyh94.github.io/Vue-Pomodoro/#/",skills:["Vue","Vuex","Vue-router","Stylus","Pug","Vue-cli","localStorage","Bootstrap-Vue"],repo:"https://github.com/LYH94/Vue-Pomodoro",dataAos:["flip-right"]},{img:"./portfolio/portfolio-06.jpg",title:"CSS ZEN GARDEN",text:["不更改 html 結構，不使用套件使用純 css 切板、原生 js，做出森林風格的頁面。","使用 @keyframes 動畫、滾動視差效果"],link:"https://lyh94.github.io/css_zen-garden/",skills:["Html","CSS","jQuery","keyframes"],repo:"https://github.com/LYH94/css_zen-garden",dataAos:["flip-right"]},{img:"./portfolio/portfolio-04.jpg",title:"景點配對翻牌遊戲",text:["使用 jQuery、CSS 3D 製作的翻牌遊戲。"],link:"https://lyh94.github.io/jq-cards/index.html",skills:["Html","CSS","jQuery","keyframes"],repo:"https://github.com/LYH94/jq-cards",dataAos:["flip-left"]},{img:"./portfolio/portfolio-05.jpg",title:"外星人綁架乳牛小遊戲",text:["使用 jQuery 練習 DOM 操作和動畫製作的遊戲，乳牛會隨機出現"],link:"https://lyh94.github.io/jq-alien_abduction/",skills:["Html","CSS","jQuery","keyframes"],repo:"https://github.com/LYH94/jq-alien_abduction",dataAos:["flip-left"]},{img:"./portfolio/portfolio-03.jpg",title:"LINE 機器人",text:["可查詢當季好蔬果網站的 LINE 機器人","部署到 Heroku","使用 Node.js"],link:"https://github.com/LYH94/linebot-fruit_price",skills:["Html","CSS","javaScript","Node.js","cheerio"],repo:"https://github.com/LYH94/linebot-fruit_price",dataAos:["flip-left"]}]}}},K=W,X=(o("0240"),Object(d["a"])(K,U,J,!1,null,null,null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{attrs:{fluid:"",id:"skill"}},[o("b-row",{staticClass:"skill-row py-3"},t._l(t.skills,(function(e){return o("b-col",{key:e._id,staticClass:"skill-col",attrs:{cols:"6",md:"3"}},[o("b-card",{staticClass:"skill-card",attrs:{"data-aos":e.dataAos,"data-aos-easing":"ease-out-cubic","data-aos-duration":"600"}},[o("div",{staticClass:"icon-center"},[o("div",{staticClass:"icon-box"},[o("font-awesome-icon",{staticClass:"skill-icon",attrs:{icon:e.icon}})],1)]),o("b-card-title",{staticClass:"mt-3 skill-title"},[t._v(t._s(e.title))]),o("b-card-text",{staticClass:"flex-fill"},t._l(e.text,(function(e){return o("p",{key:e._id,staticClass:"m-0"},[t._v(t._s(e))])})),0)],1)],1)})),1)],1)},et=[],ot={data:function(){return{skills:[{icon:["fab","css3-alt"],title:"前端開發",text:["HTML","CSS","Bootstrap","JavaScript","jQuery","Vue.js"],dataAos:["fade-right"]},{icon:["fas","laptop-code"],title:"後端技術",text:["Node.js","MongoDB"],dataAos:["fade-left"]},{icon:["fas","pen-fancy"],title:"視覺設計",text:["Photoshop","Illustrator","Figma","UI / UX"],dataAos:["fade-right"]},{icon:["fas","language"],title:"語言能力",text:["英文 TOEIC 820","韓文 TOPIK 5級"],dataAos:["fade-left"]}]}}},at=ot,nt=(o("9c3c"),Object(d["a"])(at,tt,et,!1,null,null,null)),it=nt.exports,st={name:"Home",data:function(){return{}},components:{Navbar:G,Introduce:M,Skill:it,Portfolio:Z,Experience:O,Education:k,Footer:V}},rt=st,lt=Object(d["a"])(rt,b,h,!1,null,null,null),ct=lt.exports;a["default"].use(v["a"]);var ut=[{path:"/",name:"Home",component:ct,meta:{title:"首頁"}},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))},meta:{title:"關於"}},{path:"/categories",name:"Categories",component:function(){return Promise.all([o.e("admin-products"),o.e("categories")]).then(o.bind(null,"58c2"))},meta:{title:"目錄"},children:[{path:"/categories/posts",name:"posts",component:function(){return o.e("admin-products").then(o.bind(null,"7c2a"))},meta:{title:"貼文"}}]}],dt=new v["a"]({routes:ut});dt.afterEach((function(t,e){document.title=t.meta.title}));var ft=dt,pt=o("2f62");a["default"].use(pt["a"]);var mt=new pt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),vt=o("ecee"),bt=o("ad3d"),ht=o("f13c"),gt=o.n(ht),yt=o("d7da"),_t=o("8cb8"),wt=o("f5af"),Ct=o.n(wt),kt=(o("e829"),o("8f94")),xt=o.n(kt),jt=(o("a7be"),o("c074")),St=o("b702"),At=o("f2d1");vt["c"].add(At["b"],At["a"],jt["e"],jt["f"],jt["d"],jt["c"],jt["a"],St["a"],jt["b"],St["b"]),a["default"].config.productionTip=!1,a["default"].component("font-awesome-icon",bt["a"]),a["default"].use(xt.a),a["default"].use(gt.a),a["default"].use(yt["a"]),a["default"].use(_t["default"]),Ct.a.init(),new a["default"]({router:ft,store:mt,render:function(t){return t(p)}}).$mount("#app")},"9c3c":function(t,e,o){"use strict";o("d830")},"9de1":function(t,e,o){},b099:function(t,e,o){"use strict";o("9de1")},cd8c:function(t,e,o){},d830:function(t,e,o){},e45f:function(t,e,o){},e835:function(t,e,o){},ea3f:function(t,e,o){}});
//# sourceMappingURL=app.2c7ed179.js.map