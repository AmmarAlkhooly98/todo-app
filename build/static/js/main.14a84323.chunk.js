(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,n){e.exports=n(90)},55:function(e,t,n){},56:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(25),o=n.n(l),i=(n(55),n(11)),s=n(12),c=n(14),u=n(13),m=n(15),p=n(5),h=n(19),d=(n(56),n(17)),b=n(45),g=n(27),f={Msg:"",done:null},E={token:null,username:null,error:""},v=Object(d.c)({userSignUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_USER":return Object(g.a)({},e,{Msg:t.payload,done:t.done});default:return e}},userSignIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(g.a)({},e,{token:t.payload,username:t.username,error:t.error});default:return e}}}),w=[b.a],y=Object(d.e)(v,{},Object(d.d)(d.a.apply(void 0,w))),k=n(22),j=n(21),O=n(28),S=n.n(O);n(69);S.a.initializeApp({apiKey:"AIzaSyCHbGkQTCDjCBf3ZhfUWPsQ6WU-iUAya9o",authDomain:"todo-app-897bc.firebaseapp.com",databaseURL:"https://todo-app-897bc.firebaseio.com",projectId:"todo-app-897bc",storageBucket:"todo-app-897bc.appspot.com",messagingSenderId:"162015703612",appId:"1:162015703612:web:2007c110539a1208"});var C=S.a.storage(),I=n(29),N=n.n(I),U=(n(86),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={fullName:"",username:"",password:"",image:null,url:"",error:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleChange",value:function(e){if(e.target.files[0]){var t=e.target.files[0];this.setState(function(){return{image:t}}),console.log(t)}}},{key:"handleUpload",value:function(){var e=this,t=this.state.image;C.ref("images/".concat(t.name)).put(t).on("state_changed",function(e){Math.round(e.bytesTransferred/e.totalBytes*100)},function(e){},function(){C.ref("images").child(t.name).getDownloadURL().then(function(t){console.log(t),e.setState({url:t})})})}},{key:"onClick",value:function(e){var t={fullname:this.state.fullName,username:this.state.username.toLocaleLowerCase(),password:this.state.password,url:this.state.url};e.preventDefault(),t.username.length<1||t.fullname.length<1||t.password.length<1?(this.setState({error:"invalid information."}),console.log("invalid information.")):this.props.createUser(t)}},{key:"componentWillReceiveProps",value:function(e){console.log(e),e.done&&this.props.history.push("/signin")}},{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement("h1",null,"SIGNUP"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:this.state.url||"https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435",alt:"uploaded image",height:"150",width:"auto"}),r.a.createElement("br",null),r.a.createElement("input",{name:"image",type:"file",onChange:this.handleChange.bind(this)}),r.a.createElement("button",{onClick:this.handleUpload.bind(this)},"Upload"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Full Name"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Full name",name:"fullName",type:"text",onChange:this.onChange.bind(this)})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"username"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"username",name:"username",type:"text",onChange:this.onChange.bind(this)})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Password"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Password",name:"password",type:"password",onChange:this.onChange.bind(this)})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.onClick.bind(this)},"SignUp"))}}]),t}(a.Component)),P=Object(k.b)(function(e){return{msg:e.userSignUp.Msg,done:e.userSignUp.done}},{createUser:function(e){return function(t){N.a.post("/signup",e).then(function(e){t({type:"NEW_USER",payload:"successfully sign up",done:!0}),console.log(e)}).catch(function(e){"Request failed"===e&&console.log("username taken"),console.log(e)})}}})(U),W=(window.localStorage.getItem("username"),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"onClick",value:function(e){var t={username:this.state.username,password:this.state.password};e.preventDefault(),this.props.userSignIn(t)}},{key:"componentWillReceiveProps",value:function(e){console.log(e),e.token&&this.props.history.push("/userProfile")}},{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement("h1",null,"SIGN IN"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"username"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"username",name:"username",type:"text",onChange:this.onChange.bind(this)})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Password"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Password",name:"password",type:"password",onChange:this.onChange.bind(this)})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.onClick.bind(this)},"Sign In"))}}]),t}(a.Component)),x=Object(k.b)(function(e){return{username:e.userSignIn.username,error:e.userSignIn.error,token:e.userSignIn.token,visible:e.userSignIn.visible}},{userSignIn:function(e){return function(t){N.a.post("/signin",e).then(function(e){console.log(e),window.localStorage.setItem("token",e.data.token),window.localStorage.setItem("username",e.data.user.username),t({type:"SIGN_IN",payload:e.data.token,username:e.data.user})}).catch(function(e){t({type:"SIGN_IN",error:"Incorrect username or password.",payload:null})})}}})(W),R=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/userProfile"},"Profile")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Todos")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Other users")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"About")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/signin"},"Sign In"))))}}]),t}(a.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"logout",value:function(){window.localStorage.clear();var e=this;setTimeout(function(){e.props.history.push("/signin")},500)}},{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement("h2",null,"Hii"),r.a.createElement(p.b,{to:"/signup",activeStyle:{color:"white"}},r.a.createElement("h3",{id:"signup"},"Learn More")),r.a.createElement("button",{onClick:this.logout.bind(this)},"Logout"))}}]),t}(a.Component),L=n(49),_=function(e){var t=e.component,n=e.token,a=e.username,l=Object(L.a)(e,["component","token","username"]);return r.a.createElement(h.b,Object.assign({},l,{render:function(e){var l=window.localStorage.getItem("token"),o=window.localStorage.getItem("username");return n||l?r.a.createElement(t,Object.assign({},e,{username:a||o})):r.a.createElement(h.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},B=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,{store:y},r.a.createElement(p.a,null,r.a.createElement(R,null),r.a.createElement(_,{token:this.props.token,username:this.props.username,path:"/userProfile",exact:!0,component:G}),r.a.createElement(h.b,{path:"/signup",exact:!0,component:P}),r.a.createElement(h.b,{path:"/signin",exact:!0,component:x}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.14a84323.chunk.js.map