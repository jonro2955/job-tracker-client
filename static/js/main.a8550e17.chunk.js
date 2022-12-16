(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{152:function(e,t,c){},154:function(e,t,c){"use strict";c.r(t);var s=c(10),n=c(61),a=c.n(n),r=c(19),i=c(68),l=Object(i.a)(),o={domain:"dev-9npol9r6.us.auth0.com",clientId:"4GfZ4cfLN9HiX42YH3oWPq8NHKTiCAIS",redirectUri:window.location.origin,onRedirectCallback:function(e){l.push(e&&e.returnTo?e.returnTo:window.location.pathname)}},j=c(7),u=c(1),b=c.n(u),d=b.a.createContext(),O="LOGIN_SUCCESS",m="LOGIN_FAILURE",h="SET_PROFILE",p="REMOVE_PROFILE",x="SET_DB_PROFILE",f="REMOVE_DB_PROFILE",v={isAuthenticated:!1,dbProfile:null,authProfile:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(s.a)(Object(s.a)({},e),{},{isAuthenticated:!0});case m:return Object(s.a)(Object(s.a)({},e),{},{isAuthenticated:!1});case h:return Object(s.a)(Object(s.a)({},e),{},{authProfile:t.payload});case p:return Object(s.a)(Object(s.a)({},e),{},{authProfile:null});case x:return Object(s.a)(Object(s.a)({},e),{},{dbProfile:t.payload});case f:return Object(s.a)(Object(s.a)({},e),{},{dbProfile:null});default:return e}},N=c(161),y=c(20),C=c(6),q=c(2),S=function(){var e=Object(r.b)(),t=Object(C.l)();return Object(q.jsx)("div",{className:"d-flex justify-content-center",children:Object(q.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(q.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(q.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(q.jsx)("li",{className:"nav-item active",children:Object(q.jsx)(y.b,{to:"/home",style:{padding:"5px"},children:"Home"})}),Object(q.jsx)("li",{className:"nav-item",children:Object(q.jsx)(y.b,{to:"/search",style:{padding:"5px"},children:"Search"})}),Object(q.jsx)("li",{className:"nav-item",children:Object(q.jsx)(y.b,{to:"/about",style:{padding:"5px"},children:"About"})})]}),Object(q.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){e.isAuthenticated?t("/profile"):e.loginWithPopup()},children:e.isAuthenticated?e.user.email:"Log in"})]})})})},w=c(8),k=c(13),L=c(14),P=c(11);function A(e){var t=e.careersList,c=e.setCareersList,n=e.currentCareerNum,a=Object(u.useContext)(d),r=Object(u.useState)(t[n]),i=Object(j.a)(r,2),l=i[0],o=i[1],b=Object(u.useState)(!1),O=Object(j.a)(b,2),m=O[0],h=O[1];function p(){h(!m)}function x(){0!==l.length&&l!==t[n]&&(t.find((function(e){return e===l}))?alert('Error: "'.concat(l,'" already exists. Cannot create duplicate careers.')):(!function(e,t,n){var r=Object(L.a)(e);if(r[t]=n,a.isAuthenticated&&a.dbProfileState){var i=a.dbProfileState.username,l=e[t],o={username:i,careersList:r,oldCareerName:l,newCareerName:n};N.a.put("/api/put/renamecareer",o).then((function(e){console.log("api/put/renamecareer res.data: ",e.data);var t=Object(s.a)({},a.dbProfileState);t.careers_list=o.careersList,a.dispatchSetDbProfile(t),c(r)})).catch((function(e){console.log("api/put/careernum err",e)}))}else c(r)}(t,n,l),p()))}return Object(q.jsx)("div",{children:Object(q.jsxs)("div",{className:"dropdown",children:[Object(q.jsx)("button",{type:"button",className:"btn btn-success m-1",onClick:p,children:"Rename Career"}),Object(q.jsxs)(P.b,{isOpen:m,toggle:p,children:[Object(q.jsxs)(P.e,{toggle:p,children:['Rename The Current Career: "',t[n],'"']}),Object(q.jsx)(P.c,{children:Object(q.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x()},children:[Object(q.jsxs)("div",{children:['Note: renaming this career will change the "career" attribute of all job applications saved with the career name "',t[n],"\" to the new name which you're about to enter."]}),Object(q.jsx)("input",{name:"renameCareer",id:"renameCareer",type:"text",className:"form-control",title:"Rename Career",placeholder:"New name",onChange:function(e){o(e.target.value)}}),Object(q.jsx)("button",{type:"button",className:"btn btn-success w-100",onClick:x,children:"Rename"})]})}),Object(q.jsx)(P.d,{children:Object(q.jsx)(P.a,{color:"primary",onClick:p,children:"Close"})})]})]})})}function R(e){var t=e.careersList,c=e.currentCareerNum,n=e.setCurrentCareerNum,a=Object(u.useContext)(d),r=Object(u.useState)(!1),i=Object(j.a)(r,2),l=i[0],o=i[1];function b(){o(!l)}return Object(q.jsx)("div",{children:Object(q.jsxs)("div",{className:"dropdown",children:[Object(q.jsx)("button",{type:"button",className:"btn btn-success m-1",onClick:function(){b()},children:"Switch Career"}),Object(q.jsxs)(P.b,{isOpen:l,toggle:b,children:[Object(q.jsx)(P.e,{toggle:b,children:"Select career:"}),Object(q.jsxs)(P.c,{children:[t.map((function(e,t){return Object(q.jsx)("div",{children:Object(q.jsx)("button",{type:"button",className:"btn btn-success w-100",disabled:c===t,onClick:function(){!function(e){if(a.isAuthenticated&&a.dbProfileState){var t=a.dbProfileState.username,c={currentCareerNum:e,username:t};N.a.put("/api/put/careernum",c).then((function(t){var r=Object(s.a)({},a.dbProfileState);r.current_career_num=c.currentCareerNum,a.dispatchSetDbProfile(r),n(e)})).catch((function(e){console.log("api/put/careernum err",e)}))}else n(e)}(t),b()},children:e})},t)})),Object(q.jsx)("div",{className:"text-center",children:Object(q.jsx)(y.b,{to:"/about",children:"How to delete a career"})})]}),Object(q.jsx)(P.d,{children:Object(q.jsx)(P.a,{color:"primary",onClick:b,children:"Close"})})]})]})})}function T(e){var t=e.careersList,c=e.setCareersList,n=Object(u.useContext)(d),a=Object(u.useState)(""),r=Object(j.a)(a,2),i=r[0],l=r[1],o=Object(u.useState)(!1),b=Object(j.a)(o,2),O=b[0],m=b[1];function h(){m(!O)}function p(){0!==i.length&&(t.find((function(e){return e===i}))?alert('"'.concat(i,'" already exists. Cannot create duplicate careers.')):(!function(e){if(n.isAuthenticated&&n.dbProfileState){var t={username:n.dbProfileState.username,careersList:e};N.a.put("/api/put/careerslist",t).then((function(a){console.log("api/put/careerslist res",a.data);var r=Object(s.a)({},n.dbProfileState);r.careers_list=t.careersList,n.dispatchSetDbProfile(r),c(e)})).catch((function(e){console.log("api/put/careernum err",e)}))}else c(e)}([].concat(Object(L.a)(t),[i])),h()))}return Object(q.jsx)("div",{children:Object(q.jsxs)("div",{className:"dropdown",children:[Object(q.jsx)("button",{type:"button",className:"btn btn-success m-1",onClick:function(){h()},children:"Add Career"}),Object(q.jsxs)(P.b,{isOpen:O,toggle:h,children:[Object(q.jsx)(P.e,{toggle:h,children:"New career name:"}),Object(q.jsx)(P.c,{children:Object(q.jsxs)("form",{autoFocus:!0,onSubmit:function(e){e.preventDefault(),p()},children:[Object(q.jsx)("input",{name:"newCareer",id:"newCareer",type:"text",title:"New Career",placeholder:"career",className:"form-control",onChange:function(e){l(e.target.value)}}),Object(q.jsx)("button",{type:"submit",className:"btn btn-success w-100",children:"Add"}),Object(q.jsx)("div",{className:"text-center",children:"Existing Careers:"}),t.map((function(e,t){return Object(q.jsx)("div",{children:Object(q.jsx)("button",{type:"button",className:"btn btn-outline-success w-100",disabled:!0,children:e})},t)}))]})}),Object(q.jsx)(P.d,{children:Object(q.jsx)(P.a,{color:"primary",onClick:h,children:"Close"})})]})]})})}function D(e){var t=e.setPostingURL;return Object(q.jsxs)("div",{className:"step w-50",children:[Object(q.jsx)("h3",{id:"step1Heading",children:"Job posting URL"}),Object(q.jsx)("input",{id:"jobPostingURL",name:"jobPostingURL",className:"form-control",type:"url",title:"Job Posting URL",onChange:function(e){t(e.target.value)}})]})}function F(e){var t=e.setCompanyName,c=e.setJobTitle,s=Object(u.useState)(!1),n=Object(j.a)(s,2),a=n[0],r=n[1];function i(){r(!a)}return Object(q.jsxs)("div",{className:"step w-md-75",children:[Object(q.jsx)("h3",{id:"step3Heading",children:"Company name and job title (required)"}),Object(q.jsxs)("div",{className:"d-flex justify-content-space-between justify-content-md-center gap-1 gap-md-5",children:[Object(q.jsxs)("div",{className:"d-flex flex-column",children:[Object(q.jsx)("label",{htmlFor:"jobTitle",children:"Company: "}),Object(q.jsx)("input",{id:"companyName",className:"form-control w-100",name:"companyName",type:"text",title:"Company Name",onChange:function(e){t(e.target.value)}})]}),Object(q.jsxs)("div",{className:"d-flex flex-column",children:[Object(q.jsx)("label",{htmlFor:"jobTitle",children:"Title: "}),Object(q.jsx)("input",{id:"jobTitle",className:"form-control w-100",name:"jobTitle",type:"text",title:"Job Title",onChange:function(e){c(e.target.value)}})]})]}),Object(q.jsxs)(P.b,{isOpen:a,toggle:i,children:[Object(q.jsx)(P.e,{toggle:i,children:"You are currently not logged in."}),Object(q.jsx)(P.c,{children:"If you proceed to save this application without logging in, it will be saved to the public demonstration database. It will not be saved to your personal account. Please log in to save your application privately."}),Object(q.jsx)(P.d,{children:Object(q.jsx)(P.a,{color:"primary",onClick:i,children:"Ok"})})]})]})}var _=c(42),H=c.n(_),E=(c(60),function(){return Object(q.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(q.jsx)("polygon",{className:"ql-fill ql-stroke",points:"6 10 4 12 2 10 6 10"}),Object(q.jsx)("path",{className:"ql-stroke",d:"M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"})]})}),I=function(){return Object(q.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(q.jsx)("polygon",{className:"ql-fill ql-stroke",points:"12 10 14 12 16 10 12 10"}),Object(q.jsx)("path",{className:"ql-stroke",d:"M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"})]})};function U(){this.quill.history.undo()}function M(){this.quill.history.redo()}function B(e){var t=e.id,c=(e.name,e.value),s=e.onChange,n=b.a.useRef(),a=Object(u.useState)(!1),r=Object(j.a)(a,2),i=r[0],l=r[1],o=Object(u.useState)(""),d=Object(j.a)(o,2),O=d[0],m=d[1],h=Object(u.useMemo)((function(){return{toolbar:{container:"#toolbar-".concat(t),handlers:{preview:function(e){var t=this.quill.root.innerHTML;m(t),l(!i)},undo:U,redo:M}}}}),[t,i]);return Object(q.jsxs)("div",{className:"step",children:[Object(q.jsx)("h3",{id:"step3Heading",children:"Job posting description"}),Object(q.jsxs)("div",{className:"text-editor",children:[Object(q.jsxs)("div",{id:"toolbar-".concat(t),children:[Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("button",{className:"ql-bold"}),Object(q.jsx)("button",{className:"ql-italic"}),Object(q.jsx)("button",{className:"ql-underline"})]}),Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("select",{className:"ql-align"}),Object(q.jsx)("select",{className:"ql-color"}),Object(q.jsx)("select",{className:"ql-background"})]}),Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("button",{className:"ql-list",value:"ordered"}),Object(q.jsx)("button",{className:"ql-list",value:"bullet"}),Object(q.jsx)("button",{className:"ql-indent",value:"-1"}),Object(q.jsx)("button",{className:"ql-indent",value:"+1"})]}),Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("button",{className:"ql-undo",children:Object(q.jsx)(E,{})}),Object(q.jsx)("button",{className:"ql-redo",children:Object(q.jsx)(I,{})})]}),Object(q.jsx)("span",{className:"ql-formats",children:Object(q.jsx)("button",{className:"ql-clean"})}),Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("select",{className:"ql-header",defaultValue:"",onChange:function(e){return e.persist()},children:["1","2","3","4","5","6","false"].map((function(e){return Object(q.jsx)("option",{value:e},e)}))}),Object(q.jsx)("select",{className:"ql-size",defaultValue:"",onChange:function(e){return e.persist()},children:["small","false","large","huge"].map((function(e,t){return Object(q.jsx)("option",{value:e},e)}))}),Object(q.jsxs)("select",{className:"ql-font",defaultValue:"arial",children:[Object(q.jsx)("option",{value:"arial",children:"Arial"}),Object(q.jsx)("option",{value:"comic-sans",children:"Comic Sans"}),Object(q.jsx)("option",{value:"courier-new",children:"Courier New"}),Object(q.jsx)("option",{value:"georgia",children:"Georgia"}),Object(q.jsx)("option",{value:"helvetica",children:"Helvetica"}),Object(q.jsx)("option",{value:"lucida",children:"Lucida"})]})]}),Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("button",{className:"ql-link"}),Object(q.jsx)("button",{className:"ql-image"}),Object(q.jsx)("button",{className:"ql-video"})]})]}),Object(q.jsx)(H.a,{ref:n,style:{backgroundColor:"white",minHeight:"100px"},theme:"snow",value:c,onChange:s,modules:h,formats:["bold","italic","underline","strike","script","size","header","list","indent","link","color","background","align","font","blockquote","bullet","image","code-block"]}),i?Object(q.jsx)("div",{dangerouslySetInnerHTML:{__html:O}}):""]})]})}var J=function(){return Object(q.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(q.jsx)("polygon",{className:"ql-fill ql-stroke",points:"6 10 4 12 2 10 6 10"}),Object(q.jsx)("path",{className:"ql-stroke",d:"M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"})]})},z=function(){return Object(q.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(q.jsx)("polygon",{className:"ql-fill ql-stroke",points:"12 10 14 12 16 10 12 10"}),Object(q.jsx)("path",{className:"ql-stroke",d:"M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"})]})};function V(){this.quill.history.undo()}function G(){this.quill.history.redo()}function Y(e){var t=e.id,c=e.value,s=e.onChange,n=b.a.useRef(),a=Object(u.useState)(!1),r=Object(j.a)(a,2),i=r[0],l=r[1],o=Object(u.useState)(""),d=Object(j.a)(o,2),O=d[0],m=d[1],h=Object(u.useMemo)((function(){return{toolbar:{container:"#toolbar-".concat(t),handlers:{preview:function(e){var t=this.quill.root.innerHTML;m(t),l(!i)},undo:V,redo:G}}}}),[t,i]);return Object(q.jsxs)("div",{className:"step",children:[Object(q.jsx)("h3",{id:"step4Heading",children:"Notes for this application"}),Object(q.jsxs)("div",{className:"text-editor",children:[Object(q.jsxs)("div",{id:"toolbar-".concat(t),children:[Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("button",{className:"ql-bold"}),Object(q.jsx)("button",{className:"ql-italic"}),Object(q.jsx)("button",{className:"ql-underline"})]}),Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("select",{className:"ql-align"}),Object(q.jsx)("select",{className:"ql-color"}),Object(q.jsx)("select",{className:"ql-background"})]}),Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("button",{className:"ql-list",value:"ordered"}),Object(q.jsx)("button",{className:"ql-list",value:"bullet"}),Object(q.jsx)("button",{className:"ql-indent",value:"-1"}),Object(q.jsx)("button",{className:"ql-indent",value:"+1"})]}),Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("button",{className:"ql-undo",children:Object(q.jsx)(J,{})}),Object(q.jsx)("button",{className:"ql-redo",children:Object(q.jsx)(z,{})})]}),Object(q.jsx)("span",{className:"ql-formats",children:Object(q.jsx)("button",{className:"ql-clean"})}),Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("select",{className:"ql-header",defaultValue:"",onChange:function(e){return e.persist()},children:["1","2","3","4","5","6","false"].map((function(e){return Object(q.jsx)("option",{value:e},e)}))}),Object(q.jsx)("select",{className:"ql-size",defaultValue:"",onChange:function(e){return e.persist()},children:["small","false","large","huge"].map((function(e,t){return Object(q.jsx)("option",{value:e},e)}))}),Object(q.jsxs)("select",{className:"ql-font",defaultValue:"arial",children:[Object(q.jsx)("option",{value:"arial",children:"Arial"}),Object(q.jsx)("option",{value:"comic-sans",children:"Comic Sans"}),Object(q.jsx)("option",{value:"courier-new",children:"Courier New"}),Object(q.jsx)("option",{value:"georgia",children:"Georgia"}),Object(q.jsx)("option",{value:"helvetica",children:"Helvetica"}),Object(q.jsx)("option",{value:"lucida",children:"Lucida"})]})]}),Object(q.jsxs)("span",{className:"ql-formats",children:[Object(q.jsx)("button",{className:"ql-link"}),Object(q.jsx)("button",{className:"ql-image"}),Object(q.jsx)("button",{className:"ql-video"})]})]}),Object(q.jsx)(H.a,{ref:n,style:{backgroundColor:"white",minHeight:"100px"},theme:"snow",value:c,onChange:s,modules:h,formats:["bold","italic","underline","strike","script","size","header","list","indent","link","color","background","align","font","blockquote","bullet","image","code-block"]}),i?Object(q.jsx)("div",{dangerouslySetInnerHTML:{__html:O}}):""]})]})}var W=c(43);function K(e){var t=e.setResumeFile,c=e.resumeDisplayFile,n=e.setResumeDisplayFile;return Object(q.jsxs)("div",{className:"step w-md-75",children:[Object(q.jsx)("h3",{children:"Resume"}),Object(q.jsx)(W.a,{multiple:!1,onDrop:t,children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(q.jsx)("section",{children:Object(q.jsxs)("div",Object(s.a)(Object(s.a)({},t({className:"dropzone"})),{},{children:[Object(q.jsx)("input",Object(s.a)({},a())),c.name?Object(q.jsx)("div",{children:Object(q.jsxs)("span",{className:"text-primary",children:[Object(q.jsx)("strong",{children:c.name})," - ",c.size," bytes \xa0",Object(q.jsx)("button",{className:"btn btn-outline-success",onClick:function(){n({})},children:"x"})]})}):Object(q.jsx)("h5",{children:"Drag & drop file, or click to select"})]}))})}})]})}function Q(e){var t=e.setCoverLetterFile,c=e.coverLetterDisplayFile,n=e.setCoverLetterDisplayFile;return Object(q.jsxs)("div",{className:"step w-md-75",children:[Object(q.jsx)("h3",{children:"Cover Letter"}),Object(q.jsx)(W.a,{multiple:!1,onDrop:t,children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(q.jsx)("section",{children:Object(q.jsxs)("div",Object(s.a)(Object(s.a)({},t({className:"dropzone"})),{},{children:[Object(q.jsx)("input",Object(s.a)({},a())),c.name?Object(q.jsx)("div",{children:Object(q.jsxs)("span",{className:"text-primary",children:[Object(q.jsx)("strong",{children:c.name})," - ",c.size," ","bytes \xa0",Object(q.jsx)("button",{className:"btn btn-outline-success",onClick:function(){n({})},children:"x"})]})}):Object(q.jsx)("h5",{children:"Drag & drop file, or click to select"})]}))})}})]})}function X(e){var t=e.setTags;return Object(q.jsxs)("div",{className:"step  w-50",children:[Object(q.jsx)("h3",{children:"Optional tags separated by commas"}),Object(q.jsx)("input",{id:"jobTags",name:"jobTags",className:"form-control",type:"string",title:"Job tags",onChange:function(e){t(e.target.value)}})]})}var Z=c(67);function $(e){var t=e.handleSaveApp,c=Object(u.useState)(!1),s=Object(j.a)(c,2),n=s[0],a=s[1];return Object(q.jsxs)("div",{className:"step ",children:[Object(q.jsxs)("h3",{children:["After submitting your application online, click Save\xa0",Object(q.jsxs)("span",{children:[Object(q.jsx)(Z.a,{id:"saveTipBtn"}),Object(q.jsx)(P.f,{placement:"top",autohide:!1,isOpen:n,target:"saveTipBtn",toggle:function(){a(!n)},children:"After saving this application, you can later access the saved application data to guide your interview preparation and make further edits like adding interview dates, pre-interview notes, interview Q&A prep, post-interview notes, negotiation details, ideas for improvement and more. You can keep all of your records into the future to help improve your job search skills."})]})]}),Object(q.jsx)("button",{className:"btn btn-success p-2",onClick:t,children:"Save"})]})}function ee(){var e=Object(u.useContext)(d),t=Object(u.useState)(0),c=Object(j.a)(t,2),s=c[0],n=c[1],a=Object(u.useState)(["C1","C2"]),r=Object(j.a)(a,2),i=r[0],l=r[1],o=Object(u.useState)(""),b=Object(j.a)(o,2),O=b[0],m=b[1],h=Object(u.useState)(""),p=Object(j.a)(h,2),x=p[0],f=p[1],v=Object(u.useState)(""),g=Object(j.a)(v,2),y=g[0],C=g[1],S=Object(u.useState)(""),L=Object(j.a)(S,2),P=L[0],_=L[1],H=Object(u.useState)(""),E=Object(j.a)(H,2),I=E[0],U=E[1],M=Object(u.useState)(),J=Object(j.a)(M,2),z=J[0],V=J[1],G=Object(u.useState)(),W=Object(j.a)(G,2),Z=W[0],ee=W[1],te=Object(u.useState)({}),ce=Object(j.a)(te,2),se=ce[0],ne=ce[1],ae=Object(u.useState)({}),re=Object(j.a)(ae,2),ie=re[0],le=re[1],oe=Object(u.useState)(""),je=Object(j.a)(oe,2),ue=je[0],be=je[1];function de(e){return new Promise((function(t,c){var s=new FileReader;s.onloadend=function(e){t(e.target.result)},s.onerror=function(e){c(e)},s.readAsArrayBuffer(e)}))}function Oe(){return(Oe=Object(k.a)(Object(w.a)().mark((function e(t){var c,s;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(t[0]);case 2:c=e.sent,s=new Uint8Array(c),V(s),ne(t[0]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(){return(me=Object(k.a)(Object(w.a)().mark((function e(t){var c,s;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(t[0]);case 2:c=e.sent,s=new Uint8Array(c),ee(s),le(t[0]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(){var e=new Date,t=e.getFullYear().toString(),c=(e.getMonth()+1).toString(),s=e.getDate().toString(),n=e.getHours(),a=e.getMinutes();return 1===c.length&&(c="0"+c),1===s.length&&(s="0"+s),1===n.length&&(n="0"+n),1===a.length&&(a="0"+a),parseInt(t+c+s+n+a)}return Object(u.useEffect)((function(){var t=e.dbProfileState;t&&(n(t.current_career_num),l(t.careers_list))}),[e.dbProfileState]),Object(q.jsxs)("div",{className:"centeredPage",children:[Object(q.jsx)("h5",{className:"text-center text-warning",children:"Project Under Construction"}),Object(q.jsx)("h1",{children:"Home"}),Object(q.jsxs)("h3",{children:["Current Career:\xa0",Object(q.jsx)("span",{className:"text-success",children:i[s]})]}),Object(q.jsxs)("div",{className:"d-flex",children:[Object(q.jsx)(R,{careersList:i,currentCareerNum:s,setCurrentCareerNum:n}),Object(q.jsx)(T,{careersList:i,setCareersList:l,setCurrentCareerNum:n}),Object(q.jsx)(A,{careersList:i,setCareersList:l,currentCareerNum:s})]}),Object(q.jsx)(D,{setPostingURL:m}),Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"row",children:[Object(q.jsx)("div",{className:"col",children:Object(q.jsx)(B,{id:"step3editor",name:"step3editor",value:P,onChange:_})}),Object(q.jsxs)("div",{className:"col",children:[Object(q.jsx)(F,{setCompanyName:f,setJobTitle:C}),Object(q.jsx)(Y,{id:"step4editor",value:I,onChange:U})]})]})}),Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"row",children:[Object(q.jsx)("div",{className:"col",children:Object(q.jsx)(K,{setResumeFile:function(e){return Oe.apply(this,arguments)},resumeDisplayFile:se,setResumeDisplayFile:ne})}),Object(q.jsx)("div",{className:"col",children:Object(q.jsx)(Q,{setCoverLetterFile:function(e){return me.apply(this,arguments)},coverLetterDisplayFile:ie,setCoverLetterDisplayFile:le})})]})}),Object(q.jsx)(X,{setTags:be}),Object(q.jsx)($,{handleSaveApp:function(){if(0===x.length||0===y.length)return document.querySelector("#step3Heading").style.color="red",void alert("Save unsuccessful. Required data is missing.");var t={username:e.isAuthenticated?e.user.email:"demoUser",postingURL:O,companyName:x,jobDescription:P.toString("html"),jobTitle:y,jobNotes:I.toString("html"),resumeFile:z,coverLetterFile:Z,tags:ue.split(","),careerName:i[s],applicationDate:he()};console.log(t),N.a.post("/api/post/postapp",t).then((function(t){console.log("/api/post/postapp",t),e.isAuthenticated?console.log("Saved to user ".concat(e.user.email,"'s database.")):console.log("Saved to public demonstration database."),function(){m(""),_(""),f(""),C(""),U(""),V([]),ee([]);var e=document.getElementsByTagName("input");Array.prototype.slice.call(e).forEach((function(e){e.value=""})),document.querySelector("#step1Heading").style.color="initial",document.querySelector("#step3Heading").style.color="initial"}()})).catch((function(e){console.log(e),alert("Not saved. Error: Website under development")}))}})]})}var te=function(){return Object(q.jsxs)("div",{className:"centeredPage",children:[Object(q.jsx)("h1",{children:"Search"}),Object(q.jsxs)("form",{className:"form-inline d-flex my-2 my-lg-0",children:[Object(q.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(q.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})},ce=c.p+"static/media/loading.330b7d99.svg",se=function(){return Object(q.jsxs)("div",{className:"page",children:[Object(q.jsx)("h3",{children:"Loading"}),Object(q.jsx)("img",{src:ce,alt:"Loading"})]})},ne=Object(r.c)((function(){var e=Object(r.b)(),t=e.user,c=e.logout,s=Object(u.useContext)(d);return Object(q.jsxs)("div",{className:"centeredPage",children:[Object(q.jsx)("h1",{children:"Profile"}),Object(q.jsx)("button",{className:"btn btn-primary",onClick:function(){return c()},children:"Log out"}),t.email&&Object(q.jsxs)("p",{children:["Email: ",t.email]}),t.family_name&&Object(q.jsxs)("p",{children:["Family name: ",t.family_name]}),t.given_name&&Object(q.jsxs)("p",{children:["Given name: ",t.given_name]}),t.name&&Object(q.jsxs)("p",{children:["Name: ",t.name]}),t.locale&&Object(q.jsxs)("p",{children:["Locale: ",t.locale]}),t.nickname&&Object(q.jsxs)("p",{children:["Nickname: ",t.nickname]}),t.sub&&Object(q.jsxs)("p",{children:["User ID: ",t.sub]}),Object(q.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log(s.stateAuthReducer),console.log(t)},style:{padding:"5px"},children:"Log the user profile(stateAuthReducer) to the console"})]})}),{onRedirecting:function(){return Object(q.jsx)(se,{})}}),ae=function(){return Object(q.jsxs)("div",{className:"centeredPage",children:[Object(q.jsx)("h1",{children:"About"}),Object(q.jsx)("p",{children:"About page"})]})};function re(){var e=Object(r.b)();Object(u.useEffect)((function(){if(e.isAuthenticated){var t=e.user;a(),l(t),N.a.post("/api/post/userprofiletodb",t).then(N.a.get("/api/get/userprofilefromdb",{params:{email:t.email}}).then((function(e){o(e.data[0])})))}else i(),b()}),[e.isAuthenticated,e.user]);var t=Object(u.useReducer)(g,v),c=Object(j.a)(t,2),s=c[0],n=c[1];function a(){n({type:O})}function i(){n({type:m})}function l(e){n(function(e){return{type:h,payload:e}}(e))}function o(e){n(function(e){return{type:x,payload:e}}(e))}function b(){n({type:p})}return Object(q.jsx)(d.Provider,{value:{auth0:e,user:e.user,dispatchLogin:function(){return a()},dispatchLogout:function(){return i()},dispatchSetAuthProfile:function(e){return l(e)},dispatchRemoveAuthProfile:function(){return b()},dispatchSetDbProfile:function(e){return o(e)},stateAuthReducer:s,isAuthenticated:s.isAuthenticated,dbProfileState:s.dbProfile,authProfile:s.authProfile},children:Object(q.jsxs)(y.a,{basename:"/",children:[Object(q.jsx)(S,{}),Object(q.jsxs)(C.c,{children:[Object(q.jsx)(C.a,{path:"/",element:Object(q.jsx)(ee,{})}),Object(q.jsx)(C.a,{path:"/about",element:Object(q.jsx)(ae,{})}),Object(q.jsx)(C.a,{path:"/home",element:Object(q.jsx)(ee,{})}),Object(q.jsx)(C.a,{path:"/search",element:Object(q.jsx)(te,{})}),Object(q.jsx)(C.a,{path:"/profile",element:Object(q.jsx)(ne,{})})]})]})})}c(152),c(153);a.a.createRoot(document.getElementById("root")).render(Object(q.jsx)(r.a,Object(s.a)(Object(s.a)({},o),{},{children:Object(q.jsx)(re,{})})))}},[[154,1,2]]]);
//# sourceMappingURL=main.a8550e17.chunk.js.map