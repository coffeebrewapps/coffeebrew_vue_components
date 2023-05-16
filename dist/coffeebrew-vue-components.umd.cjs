(function(V,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(V=typeof globalThis<"u"?globalThis:V||self,e(V.CoffeebrewVueComponents={},V.Vue))})(this,function(V,e){"use strict";const ql="",D=(t,r)=>{const l=t.__vccOpts||t;for(const[a,o]of r)l[a]=o;return l},Se=[(t=>(e.pushScopeId("data-v-f3fd82e4"),t=t(),e.popScopeId(),t))(()=>e.createElementVNode("i",{class:"fa-solid fa-xmark"},null,-1))],Be={class:"container"},Ce={class:"heading"},Ee={class:"body"},Ne={class:"actions"},K=D({__name:"TDialog",props:{modelValue:{type:Boolean,default:!1},width:{type:Number,default:800},height:{type:Number,default:600},title:{type:String,default:""},fullscreen:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:r}){const l=t,a=e.ref("dialog"),o=e.computed(()=>l.modelValue?"dialog show":"dialog hide"),c=e.computed(()=>l.modelValue);function i(){r("update:modelValue",!1)}const g=e.computed(()=>{if(a.value)if(l.fullscreen){const m="90vw",y="90vh",b=`calc((100vh - ${y}) / 2)`,d=`calc((100vw - ${m}) / 2)`;return`width:${m}; height:${y}; top:${b}; left:${d};`}else{const m=`${l.width}px`,y=`${l.height}px`,b=`calc((100vh - ${y}) / 2)`,d=`calc((100vw - ${m}) / 2)`;return`width:${m}; height:${y}; top:${b}; left:${d};`}else return""});return e.onMounted(()=>{}),(m,y)=>(e.openBlock(),e.createBlock(e.Transition,{name:"dialog"},{default:e.withCtx(()=>[e.unref(c)?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(o)),ref_key:"dialog",ref:a},[e.createElementVNode("div",{class:"window",style:e.normalizeStyle(e.unref(g))},[e.createElementVNode("div",{class:"close-button",onClick:y[0]||(y[0]=b=>i())},Se),e.createElementVNode("div",Be,[e.createElementVNode("div",Ce,[e.renderSlot(m.$slots,"heading",{},()=>[e.createTextVNode(e.toDisplayString(t.title),1)],!0)]),e.createElementVNode("div",Ee,[e.renderSlot(m.$slots,"body",{},void 0,!0)]),e.createElementVNode("div",Ne,[e.renderSlot(m.$slots,"actions",{},void 0,!0)])])],4)],2)):e.createCommentVNode("",!0)]),_:3}))}},[["__scopeId","data-v-f3fd82e4"]]),$e={class:"text"},Te={__name:"TAlert",props:{modelValue:{type:Boolean,default:!1},width:{type:Number,default:400},height:{type:Number,default:200},title:{type:String,default:""},content:{type:String,default:""},fullscreen:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:r}){const l=t,a=e.ref("dialog"),o=e.computed({get:()=>l.modelValue,set:c=>{r("update:modelValue",c)}});return(c,i)=>(e.openBlock(),e.createBlock(K,{ref_key:"dialog",ref:a,modelValue:e.unref(o),"onUpdate:modelValue":i[0]||(i[0]=g=>e.isRef(o)?o.value=g:null),width:t.width,height:t.height,title:t.title,fullscreen:t.fullscreen},{body:e.withCtx(()=>[e.createElementVNode("div",$e,e.toDisplayString(t.content),1)]),_:1},8,["modelValue","width","height","title","fullscreen"]))}},Xl="",De={key:0},Q=D({__name:"TButton",props:{buttonType:{type:String,default:"text"},size:{type:String,default:"md"},value:{type:String,default:"Button"},icon:{type:String,default:""}},emits:{click:null},setup(t,{emit:r}){const l=t,a=e.computed(()=>`button ${l.buttonType} ${l.size}`.trim()),o=e.computed(()=>`${l.icon} fa-lg`.trim());return(c,i)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(a)),onClick:i[0]||(i[0]=g=>c.$emit("click"))},[t.buttonType==="text"?(e.openBlock(),e.createElementBlock("span",De,e.toDisplayString(t.value),1)):e.createCommentVNode("",!0),e.createElementVNode("i",{class:e.normalizeClass(e.unref(o))},null,2)],2))}},[["__scopeId","data-v-ba63b772"]]),vl="",we={class:"primary-text"},Pe={class:"secondary-text"},xe=D({__name:"TConfirmDialog",props:{modelValue:{type:Boolean,default:!1},width:{type:Number,default:800},height:{type:Number,default:600},title:{type:String,default:""},primaryText:{type:String,default:""},secondaryText:{type:String,default:""},fullscreen:{type:Boolean,default:!1}},emits:["update:modelValue","confirm","cancel"],setup(t,{emit:r}){const l=t,a=e.ref("dialog"),o=e.computed({get:()=>l.modelValue,set:g=>{r("update:modelValue",g)}});function c(){r("update:modelValue",!1),r("confirm")}function i(){r("update:modelValue",!1),r("cancel")}return(g,m)=>(e.openBlock(),e.createBlock(K,{ref_key:"dialog",ref:a,modelValue:e.unref(o),"onUpdate:modelValue":m[2]||(m[2]=y=>e.isRef(o)?o.value=y:null),width:t.width,height:t.height,title:t.title,fullscreen:t.fullscreen},{body:e.withCtx(()=>[e.createElementVNode("div",we,e.toDisplayString(t.primaryText),1),e.createElementVNode("div",Pe,e.toDisplayString(t.secondaryText),1)]),actions:e.withCtx(()=>[e.createVNode(Q,{class:"confirm-button","button-type":"text",value:"Confirm",icon:"fa-solid fa-check",onClick:m[0]||(m[0]=y=>c())}),e.createVNode(Q,{"button-type":"text",value:"Cancel",icon:"fa-solid fa-xmark",onClick:m[1]||(m[1]=y=>i())})]),_:1},8,["modelValue","width","height","title","fullscreen"]))}},[["__scopeId","data-v-a2f4ae4b"]]),ta="",ze={class:"input-field"},Ie={class:"input-label"},Me={key:0,class:"input-error"},Oe=D({__name:"TCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:"Input"},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:r}){const l=t,a=e.ref(l.modelValue),o=e.computed(()=>{const g=[];return g.push("input-control"),l.label.length<=10?g.push("sm"):l.label.length>10&&l.label.length<=30?g.push("md"):g.push("lg"),l.disabled&&g.push("disabled"),g.join(" ")}),c=e.computed(()=>a.value?"checkbox checked":"checkbox");function i(){l.disabled||(a.value=!a.value,r("update:modelValue",a.value))}return(g,m)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(o)),onClick:i},[e.createElementVNode("div",ze,[e.createElementVNode("div",{class:e.normalizeClass(e.unref(c))},null,2),e.createElementVNode("div",Ie,e.toDisplayString(t.label),1)]),t.errorMessage.length>0?(e.openBlock(),e.createElementBlock("div",Me,e.toDisplayString(t.errorMessage),1)):e.createCommentVNode("",!0)],2))}},[["__scopeId","data-v-9bdc9ae5"]]),aa="",C=t=>(e.pushScopeId("data-v-3976c203"),t=t(),e.popScopeId(),t),Re={class:"input-label"},Fe={class:"selected"},Le=["value"],Ae=["value"],Ye=["value"],je=["value"],He=["value"],Ue=["value"],We=["value"],Je=C(()=>e.createElementVNode("div",{class:"toggle"},[e.createElementVNode("i",{class:"fa-solid fa-calendar-days"})],-1)),qe=[C(()=>e.createElementVNode("i",{class:"fa-solid fa-broom"},null,-1))],Ge={class:"pickers"},Ke=[C(()=>e.createElementVNode("i",{class:"fa-solid fa-xmark"},null,-1))],Qe=C(()=>e.createElementVNode("div",{class:"title"},"Year",-1)),Xe=["value","onClick"],Ze={class:"value"},ve=C(()=>e.createElementVNode("i",{class:"fa-solid fa-caret-right"},null,-1)),et=C(()=>e.createElementVNode("div",{class:"title"},"Month",-1)),tt=["value","onClick"],lt={class:"value"},at=C(()=>e.createElementVNode("i",{class:"fa-solid fa-caret-right"},null,-1)),nt=C(()=>e.createElementVNode("div",{class:"title"},"Day",-1)),ot=["value","onClick"],st={class:"value"},rt=C(()=>e.createElementVNode("i",{class:"fa-solid fa-caret-right"},null,-1)),ct=C(()=>e.createElementVNode("div",{class:"title"},"Hour",-1)),it=["value","onClick"],dt={class:"value"},ft=C(()=>e.createElementVNode("i",{class:"fa-solid fa-caret-right"},null,-1)),ut=C(()=>e.createElementVNode("div",{class:"title"},"Minute",-1)),mt=["value","onClick"],pt={class:"value"},gt=C(()=>e.createElementVNode("i",{class:"fa-solid fa-caret-right"},null,-1)),ht=C(()=>e.createElementVNode("div",{class:"title"},"Second",-1)),yt=["value","onClick"],_t={class:"value"},kt=[C(()=>e.createElementVNode("i",{class:"fa-solid fa-check"},null,-1))],Vt={key:0,class:"input-error"},se=D({__name:"TDateTimePicker",props:{modelValue:{type:Date,default:null},min:{type:Date,default:null},max:{type:Date,default:null},label:{type:String,default:"Input"},displayTime:{type:Boolean,default:!0},hour12:{type:Boolean,default:!1},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1},alignPickers:{type:String,default:"center"}},emits:["update:modelValue"],setup(t,{emit:r}){const l=t;function a(n){return typeof n<"u"&&n!==null}const o=new Date,c=e.computed(()=>l.modelValue),i=e.computed(()=>l.min?l.min:new Date(o.getFullYear()-10,0,1)),g=e.computed(()=>l.max?l.max:new Date(o.getFullYear()+9,11,31)),m=e.computed(()=>[...Array(g.value.getFullYear()-i.value.getFullYear()).keys()].map(n=>n+i.value.getFullYear())),y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=e.computed(()=>{const n=P.value||i.value.getFullYear(),_=x.value||i.value.getMonth(),s=new Date(n,_,1);return s.setMonth(s.getMonth()+1),s.setDate(s.getDate()-1),Array.from(Array(s.getDate())).map((S,T)=>T+1)}),d=Array.from(Array(24)).map((n,_)=>_),N=Array.from(Array(60)).map((n,_)=>_),p=Array.from(Array(60)).map((n,_)=>_),h=e.ref("yearPicker"),E=e.ref("monthPicker"),f=e.ref("dayPicker"),B=e.ref("hourPicker"),u=e.ref("minutePicker"),M=e.ref("secondPicker"),k=e.ref("yearOptions"),$=e.ref("monthOptions"),w=e.ref("dayOptions"),ne=e.ref("hourOptions"),fe=e.ref("minuteOptions"),ue=e.ref("secondOptions"),X=e.ref([]),Z=e.ref([]),v=e.ref([]),ee=e.ref([]),te=e.ref([]),le=e.ref([]),L=e.ref("collapsed"),P=e.ref(),x=e.ref(),O=e.ref(),z=e.ref(),R=e.ref(),F=e.ref();e.ref();const J=e.ref(!1),A=e.ref(!1),Y=e.ref(!1),j=e.ref(!1),H=e.ref(!1),U=e.ref(!1),Vl=e.computed(()=>{const n=[];return n.push("input-control"),l.displayTime&&(n.push("display-time"),l.hour12?n.push("hour12"):n.push("hour24")),l.disabled&&n.push("disabled"),n.join(" ")}),bl=e.computed(()=>{const n=[];return n.push("input-field"),l.alignPickers==="top"?n.push("top-align"):l.alignPickers==="bottom"?n.push("bottom-align"):n.push("center"),L.value&&n.push(L.value),n.join(" ")}),Sl=e.computed(()=>J.value?"year picker show":"year picker hide"),Bl=e.computed(()=>A.value?"month picker show":"month picker hide"),Cl=e.computed(()=>Y.value?"day picker show":"day picker hide"),El=e.computed(()=>l.displayTime&&j.value?"hour picker show":"hour picker hide"),Nl=e.computed(()=>l.displayTime&&H.value?"minute picker show":"minute picker hide"),$l=e.computed(()=>l.displayTime&&U.value?"second picker show":"second picker hide"),G=e.computed(()=>{const n=P.value,_=x.value,s=O.value;if(!a(n)||!a(_)||!a(s))return null;if(!l.displayTime)return new Date(n,_,s);const S=z.value,T=R.value,I=F.value;return l.displayTime&&!a(S)||l.displayTime&&!a(T)||l.displayTime&&!a(I)?null:new Date(n,_,s,S,T,I)}),Tl=e.computed(()=>{const n=P.value;return a(n)?W(n,0,1,0,0,0).date.year:""}),Dl=e.computed(()=>{const n=x.value;return a(n)?W(1900,n,1,0,0,0).date.month:""}),wl=e.computed(()=>{const n=O.value;return a(n)?W(1900,0,n,0,0,0).date.day:""}),Pl=e.computed(()=>{const n=z.value;return a(n)?W(1900,0,1,n,0,0).time.hour:""}),xl=e.computed(()=>{const n=R.value;return a(n)?W(1900,0,1,0,n,0).time.minute:""}),zl=e.computed(()=>{const n=F.value;return a(n)?W(1900,0,1,0,0,n).time.second:""}),Il=e.computed(()=>{const n=z.value;return a(n)?W(1900,0,1,n,0,0).time.amPm:""});function W(n,_,s,S,T,I){const ae=new Date(n,_,s,S,T,I);n=ae.toLocaleString("default",{year:"numeric"}),_=ae.toLocaleString("default",{month:"2-digit"}),s=ae.toLocaleString("default",{day:"2-digit"});const be=ae.toLocaleTimeString("en-US",{hour12:l.hour12,hour:"2-digit",minute:"2-digit",second:"2-digit"}),oe=be.split(" ")[0].split(":");S=oe[0],T=oe[1],I=oe[2];const Jl=be.split(" ")[1];return{date:{year:n,month:_,day:s},time:{hour:S,minute:T,second:I,amPm:Jl}}}function Ml(){l.disabled||(L.value==="collapsed"?(L.value="expanded",J.value=!0,a(P.value)&&(A.value=!0),a(x.value)&&(Y.value=!0),a(O.value)&&(j.value=!0),a(z.value)&&(H.value=!0),a(R.value)&&(U.value=!0)):(L.value="collapsed",J.value=!1,A.value=!1,Y.value=!1,j.value=!1,H.value=!1,U.value=!1))}function Ol(n){return n===P.value?"option selected":"option"}function Rl(n){return parseInt(n)===parseInt(x.value)?"option selected":"option"}function Fl(n){return n===O.value?"option selected":"option"}function Ll(n){return n===z.value?"option selected":"option"}function Al(n){return n===R.value?"option selected":"option"}function Yl(n){return n===F.value?"option selected":"option"}function me(){let n=null;a(P.value)?n=X.value[m.value.indexOf(P.value)]:o<g.value?n=X.value[m.value.indexOf(o.getFullYear())]:n=X.value[m.value.indexOf(i.value.getFullYear())],k.value.scrollTop=n.offsetTop;let _=null;a(x.value)?_=Z.value[x.value]:o<g.value?_=Z.value[o.getMonth()]:_=Z.value[i.value.getMonth()],$.value.scrollTop=_.offsetTop;let s=null;if(a(O.value)?s=v.value[b.value.indexOf(O.value)]:o<g.value?s=v.value[b.value.indexOf(o.getDate())]:s=v.value[b.value.indexOf(i.value.getDate())],w.value.scrollTop=s.offsetTop,!l.displayTime)return;let S=null;a(z.value)?S=ee.value[d.indexOf(z.value)]:o<g.value?S=ee.value[d.indexOf(o.getHours())]:S=ee.value[d.indexOf(i.value.getHours())],ne.value.scrollTop=S.offsetTop;let T=null;a(R.value)?T=te.value[N.indexOf(R.value)]:o<g.value?T=te.value[N.indexOf(o.getMinutes())]:T=te.value[N.indexOf(i.value.getMinutes())],fe.value.scrollTop=T.offsetTop;let I=null;a(F.value)?I=le.value[p.indexOf(F.value)]:o<g.value?I=le.value[p.indexOf(o.getSeconds())]:I=le.value[p.indexOf(i.value.getSeconds())],ue.value.scrollTop=I.offsetTop}e.watch([P,x,O,z,R,F],()=>{me()});function pe(n){P.value=n,A.value=!0}function ge(n){x.value=n,Y.value=!0}function he(n){O.value=n,l.displayTime&&(j.value=!0)}function jl(){P.value=null,x.value=null,O.value=null,J.value=!1,A.value=!1,Y.value=!1,l.displayTime&&(z.value=null,R.value=null,F.value=null,j.value=!1,H.value=!1,U.value=!1),r("update:modelValue",G)}function Hl(){L.value="collapsed",J.value=!1,A.value=!1,Y.value=!1,j.value=!1,H.value=!1,U.value=!1,Ve()}const Ul=e.computed(()=>l.displayTime&&a(G.value)||a(G.value));function Wl(){L.value="collapsed",J.value=!1,A.value=!1,Y.value=!1,j.value=!1,H.value=!1,U.value=!1,a(G.value)?r("update:modelValue",G):l.errorMessage="Cannot submit without selecting all date/time parts!"}function ye(n){z.value=n,H.value=!0}function _e(n){R.value=n,U.value=!0}function ke(n){F.value=n}function Ve(){if(!c.value){if(P.value=null,x.value=null,O.value=null,!l.displayTime)return;z.value=null,R.value=null,F.value=null;return}pe(c.value.getFullYear()),ge(c.value.getMonth()),he(c.value.getDate()),l.displayTime&&(ye(c.value.getHours()),_e(c.value.getMinutes()),ke(c.value.getSeconds()))}const q=new IntersectionObserver(n=>{n.forEach(_=>{_.isIntersecting===!0&&me()})},{threshold:[0]});return e.onMounted(()=>{q.observe(h.value),q.observe(E.value),q.observe(f.value),l.displayTime&&(q.observe(B.value),q.observe(u.value),q.observe(M.value)),Ve()}),(n,_)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(Vl))},[e.createElementVNode("div",Re,e.toDisplayString(t.label),1),e.createElementVNode("div",{class:e.normalizeClass(e.unref(bl))},[e.createElementVNode("div",{class:"select",onClick:Ml},[e.createElementVNode("div",Fe,[e.createElementVNode("input",{disabled:"",value:e.unref(Tl)},null,8,Le),e.createElementVNode("input",{disabled:"",value:e.unref(Dl)},null,8,Ae),e.createElementVNode("input",{disabled:"",value:e.unref(wl)},null,8,Ye),t.displayTime?(e.openBlock(),e.createElementBlock("input",{key:0,disabled:"",value:e.unref(Pl)},null,8,je)):e.createCommentVNode("",!0),t.displayTime?(e.openBlock(),e.createElementBlock("input",{key:1,disabled:"",value:e.unref(xl)},null,8,He)):e.createCommentVNode("",!0),t.displayTime?(e.openBlock(),e.createElementBlock("input",{key:2,disabled:"",value:e.unref(zl)},null,8,Ue)):e.createCommentVNode("",!0),t.displayTime&&t.hour12?(e.openBlock(),e.createElementBlock("input",{key:3,disabled:"",value:e.unref(Il)},null,8,We)):e.createCommentVNode("",!0)]),Je]),e.createElementVNode("div",{class:"clean-toggle",onClick:jl},qe),e.createElementVNode("div",Ge,[e.createElementVNode("div",{class:"close-toggle",onClick:Hl},Ke),e.createElementVNode("div",{class:e.normalizeClass(e.unref(Sl)),ref_key:"yearPicker",ref:h},[Qe,e.createElementVNode("div",{class:"options",ref_key:"yearOptions",ref:k},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(m),s=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(Ol(s)),value:s,ref_for:!0,ref_key:"yearRefs",ref:X,onClick:S=>pe(s)},[e.createElementVNode("div",Ze,e.toDisplayString(s),1),ve],10,Xe))),256))],512)],2),e.createElementVNode("div",{class:e.normalizeClass(e.unref(Bl)),ref_key:"monthPicker",ref:E},[et,e.createElementVNode("div",{class:"options",ref_key:"monthOptions",ref:$},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(Object.keys(y),s=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(Rl(s)),value:s,ref_for:!0,ref_key:"monthRefs",ref:Z,onClick:S=>ge(s)},[e.createElementVNode("div",lt,e.toDisplayString(y[s]),1),at],10,tt))),256))],512)],2),e.createElementVNode("div",{class:e.normalizeClass(e.unref(Cl)),ref_key:"dayPicker",ref:f},[nt,e.createElementVNode("div",{class:"options",ref_key:"dayOptions",ref:w},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(b),s=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(Fl(s)),value:s,ref_for:!0,ref_key:"dayRefs",ref:v,onClick:S=>he(s)},[e.createElementVNode("div",st,e.toDisplayString(s),1),rt],10,ot))),256))],512)],2),e.createElementVNode("div",{class:e.normalizeClass(e.unref(El)),ref_key:"hourPicker",ref:B},[ct,e.createElementVNode("div",{class:"options",ref_key:"hourOptions",ref:ne},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),s=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(Ll(s)),value:s,ref_for:!0,ref_key:"hourRefs",ref:ee,onClick:S=>ye(s)},[e.createElementVNode("div",dt,e.toDisplayString(s),1),ft],10,it))),256))],512)],2),e.createElementVNode("div",{class:e.normalizeClass(e.unref(Nl)),ref_key:"minutePicker",ref:u},[ut,e.createElementVNode("div",{class:"options",ref_key:"minuteOptions",ref:fe},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(N),s=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(Al(s)),value:s,ref_for:!0,ref_key:"minuteRefs",ref:te,onClick:S=>_e(s)},[e.createElementVNode("div",pt,e.toDisplayString(s),1),gt],10,mt))),256))],512)],2),e.createElementVNode("div",{class:e.normalizeClass(e.unref($l)),ref_key:"secondPicker",ref:M},[ht,e.createElementVNode("div",{class:"options",ref_key:"secondOptions",ref:ue},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(p),s=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(Yl(s)),value:s,ref_for:!0,ref_key:"secondRefs",ref:le,onClick:S=>ke(s)},[e.createElementVNode("div",_t,e.toDisplayString(s),1)],10,yt))),256))],512)],2),e.unref(Ul)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"confirm-toggle",onClick:Wl},kt)):e.createCommentVNode("",!0)])],2),t.errorMessage.length>0?(e.openBlock(),e.createElementBlock("div",Vt,e.toDisplayString(t.errorMessage),1)):e.createCommentVNode("",!0)],2))}},[["__scopeId","data-v-3976c203"]]),bt={__name:"TDatePicker",props:{modelValue:{type:Date,default:new Date},min:{type:Date,default:new Date(new Date().getFullYear()-10,1,1)},max:{type:Date,default:new Date(new Date().getFullYear()+9,12,31)},label:{type:String,default:"Input"},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1},alignPickers:{type:String,default:"center"}},emits:["update:modelValue"],setup(t,{emit:r}){const l=t,a=e.computed({get:()=>l.modelValue,set:o=>{r("update:modelValue",o)}});return e.onMounted(()=>{}),(o,c)=>(e.openBlock(),e.createBlock(se,{modelValue:e.unref(a),"onUpdate:modelValue":c[0]||(c[0]=i=>e.isRef(a)?a.value=i:null),min:t.min,max:t.max,label:t.label,"display-time":!1,disabled:t.disabled,"align-pickers":t.alignPickers,"error-message":t.errorMessage},null,8,["modelValue","min","max","label","disabled","align-pickers","error-message"]))}},ca="",St={class:"input-label"},Bt={class:"input-field"},Ct=["type","value","disabled"],Et={key:0,class:"input-error"},Nt=D({__name:"TInput",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},size:{type:String,default:"md"},label:{type:String,default:"Input"},disabled:{type:Boolean,default:!1},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(t){const r=t,l=e.computed(()=>{const a=[];return a.push("input-control"),r.disabled&&a.push("disabled"),a.join(" ")});return(a,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(l))},[e.createElementVNode("div",St,e.toDisplayString(t.label),1),e.createElementVNode("div",Bt,[e.createElementVNode("input",{type:t.type,class:e.normalizeClass(t.size),value:t.modelValue,disabled:t.disabled,onInput:o[0]||(o[0]=c=>a.$emit("update:modelValue",c.target.value))},null,42,Ct)]),t.errorMessage.length>0?(e.openBlock(),e.createElementBlock("div",Et,e.toDisplayString(t.errorMessage),1)):e.createCommentVNode("",!0)],2))}},[["__scopeId","data-v-56a1e413"]]),da="",$t=["value"],re=D({__name:"TOption",props:{size:{type:String,default:"md"},value:{type:String,default:""},label:{type:String,default:"Select"},selected:{type:Boolean,default:!1}},emits:["select"],setup(t,{emit:r}){const l=t,a=e.computed(()=>l.selected?`option selected ${l.size}`.trim():`option ${l.size}`.trim());return(o,c)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(a)),value:t.value,onClick:c[0]||(c[0]=i=>o.$emit("select",t.value))},e.toDisplayString(t.label),11,$t))}},[["__scopeId","data-v-1fa7fb5e"]]),ua="",Tt=t=>(e.pushScopeId("data-v-b1367cdb"),t=t(),e.popScopeId(),t),Dt={class:"input-label"},wt=["name"],Pt={class:"selected"},xt=Tt(()=>e.createElementVNode("div",{class:"toggle"},[e.createElementVNode("i",{class:"fa-solid fa-caret-down"}),e.createElementVNode("i",{class:"fa-solid fa-caret-up"})],-1)),zt={class:"options"},It={key:0,class:"input-error"},Mt=D({__name:"TSelect",props:{modelValue:{type:String,default:""},name:{type:String,default:""},size:{type:String,default:"md"},label:{type:String,default:"Input"},options:{type:Array,default:[]},disabled:{type:Boolean,default:!1},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(t,{emit:r}){const l=t,a=e.ref("collapsed"),o=e.ref(""),c=e.computed(()=>{const d=[];return d.push("input-control"),l.size&&d.push(l.size),l.disabled&&d.push("disabled"),d.join(" ")}),i=e.computed(()=>`input-field ${a.value}`.trim()),g=e.computed(()=>{const d=l.options.find(N=>N.value===o.value);return d?d.label:""});function m(){l.disabled||(a.value==="collapsed"?a.value="expanded":a.value="collapsed")}function y(d){return d===o.value}function b(d){a.value="collapsed",o.value=d,r("update:modelValue",d)}return e.onMounted(()=>{b(l.modelValue)}),(d,N)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(c))},[e.createElementVNode("div",Dt,e.toDisplayString(t.label),1),e.createElementVNode("div",{class:e.normalizeClass(e.unref(i))},[e.createElementVNode("div",{class:"select",name:t.name,onClick:m},[e.createElementVNode("div",Pt,e.toDisplayString(e.unref(g)),1),xt],8,wt),e.createElementVNode("div",zt,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.options,p=>(e.openBlock(),e.createBlock(re,{value:p.value,label:p.label,size:t.size,selected:y(p.value),onSelect:h=>b(p.value)},null,8,["value","label","size","selected","onSelect"]))),256))])],2),t.errorMessage.length>0?(e.openBlock(),e.createElementBlock("div",It,e.toDisplayString(t.errorMessage),1)):e.createCommentVNode("",!0)],2))}},[["__scopeId","data-v-b1367cdb"]]),pa="",Ot={class:"progress-bar"},ce=D({__name:"TProgressBar",props:{step:{type:Number,default:10},speed:{type:Number,default:100},bidirection:{type:Boolean,default:!0},indefinite:{type:Boolean,default:!0}},setup(t){const r=t,l=e.ref("forward"),a=e.ref("forwardBar"),o=e.ref("reverseBar"),c=e.ref(),i=e.computed(()=>`bar forward-bar ${l.value}`),g=e.computed(()=>r.bidirection?`bar reverse-bar ${l.value}`:"bar reverse-bar hide");e.onMounted(()=>{c.value=setInterval(y,r.speed)});function m(h){return h?parseInt(h.style.width.split("%")[0]):0}function y(){r.bidirection?d():b()}function b(){const h=m(a.value);h===100?r.indefinite?N(a.value):clearInterval(c.value):p(a.value,"forward",h)}function d(){const h=m(a.value),E=m(o.value);l.value==="forward"&&h===100?(l.value="reverse",p(a.value,"reverse",h),p(o.value,"forward",E)):l.value==="reverse"&&E===100?(l.value="forward",p(a.value,"forward",h),p(o.value,"reverse",E)):l.value==="forward"?(p(a.value,"forward",h),p(o.value,"reverse",E)):l.value==="reverse"&&(p(a.value,"reverse",h),p(o.value,"forward",E))}function N(h){h.style.width="0%"}function p(h,E,f){h&&(E==="forward"?h.style.width=[(f+r.step).toString(),"%"].join(""):h.style.width=[(f-r.step).toString(),"%"].join(""))}return(h,E)=>(e.openBlock(),e.createElementBlock("div",Ot,[e.createElementVNode("div",{class:e.normalizeClass(e.unref(i)),style:{width:"0%"},ref_key:"forwardBar",ref:a},null,2),e.createElementVNode("div",{class:e.normalizeClass(e.unref(g)),style:{width:"100%"},ref_key:"reverseBar",ref:o},null,2)]))}},[["__scopeId","data-v-8639eecf"]]),ha="",ie=t=>(e.pushScopeId("data-v-f6e7fef8"),t=t(),e.popScopeId(),t),Rt={class:"table-container"},Ft={class:"table-actions"},Lt={class:"actions"},At=["onClick"],Yt={class:"tooltip"},jt={class:"header"},Ht={class:"row"},Ut={class:"col"},Wt={key:0,class:"col"},Jt={key:0,class:"loading"},qt=["colspan"],Gt={key:0,class:"body"},Kt=["colspan"],Qt={key:1,class:"body"},Xt={class:"col"},Zt={key:0,class:"col"},vt={class:"actions"},el=["onClick"],tl={class:"tooltip"},ll=ie(()=>e.createElementVNode("i",{class:"fa-solid fa-chevron-left"},null,-1)),al={class:"page-number"},nl={key:0,class:"current"},ol={class:"current"},sl=ie(()=>e.createElementVNode("i",{class:"fa-solid fa-chevron-right"},null,-1)),de=D({__name:"TTable",props:{name:{type:String,default:""},headers:{type:Array,default:[]},data:{type:Array,default:[]},totalData:{type:Number,default:0},actions:{type:Array,default:[]},tableActions:{type:Object,default:{}},pagination:{type:Object,default:{limit:5,client:!0}},loading:{type:Boolean,default:!0},dense:{type:Boolean,default:!0},noDataText:{type:String,default:"No data"}},emits:["offsetChange"],setup(t,{emit:r}){const l=t,a=e.ref(0),o=e.ref(l.pagination.limit),c=e.computed(()=>l.pagination.client?!1:l.loading),i=e.computed(()=>l.headers.length+(l.actions.length>0?1:0)),g=e.computed(()=>l.name&&l.name.length>0?"table-name show":"table-name hide"),m=e.computed(()=>l.dense?"table dense":"table");function y(u){return u%2===0?"row even":"row odd"}const b=e.computed(()=>d.value>0?"pagination show":"pagination hide"),d=e.computed(()=>l.pagination.client?l.data.length:l.totalData),N=e.computed(()=>l.pagination.client?l.data.slice(a.value,a.value+o.value):l.data),p=e.computed(()=>a.value+o.value>d.value?{start:a.value+1,end:d.value}:{start:a.value+1,end:a.value+o.value}),h=e.computed(()=>p.value.start===1?"pager left":"pager left show"),E=e.computed(()=>p.value.end===d.value?"pager right":"pager right show");function f(){p.value.start===1||(a.value-o.value<0?a.value=0:a.value=a.value-o.value),r("offsetChange",a.value)}function B(){p.value.end===d.value||(a.value=a.value+o.value),r("offsetChange",a.value)}return(u,M)=>(e.openBlock(),e.createElementBlock("div",Rt,[e.createElementVNode("div",Ft,[e.renderSlot(u.$slots,"table-actions",e.normalizeProps(e.guardReactiveProps({name:t.name,actions:t.tableActions})),()=>[e.createElementVNode("div",{class:e.normalizeClass(e.unref(g))},[e.renderSlot(u.$slots,"table-name",e.normalizeProps(e.guardReactiveProps({name:t.name})),()=>[e.createTextVNode(e.toDisplayString(t.name),1)],!0)],2),e.createElementVNode("div",Lt,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.tableActions,k=>(e.openBlock(),e.createElementBlock("div",{class:"action",onClick:$=>k.click(t.data)},[e.renderSlot(u.$slots,"table-action",e.normalizeProps(e.guardReactiveProps({action:k,data:t.data})),()=>[e.createElementVNode("i",{class:e.normalizeClass(k.icon)},null,2),e.createElementVNode("span",Yt,e.toDisplayString(k.name),1)],!0)],8,At))),256))])],!0)]),e.createElementVNode("table",{class:e.normalizeClass(e.unref(m))},[e.createElementVNode("thead",jt,[e.createElementVNode("tr",Ht,[e.renderSlot(u.$slots,"header-row",e.normalizeProps(e.guardReactiveProps({headers:t.headers,actions:t.actions})),()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.headers,(k,$)=>(e.openBlock(),e.createElementBlock("th",Ut,[e.renderSlot(u.$slots,`header-col.${k.key}`,e.normalizeProps(e.guardReactiveProps({header:k,i:$})),()=>[e.createTextVNode(e.toDisplayString(k.label),1)],!0)]))),256)),t.actions.length>0?(e.openBlock(),e.createElementBlock("th",Wt,[e.renderSlot(u.$slots,"header-actions",e.normalizeProps(e.guardReactiveProps({actions:t.actions})),void 0,!0)])):e.createCommentVNode("",!0)],!0)]),e.unref(c)?(e.openBlock(),e.createElementBlock("tr",Jt,[e.renderSlot(u.$slots,"progress-bar",e.normalizeProps(e.guardReactiveProps({headers:t.headers,actions:t.actions,span:e.unref(i)})),()=>[e.createElementVNode("th",{colspan:e.unref(i)},[e.createVNode(ce)],8,qt)],!0)])):e.createCommentVNode("",!0)]),e.unref(d)===0?(e.openBlock(),e.createElementBlock("tbody",Gt,[e.createElementVNode("tr",{class:e.normalizeClass(y(0))},[e.createElementVNode("td",{class:"col center",colspan:e.unref(i)},e.toDisplayString(t.noDataText),9,Kt)],2)])):e.createCommentVNode("",!0),e.unref(d)>0?(e.openBlock(),e.createElementBlock("tbody",Qt,[e.unref(c)?e.createCommentVNode("",!0):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(e.unref(N),(k,$)=>(e.openBlock(),e.createElementBlock("tr",{class:e.normalizeClass(y($))},[e.renderSlot(u.$slots,"data-row",e.normalizeProps(e.guardReactiveProps({headers:t.headers,row:k,actions:t.actions,i:$})),()=>[e.renderSlot(u.$slots,"data-content",e.normalizeProps(e.guardReactiveProps({headers:t.headers,row:k,i:$})),()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.headers,w=>(e.openBlock(),e.createElementBlock("td",Xt,[e.renderSlot(u.$slots,`data-col.${w.key}`,e.normalizeProps(e.guardReactiveProps({header:w,row:k,i:$})),()=>[e.createTextVNode(e.toDisplayString(k[w.key]),1)],!0)]))),256))],!0),t.actions.length>0?(e.openBlock(),e.createElementBlock("td",Zt,[e.renderSlot(u.$slots,"data-actions",e.normalizeProps(e.guardReactiveProps({row:k,actions:t.actions,i:$})),()=>[e.createElementVNode("div",vt,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.actions,w=>(e.openBlock(),e.createElementBlock("div",{class:"action",onClick:ne=>w.click(k,$)},[e.renderSlot(u.$slots,"data-action",e.normalizeProps(e.guardReactiveProps({row:k,action:w,i:$})),()=>[e.createElementVNode("i",{class:e.normalizeClass(w.icon)},null,2),e.createElementVNode("span",tl,e.toDisplayString(w.name),1)],!0)],8,el))),256))])],!0)])):e.createCommentVNode("",!0)],!0)],2))),256))])):e.createCommentVNode("",!0)],2),e.createElementVNode("div",{class:e.normalizeClass(e.unref(b))},[e.renderSlot(u.$slots,"pagination",e.normalizeProps(e.guardReactiveProps({pageLeft:f,pageRight:B,start:e.unref(p).start,end:e.unref(p).end,total:e.unref(d)})),()=>[e.createElementVNode("div",{class:e.normalizeClass(e.unref(h)),onClick:M[0]||(M[0]=k=>f())},[e.renderSlot(u.$slots,"pager-left",{},()=>[ll],!0)],2),e.createElementVNode("div",al,[e.renderSlot(u.$slots,"page-number",e.normalizeProps(e.guardReactiveProps({start:e.unref(p).start,end:e.unref(p).end,total:e.unref(d)})),()=>[e.unref(p).start!==e.unref(p).end?(e.openBlock(),e.createElementBlock("span",nl,e.toDisplayString(e.unref(p).start)+" - ",1)):e.createCommentVNode("",!0),e.createElementVNode("span",ol,e.toDisplayString(e.unref(p).end),1),e.createTextVNode(" / "+e.toDisplayString(e.unref(d)),1)],!0)]),e.createElementVNode("div",{class:e.normalizeClass(e.unref(E)),onClick:M[1]||(M[1]=k=>B())},[e.renderSlot(u.$slots,"pager-right",{},()=>[sl],!0)],2)],!0)],2)]))}},[["__scopeId","data-v-f6e7fef8"]]),_a="",rl=t=>(e.pushScopeId("data-v-a74dd1fd"),t=t(),e.popScopeId(),t),cl={class:"input-label"},il={class:"select"},dl={class:"selected"},fl={class:"tag"},ul=rl(()=>e.createElementVNode("div",{class:"toggle"},[e.createElementVNode("i",{class:"fa-solid fa-magnifying-glass"})],-1)),ml={key:0,class:"input-error"},pl=D({__name:"TSelectTable",props:{modelValue:{type:Array,default(){return[]}},multiple:{type:Boolean,default:!0},name:{type:String,default:""},size:{type:String,default:"md"},label:{type:String,default:"Input"},optionsLoading:{type:Boolean,default:!1},options:{type:Array,default(){return[]}},optionsLength:{type:Number,default:0},pagination:{type:Object,default(){return{limit:5,client:!0}}},disabled:{type:Boolean,default:!1},errorMessage:{type:String,default:""}},emits:["update:modelValue","offsetChange"],setup(t,{emit:r}){const l=t,a=e.ref(!1),o=e.computed(()=>[{key:"value",type:"text",label:"Value"},{key:"label",type:"text",label:"Label"}]),c=e.ref([{name:"Select",icon:"",click:function(f,B){N(f)}}]),i=e.computed(()=>{const f=[];return f.push("input-control"),l.size&&f.push(l.size),l.disabled&&f.push("disabled"),f.join(" ")});function g(f){return m.value.find(u=>u===f.value)?"checkbox checked":"checkbox"}const m=e.computed(()=>l.modelValue?l.modelValue.map(f=>f.value):[]);e.ref({});const y=e.computed(()=>l.modelValue?l.modelValue.map(f=>f.label):[]);function b(){l.disabled||(a.value=!a.value)}function d(){a.value=!1}function N(f){l.multiple?r("update:modelValue",p(f)):r("update:modelValue",h(f))}function p(f){const B=Array.from(l.modelValue||[]),u=m.value.findIndex(M=>M===f.value);return u<0?B.push({value:f.value,label:f.label}):B.splice(u,1),B}function h(f){return Array.from(l.modelValue||[]),m.value.findIndex(u=>u===f.value)<0?[{value:f.value,label:f.label}]:[]}function E(f){r("offsetChange",f)}return e.onMounted(()=>{}),(f,B)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(i))},[e.createElementVNode("div",cl,e.toDisplayString(t.label),1),e.createElementVNode("div",{class:"input-field",onClick:b},[e.createElementVNode("div",il,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(y),u=>(e.openBlock(),e.createElementBlock("div",dl,[e.createElementVNode("div",fl,e.toDisplayString(u),1)]))),256))]),ul]),t.errorMessage.length>0?(e.openBlock(),e.createElementBlock("div",ml,e.toDisplayString(t.errorMessage),1)):e.createCommentVNode("",!0),e.createVNode(e.Transition,{name:"dialog"},{default:e.withCtx(()=>[a.value?(e.openBlock(),e.createBlock(K,{key:0,modelValue:a.value,"onUpdate:modelValue":B[1]||(B[1]=u=>a.value=u),title:"Select",width:800,height:600,class:"options-dialog"},{body:e.withCtx(()=>[e.createVNode(de,{name:t.name,headers:e.unref(o),data:t.options,actions:c.value,loading:t.optionsLoading,"total-data":t.optionsLength,pagination:t.pagination,onOffsetChange:E},{"data-action":e.withCtx(({row:u,action:M,i:k})=>[e.createElementVNode("div",{class:e.normalizeClass(g(u))},null,2)]),_:1},8,["name","headers","data","actions","loading","total-data","pagination"])]),actions:e.withCtx(()=>[e.createVNode(Q,{"button-type":"text",value:"Done",icon:"fa-solid fa-check",onClick:B[0]||(B[0]=u=>d())})]),_:1},8,["modelValue"])):e.createCommentVNode("",!0)]),_:1})],2))}},[["__scopeId","data-v-a74dd1fd"]]),Va="",gl={class:"input-label"},hl={class:"input-field"},yl=["rows","cols","value","disabled"],_l={key:0,class:"input-error"},kl=D({__name:"TTextarea",props:{modelValue:{type:String,default:""},rows:{type:Number,default:10},cols:{type:Number,default:100},label:{type:String,default:"Input"},disabled:{type:Boolean,default:!1},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(t){const r=t,l=e.computed(()=>{const o=[];return o.push("input-control"),r.disabled&&o.push("disabled"),o.join(" ")}),a=e.computed(()=>({rows:r.rows||10,cols:r.cols||100}));return(o,c)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(l))},[e.createElementVNode("div",gl,e.toDisplayString(t.label),1),e.createElementVNode("div",hl,[e.createElementVNode("textarea",{rows:e.unref(a).rows,cols:e.unref(a).cols,value:t.modelValue,disabled:t.disabled,onInput:c[0]||(c[0]=i=>o.$emit("update:modelValue",i.target.value))},`
      `,40,yl)]),t.errorMessage.length>0?(e.openBlock(),e.createElementBlock("div",_l,e.toDisplayString(t.errorMessage),1)):e.createCommentVNode("",!0)],2))}},[["__scopeId","data-v-cb34fa62"]]),Sa="",Ba="",Ca="";V.TAlert=Te,V.TButton=Q,V.TCheckbox=Oe,V.TConfirmDialog=xe,V.TDatePicker=bt,V.TDateTimePicker=se,V.TDialog=K,V.TInput=Nt,V.TOption=re,V.TProgressBar=ce,V.TSelect=Mt,V.TSelectTable=pl,V.TTable=de,V.TTextarea=kl,Object.defineProperty(V,Symbol.toStringTag,{value:"Module"})});
