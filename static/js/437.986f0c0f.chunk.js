"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[437],{1437:function(e,n,r){r.r(n),r.d(n,{default:function(){return X}});var t,a,o,i,l,s=r(9439),d=r(2791),c=r(6151),u=r(890),m=r(9073),h=r(1413),x=r(6727),b=(r(4318),r(9434)),f=r(6052),p=r(6916),g=function(e){return e.filter},j=function(e){return e.contacts.items},Z=function(e){return e.contacts.isLoading},v=function(e){return e.contacts.error},y=(0,p.P1)([j,g],(function(e,n){return e&&e.length?e.filter((function(e){return e.name.toLowerCase().trim().includes(n.toLowerCase().trim())})):[]})),C=r(5705),w=r(4554),k=r(3044),S=r(7593),T=r(9823),I=r(3329),P={name:"",number:"+38"},A=x.Ry({name:x.Z_().max(20,"Max: 20 symbols").required(),number:x.Z_().phone("UK","Please enter a valid phone number in the format for UKRAINE").required("A phone number is required")}),F=function(e){var n=e.onToggleModal,r=(0,b.I0)(),t=(0,b.v9)(j),a=(0,C.TA)({initialValues:(0,h.Z)({},P),validationSchema:A,onSubmit:function(e,a){var o=a.resetForm,i=e.name,l=e.number;if(t.length&&(t.find((function(e){return e.name===i}))||t.find((function(e){return e.number===l}))))return void alert("".concat(i," is already in contacts."));r((0,f.uK)(e)),o(),n()}});return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(c.Z,{sx:{display:"block",ml:"auto"},onClick:function(){n()},children:(0,I.jsx)(T.Z,{})}),(0,I.jsxs)(w.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center",mx:"auto",width:500,height:380},children:[(0,I.jsx)(k.Z,{sx:{m:1,bgcolor:"primary.main"},children:(0,I.jsx)(m.Z,{})}),(0,I.jsx)(u.Z,{component:"h2",variant:"h5",children:"Add contact"}),(0,I.jsxs)("form",{onSubmit:a.handleSubmit,autoComplete:"off",sx:{mt:1},children:[(0,I.jsx)(S.Z,{margin:"normal",fullWidth:!0,id:"name",label:"Name",name:"name",value:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name}),(0,I.jsx)(S.Z,{margin:"normal",fullWidth:!0,id:"number",name:"number",label:"Phone",type:"tel",value:a.values.number,onChange:a.handleChange,error:a.touched.number&&Boolean(a.errors.number),helperText:a.touched.number&&a.errors.number}),(0,I.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})]})]})},_=r(3400),R=r(7247),q=r(8619),K=r(1286),M=r(6002),W=r(4960),U=r(2739),B=r(2003),L={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #1976d2",boxShadow:24,p:4,borderRadius:2},N=function(e){var n=e.children,r=e.handleClose,t=e.open;return(0,I.jsx)("div",{children:(0,I.jsx)(W.Z,{"aria-labelledby":"add-contact","aria-describedby":"add-contact-form",open:t,onClose:r,closeAfterTransition:!0,slots:{backdrop:U.Z},slotProps:{backdrop:{timeout:500}},children:(0,I.jsx)(B.Z,{in:t,children:(0,I.jsx)(w.Z,{sx:L,children:n})})})})},D=x.Ry({name:x.Z_().max(20,"Max: 20 symbols").required(),number:x.Z_().phone("UK","Please enter a valid phone number in the format for UKRAINE").required("A phone number is required")}),E=function(e){var n=e.onToggleModal,r=e.contact,t=r.name,a=r.number,o=r.id,i=(0,b.I0)(),l=(0,b.v9)(j),s=(0,C.TA)({initialValues:{name:t,number:a},validationSchema:D,onSubmit:function(e,r){var t=r.resetForm,a=e.name,s=e.number;if(l.length&&(l.find((function(e){return e.name===a&&e.id!==o}))||l.find((function(e){return e.number===s&&e.id!==o}))))return void alert("".concat(a," is already in contacts."));i((0,f.Tk)((0,h.Z)((0,h.Z)({},e),{},{id:o}))),t(),n()}});return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(c.Z,{sx:{display:"block",ml:"auto"},onClick:function(){n()},children:(0,I.jsx)(T.Z,{})}),(0,I.jsxs)(w.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center",mx:"auto",width:500,height:380},children:[(0,I.jsx)(k.Z,{sx:{m:1,bgcolor:"primary.main"},children:(0,I.jsx)(m.Z,{})}),(0,I.jsx)(u.Z,{component:"h2",variant:"h5",children:"Update contact"}),(0,I.jsxs)("form",{onSubmit:s.handleSubmit,autoComplete:"off",sx:{mt:1},children:[(0,I.jsx)(S.Z,{margin:"normal",fullWidth:!0,id:"name",label:"Name",name:"name",value:s.values.name,onChange:s.handleChange,error:s.touched.name&&Boolean(s.errors.name),helperText:s.touched.name&&s.errors.name}),(0,I.jsx)(S.Z,{margin:"normal",fullWidth:!0,id:"number",name:"number",label:"Phone",type:"tel",value:s.values.number,onChange:s.handleChange,error:s.touched.number&&Boolean(s.errors.number),helperText:s.touched.number&&s.errors.number}),(0,I.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Save"})]})]})]})},V=function(e){var n=e.name,r=e.number,t=e.id,a=(0,d.useState)(!1),o=(0,s.Z)(a,2),i=o[0],l=o[1],c=(0,b.I0)(),m=(0,d.useState)(!1),h=(0,s.Z)(m,2),x=h[0],p=h[1],g=function(){return p(!1)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(w.Z,{component:"div",sx:{display:"flex",alignItems:"center",mx:"auto",border:"1px solid #1976d2",borderRadius:1},children:[(0,I.jsxs)(w.Z,{sx:{display:"flex",alignItems:"center",width:500,ml:2},children:[(0,I.jsx)(q.Z,{sx:{mr:2,color:"#1976d2"}}),(0,I.jsx)(u.Z,{children:n})]}),(0,I.jsx)(w.Z,{sx:{textAlign:"center",width:200,height:"100%",py:1.2,borderRight:"1px solid #1976d2",borderLeft:"1px solid #1976d2"},children:(0,I.jsx)(u.Z,{sx:{textAlign:"center"},children:r})}),(0,I.jsxs)(w.Z,{sx:{display:"flex",justifyContent:"space-around",alignItems:"center",mx:"auto",width:200},children:[(0,I.jsx)(_.Z,{component:"a",href:"tel:".concat(r),edge:"end","aria-label":"delete",sx:{":hover":{bgcolor:"white",color:"green"}},color:"primary",children:(0,I.jsx)(M.Z,{})}),(0,I.jsx)(_.Z,{edge:"end","aria-label":"edit",type:"button",onClick:function(){return p(!0)},disabled:i,color:"primary",children:(0,I.jsx)(K.Z,{})}),(0,I.jsx)(_.Z,{edge:"end","aria-label":"delete",type:"button",onClick:function(){c((0,f.GK)(t)),l(!0)},disabled:i,sx:{":hover":{bgcolor:"white",color:"red"}},children:(0,I.jsx)(R.Z,{})})]})]}),x&&(0,I.jsx)(N,{handleClose:g,open:x,children:(0,I.jsx)(E,{onToggleModal:g,contact:{name:n,number:r,id:t}})})]})},z=r(168),G=r(7691),H=(G.ZP.p(t||(t=(0,z.Z)(["\n  font-weight: 500;\n"]))),G.ZP.div(a||(a=(0,z.Z)(["\n  /* display: flex;\n  gap: 8px; */\n"]))),G.ZP.button(o||(o=(0,z.Z)(["\n  background-color: transparent;\n  border: none;\n  color: red;\n  border-radius: 4px;\n  cursor: pointer;\n\n  :hover {\n    background-color: red;\n    color: white;\n  }\n"]))),r(9418)),J=function(){var e=(0,b.v9)(y),n=(0,b.v9)(Z),r=(0,b.v9)(v),t=(0,b.I0)();return(0,d.useEffect)((function(){t((0,f.yF)())}),[t]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("div",{style:{height:"16px"},children:[n&&(0,I.jsx)(H.g,{}),r&&(0,I.jsx)("p",{style:{color:"red"},children:r})]}),(0,I.jsx)(w.Z,{component:"ul",sx:{display:"flex",flexDirection:"column",gap:1},children:e.map((function(e){var n=e.name,r=e.id,t=e.number;return(0,I.jsx)(w.Z,{component:"li",sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,I.jsx)(V,{name:n,number:t,id:r})},r)}))})]})},O=(G.ZP.ul(i||(i=(0,z.Z)(["\n  /* display: flex;\n  flex-direction: column;\n  justify-content: space-between; */\n"]))),G.ZP.li(l||(l=(0,z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  /*  max-width: 360px; */\n"]))),r(4808)),Q=function(){var e=(0,b.I0)(),n=(0,b.v9)(g);return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(S.Z,{label:"Search contact",variant:"filled",sx:{display:"flex",width:.5,mt:5,mb:2,mx:"auto",boxShadow:1,color:"#1976d2",bgcolor:"rgba(25, 118, 210, 0.1)"},autoComplete:"off",type:"text",name:"filter",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:n,onChange:function(n){e((0,O.h)(n.target.value))},placeholder:"search"})})};function X(){var e=(0,d.useState)(!1),n=(0,s.Z)(e,2),r=n[0],t=n[1],a=function(){return t(!1)};return(0,I.jsxs)("div",{children:[(0,I.jsxs)(c.Z,{onClick:function(){return t(!0)},variant:"contained",sx:{display:"flex",mx:"auto",my:4},children:[(0,I.jsx)(m.Z,{fontSize:"large"}),(0,I.jsx)(u.Z,{ml:2,children:" add contact"})]}),(0,I.jsx)(Q,{}),(0,I.jsx)(J,{}),r&&(0,I.jsx)(N,{handleClose:a,open:r,children:(0,I.jsx)(F,{onToggleModal:a})})]})}}}]);
//# sourceMappingURL=437.986f0c0f.chunk.js.map