(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{106:function(e,t,a){e.exports=a(144)},111:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(111),a(22)),i=a(35),u=a(20),m=a.n(u),s=a(28),p=a(8),b=a(198),d=a(182),f=a(181),g=a(197),E=a(184),h=a(183),v=a(60),j=a.n(v),O=a(148),C=a(178),S=a(180),y=Object(C.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},submit:{margin:e.spacing(3,0,2)},form:{width:"100%",marginTop:e.spacing(3)}}})),k=r.a.createContext(),N=Object(C.a)((function(e){return{avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}})),U=function(){var e=N(),t=y(),a=Object(n.useContext)(k),c=Object(n.useState)(0),l=Object(p.a)(c,2),o=l[0],u=l[1],v=Object(n.useState)(0),C=Object(p.a)(v,2),U=C[0],x=C[1],w=function(){var e=Object(s.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/user?user_name=".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return 200===(n=e.sent).nodeStatus?x(!0):401===n.nodeStatus?window.alert("You need to create an account Brah. Create an account or go to another site, Tanks :)"):404===n.nodeStatus&&window.alert("Something is busted on the server try again never :)"),e.abrupt("return");case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return U?r.a.createElement(i.a,{push:!0,to:"/dashboard"}):r.a.createElement(S.a,{component:"main",maxWidth:"xs"},r.a.createElement(f.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(j.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"User Name",name:"user_name",autoComplete:"use_name",autoFocus:!0,onKeyDown:function(e){"Enter"===e.key&&(w(o),u(""),e.target.value="")},onChange:function(e){u(e.target.value)}}),r.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(e){w(o),document.getElementById("email").value="",a.setCurrentUserName(o.toString())}},"Sign In"),r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0},r.a.createElement(E.a,{variant:"body2",onClick:function(){return a.setDisplaySignUp(!0)}},"Don't have an account? Sign Up")))))},x=Object(C.a)((function(e){return{avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}})),w=function(e){var t=x(),a=y(),c=Object(n.useContext)(k),l=Object(n.useState)(""),o=Object(p.a)(l,2),u=o[0],v=o[1],C=Object(n.useState)(""),N=Object(p.a)(C,2),U=N[0],w=N[1],T=Object(n.useState)(!1),R=Object(p.a)(T,2),D=R[0],W=R[1],I=function(){var e=Object(s.a)(m.a.mark((function e(t){var a,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={userName:t},n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)},e.prev=2,e.next=5,fetch("/user",n);case 5:return r=e.sent,e.next=8,r.json();case 8:return 200===(c=e.sent).nodeStatus?W(!0):400===c.nodeStatus?alert("Unable to add account for ".concat(t)):alert("Unknown error...this site is broken:("),e.abrupt("return");case 13:return e.prev=13,e.t0=e.catch(2),e.abrupt("return",e.t0);case 16:case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return D?r.a.createElement(i.a,{push:!0,to:"/dashboard"}):r.a.createElement(S.a,{component:"main",maxWidth:"xs"},r.a.createElement(f.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(b.a,{className:t.avatar},r.a.createElement(j.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),""!==u?(w(""),alert("Submitting name ".concat(u)),I(u)):w("Cannot leave user name blank")}},r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(g.a,{variant:"outlined",required:!0,fullWidth:!0,id:"user_name",label:"User Name",name:"user_name",autoComplete:"user_name",helperText:U,onChange:function(e){return v(e.target.value)}}))),r.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){c.setCurrentUserName(u.toString())}},"Sign Up"),r.a.createElement(h.a,{container:!0,justify:"flex-end"},r.a.createElement(h.a,{item:!0},r.a.createElement(E.a,{variant:"body2",onClick:function(){return c.setDisplaySignUp(!1)}},"Already have an account? Sign in"))))))},T=function(){var e=Object(n.useContext)(k);return r.a.createElement("div",{className:"login-page-container"},e.displaySignUp?r.a.createElement(w,null):r.a.createElement(U,null),r.a.createElement("img",{alt:"Purple Squirrel"}))},R=a(185),D=a(186),W=a(189),I=a(188),P=a(187),_=Object(C.a)({root:{maxWidth:345}});function F(e){var t=_(),a=Object(n.useState)(0),c=Object(p.a)(a,2),l=c[0],o=c[1];return l?r.a.createElement(i.a,{push:!0,to:e.element.redirect}):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(R.a,{className:t.root,style:{backgroundColor:e.element.backgroundColor}},r.a.createElement(D.a,null,r.a.createElement(P.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:e.element.image,title:"Contemplative Reptile"}),r.a.createElement(I.a,null,r.a.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{color:e.element.buttonColor}},e.element.name))),r.a.createElement(W.a,null,r.a.createElement(d.a,{size:"small",style:{color:e.element.buttonColor},onClick:function(){o(!0)}},"Go to Page"))),r.a.createElement("br",null))}var A=[{name:"Emma",image:"https://avatarfiles.alphacoders.com/213/213116.jpg",backgroundColor:"#D8D8D8",buttonColor:"#660000",redirect:"./"},{name:"Michelle",image:"https://avatarfiles.alphacoders.com/213/213116.jpg",backgroundColor:"#808080",buttonColor:"#cc0000",redirect:"./"},{name:"Mike",image:"https://avatarfiles.alphacoders.com/213/213116.jpg",backgroundColor:"#000000",buttonColor:"#ff0000",redirect:"./"}];function B(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Purple Squirrels"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Login Page"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/recipe"},"Recipe Page"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/recipe/create"},"Create Recipe")))),r.a.createElement("div",null,A.map((function(e){return r.a.createElement(F,{element:e})}))))}var q=a(47),J=a(192),L=a(196),M=a(195),V=a(191),Y=a(193),G=a(194),z=a(149),K=a(190),$=Object(q.makeStyles)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},submit:{margin:e.spacing(3,0,2)},head:{backgroundColor:"#00bde5",color:"#FFFFFF"}}})),H=Object(q.withStyles)({colorPrimary:{backgroundColor:"#ccf6ff"},barColorPrimary:{backgroundColor:"#00bde5"}})(K.a);function Q(){return(Q=Object(s.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/recipes");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(p.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(""),s=Object(p.a)(m,2),b=(s[0],s[1]),d=$();return Object(n.useEffect)((function(){(function(){return Q.apply(this,arguments)})().then((function(e){c(e.Items),u(!0)})).catch((function(e){b(e.message),u(!0)}))}),[]),i?r.a.createElement(V.a,{component:z.a},r.a.createElement(J.a,{"aria-label":"simple table"},r.a.createElement(Y.a,null,r.a.createElement(G.a,null,r.a.createElement(M.a,{className:d.head},"Recipe Id"))),r.a.createElement(L.a,null,a.map((function(e,t){return r.a.createElement(G.a,{hover:!0,key:t},r.a.createElement(M.a,{component:"th",scope:"row"},e.recipe_id))}))))):r.a.createElement("div",null,r.a.createElement(H,null))},Z=a(38),ee=a(94),te=a.n(ee),ae=Object(C.a)((function(e){return{avatar:{margin:e.spacing(1),backgroundColor:e.palette.success.light}}})),ne=function(){var e=ae(),t=y(),a=Object(n.useContext)(k),c=Object(n.useState)(""),l=Object(p.a)(c,2),o=l[0],u=l[1],E=Object(n.useState)(""),h=Object(p.a)(E,2),v=h[0],j=h[1],C=Object(n.useState)(""),N=Object(p.a)(C,2),U=N[0],x=N[1],w=Object(n.useState)(""),T=Object(p.a)(w,2),R=T[0],D=T[1],W=Object(n.useState)(""),I=Object(p.a)(W,2),P=I[0],_=I[1],F=Object(n.useState)([""]),A=Object(p.a)(F,2),B=A[0],q=A[1],J=Object(n.useState)([""]),L=Object(p.a)(J,2),M=L[0],V=L[1],Y=Object(n.useState)(""),G=Object(p.a)(Y,2),z=G[0],K=G[1],$=Object(n.useState)(!1),H=Object(p.a)($,2),Q=H[0],X=H[1],ee=function(){var e=Object(s.a)(m.a.mark((function e(){var t,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={inputRecipeName:o,inputRecipeID:z,inputRecipeIntro:v,inputCookTime:U,inputPrepTime:R,inputServings:P,inputIngredients:B,inputDirections:M,inputUserName:a.currentUserName},n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)},e.prev=2,e.next=5,fetch("/recipes",n);case 5:return r=e.sent,e.next=8,r.json();case 8:return 200===(c=e.sent).nodeStatus?X(!0):400===c.nodeStatus?alert("Unable to add recipe ".concat(o)):alert("Unknown error...this site is broken:("),e.abrupt("return");case 13:return e.prev=13,e.t0=e.catch(2),e.abrupt("return",e.t0);case 16:case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return Q?r.a.createElement(i.a,{push:!0,to:"/recipe"}):r.a.createElement(S.a,{component:"main",maxWidth:"xs"},r.a.createElement(f.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(te.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5"},"Create Recipe"),r.a.createElement("form",{className:t.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),alert("Recipe name: ".concat(o,"\nRecipe ID: ").concat(z,"\nRecipe Intro: ").concat(v,"\nCook Time: ").concat(U,"\nPrep Time:").concat(R,"\nServings: ").concat(P,"\nIngredients: ").concat(B,"\nDirections: ").concat(M)),ee()}},r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"recipeName",label:"Recipe Name",name:"recipeName",autoComplete:"recipeName",autoFocus:!0,onChange:function(e){return function(e){u(e.target.value),K(e.target.value.toLowerCase().split(" ").join("_"))}(e)}}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",multiline:!0,rows:"4",fullWidth:!0,name:"recipe_intro",label:"Recipe Description",id:"recipe_intro",autoComplete:"recipe_intro",onChange:function(e){return j(e.target.value)}}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"cookTime",label:"Cook Time",id:"cookTime",autoComplete:"cookTime",onChange:function(e){return x(e.target.value)}}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"prepTime",label:"Prep Time",id:"prepTime",autoComplete:"prepTime",onChange:function(e){return D(e.target.value)}}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"servings",label:"Servings",id:"servings",autoComplete:"servings",onChange:function(e){return _(e.target.value)}}),B.map((function(e,t){return r.a.createElement(n.Fragment,{key:"".concat(t)},r.a.createElement(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"ingredient",label:"Ingredient",id:"ingredient",onChange:function(e){return function(e,t){var a=Object(Z.a)(B);a[e]=t.target.value,q(a)}(t,e)}}),r.a.createElement("div",{className:"form-group col-sm-2"},r.a.createElement("button",{className:"btn btn-link",type:"button",onClick:function(){return function(e){var t=Object(Z.a)(B);t.splice(e,1),q(t)}(t)}},"-"),r.a.createElement("button",{className:"btn btn-link",type:"button",onClick:function(){return function(){var e=Object(Z.a)(B);e.push(""),q(e)}()}},"+")))})),M.map((function(e,t){return r.a.createElement(n.Fragment,{key:"".concat(t)},r.a.createElement(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"direction",label:"Direction",id:"direction",onChange:function(e){return function(e,t){var a=Object(Z.a)(M);a[e]=t.target.value,V(a)}(t,e)}}),r.a.createElement("div",{className:"form-group col-sm-2"},r.a.createElement("button",{className:"btn btn-link",type:"button",onClick:function(){return function(e){var t=Object(Z.a)(M);t.splice(e,1),V(t)}(t)}},"-"),r.a.createElement("button",{className:"btn btn-link",type:"button",onClick:function(){return function(){var e=Object(Z.a)(M);e.push(""),V(e)}()}},"+")))})),r.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Save Recipe"),r.a.createElement(d.a,{type:"button",fullWidth:!0,className:t.submit,variant:"contained",color:"secondary",href:"./"},"Cancel"))))},re=Object(q.makeStyles)((function(){return{recipeTitle:{textAlign:"center"}}}));var ce=function(){var e=Object(i.g)(),t=re();return r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"".concat(e.path,"/create")},r.a.createElement(ne,null)),r.a.createElement(i.b,{path:e.path},r.a.createElement(S.a,{maxWidth:"sm"},r.a.createElement("h1",{className:t.h1},"Your Recipes"),r.a.createElement(X,null))))},le=(a(143),a(74)),oe=function(e,t){switch(t.type){case"DISPLAY_SIGNUP":return function(e,t){return Object(le.a)({},t,{displaySignUp:e.displaySignUpBoolean})}(t,e);case"CURRENT_USERNAME":return function(e,t){return Object(le.a)({},t,{currentUserName:e.currentUserNameValue})}(t,e);default:return e}},ie=function(e){var t=Object(n.useReducer)(oe,{displaySignUp:!1,currentUserName:""}),a=Object(p.a)(t,2),c=a[0],l=a[1],o={displaySignUp:c.displaySignUp,setDisplaySignUp:function(e){l({type:"DISPLAY_SIGNUP",displaySignUpBoolean:e})},currentUserName:c.currentUserName,setCurrentUserName:function(e){l({type:"CURRENT_USERNAME",currentUserNameValue:e})}};return r.a.createElement(k.Provider,{value:o},e.children)},ue=function(){return r.a.createElement(ie,null,r.a.createElement(k.Consumer,null,(function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/recipe"},r.a.createElement(ce,null)),r.a.createElement(i.b,{path:"/dashboard"},r.a.createElement(B,null)),r.a.createElement(i.b,{path:"/"},r.a.createElement(T,null)))))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);
//# sourceMappingURL=main.2e0e2268.chunk.js.map