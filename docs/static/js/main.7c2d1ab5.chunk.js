(this.webpackJsonpschneider=this.webpackJsonpschneider||[]).push([[0],{104:function(e,t,n){e.exports=n(116)},116:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(8),l=n.n(o),r=n(89),s=n(14);function c(){var e=Object(r.a)(['\n* {\n    box-sizing: border-box;\n    font-family: "Open Sans", sans-serif;\n}\nbody {\n    margin: 0;\n    font-size: 112.5%;\n    background: #f0faff;\n}\n:root {\n    --blue-main: #193251;\n    --blue-75: #7589A2;\n    --blue-50: #E0E4E8;\n    --blue-25: #F8F8F8;\n    --orange-main: #FF5A36;\n    --orange-75: #FF9C86;\n    --orange-50: #FFBDAF;\n    --orange-25: #FFDED7;\n    --shadow-blue: 0px 2px 11px 0px rgba(25, 50, 81, 0.2);\n    --shadow-orange: 0px 4px 10px #ff5a3666;\n    --border-blue: 1px solid var(--blue-50);\n}\n']);return c=function(){return e},e}var d=Object(s.a)(c()),u=(n(111),n(84)),m=n(80);function p(e,t){localStorage.setItem(e,JSON.stringify(t))}function f(e){var t=localStorage.getItem(e);return JSON.parse(t)}var b=n(26);var g=function(e){var t=e.item,n=e.items,i=e.setIsVisible,o=e.setSelectedItem,l=e.setItems;return a.a.createElement(h,null,t.uri?a.a.createElement(x,{src:t.uri,alt:"test bild"}):a.a.createElement(v,null),a.a.createElement(w,null,t.title),a.a.createElement(y,null,a.a.createElement(b.b,{style:{margin:6},size:25,onClick:function(){o(t),i(!0)}}),a.a.createElement(b.d,{style:{margin:6},size:25,onClick:function(){var e=n.filter((function(e){return e.id!==t.id}));l(e),p("todos",e)}})))},h=s.b.section.withConfig({displayName:"ListItem__ItemWrapper",componentId:"sc-1ykowyo-0"})(["display:flex;flex-direction:rows;align-items:center;justify-content:center;margin:10px;width:348px;height:48px;background-color:white;border-radius:5px;overflow:hidden;box-shadow:2px 3px 4px lightgrey;"]),y=s.b.div.withConfig({displayName:"ListItem__IconWrapper",componentId:"sc-1ykowyo-1"})(["display:flex;flex-direction:rows;justify-content:center;"]),x=s.b.img.withConfig({displayName:"ListItem__Image",componentId:"sc-1ykowyo-2"})(["height:48px;width:48px;"]),v=s.b.span.withConfig({displayName:"ListItem__Placeholder",componentId:"sc-1ykowyo-3"})(["height:48px;width:48px;background:skyblue;"]),w=s.b.span.withConfig({displayName:"ListItem__Text",componentId:"sc-1ykowyo-4"})(["padding:10px;flex-wrap:wrap;width:230px;"]),E=n(93),I=n.n(E),k=n(149),C=n(148),S=n(4),_=n(97),F=function(e){var t=e.touched,n=e.message;return t?n?a.a.createElement("div",{className:"form-message invalid",style:{color:"red",paddingTop:0,fontSize:12}},n):a.a.createElement("div",null):a.a.createElement("div",{className:"form-message invalid",style:{color:"red",paddingTop:0,fontSize:12}},"\xa0")},N=n(64);var O=function(e){var t=e.updateItems,n=e.item,i=e.setIsVisible,o=N.a().shape({title:N.b().min(4,"Must have at least 4 characters").max(255,"Must be shorter than 255 characters").required("Must enter a title"),description:N.b().min(4,"Must have at least 4 characters").required("Must enter a description"),file:N.a().label("Datei")}),l=Object(S.a)({root:{"& label.Mui-focused":{color:"skyblue"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"grey"},"&:hover fieldset":{borderColor:"skyblue"},"&.Mui-focused fieldset":{borderColor:"skyblue"}}}})(C.a);return a.a.createElement(j,null,a.a.createElement(_.a,{initialValues:{title:n.title,description:n.description,file:null},validationSchema:o,onSubmit:function(e,t){var n=t.setSubmitting,i=t.resetForm;n(!0),setTimeout((function(){alert(JSON.stringify(e,null,2)),i(),n(!1)}),500)}},(function(e){var o=e.values,r=e.errors,s=e.touched,c=e.handleChange,d=e.handleBlur;return a.a.createElement("form",{style:{display:"flex",flexDirection:"column",width:348},onSubmit:function(){return function(e){console.log("Values in HandleSubmit",e.title),n.id?t({id:n.id,title:e.title,description:e.description,uris:e.file||""}):t({id:I()(),title:e.title,description:e.description,uris:e.file||""}),i(!1)}(o)}},a.a.createElement(b.e,{onClick:function(){return i(!1)},size:34,color:"skyblue",style:{alignSelf:"flex-end",paddingBottom:10}}),a.a.createElement(l,{name:"title",id:"outlined-search",label:"Titel",type:"search",variant:"outlined",autoFocus:!0,onChange:c,value:o.title,className:s.title&&r.title?"has-error":null,style:{borderColor:"skyblue"}}),a.a.createElement(F,{touched:s.title,message:r.title}),a.a.createElement(l,{name:"description",id:"outlined-search",label:"Beschreibung",type:"search",multiline:!0,rows:4,variant:"outlined",onChange:c,onBlur:d,value:o.description,className:s.description&&r.description?"has-error":null,style:{borderColor:"skyblue",marginTop:20}}),a.a.createElement(F,{touched:s.description,message:r.description}),a.a.createElement(M,{type:"file",name:"file",onChange:c,onBlur:d,value:o.file,accept:"image/*, .pdf",style:{borderColor:"skyblue",marginTop:20}}),n.uris&&a.a.createElement("div",null,n.uris),a.a.createElement("div",null,o.file),a.a.createElement(k.a,{variant:"contained",style:{backgroundColor:"skyblue",marginTop:20},type:"submit"},a.a.createElement(b.a,{size:30,color:"white"})))})))},j=s.b.form.withConfig({displayName:"Form__MainForm",componentId:"ixcm8n-0"})(["position:absolute;display:flex;flex:1;width:100%;height:100%;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:60px;background:#f0faff;"]),M=s.b.input.withConfig({displayName:"Form__FileInput",componentId:"ixcm8n-1"})(["height:48px;font-size:20px;border-color:skyblue;"]);var T=function(){var e=Object(i.useState)(f("todos")||[]),t=Object(m.a)(e,2),n=t[0],o=t[1],l=Object(i.useState)(!1),r=Object(m.a)(l,2),s=r[0],c=r[1],d=Object(i.useState)(f("selectedTodo")||{}),h=Object(m.a)(d,2),y=h[0],x=h[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(B,null,"ToDo it"),!s&&a.a.createElement(z,null,n.map((function(e){return a.a.createElement("div",{style:{height:"100%"},key:e.id},a.a.createElement(g,{setItems:o,item:e,items:n,setIsVisible:c,setSelectedItem:x}))})),a.a.createElement(k.a,{variant:"contained",style:{backgroundColor:"skyblue",width:348,marginTop:10},onClick:function(){return c(!0)}},a.a.createElement(b.c,{size:30,color:"white"}))),s&&a.a.createElement(O,{updateItems:function(e){var t=n.some((function(t){return t.id===e.id}));x({}),p("selectedTodo",{}),o(t?n&&n.map((function(t){return t.id!==e.id?t:e})):[].concat(Object(u.a)(n),[e])),p("todos",t?n&&n.map((function(t){return t.id!==e.id?t:e})):[].concat(Object(u.a)(n),[e]))},item:y,setIsVisible:c}))},z=s.b.section.withConfig({displayName:"List__MainSection",componentId:"sc-4gw3ul-0"})(["display:flex;flex-direction:column;align-items:center;width:400px;padding-top:30px;"]),B=s.b.header.withConfig({displayName:"List__Header",componentId:"sc-4gw3ul-1"})(["display:flex;justify-content:center;width:100vw;height:60px;padding-top:30px;padding-bottom:30px;color:skyblue;font-size:40px;font-family:verdana;"]);var L=function(){return a.a.createElement(D,null,a.a.createElement(T,null))},D=s.b.section.withConfig({displayName:"App__MainSection",componentId:"sc-192tqu-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;height:100%;background:#f0faff;"]);l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null),a.a.createElement(L,null)),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.7c2d1ab5.chunk.js.map