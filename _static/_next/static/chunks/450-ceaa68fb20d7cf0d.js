(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{46077:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a,r=n(50029),s=n(87794),i=n.n(s),u=n(67294),o=n(59499),c=n(71383),l=n(87108),p=n(85893),d=l.ZP.div(a||(a=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  color: #888;\n  margin-top: 2rem;\n\n  .value {\n    flex: 1;\n    font-size: 2rem;\n  }\n\n  .slider {\n    flex: 6;\n    -webkit-appearance: none;\n    width: 100%;\n    height: 1px;\n    border-radius: 15px;\n    background: #4F6268;\n    outline: none;\n    margin: 0px;\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      appearance: none;\n      ","\n    }\n\n    &::-moz-range-thumb {\n      ",'\n    }\n\n    :hover::-webkit-slider-thumb {\n      border: 2px solid #28bae0;\n    }\n\n    :hover::-moz-range-thumb {\n      border: 2px solid #28bae0;\n    }\n\n    input[type="range"]::-webkit-slider-thumb {\n      position: relative;\n      top: -5px;\n      width: 20px;\n      height: 20px;\n      border: 1px solid #999;\n      -webkit-appearance: none;\n      background-color: #fff;\n      box-shadow: inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25);\n      border-radius: 100%;\n      cursor: pointer;\n    }\n\n    input[type="range"]::-moz-range-thumb {\n      position: relative;\n      top: 0px;\n      width: 20px;\n      height: 20px;\n      border: 1px solid #999;\n      -moz-appearance: none;\n      background-color: #fff;\n      box-shadow: inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25);\n      border-radius: 100%;\n      cursor: pointer;\n    }\n\n    input[type="range"]:active {\n      display: block;\n      transform: translateX(-50%);\n    }\n  }\n'])),(function(e){return"\n  width: 35px;\n  height: 35px;\n  background: #11313A;\n  border: 4px solid #28bae0;\n  opacity:1;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n  border-radius:50%;\n"}),(function(e){return"\n  width: 35px;\n  height: 35px;\n  background: #11313A;\n  border: 4px solid #28bae0;\n  opacity:1;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n  border-radius:50%;\n"})),m=function(e){var t,n=(0,u.useRef)(null),a=(0,u.useRef)(null),r=e.getSliderVal,s=(0,u.useState)({value:1}),i=s[0],c=s[1],l=(0,u.useState)(""),m=l[0],y=l[1],h=function(){var e=n.current,t=e.value,r=e.min,s=e.max;y(t);var i=r,u=s,o=n.current.getAttribute("thumbwidth"),c=(t-i)/(u-i)*100,l=Math.round(o*(c/100));y("calc(".concat(c,"% - ").concat(l,"px)")),a.current.style.left="calc(".concat(c,"% - ").concat(l,"px)"),a.current.style.top="-5px",a.current.style.color="#28bae0",a.current.style.text=t};return(0,u.useEffect)((function(){h()}),[]),r(i.value),(0,p.jsx)("div",{className:"SlideOuterBx",children:(0,p.jsx)(d,{color:e.color,value:i.value,children:(0,p.jsxs)("div",{className:"slideInpOuter w-100",style:{position:"relative"},children:[(0,p.jsx)("input",(t={type:"range",step:2,min:1,max:365},(0,o.Z)(t,"step","1"),(0,o.Z)(t,"value",i.value),(0,o.Z)(t,"className","slider"),(0,o.Z)(t,"thumbwidth","35"),(0,o.Z)(t,"onChange",(function(e){c({value:e.target.value}),h()})),(0,o.Z)(t,"ref",n),t)),(0,p.jsx)("div",{style:{border:"2px solid #28bae0",width:m,marginTop:"-0.5rem",position:"absolute"}}),(0,p.jsx)("output",{name:"rangeVal",ref:a,children:i.value})]})})})},y=n(79352),h=n(37636),b=n.n(h),f=n(14214),_=n(3283),x="0x025F0aeEE1D58Af5f51f8EAA27779Bf484eF5012",w=function(e){var t=e.price,n=(0,u.useState)(1),a=(n[0],n[1],(0,u.useState)(0)),s=a[0],o=a[1],c=(0,u.useState)(0),l=c[0],d=c[1],h=(0,u.useState)(Number(t)*s),w=(h[0],h[1],(0,u.useState)(1)),g=w[0],v=w[1];function T(){return(T=(0,r.Z)(i().mark((function e(){var t,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.ethereum){e.next=10;break}return e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:return t=e.sent,n=new _(window.ethereum),e.next=8,n.eth.net.getId();case 8:a=e.sent,t.length>0&&80001==a&&new n.eth.Contract(f,x).methods.getYesterdayYield(t[0]).call((function(e,t){d(t/Math.pow(10,9)),o(t/Math.pow(10,9))}));case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",{address:""});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return(0,u.useEffect)((function(){!function(){T.apply(this,arguments)}()}),[]),(0,p.jsxs)("div",{className:b().calculator,children:[(0,p.jsxs)("div",{className:"d-flex justify-content-between ".concat(b().color_middle_green),children:[(0,p.jsxs)("p",{className:"".concat(b().subtitle," d-flex align-items-center"),children:[(0,p.jsx)("img",{src:"/images/Plus.png",alt:"Plus",className:"me-2"}),"CALCULATOR"]}),(0,p.jsxs)("p",{className:b().subtitle,children:["LAST YIELD AMOUNT ",""==l?0:l," SPORT"]})]}),(0,p.jsx)(m,{getSliderVal:function(e){v(e)}}),(0,p.jsxs)("div",{className:"d-flex justify-content-between mt-4 ".concat(b().color_light_green),children:[(0,p.jsx)("h6",{children:"1 DAY"}),(0,p.jsx)("h6",{children:"366 DAYS"})]}),(0,p.jsxs)("div",{className:"row row-cols-2 mt-4",children:[(0,p.jsxs)("div",{className:"col",children:[(0,p.jsx)("div",{className:"ms-5 text-start ".concat(b().color_middle_green," ").concat(b().subtitle),children:"SPORT amount"}),(0,p.jsxs)("div",{className:"d-flex position-relative align-items-center",children:[(0,p.jsx)("input",{type:"text",className:"".concat(b().form_control," ").concat(b().bg_dark_green," w-100"),value:s,onChange:function(e){return o(2==event.target.value.toString().length&&"0"==event.target.value.toString()[0]&&Number(event.target.value.toString()[1])>=0?event.target.value.toString()[1]:Number(event.target.value)>=0?event.target.value:"")}}),(0,p.jsx)("div",{className:"".concat(b().refresh," position-absolute"),onClick:function(){return o(l)},children:(0,p.jsx)(y.PwW,{color:" #0096B5",size:20})})]})]}),(0,p.jsxs)("div",{className:"col",children:[(0,p.jsx)("div",{className:"ms-5 text-start ".concat(b().color_middle_green," ").concat(b().subtitle),children:"$ Earnings"}),(0,p.jsx)("input",{type:"text",className:"".concat(b().form_control," ").concat(b().bg_dark_green," w-100"),value:"$ "+String(Number(t)*Number(g)*Number(s)).substring(0,8),readOnly:!0})]})]})]})}},81502:function(e,t,n){"use strict";var a=n(50029),r=n(16835),s=n(87794),i=n.n(s),u=n(67294),o=n(93680),c=n(37636),l=n.n(c),p=n(35553),d=n(11163),m=n(74845),y=n(85893),h=n(3283);t.Z=function(e){var t=e.getAddress,n=u.useState(""),s=(0,r.Z)(n,2),c=s[0],b=s[1],f=u.useState(""),_=(0,r.Z)(f,2),x=_[0],w=_[1],g=(0,u.useState)(""),v=g[0],T=g[1],k=(0,d.useRouter)(),M=(0,u.useState)({dynamicWidth:1100,dynamicHeight:0}),N=M[0],S=M[1],j=function(){S({dynamicWidth:window.innerWidth-500,dynamicHeight:window.innerHeight})};function C(){return(C=(0,a.Z)(i().mark((function e(){var t,n,a,r,s,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.ethereum){e.next=12;break}return e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:return t=e.sent,n=new h(window.ethereum),e.next=8,n.eth.net.getId();case 8:a=e.sent,t.length>0&&(b(t[0]),80001==a?(w(""),n.eth.getBalance(t[0],(function(e,t){var n=p.bM(t,"ether");T(String(n).substring(0,6)+" MATIC")}))):w("Wrong NET(DisConnect)")),e.next=21;break;case 12:return r=new m.Z({rpc:{80001:"https://matic-mumbai.chainstacklabs.com"},chainId:80001}),e.next=15,r.enable();case 15:return s=e.sent,n=new h(r),e.next=19,n.eth.net.getId();case 19:u=e.sent,s.length>0&&(b(s[0]),80001==u?(w(""),n.eth.getBalance(s[0],(function(e,t){var n=p.bM(t,"ether");T(String(n).substring(0,6)+" MATIC")}))):w("Wrong NET(DisConnect)"));case 21:e.next=26;break;case 23:return e.prev=23,e.t0=e.catch(0),e.abrupt("return",{address:""});case 26:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)}function A(){return(A=(0,a.Z)(i().mark((function e(){var t,n,a,r,s,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=80001,e.prev=1,!window.ethereum){e.next=55;break}if(n=new h(window.ethereum),window.ethereum.networkVersion==t){e.next=35;break}return e.prev=5,e.next=8,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+t.toString(16)}]});case 8:if(""!=c){e.next=24;break}return e.prev=9,e.next=12,window.ethereum.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});case 12:return e.next=14,window.ethereum.request({method:"eth_accounts"});case 14:a=e.sent,n=new h(window.ethereum),a.length>0&&(b(a[0]),w(""),n.eth.getBalance(a[0],(function(e,t){var n=p.bM(t,"ether");T(String(n).substring(0,6)+" MATIC")}))),e.next=22;break;case 19:return e.prev=19,e.t0=e.catch(9),e.abrupt("return",{address:""});case 22:e.next=26;break;case 24:b(""),w("");case 26:e.next=33;break;case 28:if(e.prev=28,e.t1=e.catch(5),4902!==e.t1.code){e.next=33;break}return e.next=33,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainName:"Polygon Mumbai",chainId:web3.utils.toHex(t),nativeCurrency:{name:"Matic",decimals:18,symbol:"Matic"},rpcUrls:["https://rpc-mumbai.maticvigil.com/"]}]});case 33:e.next=53;break;case 35:if(""!=c){e.next=51;break}return e.prev=36,e.next=39,window.ethereum.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});case 39:return e.next=41,window.ethereum.request({method:"eth_accounts"});case 41:r=e.sent,n=new h(window.ethereum),r.length>0&&(b(r[0]),w(""),n.eth.getBalance(r[0],(function(e,t){var n=p.bM(t,"ether");T(String(n).substring(0,6)+" MATIC")}))),e.next=49;break;case 46:return e.prev=46,e.t2=e.catch(36),e.abrupt("return",{address:""});case 49:e.next=53;break;case 51:b(""),w("");case 53:e.next=83;break;case 55:return s=new m.Z({rpc:{80001:"https://matic-mumbai.chainstacklabs.com"},chainId:80001}),e.next=58,s.enable();case 58:return u=e.sent,n=new h(s),e.next=62,n.eth.net.getId();case 62:if(e.sent==t){e.next=82;break}if(e.prev=64,""!=c){e.next=71;break}return e.next=68,s.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+t.toString(16)}]});case 68:u.length>0&&(b(u[0]),w(""),n.eth.getBalance(u[0],(function(e,t){var n=p.bM(t,"ether");T(String(n).substring(0,6)+" MATIC")}))),e.next=73;break;case 71:b(""),w("");case 73:e.next=80;break;case 75:if(e.prev=75,e.t3=e.catch(64),4902!==e.t3.code){e.next=80;break}return e.next=80,s.request({method:"wallet_addEthereumChain",params:[{chainName:"Polygon Mumbai",chainId:web3.utils.toHex(t),nativeCurrency:{name:"Matic",decimals:18,symbol:"Matic"},rpcUrls:["https://rpc-mumbai.maticvigil.com/"]}]});case 80:e.next=83;break;case 82:""==c?u.length>0&&(b(u[0]),w(""),n.eth.getBalance(u[0],(function(e,t){var n=p.bM(t,"ether");T(String(n).substring(0,6)+" MATIC")}))):(b(""),w(""));case 83:e.next=88;break;case 85:return e.prev=85,e.t4=e.catch(1),e.abrupt("return");case 88:case"end":return e.stop()}}),e,null,[[1,85],[5,28],[9,19],[36,46],[64,75]])})))).apply(this,arguments)}return t(c),(0,u.useEffect)((function(){try{window.addEventListener("resize",j),window.ethereum&&(window.ethereum.on("chainChanged",(function(){k.push("/token")})),window.ethereum.on("accountsChanged",(function(){k.push("/token")}))),function(){C.apply(this,arguments)}()}catch(e){return}}),[N]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:l().logo,children:(0,y.jsx)("img",{src:"/images/Logo1.png",alt:"Logo"})}),(0,y.jsx)("div",{className:l().backDiv,children:(0,y.jsx)(o.Z,{style:{position:"absolute",top:"20px",left:"50px",minWidth:"auto",width:"40px",height:"40px",border:"1px solid rgba(255, 255, 255, 0.2)",color:"white",borderRadius:"50%",fontFamily:"monospace",fontSize:"20px",backgroundColor:"transparent"},onClick:function(){return k.push("/")},children:"<"})}),(0,y.jsxs)("div",{className:l().buttonDiv+" d-flex justify-content-lg-between justify-content-md-between align-items-center",children:[(0,y.jsx)("div",{style:{position:"absolute",left:N.dynamicWidth/2,top:"130px"},children:(0,y.jsxs)("p",{className:"".concat(l().bg_dark_green," ").concat(l().color_blue),style:{fontSize:"25px"},children:["Please make sure you are visiting ",(0,y.jsx)("a",{href:"https://www.eskillz.info",className:l().color_blue,children:"www.eskillz.info"})]})}),(0,y.jsxs)("div",{style:{flexDirection:"column",display:"flex",position:"absolute",right:"70px",top:"30px"},children:[(0,y.jsxs)("span",{style:{color:"white"},children:["\xa0 \xa0 ADDRESS : \xa0",c.length>0?String(c).substring(0,8)+"..."+String(c).substring(36):""]}),(0,y.jsxs)("span",{style:{color:"#06f506"},children:["\xa0 \xa0 MATIC BALANCE : \xa0",(c.length,v)]})]}),(0,y.jsx)(o.Z,{style:{position:"absolute",right:"70px",top:"80px"},variant:"outline-primary",className:"".concat(l().color_blue," ").concat(l().btn_outline_primary," rounded-pill"),onClick:function(){!function(){A.apply(this,arguments)}()},children:""==x?0==c.length?"CONNECT WALLET":"DISCONNECT":x})]})]})}},16215:function(e,t,n){"use strict";var a=n(50029),r=n(87794),s=n.n(r),i=n(67294),u=n(37636),o=n.n(u),c=n(14214),l=n(85893),p=n(3283),d="0x025F0aeEE1D58Af5f51f8EAA27779Bf484eF5012";t.Z=function(e){var t=e.address,n=e.price,r=(0,i.useState)(0),u=r[0],m=r[1];function y(){return(y=(0,a.Z)(s().mark((function e(){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.ethereum){e.next=10;break}return e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:return t=e.sent,n=new p(window.ethereum),e.next=8,n.eth.net.getId();case 8:a=e.sent,t.length>0&&80001==a&&new n.eth.Contract(c,d).methods.distributedAmounts(t[0]).call((function(e,t){m(t/Math.pow(10,9))}));case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",{address:""});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}(0,i.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]);var h=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(t);case 2:alert("Text copied");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{className:"".concat(o().total_earned," text-start"),children:[(0,l.jsx)("p",{children:"Total Earned"}),(0,l.jsxs)("h3",{className:"".concat(o().color_white," mt-5"),children:[u,(0,l.jsxs)("span",{className:"h6 ".concat(o().color_blue),children:[" "," (  $ "+String(Number(u)*Number(n))+" )"]})]}),(0,l.jsxs)("div",{className:"d-flex mt-5 mb-1",children:[(0,l.jsx)("p",{className:o().color_middle_green,children:t}),(0,l.jsx)("div",{className:"ms-2",style:{cursor:"pointer"},children:(0,l.jsx)("img",{src:"/images/Copy.png",alt:"copy",onClick:function(){h()}})})]})]})}},37636:function(e){e.exports={token:"style_token__itnR1",backDiv:"style_backDiv___50iM",buttonDiv:"style_buttonDiv__v302r",color_blue:"style_color_blue__CmsgJ",color_white:"style_color_white__PwXO7",color_light_green:"style_color_light_green__giaRy",color_middle_green:"style_color_middle_green__Qb1Vg",bg_green:"style_bg_green__fzC0u",bg_dark_green:"style_bg_dark_green__VsXuo",btn_outline_primary:"style_btn_outline_primary___J0ZN",form_control:"style_form_control__SCBIY",logo:"style_logo__2QdGd",header_content:"style_header_content__3VQkB",header_middle_content:"style_header_middle_content__shS85",btn_container:"style_btn_container__aZDUb",link:"style_link__2SpXA",first_container:"style_first_container__yumos",second_container:"style_second_container__Rqf7D",total_earned:"style_total_earned__PND8j",copy:"style_copy__BCen1",textoverflow:"style_textoverflow__TNgwE",content:"style_content__8tTPw",calculator:"style_calculator__TH6kG","my-slider":"style_my-slider__SVhH8","r-range-slider-value":"style_r-range-slider-value__iloEB",subtitle:"style_subtitle__9avJ1",refresh:"style_refresh__w6neT",token_buy_container:"style_token_buy_container__mSphP",token_buy:"style_token_buy__cfkxR",sub_container:"style_sub_container__wmlQr",calc_container:"style_calc_container__FF1pl"}},88677:function(){},62808:function(){},36563:function(){},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){},6567:function(){},14214:function(e){"use strict";e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"_sportToken","outputs":[{"internalType":"contract IERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sportTokenAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"distributedAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getYesterdayYield","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isshareholder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"process","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"proxiableUUID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setESGToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"shareholder","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setSportToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"shareholderClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"shareholderEsgBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"shareholders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}]')},6979:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"},{"internalType":"address","name":"_USDC","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"USDC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"path0","type":"address"}],"name":"getETHPrice","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"path0","type":"address"},{"internalType":"uint256","name":"amountInput","type":"uint256"}],"name":"getETHPriceUsingAmount","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"path0","type":"address"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveETHIn","type":"uint256"},{"internalType":"uint256","name":"reserveUSDOut","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"path0","type":"address"},{"internalType":"uint256","name":"amountInput","type":"uint256"}],"name":"getPriceUsingAmount","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveETHIn","type":"uint256"},{"internalType":"uint256","name":"reserveUSDOut","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}}]);