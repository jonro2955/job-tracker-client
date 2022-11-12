(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{69:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(41),s=c.n(a),r=c(17),i=c(11),l=Object(i.a)(),o={domain:"dev-9npol9r6.us.auth0.com",clientId:"4GfZ4cfLN9HiX42YH3oWPq8NHKTiCAIS",redirectUri:window.location.origin,onRedirectCallback:function(e){l.push(e&&e.returnTo?e.returnTo:window.location.pathname)}},j=c(7),d=c(1),b=c.n(d),u=c(8),h=c(23),O=c(2),p=function(){var e=Object(r.b)();return Object(O.jsx)("div",{className:"d-flex justify-content-center",children:Object(O.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(O.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(O.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(O.jsx)("li",{className:"nav-item active",children:Object(O.jsx)(h.a,{to:"/home",style:{padding:"5px"},children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.a,{to:"/search",style:{padding:"5px"},children:"Search"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.a,{to:"/about",style:{padding:"5px"},children:"About"})})]}),Object(O.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){e.isAuthenticated?l.replace("/profile"):e.loginWithRedirect()},children:e.isAuthenticated?e.user.email:"Log in"})]})})})},m=c(18),x=b.a.createContext(),g=c(49),f=c(20),v=c.n(f),y=c(6);function N(e){var t=e.careersList,c=e.setCareersList,n=e.currentCareerNum,a=Object(d.useState)(t[n]),s=Object(j.a)(a,2),r=s[0],i=s[1],l=Object(d.useState)(!1),o=Object(j.a)(l,2),b=o[0],u=o[1];function h(){u(!b)}return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"dropdown",children:[Object(O.jsx)("button",{type:"button",className:"btn btn-success m-1",onClick:h,children:"Rename Career"}),Object(O.jsxs)(y.b,{isOpen:b,toggle:h,children:[Object(O.jsxs)(y.e,{toggle:h,children:['Rename "',t[n],'":']}),Object(O.jsxs)(y.c,{children:[Object(O.jsx)("input",{name:"renameCareer",id:"renameCareer",type:"text",className:"form-control",title:"Rename Career",placeholder:"New name",onChange:function(e){i(e.target.value)}}),Object(O.jsx)("button",{type:"button",className:"btn btn-success w-100",onClick:function(){0!==r.length&&r!==t[n]&&(t.find((function(e){return e===r}))?alert('Error: "'.concat(r,'" already exists. Cannot create duplicate careers.')):(t[n]=r,c(Object(m.a)(t)),h()))},children:"Rename"})]}),Object(O.jsx)(y.d,{children:Object(O.jsx)(y.a,{color:"primary",onClick:h,children:"Close"})})]})]})})}function C(e){var t=e.careersList,c=e.currentCareerNum,n=e.setCurrentCareerNum,a=Object(d.useState)(!1),s=Object(j.a)(a,2),r=s[0],i=s[1];function l(){i(!r)}return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"dropdown",children:[Object(O.jsx)("button",{type:"button",className:"btn btn-success m-1",onClick:function(){l()},children:"Switch Career"}),Object(O.jsxs)(y.b,{isOpen:r,toggle:l,children:[Object(O.jsx)(y.e,{toggle:l,children:"Select career:"}),Object(O.jsxs)(y.c,{children:[t.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"button",className:"btn btn-success w-100",disabled:c===t,onClick:function(){n(t)},children:e})},t)})),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)(h.a,{to:"/about",children:"How to delete a career"})})]}),Object(O.jsx)(y.d,{children:Object(O.jsx)(y.a,{color:"primary",onClick:l,children:"Close"})})]})]})})}function T(e){var t=e.careersList,c=e.setCareersList,n=e.setCurrentCareerNum,a=Object(d.useState)(""),s=Object(j.a)(a,2),r=s[0],i=s[1],l=Object(d.useState)(!1),o=Object(j.a)(l,2),b=o[0],u=o[1];function h(){u(!b)}return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"dropdown",children:[Object(O.jsx)("button",{type:"button",className:"btn btn-success m-1",onClick:function(){h()},children:"New Career"}),Object(O.jsxs)(y.b,{isOpen:b,toggle:h,children:[Object(O.jsx)(y.e,{toggle:h,children:"New career name:"}),Object(O.jsx)(y.c,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{name:"newCareer",id:"newCareer",type:"text",title:"New Career",placeholder:"career",className:"form-control",onChange:function(e){i(e.target.value)},autoFocus:!0}),Object(O.jsx)("button",{type:"button",className:"btn btn-success w-100",onClick:function(){if(0!==r.length)if(t.find((function(e){return e===r})))alert('"'.concat(r,'" already exists. Cannot create duplicate careers.')),i("");else{var e=[].concat(Object(m.a)(t),[r]);c(e),n(e.length-1),i("")}},children:"Add"})]})}),Object(O.jsx)(y.d,{children:Object(O.jsx)(y.a,{color:"primary",onClick:h,children:"Close"})})]})]})})}function S(e){var t=e.setJobPostingURL;return Object(O.jsxs)("div",{className:"step w-50",children:[Object(O.jsx)("h3",{id:"step1Heading",children:"Copy and paste the job posting webpage URL."}),Object(O.jsx)("input",{id:"jobPostingURL",name:"jobPostingURL",className:"form-control",type:"url",title:"Job Posting URL",onChange:function(e){t(e.target.value)}})]})}function L(e){var t=e.jobDescription,c=e.setJobDescription;return Object(O.jsxs)("div",{className:"step w-50",children:[Object(O.jsx)("h3",{id:"step2Heading",children:"Copy and paste the full job posting."}),Object(O.jsx)(v.a,{id:"jobDescription",value:t,placeholder:"CLICK TO ADD TEXT",className:"richTextEditor",onChange:c,toolbarConfig:{display:["INLINE_STYLE_BUTTONS","BLOCK_TYPE_BUTTONS","LINK_BUTTONS","BLOCK_TYPE_DROPDOWN","HISTORY_BUTTONS"],INLINE_STYLE_BUTTONS:[{label:"Bold",style:"BOLD",className:"custom-css-class"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Strikethrough",style:"STRIKETHROUGH"},{label:"Monospace",style:"CODE"}],BLOCK_TYPE_DROPDOWN:[{label:"Normal",style:"unstyled"},{label:"Heading Large",style:"header-one"},{label:"Heading Medium",style:"header-two"},{label:"Heading Small",style:"header-three"}],BLOCK_TYPE_BUTTONS:[{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Blockquote",style:"blockquote"}]}})]})}function E(e){var t=e.setCompanyName,c=e.setJobTitle,n=Object(d.useState)(!1),a=Object(j.a)(n,2),s=a[0],r=a[1];function i(){r(!s)}return Object(O.jsxs)("div",{className:"step w-50",children:[Object(O.jsx)("h3",{id:"step3Heading",children:"Copy and paste company name and job title (required)."}),Object(O.jsxs)("div",{className:"d-flex justify-content-center gap-5",children:[Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("label",{htmlFor:"jobTitle",children:"Company Name: "}),Object(O.jsx)("input",{id:"companyName",className:"form-control",name:"companyName",type:"text",title:"Company Name",onChange:function(e){t(e.target.value)}})]}),Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("label",{htmlFor:"jobTitle",children:"Job Title: "}),Object(O.jsx)("input",{id:"jobTitle",className:"form-control",name:"jobTitle",type:"text",title:"Job Title",onChange:function(e){c(e.target.value)}})]})]}),Object(O.jsxs)(y.b,{isOpen:s,toggle:i,children:[Object(O.jsx)(y.e,{toggle:i,children:"You are currently not logged in."}),Object(O.jsx)(y.c,{children:"If you proceed to save this application without logging in, it will be saved to the public demonstration database. It will not be saved to your personal account. Please log in to save your application privately."}),Object(O.jsx)(y.d,{children:Object(O.jsx)(y.a,{color:"primary",onClick:i,children:"Ok"})})]})]})}var D=c(33);function R(e){var t=e.jobNotes,c=e.setJobNotes,n=Object(d.useState)(!1),a=Object(j.a)(n,2),s=a[0],r=a[1];return Object(O.jsxs)("div",{className:"step w-50",children:[Object(O.jsxs)("h3",{children:["Type in your notes for this application.\xa0",Object(O.jsxs)("span",{children:[Object(O.jsx)(D.a,{id:"noteTipBtn"}),Object(O.jsx)(y.f,{placement:"top",autohide:!1,isOpen:s,target:"noteTipBtn",toggle:function(){r(!s)},children:"Deconstruct the job description and highlight the important parts. Record notes about your analysis of the position, company research, company web links, application Q&As, quizzes, contact names, email addresses, external application sites, etc."})]})]}),Object(O.jsx)(v.a,{id:"jobNotes",value:t,placeholder:"CLICK TO ADD TEXT",className:"richTextEditor",onChange:c,toolbarConfig:{display:["INLINE_STYLE_BUTTONS","BLOCK_TYPE_BUTTONS","LINK_BUTTONS","BLOCK_TYPE_DROPDOWN","HISTORY_BUTTONS"],INLINE_STYLE_BUTTONS:[{label:"Bold",style:"BOLD",className:"custom-css-class"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Strikethrough",style:"STRIKETHROUGH"},{label:"Monospace",style:"CODE"}],BLOCK_TYPE_DROPDOWN:[{label:"Normal",style:"unstyled"},{label:"Heading Large",style:"header-one"},{label:"Heading Medium",style:"header-two"},{label:"Heading Small",style:"header-three"}],BLOCK_TYPE_BUTTONS:[{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Blockquote",style:"blockquote"}]}})]})}var w=c(50);function P(e){var t=e.handleFilesDrop,c=e.droppedFiles,a=e.setDroppedFiles;return Object(O.jsx)(w.a,{multiple:!0,onDrop:t,children:function(e){var t=e.getRootProps,s=e.getInputProps;return Object(O.jsxs)("section",{children:[Object(O.jsxs)("div",Object(n.a)(Object(n.a)({},t({className:"dropzone"})),{},{children:[Object(O.jsx)("input",Object(n.a)({},s())),Object(O.jsx)("h5",{children:"Drag & drop files, or click to select"})]})),Object(O.jsx)("div",{children:c.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsxs)("span",{class:"text-primary",children:[Object(O.jsx)("strong",{children:e.name})," - ",e.size," bytes \xa0",Object(O.jsx)("button",{className:"btn btn-outline-success",onClick:function(){!function(e){var t=Object(m.a)(c);t.splice(e,1),a(t)}(t)},children:"x"})]})},t)}))})]})}})}function I(e){var t=e.handleFilesDrop,c=e.droppedFiles,n=e.setDroppedFiles;return Object(O.jsxs)("div",{className:"step w-50",children:[Object(O.jsx)("h3",{children:"Drag and drop the documents you used in this application, such as your resume and cover letter."}),Object(O.jsx)(P,{handleFilesDrop:t,droppedFiles:c,setDroppedFiles:n})]})}function _(e){var t=e.setTags;return Object(O.jsxs)("div",{className:"step w-50",children:[Object(O.jsx)("h3",{children:"Add any optional tag words separated by commas."}),Object(O.jsx)("input",{id:"jobTags",name:"jobTags",className:"form-control",type:"string",title:"Job tags",onChange:function(e){t(e.target.value)}})]})}function A(e){var t=e.handleSubmit,c=Object(d.useState)(!1),n=Object(j.a)(c,2),a=n[0],s=n[1];return Object(O.jsxs)("div",{className:"step w-50",children:[Object(O.jsxs)("h3",{children:["After submitting your application online, click Save.",Object(O.jsxs)("span",{children:[Object(O.jsx)(D.a,{id:"saveTipBtn"}),Object(O.jsx)(y.f,{placement:"top",autohide:!1,isOpen:a,target:"saveTipBtn",toggle:function(){s(!a)},children:"After saving this application, you can later access the saved information to guide your interview preparation and make further edits like adding interview dates, pre-interview notes, interview Q&A prep, post-interview notes, negotiation details, ideas for improvement and more. You should keep all of your records into the future to help improve your job search skills."})]})]}),Object(O.jsx)("button",{className:"btn btn-success p-2",onClick:t,children:"Save"})]})}function k(){var e=Object(d.useContext)(x),t=Object(d.useState)(0),c=Object(j.a)(t,2),n=c[0],a=c[1],s=Object(d.useState)(["Default","Career 2","Career 3"]),r=Object(j.a)(s,2),i=r[0],l=r[1],o=Object(d.useState)(""),b=Object(j.a)(o,2),u=b[0],h=b[1],p=Object(d.useState)(v.a.createEmptyValue()),f=Object(j.a)(p,2),y=f[0],D=f[1],w=Object(d.useState)(""),P=Object(j.a)(w,2),k=P[0],B=P[1],U=Object(d.useState)(""),H=Object(j.a)(U,2),F=H[0],Y=H[1],K=Object(d.useState)(v.a.createEmptyValue()),J=Object(j.a)(K,2),q=J[0],M=J[1],W=Object(d.useState)([]),G=Object(j.a)(W,2),V=G[0],z=G[1],X=Object(d.useState)(""),Q=Object(j.a)(X,2),Z=Q[0],$=Q[1];function ee(){var e=new Date,t=e.getFullYear().toString(),c=(e.getMonth()+1).toString(),n=e.getDate().toString();return 1===c.length&&(c="0"+c),1===n.length&&(n="0"+n),parseInt(t+c+n)}return Object(d.useEffect)((function(){}),[n]),Object(d.useEffect)((function(){}),[i]),Object(O.jsxs)("div",{className:"centeredPage",children:[Object(O.jsx)("h1",{children:"Home"}),Object(O.jsxs)("h3",{children:["Record a new application for career:\xa0",Object(O.jsx)("span",{className:"text-success",children:i[n]})]}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)(N,{careersList:i,setCareersList:l,currentCareerNum:n}),i.length>1&&Object(O.jsx)(C,{careersList:i,currentCareerNum:n,setCurrentCareerNum:a}),Object(O.jsx)(T,{careersList:i,setCareersList:l,setCurrentCareerNum:a})]}),Object(O.jsx)(S,{setJobPostingURL:h}),Object(O.jsx)(E,{setCompanyName:B,setJobTitle:Y}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)(L,{jobDescription:y,setJobDescription:D}),Object(O.jsx)(R,{jobNotes:q,setJobNotes:M})]}),Object(O.jsx)(I,{handleFilesDrop:function(e){z([].concat(Object(m.a)(V),Object(m.a)(e)))},droppedFiles:V,setDroppedFiles:z}),Object(O.jsx)(_,{setTags:$}),Object(O.jsx)(A,{handleSubmit:function(){if(0===k.length||0===F.length)return document.querySelector("#step3Heading").style.color="red",void alert("Save unsuccessful. Required data is missing.");var t={jobPostingURL:u,jobDescription:y.toString("html"),companyName:k,jobTitle:F,jobNotes:q.toString("html"),droppedFiles:V,tags:Z,careersList:i,currentCareerNum:n,careerName:i[n],username:e.isAuthenticated?e.user.email:"demo",applicationDate:ee()};console.log(t),g.a.post("/api/post/posttodb",t).then((function(t){console.log(t),e.isAuthenticated?alert("Saved to user ".concat(e.user.email,"'s database.")):alert("Saved to public demonstration database."),console.log(t.data),function(){h(""),D(v.a.createEmptyValue()),B(""),Y(""),M(v.a.createEmptyValue()),z([]);var e=document.getElementsByTagName("input");Array.prototype.slice.call(e).forEach((function(e){e.value=""})),document.querySelector("#step1Heading").style.color="initial",document.querySelector("#step3Heading").style.color="initial"}()})).catch((function(e){console.log(e),alert("Website under development")}))}})]})}var B=function(){return Object(O.jsxs)("div",{className:"centeredPage",children:[Object(O.jsx)("h1",{children:"Search"}),Object(O.jsxs)("form",{className:"form-inline d-flex my-2 my-lg-0",children:[Object(O.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(O.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]}),Object(O.jsx)("p",{children:"If user is logged out, load a bunch of sample job applications here so that guests can use the search feature"})]})},U=c.p+"static/media/loading.330b7d99.svg",H=function(){return Object(O.jsxs)("div",{className:"page",children:[Object(O.jsx)("h3",{children:"Loading"}),Object(O.jsx)("img",{src:U,alt:"Loading"})]})},F=Object(r.c)((function(){var e=Object(r.b)(),t=e.user,c=e.logout,n=Object(d.useContext)(x);return Object(O.jsxs)("div",{className:"centeredPage",children:[Object(O.jsx)("h1",{children:"Profile"}),Object(O.jsx)("button",{onClick:function(){return c()},children:"Log out"}),t.email&&Object(O.jsxs)("p",{children:["Email: ",t.email]}),t.family_name&&Object(O.jsxs)("p",{children:["Family name: ",t.family_name]}),t.given_name&&Object(O.jsxs)("p",{children:["Given name: ",t.given_name]}),t.name&&Object(O.jsxs)("p",{children:["Name: ",t.name]}),t.locale&&Object(O.jsxs)("p",{children:["Locale: ",t.locale]}),t.nickname&&Object(O.jsxs)("p",{children:["Nickname: ",t.nickname]}),t.sub&&Object(O.jsxs)("p",{children:["User ID: ",t.sub]}),Object(O.jsx)("button",{onClick:function(){console.log(n.stateAuthReducer),console.log(t)},style:{padding:"5px"},children:"Log the user profile(stateAuthReducer) to the console"})]})}),{onRedirecting:function(){return Object(O.jsx)(H,{})}});function Y(){var e=Object(d.useContext)(x);return Object(d.useEffect)((function(){e.auth0.isAuthenticated?(e.dispatchLogin(),e.dispatchAddAuthProfile(e.auth0.user)):(e.dispatchLogout(),e.dispatchRemoveAuthProfile()),l.replace("/")})),Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"DispatchAuthPage"})})}var K=function(){return Object(O.jsxs)("div",{className:"centeredPage",children:[Object(O.jsx)("h1",{children:"About"}),Object(O.jsx)("p",{children:"About page"})]})};var J=function(){return Object(O.jsxs)(u.b,{history:l,children:[Object(O.jsx)(p,{}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/",exact:!0,component:k}),Object(O.jsx)(u.a,{path:"/about",exact:!0,component:K}),Object(O.jsx)(u.a,{path:"/home",exact:!0,component:k}),Object(O.jsx)(u.a,{path:"/search",component:B}),Object(O.jsx)(u.a,{path:"/profile",component:F}),Object(O.jsx)(u.a,{path:"/dispatchauth",component:Y})]})]})},q="LOGIN_SUCCESS",M="LOGIN_FAILURE",W="ADD_PROFILE",G="REMOVE_PROFILE",V="SET_DB_PROFILE",z="REMOVE_DB_PROFILE",X={isAuthenticated:!1,dbProfile:null,authProfile:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(n.a)(Object(n.a)({},e),{},{isAuthenticated:!0});case M:return Object(n.a)(Object(n.a)({},e),{},{isAuthenticated:!1});case W:return Object(n.a)(Object(n.a)({},e),{},{authProfile:t.payload});case G:return Object(n.a)(Object(n.a)({},e),{},{authProfile:null});case V:return Object(n.a)(Object(n.a)({},e),{},{dbProfile:t.payload});case z:return Object(n.a)(Object(n.a)({},e),{},{dbProfile:null});default:return e}};var Z=function(){var e=Object(r.b)(),t=Object(d.useReducer)(Q,X),c=Object(j.a)(t,2),n=c[0],a=c[1],s=function(){a({type:q})},i=function(){a({type:M})},o=function(e){a(function(e){return{type:W,payload:e}}(e))},b=function(){a({type:G})};return Object(d.useEffect)((function(){setTimeout((function(){l.replace("/dispatchauth")}),200)}),[e.isAuthenticated]),Object(O.jsx)(x.Provider,{value:{auth0:e,user:e.user,isAuthenticated:e.isAuthenticated,stateAuthReducer:n,dispatchLogin:function(){return s()},dispatchLogout:function(){return i()},dispatchAddAuthProfile:function(e){return o(e)},dispatchRemoveAuthProfile:function(){return b()}},children:Object(O.jsx)(J,{})})};c(69),c(70);s.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(r.a,Object(n.a)(Object(n.a)({},o),{},{children:Object(O.jsx)(Z,{})})))}},[[71,1,2]]]);
//# sourceMappingURL=main.e611be13.chunk.js.map