import{r as f,c as g,o as d,a as r,b as e,t as u,u as l,F as z,d as U,n as V,e as j,p as se,f as ie,g as re,h as $,i as ce,w as L,j as p,k as fe,l as N,m as B,q,_ as ge,s as ye}from"./index-2d35dcea.js";const P=(a,s)=>{const i=a.__vccOpts||a;for(const[t,c]of s)i[t]=c;return i},he={class:"menu-bar"},be={class:"container"},Te={class:"heading"},we={class:"body"},_e={class:"actions"},ke={__name:"TDialog",props:{modelValue:{type:Boolean,default:!1},width:{type:Number,default:800},height:{type:Number,default:600},title:{type:String,default:""}},emits:["update:modelValue"],setup(a,{emit:s}){const i=a,t=f("dialog"),c=g(()=>i.modelValue?"dialog show":"dialog hide");function C(){s("update:modelValue",!1)}return re(()=>{t.value.style.width=`${i.width}px`,t.value.style.height=`${i.height}px`,t.value.style.top=`calc((100vh - ${t.value.style.height}) / 2)`,t.value.style.left=`calc((100vw - ${t.value.style.width}) / 2)`}),(w,M)=>(d(),r("div",{class:V(l(c)),ref_key:"dialog",ref:t},[e("div",he,[$(w.$slots,"menu-bar",{},()=>[e("div",{class:"menu-button close",onClick:M[0]||(M[0]=h=>C())})],!0)]),e("div",be,[e("div",Te,[$(w.$slots,"heading",{},()=>[q(u(a.title),1)],!0)]),e("div",we,[$(w.$slots,"body",{},void 0,!0)]),e("div",_e,[$(w.$slots,"actions",{},void 0,!0)])])],2))}},ve=P(ke,[["__scopeId","data-v-295738d8"]]),Ve={key:0},De={__name:"TButton",props:{buttonType:{type:String,default:"text"},size:{type:String,default:"md"},value:{type:String,default:"Button"},icon:{type:String,default:""}},emits:{click:null},setup(a,{emit:s}){const i=a,t=g(()=>`button ${i.buttonType} ${i.size}`.trim()),c=g(()=>`${i.icon} fa-lg`.trim());return(C,w)=>(d(),r("div",{class:V(l(t)),onClick:w[0]||(w[0]=M=>C.$emit("click"))},[a.buttonType==="text"?(d(),r("span",Ve,u(a.value),1)):j("",!0),e("i",{class:V(l(c))},null,2)],2))}},ee=P(De,[["__scopeId","data-v-c26a9562"]]),Se={class:"primary-text"},Ce={class:"secondary-text"},Ie={__name:"TConfirmDialog",props:{modelValue:{type:Boolean,default:!1},width:{type:Number,default:800},height:{type:Number,default:600},title:{type:String,default:""},primaryText:{type:String,default:""},secondaryText:{type:String,default:""}},emits:["update:modelValue","confirm","cancel"],setup(a,{emit:s}){const i=a,t=f("dialog"),c=g({get:()=>i.modelValue,set:M=>{s("update:modelValue",M)}});function C(){s("update:modelValue",!1),s("confirm")}function w(){s("update:modelValue",!1),s("cancel")}return(M,h)=>(d(),ce(ve,{ref_key:"dialog",ref:t,modelValue:l(c),"onUpdate:modelValue":h[2]||(h[2]=y=>fe(c)?c.value=y:null),width:a.width,height:a.height,title:a.title},{body:L(()=>[e("div",Se,u(a.primaryText),1),e("div",Ce,u(a.secondaryText),1)]),actions:L(()=>[p(ee,{class:"confirm-button","button-type":"text",value:"Confirm",icon:"fa-solid fa-check",onClick:h[0]||(h[0]=y=>C())}),p(ee,{"button-type":"text",value:"Cancel",icon:"fa-solid fa-xmark",onClick:h[1]||(h[1]=y=>w())})]),_:1},8,["modelValue","width","height","title"]))}},$e=P(Ie,[["__scopeId","data-v-87937dbc"]]),xe={class:"input-label"},Me={key:0,class:"input-error"},Le={__name:"TCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:"Input"},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(a,{emit:s}){const i=a,t=f(!1),c=g(()=>i.label.length<=10?"input-control sm":i.label.length>10&&i.label.length<=30?"input-control md":"input-control lg"),C=g(()=>t.value?"input-field checked":"input-field");function w(){t.value=!t.value,s("update:modelValue",t.value)}return(M,h)=>(d(),r(z,null,[e("div",{class:V(l(c)),onClick:w},[e("div",{class:V(l(C))},null,2),e("div",xe,u(a.label),1)],2),a.errorMessage.length>0?(d(),r("div",Me,u(a.errorMessage),1)):j("",!0)],64))}},ue=P(Le,[["__scopeId","data-v-12000660"]]),G=a=>(se("data-v-eec5eff6"),a=a(),ie(),a),ze={class:"input-label"},Ae={class:"selected"},Re=["value"],Oe=["value"],Ne=["value"],Be=G(()=>e("div",{class:"toggle"},[e("i",{class:"fa-solid fa-calendar-days"})],-1)),Ue={class:"year picker"},Fe=G(()=>e("div",{class:"title"},"Year",-1)),qe={class:"options"},je=["value","onClick"],Ee={class:"value"},We=G(()=>e("i",{class:"fa-solid fa-caret-right"},null,-1)),Pe=G(()=>e("div",{class:"title"},"Month",-1)),Ye={class:"options"},Je=["value","onClick"],He={class:"value"},Xe=G(()=>e("i",{class:"fa-solid fa-caret-right"},null,-1)),Ze=G(()=>e("div",{class:"title"},"Day",-1)),Ge={class:"options"},Ke=["value","onClick"],Qe={class:"value"},ea={key:0,class:"input-error"},aa={__name:"TDatePicker",props:{modelValue:{type:Date,default:new Date},min:{type:Date,default:new Date(new Date().getFullYear()-10,1,1)},max:{type:Date,default:new Date(new Date().getFullYear()+9,12,31)},label:{type:String,default:"Input"},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(a,{emit:s}){const i=new Date,t=new Date(i.getFullYear()-10,1,1),c=new Date(i.getFullYear()+9,12,31),C=[...Array(c.getFullYear()-t.getFullYear()).keys()].map(k=>k+t.getFullYear()),w=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],M=f([]),h=f("collapsed"),y=f(),x=f(),v=f();f();const A=f(!1),b=f(!1),_=g(()=>"input-control"),R=g(()=>`input-field ${h.value}`.trim()),D=g(()=>A.value?"month picker show":"month picker hide"),E=g(()=>b.value?"day picker show":"day picker hide"),S=g(()=>!y.value||!x.value||!v.value?null:new Date(y.value,x.value,v.value)),F=g(()=>y.value?o(y.value,1,1).split("-")[0]:m(new Date).split("-")[0]),W=g(()=>x.value?o(1900,x.value,1).split("-")[1]:m(new Date).split("-")[1]),ae=g(()=>v.value?o(1900,1,v.value).split("-")[2]:m(new Date).split("-")[2]);function oe(k,J){const T=new Date(k,J,1);return T.setMonth(T.getMonth()+1),T.setDate(T.getDate()-1),T.getDate()}function m(k){const J=k.toLocaleString("default",{year:"numeric"}),T=k.toLocaleString("default",{month:"2-digit"}),H=k.toLocaleString("default",{day:"2-digit"});return[J,T,H].join("-")}function o(k,J,T){const H=new Date(k,J,T);return k=H.toLocaleString("default",{year:"numeric"}),J=H.toLocaleString("default",{month:"2-digit"}),T=H.toLocaleString("default",{day:"2-digit"}),[k,J,T].join("-")}function n(){h.value==="collapsed"?(h.value="expanded",y.value&&(A.value=!0),x.value&&(b.value=!0)):(h.value="collapsed",A.value=!1,b.value=!1)}function I(k){return k===y.value?"option selected":"option"}function O(k){return k===x.value?"option selected":"option"}function X(k){return k===v.value?"option selected":"option"}function Y(k){y.value=k,x.value=0,v.value=1,A.value=!0,b.value=!1}function te(k){x.value=k,v.value=1,b.value=!0,M.value=oe(y.value,x.value)}function me(k){h.value="collapsed",v.value=k,A.value=!1,b.value=!1,s("update:modelValue",S)}return(k,J)=>(d(),r("div",{class:V(l(_))},[e("div",ze,u(a.label),1),e("div",{class:V(l(R))},[e("div",{class:"select",onClick:n},[e("div",Ae,[e("input",{disabled:"",value:l(F)},null,8,Re),e("input",{disabled:"",value:l(W)},null,8,Oe),e("input",{disabled:"",value:l(ae)},null,8,Ne)]),Be]),e("div",Ue,[Fe,e("div",qe,[(d(!0),r(z,null,U(l(C),T=>(d(),r("div",{class:V(I(T)),value:T,onClick:H=>Y(T)},[e("div",Ee,u(T),1),We],10,je))),256))])]),e("div",{class:V(l(D))},[Pe,e("div",Ye,[(d(!0),r(z,null,U(Object.keys(w),T=>(d(),r("div",{class:V(O(T)),value:T,onClick:H=>te(T)},[e("div",He,u(w[T]),1),Xe],10,Je))),256))])],2),e("div",{class:V(l(E))},[Ze,e("div",Ge,[(d(!0),r(z,null,U(M.value,T=>(d(),r("div",{class:V(X(T)),value:T,onClick:H=>me(T)},[e("div",Qe,u(T),1)],10,Ke))),256))])],2)],2),a.errorMessage.length>0?(d(),r("div",ea,u(a.errorMessage),1)):j("",!0)],2))}},le=P(aa,[["__scopeId","data-v-eec5eff6"]]),ta={class:"input-control"},la={class:"input-label"},na={class:"input-field"},sa=["type","value"],ia={key:0,class:"input-error"},oa={__name:"TInput",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},size:{type:String,default:"md"},label:{type:String,default:"Input"},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(a){return(s,i)=>(d(),r("div",ta,[e("div",la,u(a.label),1),e("div",na,[e("input",{type:a.type,class:V(a.size),value:a.modelValue,onInput:i[0]||(i[0]=t=>s.$emit("update:modelValue",t.target.value))},null,42,sa)]),a.errorMessage.length>0?(d(),r("div",ia,u(a.errorMessage),1)):j("",!0)]))}},ne=P(oa,[["__scopeId","data-v-c182bf09"]]),da=["value"],ra={__name:"TOption",props:{size:{type:String,default:"md"},value:{type:String,default:""},label:{type:String,default:"Select"},selected:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:s}){const i=a,t=g(()=>i.selected?`option selected ${i.size}`.trim():`option ${i.size}`.trim());return(c,C)=>(d(),r("div",{class:V(l(t)),value:a.value,onClick:C[0]||(C[0]=w=>c.$emit("select",a.value))},u(a.label),11,da))}},ua=P(ra,[["__scopeId","data-v-1fa7fb5e"]]),ca=a=>(se("data-v-17f3b43e"),a=a(),ie(),a),va={class:"input-label"},pa=["name"],ma={class:"selected"},fa=ca(()=>e("div",{class:"toggle"},[e("i",{class:"fa-solid fa-caret-down"}),e("i",{class:"fa-solid fa-caret-up"})],-1)),ga={class:"options"},ya={key:0,class:"input-error"},ha={__name:"TSelect",props:{modelValue:{type:String,default:""},name:{type:String,default:""},size:{type:String,default:"md"},label:{type:String,default:"Input"},options:{type:Array,default:[]},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(a,{emit:s}){const i=a,t=f("collapsed"),c=f(""),C=g(()=>`input-control ${i.size}`.trim()),w=g(()=>`input-field ${t.value}`.trim()),M=g(()=>{const v=i.options.find(A=>A.value===c.value);return v?v.label:""});function h(){t.value==="collapsed"?t.value="expanded":t.value="collapsed"}function y(v){return v===c.value}function x(v){t.value="collapsed",c.value=v,s("update:modelValue",v)}return(v,A)=>(d(),r("div",{class:V(l(C))},[e("div",va,u(a.label),1),e("div",{class:V(l(w))},[e("div",{class:"select",name:a.name,onClick:h},[e("div",ma,u(l(M)),1),fa],8,pa),e("div",ga,[(d(!0),r(z,null,U(a.options,b=>(d(),ce(ua,{value:b.value,label:b.label,size:a.size,selected:y(b.value),onSelect:_=>x(b.value)},null,8,["value","label","size","selected","onSelect"]))),256))])],2),a.errorMessage.length>0?(d(),r("div",ya,u(a.errorMessage),1)):j("",!0)],2))}},de=P(ha,[["__scopeId","data-v-17f3b43e"]]),ba={class:"progress-bar"},Ta={__name:"TProgressBar",props:{step:{type:Number,default:10},speed:{type:Number,default:10},bidirection:{type:Boolean,default:!0},indefinite:{type:Boolean,default:!0}},setup(a){const s=a,i=f("forward"),t=f(null),c=f(null),C=f(),w=g(()=>`bar forward-bar ${i.value}`),M=g(()=>s.bidirection?`bar reverse-bar ${i.value}`:"bar reverse-bar hide");re(()=>{C.value=setInterval(y,s.speed)});function h(_){return parseInt(_.style.width.split("%")[0])}function y(){s.bidirection?v():x()}function x(){const _=h(t.value);_===100?s.indefinite?A(t.value):clearInterval(C.value):b(t.value,"forward",_)}function v(){const _=h(t.value),R=h(c.value);i.value==="forward"&&_===100?(i.value="reverse",b(t.value,"reverse",_),b(c.value,"forward",R)):i.value==="reverse"&&R===100?(i.value="forward",b(t.value,"forward",_),b(c.value,"reverse",R)):i.value==="forward"?(b(t.value,"forward",_),b(c.value,"reverse",R)):i.value==="reverse"&&(b(t.value,"reverse",_),b(c.value,"forward",R))}function A(_){_.style.width="0%"}function b(_,R,D){R==="forward"?_.style.width=[(D+s.step).toString(),"%"].join(""):_.style.width=[(D-s.step).toString(),"%"].join("")}return(_,R)=>(d(),r("div",ba,[e("div",{class:V(l(w)),style:{width:"0%"},ref_key:"forwardBar",ref:t},null,2),e("div",{class:V(l(M)),style:{width:"100%"},ref_key:"reverseBar",ref:c},null,2)]))}},Q=P(Ta,[["__scopeId","data-v-554f77de"]]),pe=a=>(se("data-v-b09ae847"),a=a(),ie(),a),wa={class:"table-container"},_a={class:"table-actions"},ka={class:"actions"},Va=["onClick"],Da={class:"tooltip"},Sa={class:"header"},Ca={class:"row"},Ia={class:"col"},$a={key:0,class:"col"},xa={key:0,class:"loading"},Ma=["colspan"],La={class:"body"},za={class:"row"},Aa={class:"col"},Ra={key:0,class:"col"},Oa={class:"actions"},Na=["onClick"],Ba={class:"tooltip"},Ua={class:"pagination"},Fa=pe(()=>e("i",{class:"fa-solid fa-chevron-left"},null,-1)),qa={class:"page-number"},ja={key:0,class:"current"},Ea={class:"current"},Wa=pe(()=>e("i",{class:"fa-solid fa-chevron-right"},null,-1)),Pa={__name:"TTable",props:{name:{type:String,default:""},headers:{type:Array,default:[]},data:{type:Array,default:[]},totalData:{type:Number,default:0},actions:{type:Array,default:[]},tableActions:{type:Object,default:{}},pagination:{type:Object,default:{limit:5,client:!0}},loading:{type:Boolean,default:!0},dense:{type:Boolean,default:!0}},emits:["offsetChange"],setup(a,{emit:s}){const i=a,t=f(0),c=f(i.pagination.limit),C=g(()=>i.pagination.client?!1:i.loading),w=g(()=>i.headers.length+(i.actions.length>0?1:0)),M=g(()=>i.name&&i.name.length>0?"table-name show":"table-name hide"),h=g(()=>i.dense?"table dense":"table"),y=g(()=>i.pagination.client?i.data.length:i.totalData),x=g(()=>i.pagination.client?i.data.slice(t.value,t.value+c.value):i.data),v=g(()=>t.value+c.value>y.value?{start:t.value+1,end:y.value}:{start:t.value+1,end:t.value+c.value}),A=g(()=>v.value.start===1?"pager left":"pager left show"),b=g(()=>v.value.end===y.value?"pager right":"pager right show");function _(){v.value.start===1||(t.value-c.value<0?t.value=0:t.value=t.value-c.value),s("offsetChange",t.value)}function R(){v.value.end===y.value||(t.value=t.value+c.value),s("offsetChange",t.value)}return(D,E)=>(d(),r("div",wa,[e("div",_a,[$(D.$slots,"table-actions",N(B({name:a.name,actions:a.tableActions})),()=>[e("div",{class:V(l(M))},[$(D.$slots,"table-name",N(B({name:a.name})),()=>[q(u(a.name),1)],!0)],2),e("div",ka,[(d(!0),r(z,null,U(a.tableActions,S=>(d(),r("div",{class:"action",onClick:F=>S.click(a.data)},[$(D.$slots,"table-action",N(B({action:S,data:a.data})),()=>[e("i",{class:V(S.icon)},null,2),e("span",Da,u(S.name),1)],!0)],8,Va))),256))])],!0)]),e("table",{class:V(l(h))},[e("thead",Sa,[e("tr",Ca,[$(D.$slots,"header-row",N(B({headers:a.headers,actions:a.actions})),()=>[(d(!0),r(z,null,U(a.headers,(S,F)=>(d(),r("th",Ia,[$(D.$slots,"header-col",N(B({header:S,i:F})),()=>[q(u(S.label),1)],!0)]))),256)),a.actions.length>0?(d(),r("th",$a,[$(D.$slots,"header-actions",N(B({actions:a.actions})),void 0,!0)])):j("",!0)],!0)]),l(C)?(d(),r("tr",xa,[$(D.$slots,"progress-bar",N(B({headers:a.headers,actions:a.actions,span:l(w)})),()=>[e("th",{colspan:l(w)},[p(Q)],8,Ma)],!0)])):j("",!0)]),e("tbody",La,[l(C)?j("",!0):(d(!0),r(z,{key:0},U(l(x),(S,F)=>(d(),r("tr",za,[$(D.$slots,"data-row",N(B({headers:a.headers,row:S,actions:a.actions,i:F})),()=>[$(D.$slots,"data-content",N(B({headers:a.headers,row:S,i:F})),()=>[(d(!0),r(z,null,U(a.headers,W=>(d(),r("td",Aa,[$(D.$slots,"data-col",N(B({header:W,row:S,i:F})),()=>[q(u(S[W.key]),1)],!0)]))),256))],!0),a.actions.length>0?(d(),r("td",Ra,[$(D.$slots,"data-actions",N(B({row:S,actions:a.actions,i:F})),()=>[e("div",Oa,[(d(!0),r(z,null,U(a.actions,W=>(d(),r("div",{class:"action",onClick:ae=>W.click(S,F)},[$(D.$slots,"data-action",N(B({row:S,action:W,i:F})),()=>[e("i",{class:V(W.icon)},null,2),e("span",Ba,u(W.name),1)],!0)],8,Na))),256))])],!0)])):j("",!0)],!0)]))),256))])],2),e("div",Ua,[$(D.$slots,"pagination",N(B({pageLeft:_,pageRight:R,start:l(v).start,end:l(v).end,total:l(y)})),()=>[e("div",{class:V(l(A)),onClick:E[0]||(E[0]=S=>_())},[$(D.$slots,"pager-left",{},()=>[Fa],!0)],2),e("div",qa,[$(D.$slots,"page-number",N(B({start:l(v).start,end:l(v).end,total:l(y)})),()=>[l(v).start!==l(v).end?(d(),r("span",ja,u(l(v).start)+" - ",1)):j("",!0),e("span",Ea,u(l(v).end),1),q(" / "+u(l(y)),1)],!0)]),e("div",{class:V(l(b)),onClick:E[1]||(E[1]=S=>R())},[$(D.$slots,"pager-right",{},()=>[Wa],!0)],2)],!0)])]))}},Z=P(Pa,[["__scopeId","data-v-b09ae847"]]);const K=a=>(se("data-v-a298e14c"),a=a(),ie(),a),Ya=K(()=>e("h1",null,"Demo Form Elements",-1)),Ja={class:"form-container"},Ha={class:"form"},Xa={class:"progress-bars"},Za=ye('<div class="tags" data-v-a298e14c><div class="tag" data-v-a298e14c><div class="category" data-v-a298e14c>tag</div><div class="divider" data-v-a298e14c>:</div><div class="name" data-v-a298e14c>default</div></div><div class="tag sm" data-v-a298e14c><div class="category" data-v-a298e14c>tag</div><div class="divider" data-v-a298e14c>:</div><div class="name" data-v-a298e14c>small</div></div><div class="tag md" data-v-a298e14c><div class="category" data-v-a298e14c>tag</div><div class="divider" data-v-a298e14c>:</div><div class="name" data-v-a298e14c>medium</div></div><div class="tag lg" data-v-a298e14c><div class="category" data-v-a298e14c>tag</div><div class="divider" data-v-a298e14c>:</div><div class="name" data-v-a298e14c>large</div></div></div>',1),Ga={class:"hyperlink"},Ka={class:"hyperlink"},Qa={class:"data-row"},et={class:"data-col"},at={class:"date-range"},tt=K(()=>e("div",{class:"to"},"to",-1)),lt=["colspan"],nt=K(()=>e("th",{style:{width:"30px"},class:"col"}," # ",-1)),st={class:"col"},it={class:"col"},ot={key:0},dt={class:"col"},rt={class:"col"},ut={key:0,class:"col"},ct={class:"data-actions"},vt=["onClick"],pt=["onClick"],mt={class:"page-number"},ft=["onClick"],gt={class:"data-action"},yt=K(()=>e("i",{class:"fa-solid fa-circle-arrow-left"},null,-1)),ht=K(()=>e("i",{class:"fa-solid fa-circle-arrow-right"},null,-1)),bt={class:"result"},Tt=K(()=>e("h2",null,"Output",-1)),wt={__name:"DemoForm",setup(a){const s=f({username:"",name:"",description:"",password:"",country1:"",country2:"",country3:"",subscribe:!1,agree:!1,startDate:null,endDate:null,dateRange:{start:null,end:null}}),i=f([{value:"sg",label:"Singapore"},{value:"my",label:"Malaysia"},{value:"th",label:"Thailand"},{value:"vn",label:"Vietnam"}]),t=f({headers:[{key:"startTime",label:"Start Time"},{key:"endTime",label:"End Time"},{key:"description",label:"Description"}],data:[{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-27 09:31:48",endTime:null,description:"Implemention"}],tableActions:[{name:"Add",icon:"fa-solid fa-circle-plus fa-xl",click:function(m){alert(`Adding data to count: ${m.length}`)}},{name:"Export",icon:"fa-solid fa-file-arrow-down fa-xl",click:function(m){alert(`Export data count: ${m.length}`)}}],actions:[{name:"View",icon:"fa-solid fa-magnifying-glass",click:function(m,o){oe(m,o)}},{name:"Edit",icon:"fa-solid fa-pen-to-square",click:function(m,o){alert(`Row[${o}]: editing ${JSON.stringify(m)}`)}},{name:"Delete",icon:"fa-solid fa-trash-can",click:function(m,o){alert(`Row[${o}]: deleting ${JSON.stringify(m)}`)}}]}),c=f({headers:[{key:"startTime",label:"Start Time"},{key:"endTime",label:"End Time"},{key:"description",label:"Description"}],data:[{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-23 12:42:14",endTime:"2023-01-23 18:34:29",description:"Requirements"},{startTime:"2023-01-24 08:23:57",endTime:"2023-01-24 16:27:18",description:"Implementation"},{startTime:"2023-01-25 10:32:19",endTime:"2023-01-25 12:23:53",description:"Documentation"},{startTime:"2023-01-25 13:32:58",endTime:"2023-01-25 19:28:43",description:"Implementation"},{startTime:"2023-01-26 17:28:47",endTime:"2023-01-26 22:13:02",description:"Testing"},{startTime:"2023-01-27 09:31:48",endTime:null,description:"Implemention"}]}),C={async fetch(m,o){return new Promise(n=>{setTimeout(()=>{const I=c.value.data.slice(m,o+m);n({data:I,total:c.value.length})},500)})}},w=f(0),M=f(3),h=f([]),y=f(!0),x=f(!1),v=f(!1),A=f(),b=f(),_=g(()=>`View row ${b.value+1}`);function R(){y.value=!0,C.fetch(w.value,M.value).then(({data:m,total:o})=>{h.value=m,y.value=!1})}function D(m){alert(m)}function E(m){w.value=m}function S(m){E(m),R()}function F(){x.value=!0}function W(m){alert(`confirm ${m}`)}function ae(m){alert(`cancel ${m}`)}function oe(m,o){v.value=!0,A.value=m,b.value=o}return re(()=>{S(0)}),(m,o)=>(d(),r(z,null,[Ya,e("div",Ja,[e("div",Ha,[e("div",Xa,[p(l(Q)),p(l(Q),{speed:500,bidirection:!1}),p(l(Q),{speed:500,bidirection:!1,indefinite:!1})]),Za,e("div",Ga,[e("a",{href:"#",onClick:o[0]||(o[0]=n=>F())},"This is a Hyperlink to open Confirm Dialog"),p(l($e),{title:"Delete Chart","primary-text":"Are you sure you want to delete this chart?","secondary-text":"Monthly working hours by company (2023)",modelValue:x.value,"onUpdate:modelValue":o[1]||(o[1]=n=>x.value=n),height:300,width:500,onConfirm:o[2]||(o[2]=n=>W("delete chart")),onCancel:o[3]||(o[3]=n=>ae("delete chart"))},null,8,["modelValue"])]),e("div",Ka,[p(l(ve),{modelValue:v.value,"onUpdate:modelValue":o[4]||(o[4]=n=>v.value=n),title:l(_)},{body:L(()=>[e("div",Qa,[(d(!0),r(z,null,U(A.value,n=>(d(),r("div",et,u(n),1))),256))])]),_:1},8,["modelValue","title"])]),p(l(ne),{modelValue:s.value.username,"onUpdate:modelValue":o[5]||(o[5]=n=>s.value.username=n),type:"text",label:"Username"},null,8,["modelValue"]),p(l(ne),{modelValue:s.value.name,"onUpdate:modelValue":o[6]||(o[6]=n=>s.value.name=n),type:"text",size:"md",label:"Name"},null,8,["modelValue"]),p(l(ne),{modelValue:s.value.description,"onUpdate:modelValue":o[7]||(o[7]=n=>s.value.description=n),type:"text",size:"lg",label:"Description"},null,8,["modelValue"]),p(l(ne),{modelValue:s.value.password,"onUpdate:modelValue":o[8]||(o[8]=n=>s.value.password=n),type:"password",label:"Password","error-message":"Min 8 characters"},null,8,["modelValue"]),p(l(ee),{"button-type":"text",value:"Very Long Button",icon:"fa-sharp fa-solid fa-circle-down",onClick:o[9]||(o[9]=n=>D("Hello World!"))}),p(l(ee),{"button-type":"text",size:"lg",value:"Very Long Long Button with Icon",icon:"fa-sharp fa-solid fa-circle-down"}),p(l(ee),{"button-type":"icon",icon:"fa-sharp fa-solid fa-circle-down"}),p(l(de),{modelValue:s.value.country1,"onUpdate:modelValue":o[10]||(o[10]=n=>s.value.country1=n),label:"Country",name:"country",id:"country-1",options:i.value},null,8,["modelValue","options"]),p(l(de),{modelValue:s.value.country2,"onUpdate:modelValue":o[11]||(o[11]=n=>s.value.country2=n),size:"sm",label:"Country",name:"country",id:"country-2",options:i.value},null,8,["modelValue","options"]),p(l(de),{modelValue:s.value.country3,"onUpdate:modelValue":o[12]||(o[12]=n=>s.value.country3=n),size:"lg",label:"Country",name:"country",id:"country-3",options:i.value,"error-message":"Min 8 characters"},null,8,["modelValue","options"]),p(l(ue),{modelValue:s.value.subscribe,"onUpdate:modelValue":o[13]||(o[13]=n=>s.value.subscribe=n),label:"Subscribe newsletter"},null,8,["modelValue"]),p(l(ue),{modelValue:s.value.agree,"onUpdate:modelValue":o[14]||(o[14]=n=>s.value.agree=n),label:"Agree T&C","error-message":"Required!"},null,8,["modelValue"]),p(l(le),{modelValue:s.value.startDate,"onUpdate:modelValue":o[15]||(o[15]=n=>s.value.startDate=n),label:"Start Date"},null,8,["modelValue"]),p(l(le),{modelValue:s.value.endDate,"onUpdate:modelValue":o[16]||(o[16]=n=>s.value.endDate=n),label:"End Date","error-message":"Cannot be earlier than start date!"},null,8,["modelValue"]),e("div",at,[p(l(le),{modelValue:s.value.dateRange.start,"onUpdate:modelValue":o[17]||(o[17]=n=>s.value.dateRange.start=n),label:"Start Date"},null,8,["modelValue"]),tt,p(l(le),{modelValue:s.value.dateRange.end,"onUpdate:modelValue":o[18]||(o[18]=n=>s.value.dateRange.end=n),label:"End Date","error-message":"Cannot be earlier than start date!"},null,8,["modelValue"])]),p(l(Z),{headers:t.value.headers,data:t.value.data},null,8,["headers","data"]),p(l(Z),{name:"Work Logs",headers:t.value.headers,data:t.value.data,actions:t.value.actions,"table-actions":t.value.tableActions,onOffsetChange:E},null,8,["headers","data","actions","table-actions"]),p(l(Z),{name:"Work Logs (out of bound)",headers:t.value.headers,data:t.value.data,pagination:{limit:3,client:!0}},null,8,["headers","data"]),p(l(Z),{name:"Work Logs (server pagination)",loading:y.value,headers:c.value.headers,data:h.value,pagination:{limit:3,client:!1},"total-data":c.value.data.length,onOffsetChange:S},null,8,["loading","headers","data","total-data"]),p(l(Z),{name:"Work Logs (server pagination custom loading bar)",loading:y.value,headers:c.value.headers,data:h.value,pagination:{limit:3,client:!1},"total-data":c.value.data.length,onOffsetChange:S},{"progress-bar":L(({headers:n,actions:I,span:O})=>[e("th",{colspan:O},[p(l(Q),{speed:100,bidrection:!1})],8,lt)]),_:1},8,["loading","headers","data","total-data"]),p(l(Z),{name:"Work Logs (custom templates)",headers:t.value.headers,data:t.value.data,actions:t.value.actions,"table-actions":t.value.tableActions,onOffsetChange:E},{"table-name":L(({name:n})=>[q(" Table: "+u(n),1)]),"table-action":L(({action:n,data:I})=>[q(u(n.name),1)]),"header-row":L(({headers:n,actions:I})=>[nt,(d(!0),r(z,null,U(n,(O,X)=>(d(),r("th",st,u(O.label),1))),256)),e("th",it,[I.length===0?(d(),r("span",ot," No action ")):j("",!0)])]),"data-row":L(({headers:n,row:I,actions:O,i:X})=>[e("td",dt,u(X+1),1),(d(!0),r(z,null,U(n,Y=>(d(),r("td",rt,u(I[Y.key]),1))),256)),O.length>0?(d(),r("td",ut,[e("div",ct,[(d(!0),r(z,null,U(O,Y=>(d(),r("div",{class:"data-action",onClick:te=>Y.click(I,X)},u(Y.name),9,vt))),256))])])):j("",!0)]),pagination:L(({pageLeft:n,pageRight:I,start:O,end:X,total:Y})=>[e("div",{class:"pager-left",onClick:te=>n()}," Left ",8,pt),e("div",mt,u(O)+" - "+u(X)+" of "+u(Y),1),e("div",{class:"pager-right",onClick:te=>I()}," Right ",8,ft)]),_:1},8,["headers","data","actions","table-actions"]),p(l(Z),{name:"Work Logs (custom templates 2)",headers:t.value.headers,data:t.value.data,actions:t.value.actions,"table-actions":t.value.tableActions,onOffsetChange:E},{"table-name":L(({name:n})=>[q(" Table: "+u(n),1)]),"table-action":L(({action:n,data:I})=>[q(u(n.name),1)]),"header-col":L(({header:n,i:I})=>[q(u(I)+" | "+u(n.label),1)]),"header-actions":L(({actions:n})=>[q(" No action ")]),"data-col":L(({header:n,row:I,i:O})=>[q(u(O)+" | "+u(I[n.key]),1)]),"data-action":L(({row:n,action:I,i:O})=>[e("div",gt,u(I.name),1)]),"pager-left":L(()=>[yt]),"page-number":L(({start:n,end:I,total:O})=>[q(u(n)+" - "+u(I)+" of "+u(O),1)]),"pager-right":L(()=>[ht]),_:1},8,["headers","data","actions","table-actions"])]),e("div",bt,[Tt,(d(!0),r(z,null,U(Object.keys(s.value),n=>(d(),r("div",null,u(n)+": "+u(s.value[n]),1))),256))])])],64))}},kt=ge(wt,[["__scopeId","data-v-a298e14c"]]);export{kt as default};
