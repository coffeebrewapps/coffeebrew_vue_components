import{r as m,c as y,o as d,a as r,b as t,t as u,u as l,F as O,d as z,n as D,e as E,f as ue,w as x,i as me,p as se,g as ie,h as ce,j as M,k as h,l as U,m as B,q as j,_ as ge,s as he}from"./index-998f2a42.js";const q=(e,s)=>{const i=e.__vccOpts||e;for(const[a,c]of s)i[a]=c;return i},ye={class:"menu-bar"},be={class:"container"},Te={class:"heading"},_e={class:"body"},we={class:"actions"},ke={__name:"TDialog",props:{modelValue:{type:Boolean,default:!1},width:{type:Number,default:800},height:{type:Number,default:600},title:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:s}){const i=e,a=m("dialog"),c=y(()=>i.modelValue?"dialog show":"dialog hide");function V(){s("update:modelValue",!1)}return ce(()=>{a.value.style.width=`${i.width}px`,a.value.style.height=`${i.height}px`,a.value.style.top=`calc((100vh - ${a.value.style.height}) / 2)`,a.value.style.left=`calc((100vw - ${a.value.style.width}) / 2)`}),(T,I)=>(d(),r("div",{class:D(l(c)),ref_key:"dialog",ref:a},[t("div",ye,[M(T.$slots,"menu-bar",{},()=>[t("div",{class:"menu-button close",onClick:I[0]||(I[0]=_=>V())})],!0)]),t("div",be,[t("div",Te,[M(T.$slots,"heading",{},()=>[j(u(e.title),1)],!0)]),t("div",_e,[M(T.$slots,"body",{},void 0,!0)]),t("div",we,[M(T.$slots,"actions",{},void 0,!0)])])],2))}},ve=q(ke,[["__scopeId","data-v-295738d8"]]),Ve={class:"text"},De={__name:"TAlert",props:{modelValue:{type:Boolean,default:!1},width:{type:Number,default:400},height:{type:Number,default:200},title:{type:String,default:""},content:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:s}){const i=e,a=m("dialog"),c=y({get:()=>i.modelValue,set:V=>{s("update:modelValue",V)}});return(V,T)=>(d(),ue(ve,{ref_key:"dialog",ref:a,modelValue:l(c),"onUpdate:modelValue":T[0]||(T[0]=I=>me(c)?c.value=I:null),width:e.width,height:e.height,title:e.title},{body:x(()=>[t("div",Ve,u(e.content),1)]),_:1},8,["modelValue","width","height","title"]))}},Ce={key:0},$e={__name:"TButton",props:{buttonType:{type:String,default:"text"},size:{type:String,default:"md"},value:{type:String,default:"Button"},icon:{type:String,default:""}},emits:{click:null},setup(e,{emit:s}){const i=e,a=y(()=>`button ${i.buttonType} ${i.size}`.trim()),c=y(()=>`${i.icon} fa-lg`.trim());return(V,T)=>(d(),r("div",{class:D(l(a)),onClick:T[0]||(T[0]=I=>V.$emit("click"))},[e.buttonType==="text"?(d(),r("span",Ce,u(e.value),1)):E("",!0),t("i",{class:D(l(c))},null,2)],2))}},ae=q($e,[["__scopeId","data-v-c26a9562"]]),Se={class:"primary-text"},Ie={class:"secondary-text"},xe={__name:"TConfirmDialog",props:{modelValue:{type:Boolean,default:!1},width:{type:Number,default:800},height:{type:Number,default:600},title:{type:String,default:""},primaryText:{type:String,default:""},secondaryText:{type:String,default:""}},emits:["update:modelValue","confirm","cancel"],setup(e,{emit:s}){const i=e,a=m("dialog"),c=y({get:()=>i.modelValue,set:I=>{s("update:modelValue",I)}});function V(){s("update:modelValue",!1),s("confirm")}function T(){s("update:modelValue",!1),s("cancel")}return(I,_)=>(d(),ue(ve,{ref_key:"dialog",ref:a,modelValue:l(c),"onUpdate:modelValue":_[2]||(_[2]=b=>me(c)?c.value=b:null),width:e.width,height:e.height,title:e.title},{body:x(()=>[t("div",Se,u(e.primaryText),1),t("div",Ie,u(e.secondaryText),1)]),actions:x(()=>[h(ae,{class:"confirm-button","button-type":"text",value:"Confirm",icon:"fa-solid fa-check",onClick:_[0]||(_[0]=b=>V())}),h(ae,{"button-type":"text",value:"Cancel",icon:"fa-solid fa-xmark",onClick:_[1]||(_[1]=b=>T())})]),_:1},8,["modelValue","width","height","title"]))}},Me=q(xe,[["__scopeId","data-v-87937dbc"]]),Ae={class:"input-label"},Ne={key:0,class:"input-error"},Oe={__name:"TCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:"Input"},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:s}){const i=e,a=m(!1),c=y(()=>i.label.length<=10?"input-control sm":i.label.length>10&&i.label.length<=30?"input-control md":"input-control lg"),V=y(()=>a.value?"input-field checked":"input-field");function T(){a.value=!a.value,s("update:modelValue",a.value)}return(I,_)=>(d(),r(O,null,[t("div",{class:D(l(c)),onClick:T},[t("div",{class:D(l(V))},null,2),t("div",Ae,u(e.label),1)],2),e.errorMessage.length>0?(d(),r("div",Ne,u(e.errorMessage),1)):E("",!0)],64))}},pe=q(Oe,[["__scopeId","data-v-12000660"]]),K=e=>(se("data-v-eec5eff6"),e=e(),ie(),e),Re={class:"input-label"},Le={class:"selected"},Ue=["value"],Be=["value"],ze=["value"],Fe=K(()=>t("div",{class:"toggle"},[t("i",{class:"fa-solid fa-calendar-days"})],-1)),je={class:"year picker"},Ee=K(()=>t("div",{class:"title"},"Year",-1)),We={class:"options"},Ye=["value","onClick"],qe={class:"value"},Pe=K(()=>t("i",{class:"fa-solid fa-caret-right"},null,-1)),Je=K(()=>t("div",{class:"title"},"Month",-1)),He={class:"options"},Ge=["value","onClick"],Ke={class:"value"},Ze=K(()=>t("i",{class:"fa-solid fa-caret-right"},null,-1)),Qe=K(()=>t("div",{class:"title"},"Day",-1)),Xe={class:"options"},et=["value","onClick"],tt={class:"value"},at={key:0,class:"input-error"},lt={__name:"TDatePicker",props:{modelValue:{type:Date,default:new Date},min:{type:Date,default:new Date(new Date().getFullYear()-10,1,1)},max:{type:Date,default:new Date(new Date().getFullYear()+9,12,31)},label:{type:String,default:"Input"},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:s}){const i=new Date,a=new Date(i.getFullYear()-10,1,1),c=new Date(i.getFullYear()+9,12,31),V=[...Array(c.getFullYear()-a.getFullYear()).keys()].map(v=>v+a.getFullYear()),T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],I=m([]),_=m("collapsed"),b=m(),A=m(),p=m();m();const R=m(!1),w=m(!1),k=y(()=>"input-control"),N=y(()=>`input-field ${_.value}`.trim()),C=y(()=>R.value?"month picker show":"month picker hide"),J=y(()=>w.value?"day picker show":"day picker hide"),$=y(()=>!b.value||!A.value||!p.value?null:new Date(b.value,A.value,p.value)),F=y(()=>b.value?ee(b.value,1,1).split("-")[0]:X(new Date).split("-")[0]),W=y(()=>A.value?ee(1900,A.value,1).split("-")[1]:X(new Date).split("-")[1]),H=y(()=>p.value?ee(1900,1,p.value).split("-")[2]:X(new Date).split("-")[2]);function Q(v,L){const g=new Date(v,L,1);return g.setMonth(g.getMonth()+1),g.setDate(g.getDate()-1),g.getDate()}function X(v){const L=v.toLocaleString("default",{year:"numeric"}),g=v.toLocaleString("default",{month:"2-digit"}),Y=v.toLocaleString("default",{day:"2-digit"});return[L,g,Y].join("-")}function ee(v,L,g){const Y=new Date(v,L,g);return v=Y.toLocaleString("default",{year:"numeric"}),L=Y.toLocaleString("default",{month:"2-digit"}),g=Y.toLocaleString("default",{day:"2-digit"}),[v,L,g].join("-")}function oe(){_.value==="collapsed"?(_.value="expanded",b.value&&(R.value=!0),A.value&&(w.value=!0)):(_.value="collapsed",R.value=!1,w.value=!1)}function de(v){return v===b.value?"option selected":"option"}function P(v){return v===A.value?"option selected":"option"}function f(v){return v===p.value?"option selected":"option"}function o(v){b.value=v,A.value=0,p.value=1,R.value=!0,w.value=!1}function n(v){A.value=v,p.value=1,w.value=!0,I.value=Q(b.value,A.value)}function S(v){_.value="collapsed",p.value=v,R.value=!1,w.value=!1,s("update:modelValue",$)}return(v,L)=>(d(),r("div",{class:D(l(k))},[t("div",Re,u(e.label),1),t("div",{class:D(l(N))},[t("div",{class:"select",onClick:oe},[t("div",Le,[t("input",{disabled:"",value:l(F)},null,8,Ue),t("input",{disabled:"",value:l(W)},null,8,Be),t("input",{disabled:"",value:l(H)},null,8,ze)]),Fe]),t("div",je,[Ee,t("div",We,[(d(!0),r(O,null,z(l(V),g=>(d(),r("div",{class:D(de(g)),value:g,onClick:Y=>o(g)},[t("div",qe,u(g),1),Pe],10,Ye))),256))])]),t("div",{class:D(l(C))},[Je,t("div",He,[(d(!0),r(O,null,z(Object.keys(T),g=>(d(),r("div",{class:D(P(g)),value:g,onClick:Y=>n(g)},[t("div",Ke,u(T[g]),1),Ze],10,Ge))),256))])],2),t("div",{class:D(l(J))},[Qe,t("div",Xe,[(d(!0),r(O,null,z(I.value,g=>(d(),r("div",{class:D(f(g)),value:g,onClick:Y=>S(g)},[t("div",tt,u(g),1)],10,et))),256))])],2)],2),e.errorMessage.length>0?(d(),r("div",at,u(e.errorMessage),1)):E("",!0)],2))}},le=q(lt,[["__scopeId","data-v-eec5eff6"]]),nt={class:"input-control"},st={class:"input-label"},it={class:"input-field"},ot=["type","value"],dt={key:0,class:"input-error"},rt={__name:"TInput",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},size:{type:String,default:"md"},label:{type:String,default:"Input"},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(e){return(s,i)=>(d(),r("div",nt,[t("div",st,u(e.label),1),t("div",it,[t("input",{type:e.type,class:D(e.size),value:e.modelValue,onInput:i[0]||(i[0]=a=>s.$emit("update:modelValue",a.target.value))},null,42,ot)]),e.errorMessage.length>0?(d(),r("div",dt,u(e.errorMessage),1)):E("",!0)]))}},ne=q(rt,[["__scopeId","data-v-c182bf09"]]),ut=["value"],ct={__name:"TOption",props:{size:{type:String,default:"md"},value:{type:String,default:""},label:{type:String,default:"Select"},selected:{type:Boolean,default:!1}},emits:["select"],setup(e,{emit:s}){const i=e,a=y(()=>i.selected?`option selected ${i.size}`.trim():`option ${i.size}`.trim());return(c,V)=>(d(),r("div",{class:D(l(a)),value:e.value,onClick:V[0]||(V[0]=T=>c.$emit("select",e.value))},u(e.label),11,ut))}},vt=q(ct,[["__scopeId","data-v-1fa7fb5e"]]),pt=e=>(se("data-v-17f3b43e"),e=e(),ie(),e),mt={class:"input-label"},ft=["name"],gt={class:"selected"},ht=pt(()=>t("div",{class:"toggle"},[t("i",{class:"fa-solid fa-caret-down"}),t("i",{class:"fa-solid fa-caret-up"})],-1)),yt={class:"options"},bt={key:0,class:"input-error"},Tt={__name:"TSelect",props:{modelValue:{type:String,default:""},name:{type:String,default:""},size:{type:String,default:"md"},label:{type:String,default:"Input"},options:{type:Array,default:[]},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:s}){const i=e,a=m("collapsed"),c=m(""),V=y(()=>`input-control ${i.size}`.trim()),T=y(()=>`input-field ${a.value}`.trim()),I=y(()=>{const p=i.options.find(R=>R.value===c.value);return p?p.label:""});function _(){a.value==="collapsed"?a.value="expanded":a.value="collapsed"}function b(p){return p===c.value}function A(p){a.value="collapsed",c.value=p,s("update:modelValue",p)}return(p,R)=>(d(),r("div",{class:D(l(V))},[t("div",mt,u(e.label),1),t("div",{class:D(l(T))},[t("div",{class:"select",name:e.name,onClick:_},[t("div",gt,u(l(I)),1),ht],8,ft),t("div",yt,[(d(!0),r(O,null,z(e.options,w=>(d(),ue(vt,{value:w.value,label:w.label,size:e.size,selected:b(w.value),onSelect:k=>A(w.value)},null,8,["value","label","size","selected","onSelect"]))),256))])],2),e.errorMessage.length>0?(d(),r("div",bt,u(e.errorMessage),1)):E("",!0)],2))}},re=q(Tt,[["__scopeId","data-v-17f3b43e"]]),_t={class:"progress-bar"},wt={__name:"TProgressBar",props:{step:{type:Number,default:10},speed:{type:Number,default:10},bidirection:{type:Boolean,default:!0},indefinite:{type:Boolean,default:!0}},setup(e){const s=e,i=m("forward"),a=m(null),c=m(null),V=m(),T=y(()=>`bar forward-bar ${i.value}`),I=y(()=>s.bidirection?`bar reverse-bar ${i.value}`:"bar reverse-bar hide");ce(()=>{V.value=setInterval(b,s.speed)});function _(k){return parseInt(k.style.width.split("%")[0])}function b(){s.bidirection?p():A()}function A(){const k=_(a.value);k===100?s.indefinite?R(a.value):clearInterval(V.value):w(a.value,"forward",k)}function p(){const k=_(a.value),N=_(c.value);i.value==="forward"&&k===100?(i.value="reverse",w(a.value,"reverse",k),w(c.value,"forward",N)):i.value==="reverse"&&N===100?(i.value="forward",w(a.value,"forward",k),w(c.value,"reverse",N)):i.value==="forward"?(w(a.value,"forward",k),w(c.value,"reverse",N)):i.value==="reverse"&&(w(a.value,"reverse",k),w(c.value,"forward",N))}function R(k){k.style.width="0%"}function w(k,N,C){N==="forward"?k.style.width=[(C+s.step).toString(),"%"].join(""):k.style.width=[(C-s.step).toString(),"%"].join("")}return(k,N)=>(d(),r("div",_t,[t("div",{class:D(l(T)),style:{width:"0%"},ref_key:"forwardBar",ref:a},null,2),t("div",{class:D(l(I)),style:{width:"100%"},ref_key:"reverseBar",ref:c},null,2)]))}},te=q(wt,[["__scopeId","data-v-554f77de"]]),fe=e=>(se("data-v-b09ae847"),e=e(),ie(),e),kt={class:"table-container"},Vt={class:"table-actions"},Dt={class:"actions"},Ct=["onClick"],$t={class:"tooltip"},St={class:"header"},It={class:"row"},xt={class:"col"},Mt={key:0,class:"col"},At={key:0,class:"loading"},Nt=["colspan"],Ot={class:"body"},Rt={class:"row"},Lt={class:"col"},Ut={key:0,class:"col"},Bt={class:"actions"},zt=["onClick"],Ft={class:"tooltip"},jt={class:"pagination"},Et=fe(()=>t("i",{class:"fa-solid fa-chevron-left"},null,-1)),Wt={class:"page-number"},Yt={key:0,class:"current"},qt={class:"current"},Pt=fe(()=>t("i",{class:"fa-solid fa-chevron-right"},null,-1)),Jt={__name:"TTable",props:{name:{type:String,default:""},headers:{type:Array,default:[]},data:{type:Array,default:[]},totalData:{type:Number,default:0},actions:{type:Array,default:[]},tableActions:{type:Object,default:{}},pagination:{type:Object,default:{limit:5,client:!0}},loading:{type:Boolean,default:!0},dense:{type:Boolean,default:!0}},emits:["offsetChange"],setup(e,{emit:s}){const i=e,a=m(0),c=m(i.pagination.limit),V=y(()=>i.pagination.client?!1:i.loading),T=y(()=>i.headers.length+(i.actions.length>0?1:0)),I=y(()=>i.name&&i.name.length>0?"table-name show":"table-name hide"),_=y(()=>i.dense?"table dense":"table"),b=y(()=>i.pagination.client?i.data.length:i.totalData),A=y(()=>i.pagination.client?i.data.slice(a.value,a.value+c.value):i.data),p=y(()=>a.value+c.value>b.value?{start:a.value+1,end:b.value}:{start:a.value+1,end:a.value+c.value}),R=y(()=>p.value.start===1?"pager left":"pager left show"),w=y(()=>p.value.end===b.value?"pager right":"pager right show");function k(){p.value.start===1||(a.value-c.value<0?a.value=0:a.value=a.value-c.value),s("offsetChange",a.value)}function N(){p.value.end===b.value||(a.value=a.value+c.value),s("offsetChange",a.value)}return(C,J)=>(d(),r("div",kt,[t("div",Vt,[M(C.$slots,"table-actions",U(B({name:e.name,actions:e.tableActions})),()=>[t("div",{class:D(l(I))},[M(C.$slots,"table-name",U(B({name:e.name})),()=>[j(u(e.name),1)],!0)],2),t("div",Dt,[(d(!0),r(O,null,z(e.tableActions,$=>(d(),r("div",{class:"action",onClick:F=>$.click(e.data)},[M(C.$slots,"table-action",U(B({action:$,data:e.data})),()=>[t("i",{class:D($.icon)},null,2),t("span",$t,u($.name),1)],!0)],8,Ct))),256))])],!0)]),t("table",{class:D(l(_))},[t("thead",St,[t("tr",It,[M(C.$slots,"header-row",U(B({headers:e.headers,actions:e.actions})),()=>[(d(!0),r(O,null,z(e.headers,($,F)=>(d(),r("th",xt,[M(C.$slots,"header-col",U(B({header:$,i:F})),()=>[j(u($.label),1)],!0)]))),256)),e.actions.length>0?(d(),r("th",Mt,[M(C.$slots,"header-actions",U(B({actions:e.actions})),void 0,!0)])):E("",!0)],!0)]),l(V)?(d(),r("tr",At,[M(C.$slots,"progress-bar",U(B({headers:e.headers,actions:e.actions,span:l(T)})),()=>[t("th",{colspan:l(T)},[h(te)],8,Nt)],!0)])):E("",!0)]),t("tbody",Ot,[l(V)?E("",!0):(d(!0),r(O,{key:0},z(l(A),($,F)=>(d(),r("tr",Rt,[M(C.$slots,"data-row",U(B({headers:e.headers,row:$,actions:e.actions,i:F})),()=>[M(C.$slots,"data-content",U(B({headers:e.headers,row:$,i:F})),()=>[(d(!0),r(O,null,z(e.headers,W=>(d(),r("td",Lt,[M(C.$slots,"data-col",U(B({header:W,row:$,i:F})),()=>[j(u($[W.key]),1)],!0)]))),256))],!0),e.actions.length>0?(d(),r("td",Ut,[M(C.$slots,"data-actions",U(B({row:$,actions:e.actions,i:F})),()=>[t("div",Bt,[(d(!0),r(O,null,z(e.actions,W=>(d(),r("div",{class:"action",onClick:H=>W.click($,F)},[M(C.$slots,"data-action",U(B({row:$,action:W,i:F})),()=>[t("i",{class:D(W.icon)},null,2),t("span",Ft,u(W.name),1)],!0)],8,zt))),256))])],!0)])):E("",!0)],!0)]))),256))])],2),t("div",jt,[M(C.$slots,"pagination",U(B({pageLeft:k,pageRight:N,start:l(p).start,end:l(p).end,total:l(b)})),()=>[t("div",{class:D(l(R)),onClick:J[0]||(J[0]=$=>k())},[M(C.$slots,"pager-left",{},()=>[Et],!0)],2),t("div",Wt,[M(C.$slots,"page-number",U(B({start:l(p).start,end:l(p).end,total:l(b)})),()=>[l(p).start!==l(p).end?(d(),r("span",Yt,u(l(p).start)+" - ",1)):E("",!0),t("span",qt,u(l(p).end),1),j(" / "+u(l(b)),1)],!0)]),t("div",{class:D(l(w)),onClick:J[1]||(J[1]=$=>N())},[M(C.$slots,"pager-right",{},()=>[Pt],!0)],2)],!0)])]))}},G=q(Jt,[["__scopeId","data-v-b09ae847"]]);const Z=e=>(se("data-v-1976bee8"),e=e(),ie(),e),Ht=Z(()=>t("h1",null,"Demo Form Elements",-1)),Gt={class:"form-container"},Kt={class:"form"},Zt={class:"progress-bars"},Qt=he('<div class="tags" data-v-1976bee8><div class="tag" data-v-1976bee8><div class="category" data-v-1976bee8>tag</div><div class="divider" data-v-1976bee8>:</div><div class="name" data-v-1976bee8>default</div></div><div class="tag sm" data-v-1976bee8><div class="category" data-v-1976bee8>tag</div><div class="divider" data-v-1976bee8>:</div><div class="name" data-v-1976bee8>small</div></div><div class="tag md" data-v-1976bee8><div class="category" data-v-1976bee8>tag</div><div class="divider" data-v-1976bee8>:</div><div class="name" data-v-1976bee8>medium</div></div><div class="tag lg" data-v-1976bee8><div class="category" data-v-1976bee8>tag</div><div class="divider" data-v-1976bee8>:</div><div class="name" data-v-1976bee8>large</div></div></div>',1),Xt={class:"hyperlink"},ea={class:"hyperlink"},ta={class:"data-row"},aa={class:"data-col"},la={class:"date-range"},na=Z(()=>t("div",{class:"to"},"to",-1)),sa=["colspan"],ia=Z(()=>t("th",{style:{width:"30px"},class:"col"}," # ",-1)),oa={class:"col"},da={class:"col"},ra={key:0},ua={class:"col"},ca={class:"col"},va={key:0,class:"col"},pa={class:"data-actions"},ma=["onClick"],fa=["onClick"],ga={class:"page-number"},ha=["onClick"],ya={class:"tag"},ba={class:"data-action"},Ta=Z(()=>t("i",{class:"fa-solid fa-circle-arrow-left"},null,-1)),_a=Z(()=>t("i",{class:"fa-solid fa-circle-arrow-right"},null,-1)),wa={class:"result"},ka=Z(()=>t("h2",null,"Output",-1)),Va={__name:"DemoForm",setup(e){const s=m({username:"",name:"",description:"",password:"",country1:"",country2:"",country3:"",subscribe:!1,agree:!1,startDate:null,endDate:null,dateRange:{start:null,end:null}}),i=m([{value:"sg",label:"Singapore"},{value:"my",label:"Malaysia"},{value:"th",label:"Thailand"},{value:"vn",label:"Vietnam"}]),a=m({headers:[{key:"startTime",label:"Start Time"},{key:"endTime",label:"End Time"},{key:"description",label:"Description"}],data:[{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-27 09:31:48",endTime:null,description:"Implemention"}],tableActions:[{name:"Add",icon:"fa-solid fa-circle-plus fa-xl",click:function(f){P(`Adding data to count: ${f.length}`)}},{name:"Export",icon:"fa-solid fa-file-arrow-down fa-xl",click:function(f){P(`Export data count: ${f.length}`)}}],actions:[{name:"View",icon:"fa-solid fa-magnifying-glass",click:function(f,o){de(f,o)}},{name:"Edit",icon:"fa-solid fa-pen-to-square",click:function(f,o){P(`Row[${o}]: editing ${JSON.stringify(f)}`)}},{name:"Delete",icon:"fa-solid fa-trash-can",click:function(f,o){P(`Row[${o}]: deleting ${JSON.stringify(f)}`)}}]}),c=m({headers:[{key:"startTime",label:"Start Time"},{key:"endTime",label:"End Time"},{key:"description",label:"Description"}],data:[{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-27 09:31:48",endTime:null,description:"Implemention"}]}),V={async fetch(f,o){return new Promise(n=>{setTimeout(()=>{const S=c.value.data.slice(f,o+f);n({data:S,total:c.value.length})},500)})}},T=m(0),I=m(3),_=m([]),b=m(!0),A=m(!1),p=m(!1),R=m(),w=m(),k=m(!1),N=m(""),C=y(()=>`View row ${w.value+1}`),J=y(()=>(N.value.length,25*16)),$=y(()=>{const f=N.value.length||1,o=Math.ceil(f/25);return o<250?250:o*16});function F(){b.value=!0,V.fetch(T.value,I.value).then(({data:f,total:o})=>{_.value=f,b.value=!1})}function W(f){P(f)}function H(f){T.value=f}function Q(f){H(f),F()}function X(){A.value=!0}function ee(f){P(`confirm ${f}`)}function oe(f){P(`cancel ${f}`)}function de(f,o){p.value=!0,R.value=f,w.value=o}function P(f){k.value=!0,N.value=f}return ce(()=>{Q(0)}),(f,o)=>(d(),r(O,null,[Ht,t("div",Gt,[t("div",Kt,[t("div",Zt,[h(l(te)),h(l(te),{speed:500,bidirection:!1}),h(l(te),{speed:500,bidirection:!1,indefinite:!1})]),Qt,t("div",Xt,[t("a",{href:"#",onClick:o[0]||(o[0]=n=>X())},"This is a Hyperlink to open Confirm Dialog"),h(l(Me),{title:"Delete Chart","primary-text":"Are you sure you want to delete this chart?","secondary-text":"Monthly working hours by company (2023)",modelValue:A.value,"onUpdate:modelValue":o[1]||(o[1]=n=>A.value=n),height:300,width:500,onConfirm:o[2]||(o[2]=n=>ee("delete chart")),onCancel:o[3]||(o[3]=n=>oe("delete chart"))},null,8,["modelValue"])]),t("div",ea,[h(l(ve),{modelValue:p.value,"onUpdate:modelValue":o[4]||(o[4]=n=>p.value=n),title:l(C)},{body:x(()=>[t("div",ta,[(d(!0),r(O,null,z(R.value,n=>(d(),r("div",aa,u(n),1))),256))])]),_:1},8,["modelValue","title"])]),h(l(ne),{modelValue:s.value.username,"onUpdate:modelValue":o[5]||(o[5]=n=>s.value.username=n),type:"text",label:"Username"},null,8,["modelValue"]),h(l(ne),{modelValue:s.value.name,"onUpdate:modelValue":o[6]||(o[6]=n=>s.value.name=n),type:"text",size:"md",label:"Name"},null,8,["modelValue"]),h(l(ne),{modelValue:s.value.description,"onUpdate:modelValue":o[7]||(o[7]=n=>s.value.description=n),type:"text",size:"lg",label:"Description"},null,8,["modelValue"]),h(l(ne),{modelValue:s.value.password,"onUpdate:modelValue":o[8]||(o[8]=n=>s.value.password=n),type:"password",label:"Password","error-message":"Min 8 characters"},null,8,["modelValue"]),h(l(ae),{"button-type":"text",value:"Very Long Button",icon:"fa-sharp fa-solid fa-circle-down",onClick:o[9]||(o[9]=n=>W("Hello World!"))}),h(l(ae),{"button-type":"text",size:"lg",value:"Very Long Long Button with Icon",icon:"fa-sharp fa-solid fa-circle-down"}),h(l(ae),{"button-type":"icon",icon:"fa-sharp fa-solid fa-circle-down"}),h(l(re),{modelValue:s.value.country1,"onUpdate:modelValue":o[10]||(o[10]=n=>s.value.country1=n),label:"Country",name:"country",id:"country-1",options:i.value},null,8,["modelValue","options"]),h(l(re),{modelValue:s.value.country2,"onUpdate:modelValue":o[11]||(o[11]=n=>s.value.country2=n),size:"sm",label:"Country",name:"country",id:"country-2",options:i.value},null,8,["modelValue","options"]),h(l(re),{modelValue:s.value.country3,"onUpdate:modelValue":o[12]||(o[12]=n=>s.value.country3=n),size:"lg",label:"Country",name:"country",id:"country-3",options:i.value,"error-message":"Min 8 characters"},null,8,["modelValue","options"]),h(l(pe),{modelValue:s.value.subscribe,"onUpdate:modelValue":o[13]||(o[13]=n=>s.value.subscribe=n),label:"Subscribe newsletter"},null,8,["modelValue"]),h(l(pe),{modelValue:s.value.agree,"onUpdate:modelValue":o[14]||(o[14]=n=>s.value.agree=n),label:"Agree T&C","error-message":"Required!"},null,8,["modelValue"]),h(l(le),{modelValue:s.value.startDate,"onUpdate:modelValue":o[15]||(o[15]=n=>s.value.startDate=n),label:"Start Date"},null,8,["modelValue"]),h(l(le),{modelValue:s.value.endDate,"onUpdate:modelValue":o[16]||(o[16]=n=>s.value.endDate=n),label:"End Date","error-message":"Cannot be earlier than start date!"},null,8,["modelValue"]),t("div",la,[h(l(le),{modelValue:s.value.dateRange.start,"onUpdate:modelValue":o[17]||(o[17]=n=>s.value.dateRange.start=n),label:"Start Date"},null,8,["modelValue"]),na,h(l(le),{modelValue:s.value.dateRange.end,"onUpdate:modelValue":o[18]||(o[18]=n=>s.value.dateRange.end=n),label:"End Date","error-message":"Cannot be earlier than start date!"},null,8,["modelValue"])]),h(l(G),{headers:a.value.headers,data:a.value.data},null,8,["headers","data"]),h(l(G),{name:"Work Logs",headers:a.value.headers,data:a.value.data,actions:a.value.actions,"table-actions":a.value.tableActions,onOffsetChange:H},null,8,["headers","data","actions","table-actions"]),h(l(G),{name:"Work Logs (out of bound)",headers:a.value.headers,data:a.value.data,pagination:{limit:3,client:!0}},null,8,["headers","data"]),h(l(G),{name:"Work Logs (server pagination)",loading:b.value,headers:c.value.headers,data:_.value,pagination:{limit:3,client:!1},"total-data":c.value.data.length,onOffsetChange:Q},null,8,["loading","headers","data","total-data"]),h(l(G),{name:"Work Logs (server pagination custom loading bar)",loading:b.value,headers:c.value.headers,data:_.value,pagination:{limit:3,client:!1},"total-data":c.value.data.length,onOffsetChange:Q},{"progress-bar":x(({headers:n,actions:S,span:v})=>[t("th",{colspan:v},[h(l(te),{speed:100,bidrection:!1})],8,sa)]),_:1},8,["loading","headers","data","total-data"]),h(l(G),{name:"Work Logs (custom templates)",headers:a.value.headers,data:a.value.data,actions:a.value.actions,"table-actions":a.value.tableActions,onOffsetChange:H},{"table-name":x(({name:n})=>[j(" Table: "+u(n),1)]),"table-action":x(({action:n,data:S})=>[j(u(n.name),1)]),"header-row":x(({headers:n,actions:S})=>[ia,(d(!0),r(O,null,z(n,(v,L)=>(d(),r("th",oa,u(v.label),1))),256)),t("th",da,[S.length===0?(d(),r("span",ra," No action ")):E("",!0)])]),"data-row":x(({headers:n,row:S,actions:v,i:L})=>[t("td",ua,u(L+1),1),(d(!0),r(O,null,z(n,g=>(d(),r("td",ca,u(S[g.key]),1))),256)),v.length>0?(d(),r("td",va,[t("div",pa,[(d(!0),r(O,null,z(v,g=>(d(),r("div",{class:"data-action",onClick:Y=>g.click(S,L)},u(g.name),9,ma))),256))])])):E("",!0)]),pagination:x(({pageLeft:n,pageRight:S,start:v,end:L,total:g})=>[t("div",{class:"pager-left",onClick:Y=>n()}," Left ",8,fa),t("div",ga,u(v)+" - "+u(L)+" of "+u(g),1),t("div",{class:"pager-right",onClick:Y=>S()}," Right ",8,ha)]),_:1},8,["headers","data","actions","table-actions"]),h(l(G),{name:"Work Logs (custom templates 2)",headers:a.value.headers,data:a.value.data,actions:a.value.actions,"table-actions":a.value.tableActions,onOffsetChange:H},{"table-name":x(({name:n})=>[j(" Table: "+u(n),1)]),"table-action":x(({action:n,data:S})=>[j(u(n.name),1)]),"header-col.startTime":x(({header:n,i:S})=>[j(u(n.label)+" (SGT) ",1)]),"header-col.endTime":x(({header:n,i:S})=>[j(u(n.label)+" (SGT) ",1)]),"header-actions":x(({actions:n})=>[j(" No action ")]),"data-col.description":x(({header:n,row:S,i:v})=>[t("span",ya,u(S[n.key]),1)]),"data-action":x(({row:n,action:S,i:v})=>[t("div",ba,u(S.name),1)]),"pager-left":x(()=>[Ta]),"page-number":x(({start:n,end:S,total:v})=>[j(u(n)+" - "+u(S)+" of "+u(v),1)]),"pager-right":x(()=>[_a]),_:1},8,["headers","data","actions","table-actions"])]),t("div",wa,[ka,(d(!0),r(O,null,z(Object.keys(s.value),n=>(d(),r("div",null,u(n)+": "+u(s.value[n]),1))),256))]),h(l(De),{title:"Alert",content:N.value,width:l(J),height:l($),modelValue:k.value,"onUpdate:modelValue":o[19]||(o[19]=n=>k.value=n)},null,8,["content","width","height","modelValue"])])],64))}},Ca=ge(Va,[["__scopeId","data-v-1976bee8"]]);export{Ca as default};
