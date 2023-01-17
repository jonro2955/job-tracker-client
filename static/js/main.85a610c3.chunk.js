(this["webpackJsonpjob-tracker-client"]=this["webpackJsonpjob-tracker-client"]||[]).push([[0],{160:function(e,t,c){},162:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(65),s=c.n(a),r=c(20),i=c(71),l=Object(i.a)(),o={domain:"dev-9npol9r6.us.auth0.com",clientId:"4GfZ4cfLN9HiX42YH3oWPq8NHKTiCAIS",redirectUri:window.location.origin,onRedirectCallback:function(e){l.push(e&&e.returnTo?e.returnTo:window.location.pathname)}},j=c(5),d=c(1),b=c.n(d),u=b.a.createContext(),O="LOGIN_SUCCESS",h="LOGIN_FAILURE",m="SET_PROFILE",x="REMOVE_PROFILE",p="SET_DB_PROFILE",f="REMOVE_DB_PROFILE",g={isAuthenticated:!1,dbProfile:null,authProfile:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(n.a)(Object(n.a)({},e),{},{isAuthenticated:!0});case h:return Object(n.a)(Object(n.a)({},e),{},{isAuthenticated:!1});case m:return Object(n.a)(Object(n.a)({},e),{},{authProfile:t.payload});case x:return Object(n.a)(Object(n.a)({},e),{},{authProfile:null});case p:return Object(n.a)(Object(n.a)({},e),{},{dbProfile:t.payload});case f:return Object(n.a)(Object(n.a)({},e),{},{dbProfile:null});default:return e}},N=c(169),y=c(17),C=c(7),S=c.p+"static/media/logo2.4b930b0d.png",w=c(2),k=function(){var e=Object(r.b)(),t=Object(C.l)();return Object(w.jsx)("div",{className:"d-flex justify-content-center border",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(w.jsx)("div",{className:"col  ",children:Object(w.jsx)(y.b,{to:"/",style:{padding:"5px"},children:Object(w.jsx)("img",{width:"30",height:"30",src:S,alt:"Logo"})})}),Object(w.jsx)("div",{className:"col   text-center",children:Object(w.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){e.isAuthenticated?t("/profile"):e.loginWithPopup()},children:e.isAuthenticated?e.user.email:"Log in"})}),Object(w.jsx)("div",{className:"col  "})]})})})},L=c(8),_=c(13),P=c(14),D=c(9);function R(e){var t=e.careersList,c=e.setCareersList,a=e.currentCareerNum,s=Object(d.useContext)(u),r=Object(d.useState)(t[a]),i=Object(j.a)(r,2),l=i[0],o=i[1],b=Object(d.useState)(!1),O=Object(j.a)(b,2),h=O[0],m=O[1];function x(){m(!h)}function p(){0!==l.length&&l!==t[a]&&(t.find((function(e){return e===l}))?alert('Error: "'.concat(l,'" already exists. Cannot create duplicate careers.')):(!function(e,t,a){var r=Object(P.a)(e);if(r[t]=a,s.isAuthenticated&&s.dbProfileState){var i=s.dbProfileState.username,l=e[t],o={username:i,careersList:r,oldCareerName:l,newCareerName:a};N.a.put("/api/put/renamecareer",o).then((function(e){console.log("api/put/renamecareer res.data: ",e.data);var t=Object(n.a)({},s.dbProfileState);t.careers_list=o.careersList,s.dispatchSetDbProfile(t),c(r)})).catch((function(e){console.log("api/put/careernum err",e)}))}else c(r)}(t,a,l),x()))}return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"dropdown",children:[Object(w.jsx)("button",{type:"button",className:"btn btn-success m-1",onClick:x,children:"Rename Career"}),Object(w.jsxs)(D.Modal,{isOpen:h,toggle:x,children:[Object(w.jsxs)(D.ModalHeader,{toggle:x,children:['Rename The Current Career: "',t[a],'"']}),Object(w.jsx)(D.ModalBody,{children:Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p()},children:[Object(w.jsxs)("div",{children:['Note: renaming will change the "career" attribute of all job applications saved under the career name "',t[a],'" to the new name entered below.']}),Object(w.jsx)("input",{name:"renameCareer",id:"renameCareer",type:"text",className:"form-control",title:"Rename Career",placeholder:"New name",onChange:function(e){o(e.target.value)}}),Object(w.jsx)("button",{type:"button",className:"btn btn-success w-100",onClick:p,children:"Rename"})]})}),Object(w.jsx)(D.ModalFooter,{children:Object(w.jsx)(D.Button,{color:"primary",onClick:x,children:"Cancel"})})]})]})})}function A(e){var t=e.careersList,c=e.currentCareerNum,a=e.setCurrentCareerNum,s=Object(d.useContext)(u),r=Object(d.useState)(!1),i=Object(j.a)(r,2),l=i[0],o=i[1];function b(){o(!l)}return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"dropdown",children:[Object(w.jsx)("button",{type:"button",className:"btn btn-success m-1",onClick:function(){b()},children:"Switch Career"}),Object(w.jsxs)(D.Modal,{isOpen:l,toggle:b,children:[Object(w.jsx)(D.ModalHeader,{toggle:b,children:"Select career:"}),Object(w.jsxs)(D.ModalBody,{children:[t.map((function(e,t){return Object(w.jsx)("div",{children:Object(w.jsx)("button",{type:"button",className:"btn btn-success w-100",disabled:c===t,onClick:function(){!function(e){if(s.isAuthenticated&&s.dbProfileState){var t=s.dbProfileState.username,c={currentCareerNum:e,username:t};N.a.put("/api/put/careernum",c).then((function(t){var r=Object(n.a)({},s.dbProfileState);r.current_career_num=c.currentCareerNum,s.dispatchSetDbProfile(r),a(e)})).catch((function(e){console.log("api/put/careernum err",e)}))}else a(e)}(t),b()},children:e})},t)})),Object(w.jsx)("div",{className:"text-center",children:Object(w.jsx)(y.b,{to:"/home",children:"How to delete a career"})})]}),Object(w.jsx)(D.ModalFooter,{children:Object(w.jsx)(D.Button,{color:"primary",onClick:b,children:"Cancel"})})]})]})})}function T(e){var t=e.careersList,c=e.setCareersList,a=Object(d.useContext)(u),s=Object(d.useState)(""),r=Object(j.a)(s,2),i=r[0],l=r[1],o=Object(d.useState)(!1),b=Object(j.a)(o,2),O=b[0],h=b[1];function m(){h(!O)}function x(){0!==i.length&&(t.find((function(e){return e===i}))?alert('"'.concat(i,'" already exists. Cannot create duplicate careers.')):(!function(e){if(a.isAuthenticated&&a.dbProfileState){var t={username:a.dbProfileState.username,careersList:e};N.a.put("/api/put/careerslist",t).then((function(s){console.log("api/put/careerslist res",s.data);var r=Object(n.a)({},a.dbProfileState);r.careers_list=t.careersList,a.dispatchSetDbProfile(r),c(e)})).catch((function(e){console.log("api/put/careernum err",e)}))}else c(e)}([].concat(Object(P.a)(t),[i])),m()))}return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"dropdown",children:[Object(w.jsx)("button",{type:"button",className:"btn btn-success m-1",onClick:function(){m()},children:"New Career"}),Object(w.jsxs)(D.Modal,{isOpen:O,toggle:m,children:[Object(w.jsx)(D.ModalHeader,{toggle:m,children:"New career name:"}),Object(w.jsx)(D.ModalBody,{children:Object(w.jsxs)("form",{autoFocus:!0,onSubmit:function(e){e.preventDefault(),x()},children:[Object(w.jsx)("input",{name:"newCareer",id:"newCareer",type:"text",title:"New Career",placeholder:"career",className:"form-control",onChange:function(e){l(e.target.value)}}),Object(w.jsx)("button",{type:"submit",className:"btn btn-success w-100",children:"Add"})]})}),Object(w.jsx)(D.ModalFooter,{children:Object(w.jsx)(D.Button,{color:"primary",onClick:m,children:"Cancel"})})]})]})})}var q=c(45),F=c.n(q);c(64);function E(){this.quill.history.undo()}function M(){this.quill.history.redo()}function B(e){var t=e.id,c=e.value,n=e.setJobDescription,a=e.setPostingURL,s=b.a.useRef(),r=Object(d.useState)(!1),i=Object(j.a)(r,2),l=i[0],o=i[1],u=Object(d.useState)(""),O=Object(j.a)(u,2),h=O[0],m=O[1],x=Object(d.useMemo)((function(){return{toolbar:{container:"#toolbar-".concat(t),handlers:{preview:function(e){var t=this.quill.root.innerHTML;m(t),o(!l)},undo:E,redo:M}}}}),[t,l]);return Object(w.jsxs)("div",{className:"step d-flex  flex-column ",children:[Object(w.jsx)("h3",{id:"step1Heading",children:"Posting URL"}),Object(w.jsx)("input",{id:"jobPostingURL",name:"jobPostingURL",className:"form-control",type:"url",title:"Job Posting URL",onChange:function(e){a(e.target.value)}}),Object(w.jsx)("h3",{children:"Posting Description"}),Object(w.jsxs)("div",{className:"text-editor",children:[Object(w.jsx)("div",{id:"toolbar-".concat(t),children:Object(w.jsxs)("span",{className:"ql-formats",children:[Object(w.jsx)("select",{className:"ql-header",defaultValue:"",onChange:function(e){return e.persist()},children:["1","2","3","4","5","6","false"].map((function(e){return Object(w.jsx)("option",{value:e},e)}))}),Object(w.jsx)("button",{className:"ql-bold"}),Object(w.jsx)("button",{className:"ql-italic"}),Object(w.jsx)("button",{className:"ql-underline"}),Object(w.jsx)("select",{className:"ql-align"}),Object(w.jsx)("button",{className:"ql-list",value:"bullet"}),Object(w.jsx)("button",{className:"ql-list",value:"ordered"}),Object(w.jsx)("button",{className:"ql-indent",value:"-1"}),Object(w.jsx)("button",{className:"ql-indent",value:"+1"}),Object(w.jsx)("button",{className:"ql-clean"})]})}),Object(w.jsx)(F.a,{ref:s,style:{backgroundColor:"white",minHeight:"280px",maxHeight:"900px",overflowY:"auto"},className:"step3Desc",theme:"snow",value:c,onChange:n,modules:x,formats:["bold","italic","underline","strike","script","size","header","list","indent","link","color","background","align","font","blockquote","bullet","image","code-block"]}),l?Object(w.jsx)("div",{dangerouslySetInnerHTML:{__html:h}}):""]})]})}function H(e){var t=e.setCompanyName,c=e.setJobTitle,n=e.data,a=Object(d.useState)(JSON.parse(n.data)),s=Object(j.a)(a,1)[0],r=Object(d.useState)(s.company),i=Object(j.a)(r,2),l=i[0],o=i[1],b=Object(d.useState)(s.title),u=Object(j.a)(b,2),O=u[0],h=u[1];return Object(w.jsx)("div",{className:"step w-md-75",style:{backgroundColor:"white",minHeight:"100px"},children:Object(w.jsxs)("div",{className:"step2 d-flex justify-content-space-between justify-content-md-center gap-1 gap-md-5 required",children:[Object(w.jsxs)("div",{className:"d-flex flex-column",children:[Object(w.jsx)("label",{htmlFor:"jobTitle",children:Object(w.jsx)("h3",{children:"Company:"})}),Object(w.jsx)("input",{id:"companyName",className:"form-control w-100 text-success",name:"companyName",type:"text",title:"Company Name",placeholder:"Company",value:l,onChange:function(e){o(e.target.value),t(e.target.value)}})]}),Object(w.jsxs)("div",{className:"d-flex flex-column",children:[Object(w.jsx)("label",{htmlFor:"jobTitle",children:Object(w.jsx)("h3",{children:"Title:"})}),Object(w.jsx)("input",{id:"jobTitle",className:"form-control w-100 text-success",name:"jobTitle",type:"text",title:"Job Title",placeholder:"Job Title",value:O,onChange:function(e){h(e.target.value),c(e.target.value)}})]})]})})}function I(){this.quill.history.undo()}function J(){this.quill.history.redo()}function U(e){var t=e.id,c=e.value,n=e.onChange,a=b.a.useRef(),s=Object(d.useState)(!1),r=Object(j.a)(s,2),i=r[0],l=r[1],o=Object(d.useState)(""),u=Object(j.a)(o,2),O=u[0],h=u[1],m=Object(d.useMemo)((function(){return{toolbar:{container:"#toolbar-".concat(t),handlers:{preview:function(e){var t=this.quill.root.innerHTML;h(t),l(!i)},undo:I,redo:J}}}}),[t,i]);return Object(w.jsxs)("div",{className:"step",children:[Object(w.jsx)("h3",{id:"step4Heading",children:"Application Notes"}),Object(w.jsxs)("div",{className:"text-editor",children:[Object(w.jsx)("div",{id:"toolbar-".concat(t),children:Object(w.jsxs)("span",{className:"ql-formats",children:[Object(w.jsx)("select",{className:"ql-header",defaultValue:"",onChange:function(e){return e.persist()},children:["1","2","3","4","5","6","false"].map((function(e){return Object(w.jsx)("option",{value:e},e)}))}),Object(w.jsx)("button",{className:"ql-bold"}),Object(w.jsx)("button",{className:"ql-italic"}),Object(w.jsx)("button",{className:"ql-underline"}),Object(w.jsx)("select",{className:"ql-align"}),Object(w.jsx)("button",{className:"ql-list",value:"bullet"}),Object(w.jsx)("button",{className:"ql-list",value:"ordered"}),Object(w.jsx)("button",{className:"ql-indent",value:"-1"}),Object(w.jsx)("button",{className:"ql-indent",value:"+1"}),Object(w.jsx)("button",{className:"ql-clean"})]})}),Object(w.jsx)(F.a,{ref:a,style:{backgroundColor:"white",minHeight:"150px",maxHeight:"770px",overflowY:"auto"},theme:"snow",value:c,onChange:n,modules:m,formats:["bold","italic","underline","strike","script","size","header","list","indent","link","color","background","align","font","blockquote","bullet","image","code-block"]}),i?Object(w.jsx)("div",{dangerouslySetInnerHTML:{__html:O}}):""]})]})}var z=c(46);function G(e){var t=e.setResumeFile,c=e.resumeDisplayFile,a=e.setResumeDisplayFile;return Object(w.jsxs)("div",{className:"step w-md-75",children:[Object(w.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[Object(w.jsx)("h3",{children:"Resume"}),c.name&&Object(w.jsx)("button",{className:"btn btn-outline-success",onClick:function(){a({})},children:"x"})]}),Object(w.jsx)(z.a,{multiple:!1,onDrop:t,children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(w.jsx)("section",{children:Object(w.jsxs)("div",Object(n.a)(Object(n.a)({},t({className:"dropzone"})),{},{children:[Object(w.jsx)("input",Object(n.a)({},a())),c.name?Object(w.jsx)("div",{children:Object(w.jsxs)("span",{className:"text-primary",children:[Object(w.jsx)("strong",{children:c.name})," ",c.size," bytes"," "]})}):Object(w.jsx)("strong",{children:"Drag & drop, or click to select"})]}))})}})]})}function V(e){var t=e.setCoverLetterFile,c=e.coverLetterDisplayFile,a=e.setCoverLetterDisplayFile;return Object(w.jsxs)("div",{className:"step w-md-75",children:[Object(w.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[Object(w.jsx)("h3",{children:"Cover Letter"}),c.name&&Object(w.jsx)("button",{className:"btn btn-outline-success",onClick:function(){a({})},children:"x"})]}),Object(w.jsx)(z.a,{multiple:!1,onDrop:t,children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(w.jsx)("section",{children:Object(w.jsxs)("div",Object(n.a)(Object(n.a)({},t({className:"dropzone"})),{},{children:[Object(w.jsx)("input",Object(n.a)({},a())),c.name?Object(w.jsx)("div",{children:Object(w.jsxs)("span",{className:"text-primary",children:[Object(w.jsx)("strong",{children:c.name})," ",c.size," bytes"," "]})}):Object(w.jsx)("strong",{children:"Drag & drop, or click to select"})]}))})}})]})}function Y(e){var t=e.setTags;return Object(w.jsxs)("div",{className:"step w-50",children:[Object(w.jsx)("strong",{children:"Tags Separated By Commas (Optional)"}),Object(w.jsx)("input",{id:"jobTags",name:"jobTags",className:"form-control",type:"string",title:"Job tags",onChange:function(e){t(e.target.value)}})]})}var W=c(31);function K(e){var t=e.subDate,c=e.setSubDate;return Object(w.jsxs)("div",{className:"step w-md-75",children:[Object(w.jsx)("h3",{children:"Submit Date"}),Object(w.jsx)(W.DatePicker,{id:"subDate",value:t,onChange:function(e,t){c(String(new Date(e)))},showClearButton:!1})]})}function X(){var e=Object(d.useContext)(u),t=Object(d.useState)(Object(C.n)()),c=Object(j.a)(t,2),n=c[0],a=(c[1],Object(d.useState)(0)),s=Object(j.a)(a,2),r=s[0],i=s[1],l=Object(d.useState)(["C1","C2"]),o=Object(j.a)(l,2),b=o[0],O=o[1],h=Object(d.useState)(""),m=Object(j.a)(h,2),x=m[0],p=m[1],f=Object(d.useState)(""),g=Object(j.a)(f,2),v=g[0],y=g[1],S=Object(d.useState)(""),k=Object(j.a)(S,2),P=k[0],D=k[1],q=Object(d.useState)(""),F=Object(j.a)(q,2),E=F[0],M=F[1],I=Object(d.useState)(""),J=Object(j.a)(I,2),z=J[0],W=J[1],X=Object(d.useState)(),Z=Object(j.a)(X,2),Q=Z[0],$=Z[1],ee=Object(d.useState)(),te=Object(j.a)(ee,2),ce=te[0],ne=te[1],ae=Object(d.useState)({}),se=Object(j.a)(ae,2),re=se[0],ie=se[1],le=Object(d.useState)({}),oe=Object(j.a)(le,2),je=oe[0],de=oe[1],be=Object(d.useState)(""),ue=Object(j.a)(be,2),Oe=ue[0],he=ue[1],me=Object(d.useState)(String(new Date)),xe=Object(j.a)(me,2),pe=xe[0],fe=xe[1];function ge(){return(ge=Object(_.a)(Object(L.a)().mark((function t(c){var n,a;return Object(L.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getByteArray(c[0]);case 2:n=t.sent,console.log(n),a=new Uint8Array(n),console.log(a),$(a),ie(c[0]);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ve(){return(ve=Object(_.a)(Object(L.a)().mark((function t(c){var n,a;return Object(L.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getByteArray(c[0]);case 2:n=t.sent,a=new Uint8Array(n),ne(a),de(c[0]);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(d.useEffect)((function(){var t=e.dbProfileState;t&&(i(t.current_career_num),O(t.careers_list))}),[e.dbProfileState]),Object(w.jsxs)("div",{className:"centeredPage",children:[Object(w.jsx)("h1",{children:"New Application"}),Object(w.jsxs)("h3",{children:["Career:\xa0",Object(w.jsx)("span",{className:"text-success",children:b[r]})]}),Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsx)(A,{careersList:b,currentCareerNum:r,setCurrentCareerNum:i}),Object(w.jsx)(T,{careersList:b,setCareersList:O,setCurrentCareerNum:i}),Object(w.jsx)(R,{careersList:b,setCareersList:O,currentCareerNum:r})]}),Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col",children:Object(w.jsx)(B,{id:"step3editor",name:"step3editor",value:E,setPostingURL:p,setJobDescription:M})}),Object(w.jsxs)("div",{className:"col",children:[Object(w.jsx)(H,{setCompanyName:y,setJobTitle:D,data:n}),Object(w.jsx)(U,{id:"step4editor",value:z,onChange:W})]})]})}),Object(w.jsx)("div",{className:"container w-50",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col",children:Object(w.jsx)(G,{setResumeFile:function(e){return ge.apply(this,arguments)},resumeDisplayFile:re,setResumeDisplayFile:ie})}),Object(w.jsx)("div",{className:"col",children:Object(w.jsx)(V,{setCoverLetterFile:function(e){return ve.apply(this,arguments)},coverLetterDisplayFile:je,setCoverLetterDisplayFile:de})})]})}),Object(w.jsx)(Y,{setTags:he}),Object(w.jsx)(K,{subDate:pe,setSubDate:fe}),Object(w.jsx)("div",{className:"step w-50",children:Object(w.jsx)("button",{className:"btn btn-success p-2",onClick:function(){if(0===v.length||0===P.length)return document.querySelector(".step2").style.color="red",void alert("Save unsuccessful. Required data is missing.");var t={username:e.isAuthenticated?e.user.email:"demoUser",postingURL:x,companyName:v,jobDescription:E.toString("html"),jobTitle:P,jobNotes:z.toString("html"),resumeFile:Q,coverLetterFile:ce,tags:Oe.split(","),careerName:b[r],applicationDate:String(pe)};N.a.post("/api/post/postapp",t).then((function(t){console.log("/api/post/postapp",t),e.isAuthenticated?console.log("Saved to user ".concat(e.user.email,"'s database.")):console.log("Saved to public demonstration database."),function(){p(""),M(""),y(""),D(""),W(""),$([]),ne([]);var e=document.getElementsByTagName("input");Array.prototype.slice.call(e).forEach((function(e){e.value=""})),document.querySelector(".step2").style.color="initial"}()})).catch((function(e){console.log(e),alert("Not saved. Error: Website under development")}))},children:"Save"})})]})}var Z=c(34),Q=c(33);function $(e){var t=e.allAppsList,c=Object(C.l)(),n=Object(d.useState)(!1),a=Object(j.a)(n,2),s=a[0],r=a[1],i=Object(d.useState)(""),l=Object(j.a)(i,2),o=l[0],b=l[1],u=Object(d.useState)(""),O=Object(j.a)(u,2),h=O[0],m=O[1],x=Object(d.useState)([]),p=Object(j.a)(x,2),f=p[0],g=p[1];function v(){r(!s)}return Object(d.useEffect)((function(){g(o||h?t.filter((function(e){return e.company_name.toLowerCase().includes(o.toLowerCase())&&e.job_title.toLowerCase().includes(h.toLowerCase())})):[])}),[o,h]),Object(w.jsxs)("div",{className:"dropdown text-center",children:[Object(w.jsx)("button",{type:"button",className:"btn btn-primary m-1",onClick:function(){v()},children:"+ Create"}),Object(w.jsxs)(D.Modal,{isOpen:s,toggle:v,children:[Object(w.jsx)(D.ModalHeader,{toggle:v,children:"TRACK A NEW JOB"}),Object(w.jsxs)(D.ModalBody,{children:[Object(w.jsxs)("div",{className:"step2 d-flex justify-content-space-between justify-content-md-center gap-1 gap-md-5 required",children:[Object(w.jsxs)("div",{className:"d-flex flex-column",children:[Object(w.jsx)("label",{htmlFor:"jobTitle",children:Object(w.jsx)("strong",{children:"Company: "})}),Object(w.jsx)("input",{id:"companyName",className:"form-control w-100",name:"companyName",type:"text",title:"Company Name",placeholder:"Company",value:o,onChange:function(e){b(e.target.value)}})]}),Object(w.jsxs)("div",{className:"d-flex flex-column",children:[Object(w.jsx)("label",{htmlFor:"jobTitle",children:Object(w.jsx)("strong",{children:"Job Title: "})}),Object(w.jsx)("input",{id:"jobTitle",className:"form-control w-100",name:"jobTitle",type:"text",title:"Job Title",placeholder:"Job Title",value:h,onChange:function(e){m(e.target.value)}})]})]}),Object(w.jsx)("div",{className:"step2 d-flex justify-content-space-between justify-content-md-center gap-1 gap-md-5 required"})]}),Object(w.jsxs)(D.ModalFooter,{className:"d-flex justify-content-between",children:[Object(w.jsx)(D.Button,{color:"success",disabled:!o&&!h,onClick:function(){b(""),m("")},children:"Reset"}),Object(w.jsx)(D.Button,{color:"primary",disabled:!o||!h,onClick:function(){c('/add/{"company":"'.concat(o,'","title":"').concat(h,'"}'))},children:"Add"})]}),Object(w.jsxs)(D.ModalFooter,{className:"d-flex flex-column justify-content-between align-items-center",children:[Object(w.jsx)("h5",{children:"Matching Entries"}),Object(w.jsx)("div",{children:f.length>0&&Object(w.jsxs)("table",{className:"table table-bordered text-center mt-4",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Company"}),Object(w.jsx)("th",{children:"Title"}),Object(w.jsx)("th",{children:"Application Date"})]})}),Object(w.jsx)("tbody",{children:f.map((function(e,t){var c=new Date(e.application_date);return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.company_name}),Object(w.jsx)("td",{children:e.job_title}),Object(w.jsx)("td",{children:"".concat(c.getFullYear(),"-").concat(c.getMonth()+1,"-").concat(c.getDate())})]},t)}))})]})})]})]})]})}function ee(e){var t=e.selectedSearchOption,c=e.setSelectedSearchOption;return Object(w.jsxs)("form",{className:"d-flex mt-2",children:[Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{children:[Object(w.jsx)("input",{type:"radio",name:"react-tips",value:"job_title",checked:"job_title"===t,onClick:function(){c("job_title")},className:"form-check-input",readOnly:!0}),"Job Title"]})}),"\xa0",Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{children:[Object(w.jsx)("input",{type:"radio",name:"react-tips",value:"company_name",checked:"company_name"===t,onClick:function(){c("company_name")},className:"form-check-input",readOnly:!0}),"Company"]})}),"\xa0",Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{children:[Object(w.jsx)("input",{type:"radio",name:"react-tips",value:"job_description",checked:"job_description"===t,onClick:function(){c("job_description")},className:"form-check-input",readOnly:!0}),"Description"]})})]})}function te(e){var t=e.searchString,c=e.setSearchString,n=e.loadAllRecords,a=e.resetSearchParams,s=e.selectedSearchOption,r=e.setSelectedSearchOption,i=e.dateRangeStart,l=e.setDateRangeStart,o=e.dateRangeEnd,b=e.setDateRangeEnd,u=Object(d.useState)("0"),O=Object(j.a)(u,2),h=O[0],m=O[1];return Object(w.jsx)(D.Accordion,{open:h,toggle:function(){m("1"===h?"0":"1")},children:Object(w.jsxs)(D.AccordionItem,{children:[Object(w.jsx)(D.AccordionHeader,{targetId:"1",style:{width:"100%"},children:"Search"}),Object(w.jsx)(D.AccordionBody,{accordionId:"1",children:Object(w.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center pt-3 px-2",children:[Object(w.jsxs)("form",{className:"form-inline d-flex justify-content-center align-items-center my-2 my-lg-0",onSubmit:function(e){e.preventDefault()},children:[Object(w.jsx)("div",{className:"justify-content-center align-items-center",children:"Search:\xa0"}),Object(w.jsx)("input",{className:"form-control mr-sm-2",id:"searchInput",type:"search",placeholder:"Search","aria-label":"Search",value:t,onChange:function(e){c(e.target.value)}}),Object(w.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",onClick:function(){n(),a()},children:"Reset"})]}),Object(w.jsx)(ee,{selectedSearchOption:s,setSelectedSearchOption:r}),Object(w.jsxs)("div",{className:"d-flex mt-3",children:[Object(w.jsxs)(D.FormGroup,{className:"d-flex align-items-center",children:[Object(w.jsx)(D.Label,{children:"From:\xa0"}),Object(w.jsx)(W.DatePicker,{id:"example-datepicker1",value:i,onChange:function(e,t){l(e)}})]}),"\xa0",Object(w.jsxs)(D.FormGroup,{className:"d-flex align-items-center",children:[Object(w.jsx)(D.Label,{children:"To:\xa0"}),Object(w.jsx)(W.DatePicker,{id:"example-datepicker2",value:o,onChange:function(e,t){b(e)}})]})]})]})})]})})}function ce(){var e=Object(d.useContext)(u),t=Object(d.useState)([]),c=Object(j.a)(t,2),n=c[0],a=c[1],s=Object(d.useState)([]),r=Object(j.a)(s,2),i=r[0],l=r[1],o=Object(d.useState)(""),b=Object(j.a)(o,2),O=b[0],h=b[1],m=Object(d.useState)("job_title"),x=Object(j.a)(m,2),p=x[0],f=x[1],g=Object(d.useState)(""),v=Object(j.a)(g,2),C=v[0],S=v[1],k=Object(d.useState)(""),L=Object(j.a)(k,2),_=L[0],D=L[1],R=Object(d.useState)(!0),A=Object(j.a)(R,2),T=A[0],q=A[1],F=Object(d.useState)(!0),E=Object(j.a)(F,2),M=E[0],B=E[1],H=Object(d.useState)(!0),I=Object(j.a)(H,2),J=I[0],U=I[1];function z(){if(e.isAuthenticated&&e.dbProfileState){var t=e.dbProfileState.username;N.a.get("/api/get/all-user-apps",{params:{email:t}}).then((function(e){a(e.data),l(e.data)})).catch((function(e){return console.log(e)}))}}function G(){var e=Object(P.a)(i);e.sort((function(e,t){var c=new Date(e.application_date),n=new Date(t.application_date);return T?c-n:n-c})),l(e),q(!T)}return Object(d.useEffect)((function(){!function(e){var t=C?new Date(C):new Date(0),c=_?new Date(_):new Date,a=[];n.forEach((function(n){var s=new Date(n.application_date);n[p].toLowerCase().includes(e.toLowerCase())&&s>=t&&s<=c&&a.push(n)})),l(a)}(O)}),[O,C,_]),Object(d.useEffect)((function(){z()}),[e]),Object(w.jsxs)("div",{className:"centeredPage",children:[Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col"}),Object(w.jsx)("div",{className:"col text-center",children:Object(w.jsx)("h1",{children:"My Jobs"})}),Object(w.jsx)("div",{className:"col d-flex justify-content-start",children:Object(w.jsx)($,{allAppsList:n})})]})}),Object(w.jsx)(te,{searchString:O,setSearchString:h,loadAllRecords:z,resetSearchParams:function(){h(""),S(""),D("")},selectedSearchOption:p,setSelectedSearchOption:f,dateRangeStart:C,setDateRangeStart:S,dateRangeEnd:_,setDateRangeEnd:D}),Object(w.jsxs)("table",{className:"table table-bordered text-center w-50 mt-4",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsxs)("th",{children:["Date \xa0",Object(w.jsx)("button",{onClick:G,children:Object(w.jsx)(Z.a,{icon:Q.a})})]}),Object(w.jsxs)("th",{children:["Job Title\xa0",Object(w.jsx)("button",{onClick:function(){var e=Object(P.a)(i);e.sort((function(e,t){var c=e.job_title.toLowerCase(),n=t.job_title.toLowerCase();return J?c>n?1:-1:c<n?1:-1})),l(e),U(!J)},children:Object(w.jsx)(Z.a,{icon:Q.a})})]}),Object(w.jsxs)("th",{children:["Company\xa0",Object(w.jsx)("button",{onClick:function(){var e=Object(P.a)(i);e.sort((function(e,t){var c=e.company_name.toLowerCase(),n=t.company_name.toLowerCase();return M?c>n?1:-1:c<n?1:-1})),l(e),B(!M)},children:Object(w.jsx)(Z.a,{icon:Q.a})})]}),Object(w.jsx)("th",{children:"Application"}),Object(w.jsxs)("th",{children:["Elapsed\xa0",Object(w.jsx)("button",{onClick:G,children:Object(w.jsx)(Z.a,{icon:Q.a})})]})]})}),Object(w.jsx)("tbody",{children:i.length>0&&i.map((function(e,t){var c=new Date(e.application_date),n=new Date,a=Math.ceil((n-c)/864e5);return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:Object(w.jsx)("div",{children:"".concat(c.getFullYear(),"-").concat(c.getMonth()+1,"-").concat(c.getDate())})}),Object(w.jsx)("td",{children:Object(w.jsx)("div",{children:e.job_title})}),Object(w.jsx)("td",{children:Object(w.jsx)("div",{children:e.company_name})}),Object(w.jsx)("td",{children:Object(w.jsx)(y.b,{to:"/app/".concat(e.app_id),children:"View/Edit"})}),Object(w.jsx)("td",{children:Object(w.jsx)("div",{children:"".concat(a-1," days")})})]},t)}))})]}),!i&&Object(w.jsx)("h2",{children:'Click "+ Create" to add new jobs'})]})}function ne(){var e=Object(C.n)().id,t=Object(d.useContext)(u),c=Object(d.useState)(),n=Object(j.a)(c,2),a=n[0],s=n[1];return Object(d.useEffect)((function(){t.isAuthenticated&&t.dbProfileState&&N.a.get("/api/get/app",{params:{id:e}}).then((function(e){s(e.data)})).catch((function(e){return console.log(e)}))}),[t]),a&&Object(w.jsxs)("div",{className:"centeredPage",children:[Object(w.jsxs)("h1",{children:["Application ID: ",e]}),Object(w.jsxs)("div",{children:["application_date: ",a.application_date]}),Object(w.jsxs)("div",{children:["company_name: ",a.company_name]}),Object(w.jsxs)("div",{children:["job_title: ",a.job_title]}),Object(w.jsxs)("div",{children:["career_name: ",a.career_name]}),Object(w.jsxs)("div",{children:["posting_url: ",a.posting_url]}),Object(w.jsxs)("div",{children:["job_description: ",a.job_description]}),Object(w.jsxs)("div",{children:["job_notes: ",a.job_notes]}),Object(w.jsxs)("div",{children:["tags: ",a.tags]})]})}var ae=c.p+"static/media/loading.330b7d99.svg",se=function(){return Object(w.jsxs)("div",{className:"centeredPage",children:[Object(w.jsx)("h3",{children:"Loading"}),Object(w.jsx)("img",{src:ae,alt:"Loading"})]})},re=Object(r.c)((function(){var e=Object(r.b)(),t=e.user,c=e.logout,n=Object(C.l)();return Object(w.jsxs)("div",{className:"centeredPage",children:[Object(w.jsx)("h1",{children:"Profile"}),Object(w.jsx)("button",{onClick:function(){n(-1)},children:"Back"}),t.email&&Object(w.jsxs)("p",{children:["Email: ",t.email]}),t.family_name&&Object(w.jsxs)("p",{children:["Family name: ",t.family_name]}),t.given_name&&Object(w.jsxs)("p",{children:["Given name: ",t.given_name]}),t.name&&Object(w.jsxs)("p",{children:["Name: ",t.name]}),t.locale&&Object(w.jsxs)("p",{children:["Locale: ",t.locale]}),t.nickname&&Object(w.jsxs)("p",{children:["Nickname: ",t.nickname]}),Object(w.jsx)("button",{className:"btn btn-primary",onClick:function(){return c()},children:"Log out"})]})}),{onRedirecting:function(){return Object(w.jsx)(se,{})}}),ie=c.p+"static/media/logo1.37c20868.png";function le(){return Object(w.jsxs)("div",{className:"centeredPage",children:[Object(w.jsx)("h1",{children:"Job Tracker"}),Object(w.jsx)("img",{src:ie,alt:"logo"}),Object(w.jsx)("h3",{children:"Log in"})]})}function oe(){var e=Object(r.b)();Object(d.useEffect)((function(){if(e.isAuthenticated){var t=e.user;s(),l(t),N.a.post("/api/post/userprofiletodb",t).then(N.a.get("/api/get/userprofilefromdb",{params:{email:t.email}}).then((function(e){return o(e.data[0])})).catch((function(e){return console.log(e)}))).catch((function(e){return console.log(e)}))}else i(),b()}),[e.isAuthenticated,e.user]);var t=Object(d.useReducer)(v,g),c=Object(j.a)(t,2),n=c[0],a=c[1];function s(){a({type:O})}function i(){a({type:h})}function l(e){a(function(e){return{type:m,payload:e}}(e))}function o(e){a(function(e){return{type:p,payload:e}}(e))}function b(){a({type:x})}return Object(w.jsx)(u.Provider,{value:{auth0:e,user:e.user,dispatchLogin:function(){return s()},dispatchLogout:function(){return i()},dispatchSetAuthProfile:function(e){return l(e)},dispatchRemoveAuthProfile:function(){return b()},dispatchSetDbProfile:function(e){return o(e)},stateAuthReducer:n,isAuthenticated:n.isAuthenticated,dbProfileState:n.dbProfile,authProfile:n.authProfile,getByteArray:function(e){return function(e){return new Promise((function(t,c){var n=new FileReader;n.onloadend=function(e){t(e.target.result)},n.onerror=function(e){c(e)},n.readAsArrayBuffer(e)}))}(e)}},children:Object(w.jsxs)(y.a,{basename:"/",children:[Object(w.jsx)(k,{}),Object(w.jsxs)(C.c,{children:[Object(w.jsx)(C.a,{path:"/",element:e.isAuthenticated?Object(w.jsx)(ce,{}):Object(w.jsx)(le,{})}),Object(w.jsx)(C.a,{path:"/home",element:Object(w.jsx)(le,{})}),Object(w.jsx)(C.a,{path:"/add/:data",element:Object(w.jsx)(X,{})}),Object(w.jsx)(C.a,{path:"/jobs",element:Object(w.jsx)(ce,{})}),Object(w.jsx)(C.a,{path:"/app/:id",element:Object(w.jsx)(ne,{})}),Object(w.jsx)(C.a,{path:"/profile",element:Object(w.jsx)(re,{})})]})]})})}c(160),c(161);s.a.createRoot(document.getElementById("root")).render(Object(w.jsx)(r.a,Object(n.a)(Object(n.a)({},o),{},{children:Object(w.jsx)(oe,{})})))}},[[162,1,2]]]);
//# sourceMappingURL=main.85a610c3.chunk.js.map