(this["webpackJsonpfb-clone"]=this["webpackJsonpfb-clone"]||[]).push([[0],{69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},90:function(e,t,s){"use strict";s.r(t);var c=s(3),a=s(2),i=s.n(a),o=s(25),n=s.n(o),r=(s(69),s(14)),l=(s(70),s(117)),j=(s(71),s(46)),d=s.n(j),p=s(47),m=s.n(p),b=s(48),h=s.n(b),u=Object(a.createContext)(),x=function(e){var t=e.reducer,s=e.initialState,i=e.children;return Object(c.jsx)(u.Provider,{value:Object(a.useReducer)(t,s),children:i})},O=function(){return Object(a.useContext)(u)},g=s(29),f=g.a.initializeApp({apiKey:"AIzaSyAVzwFIFHgHj60zCPzK0WP4K0HKVX9UP38",authDomain:"facebook-clone-15f36.firebaseapp.com",projectId:"facebook-clone-15f36",storageBucket:"facebook-clone-15f36.appspot.com",messagingSenderId:"1018910938582",appId:"1:1018910938582:web:55783d226fc431718d4077",measurementId:"G-4NEV7DZT93"}).firestore(),_=g.a.auth(),v=new g.a.auth.GoogleAuthProvider,w=f;var k=function(){var e=O(),t=Object(r.a)(e,2),s=t[0].user,i=(t[1],Object(a.useState)("")),o=Object(r.a)(i,2),n=o[0],j=o[1],p=Object(a.useState)(""),b=Object(r.a)(p,2),u=b[0],x=b[1];return Object(c.jsxs)("div",{className:"messageSender",children:[Object(c.jsxs)("div",{className:"messageSender__top",children:[Object(c.jsx)(l.a,{src:s.photoURL}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{value:n,onChange:function(e){return j(e.target.value)},className:"messageSender__input",placeholder:"What's on your mind, ".concat(s.displayName,"?\n            ")}),Object(c.jsx)("input",{value:u,onChange:function(e){return x(e.target.value)},placeholder:"image URL (Optional)"}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),w.collection("posts").add({message:n,timestamp:g.a.firestore.FieldValue.serverTimestamp(),profilePic:s.photoURL,username:s.displayName,image:u}),j(""),x("")},type:"submit",children:"Hidden Submit"})]})]}),Object(c.jsxs)("div",{className:"messageSender__bottom",children:[Object(c.jsxs)("div",{className:"messageSender__option",children:[Object(c.jsx)(d.a,{style:{color:"red"}}),Object(c.jsx)("h3",{children:"Live Video"})]}),Object(c.jsxs)("div",{className:"messageSender__option",children:[Object(c.jsx)(m.a,{style:{color:"green"}}),Object(c.jsx)("h3",{children:"Photo/Video"})]}),Object(c.jsxs)("div",{className:"messageSender__option",children:[Object(c.jsx)(h.a,{style:{color:"orange"}}),Object(c.jsx)("h3",{children:"Feeling/Activity"})]})]})]})};s(80),s(81);var N=function(e){var t=e.image,s=e.profileSrc,a=e.title;return Object(c.jsxs)("div",{style:{backgroundImage:"url(".concat(t,")")},className:"story",children:[Object(c.jsx)(l.a,{className:"story__avatar",src:s}),Object(c.jsx)("h4",{children:a})]})};s(82);var y=function(){return Object(c.jsxs)("div",{className:"storyReel",children:[Object(c.jsx)(N,{image:"https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",profileSrc:"https://media-exp1.licdn.com/dms/image/C4E03AQH6POubfzuxFQ/profile-displayphoto-shrink_400_400/0/1592793369833?e=1613606400&v=beta&t=m5dxdLb7YmrY_jvKnTut-mMDnvME3005OZioVlWuX_Q",title:"Colton Eichorn"}),Object(c.jsx)(N,{image:"https://media-exp1.licdn.com/dms/image/C4E2DAQHgx1R9MrWSlw/profile-treasury-image-shrink_1920_1920/0/1607879541209?e=1611295200&v=beta&t=r5UnV85vP_r6408iowcFjPtHR7wCanecWG7U34lyotQ",profileSrc:"https://media-exp1.licdn.com/dms/image/C4E03AQFr8ZUBdIQMpw/profile-displayphoto-shrink_400_400/0/1608060068305?e=1616630400&v=beta&t=9y_pVwXuOdz_nEL99Joe1cAYewtFv9BL6ThYC-v6V_4",title:"Ricci Eichorn"}),Object(c.jsx)(N,{image:"https://images.pexels.com/photos/2745835/pexels-photo-2745835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",profileSrc:"https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"Max Speedman"}),Object(c.jsx)(N,{image:"https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",profileSrc:"https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"Rich Goldman"}),Object(c.jsx)(N,{image:"https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",profileSrc:"https://images.pexels.com/photos/3326711/pexels-photo-3326711.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",title:"Hertz Humbucker"})]})},S=s(104),F=s(105),C=s(106),I=s(107),P=s(108);s(83);var L=function(e){var t=e.profilePic,s=e.image,a=e.username,i=e.timestamp,o=e.message;return Object(c.jsxs)("div",{className:"post",children:[Object(c.jsxs)("div",{className:"post__top",children:[Object(c.jsx)(l.a,{src:t,className:"post__avatar"}),Object(c.jsxs)("div",{className:"post__topInfo",children:[Object(c.jsx)("h3",{children:a}),Object(c.jsx)("p",{children:new Date(null===i||void 0===i?void 0:i.toDate()).toUTCString()})]})]}),Object(c.jsx)("div",{className:"post__bottom",children:Object(c.jsx)("p",{children:o})}),Object(c.jsx)("div",{className:"post__image",children:Object(c.jsx)("img",{src:s,alt:""})}),Object(c.jsxs)("div",{className:"post__options",children:[Object(c.jsxs)("div",{className:"post__option",children:[Object(c.jsx)(S.a,{}),Object(c.jsx)("p",{children:"Like"})]}),Object(c.jsxs)("div",{className:"post__option",children:[Object(c.jsx)(F.a,{}),Object(c.jsx)("p",{children:"Comment"})]}),Object(c.jsxs)("div",{className:"post__option",children:[Object(c.jsx)(C.a,{}),Object(c.jsx)("p",{children:"Share"})]}),Object(c.jsxs)("div",{className:"post__option",children:[Object(c.jsx)(I.a,{}),Object(c.jsx)(P.a,{})]})]})]})};var z=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),s=t[0],i=t[1];return Object(a.useEffect)((function(){w.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return i(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(c.jsxs)("div",{className:"feed",children:[Object(c.jsx)(y,{}),Object(c.jsx)(k,{}),s.map((function(e){return Object(c.jsx)(L,{profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image},e.id)}))]})},A=(s(84),s(49)),E=s.n(A),R=s(50),V=s.n(R),U=s(51),D=s.n(U),T=s(52),B=s.n(T),H=s(53),M=s.n(H),W=s(54),Q=s.n(W),Y=s(109),K=s(55),G=s.n(K),J=s(56),X=s.n(J),Z=s(57),q=s.n(Z),$=s(58),ee=s.n($);var te=function(){var e=O(),t=Object(r.a)(e,2),s=t[0].user;return t[1],Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"header__left",children:[Object(c.jsx)("img",{title:"https://iconscout.com/icons/facebook, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",href:"https://commons.wikimedia.org/wiki/File:Facebook_icon_192.png",alt:"Facebook icon 192",src:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"}),Object(c.jsxs)("div",{className:"header__input",children:[Object(c.jsxs)("button",{className:"searchButton",type:"submit",children:[" ",Object(c.jsx)(E.a,{})," "]}),Object(c.jsx)("input",{placeholder:"Search Facebook",type:"text"})]})]}),Object(c.jsxs)("div",{className:"header__center",children:[Object(c.jsx)("div",{className:"header__option header__option--active",children:Object(c.jsx)(V.a,{fontSize:"large"})}),Object(c.jsx)("div",{className:"header__option",children:Object(c.jsx)(D.a,{fontSize:"large"})}),Object(c.jsx)("div",{className:"header__option",children:Object(c.jsx)(B.a,{fontSize:"large"})}),Object(c.jsx)("div",{className:"header__option",children:Object(c.jsx)(M.a,{fontSize:"large"})}),Object(c.jsx)("div",{className:"header__option",children:Object(c.jsx)(Q.a,{fontSize:"large"})})]}),Object(c.jsxs)("div",{className:"header__right",children:[Object(c.jsxs)("div",{className:"header__info",children:[Object(c.jsx)(l.a,{src:s.photoURL}),Object(c.jsx)("h4",{children:s.displayName})]}),Object(c.jsx)(Y.a,{children:Object(c.jsx)(G.a,{})}),Object(c.jsx)(Y.a,{children:Object(c.jsx)(X.a,{})}),Object(c.jsx)(Y.a,{children:Object(c.jsx)(q.a,{})}),Object(c.jsx)(Y.a,{children:Object(c.jsx)(ee.a,{})})]})]})},se=s(110),ce=s(111),ae=s(112),ie=s(113),oe=s(114),ne=s(115);s(85),s(86);var re=function(e){var t=e.src,s=e.Icon,a=e.title;return Object(c.jsxs)("div",{className:"sidebarRow",children:[t&&Object(c.jsx)(l.a,{src:t}),s&&Object(c.jsx)(s,{}),Object(c.jsx)("h4",{children:a})]})};var le=function(){var e=O(),t=Object(r.a)(e,2),s=t[0].user;return t[1],Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)(re,{src:s.photoURL,title:s.displayName}),Object(c.jsx)(re,{Icon:se.a,title:"COVID-19 Information Center"}),Object(c.jsx)(re,{Icon:ce.a,title:"Pages"}),Object(c.jsx)(re,{Icon:ae.a,title:"Friends"}),Object(c.jsx)(re,{Icon:ie.a,title:"Messenger"}),Object(c.jsx)(re,{Icon:oe.a,title:"Marketplace"}),Object(c.jsx)(re,{Icon:ne.a,title:"Videos"}),Object(c.jsx)(re,{Icon:P.a,title:"Marketplace"})]})};s(87);var je=function(){return Object(c.jsx)("div",{className:"widgets",children:Object(c.jsx)("iframe",{title:"iframe",class:"iframe",src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCE-Development-105409351512759&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"340",height:"500",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media; autoplay"})})};s(88);var de=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("iframe",{class:"iframe2",title:"iframe2",src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"})})},pe=s(116),me=(s(89),s(40)),be="SET_USER",he=function(e,t){switch(console.log(t),t.type){case be:return Object(me.a)(Object(me.a)({},e),{},{user:t.user});default:return e}};var ue=function(){var e=O(),t=Object(r.a)(e,2),s=(t[0],t[1]);return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsxs)("div",{className:"login__logo",children:[Object(c.jsx)("img",{title:"https://iconscout.com/icons/facebook, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",href:"https://commons.wikimedia.org/wiki/File:Facebook_icon_192.png",alt:"Facebook icon 192",src:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"}),Object(c.jsx)("img",{title:"Facebook, Inc., Public domain, via Wikimedia Commons",href:"https://commons.wikimedia.org/wiki/File:Facebook,_Inc._Logo_2019.png",alt:"Facebook, Inc. Logo 2019",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Facebook%2C_Inc._Logo_2019.png/512px-Facebook%2C_Inc._Logo_2019.png"})]}),Object(c.jsx)(pe.a,{type:"submit",onClick:function(){_.signInWithPopup(v).then((function(e){s({type:be,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]})};var xe=function(){var e=O(),t=Object(r.a)(e,2),s=t[0].user;return t[1],Object(c.jsx)("div",{className:"app",children:s?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(te,{}),Object(c.jsxs)("div",{className:"app__body",children:[Object(c.jsx)(le,{}),Object(c.jsx)(z,{}),Object(c.jsx)(je,{}),Object(c.jsx)(de,{})]})]}):Object(c.jsx)(ue,{})})},Oe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,118)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;s(e),c(e),a(e),i(e),o(e)}))};n.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{initialState:{user:null},reducer:he,children:Object(c.jsx)(xe,{})})}),document.getElementById("root")),Oe()}},[[90,1,2]]]);
//# sourceMappingURL=main.7b327fbf.chunk.js.map