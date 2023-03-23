import{b as D,bE as Z,bw as N,g as M,i as x,bi as W,bF as te,r as S,a1 as ne,f as w,aa as ie,bG as re,e as C,u as O,o as E,j as T,R as h,X as U,bH as j,k as e,G as H,s as V,q as $,V as _,W as k,ap as K,_ as z,D as J,n as ue,bI as de,bJ as pe,bK as me,Z as be,ab as fe,bx as ce,C as ge,w as ye,a_ as ve,t as he,aj as Q,l as R,m as p,S as i,bL as Ve,U as Ee,T as X,aq as P,bM as we,am as _e,b6 as Se,al as ke,ao as Ie,ar as Be,an as L,bm as $e,as as A,bN as Ce,bc as q,bO as Te,E as Fe,bP as Ge,K as Pe,be as Re,bf as De,bQ as Le,bd as Ae,b8 as Ne,aQ as Oe}from"./index.48ab4d4a.js";import{E as Ue,a as G}from"./el-tab-pane.cb5dc17c.js";const Y=Symbol("radioGroupKey"),ee=D({size:Z,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),Ke=D({...ee,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),ae={[N]:o=>M(o)||x(o)||W(o),[te]:o=>M(o)||x(o)||W(o)},le=(o,r)=>{const a=S(),l=ne(Y,void 0),c=w(()=>!!l),d=w({get(){return c.value?l.modelValue:o.modelValue},set(y){c.value?l.changeEvent(y):r&&r(N,y),a.value.checked=o.modelValue===o.label}}),g=ie(w(()=>l==null?void 0:l.size)),m=re(w(()=>l==null?void 0:l.disabled)),u=S(!1),b=w(()=>m.value||c.value&&d.value!==o.label?-1:0);return{radioRef:a,isGroup:c,radioGroup:l,focus:u,size:g,disabled:m,tabIndex:b,modelValue:d}},ze=["value","name","disabled"],Me={name:"ElRadio"},xe=C({...Me,props:Ke,emits:ae,setup(o,{emit:r}){const a=o,l=O("radio"),{radioRef:c,radioGroup:d,focus:g,size:m,disabled:u,modelValue:b}=le(a,r);function y(){J(()=>r("change",b.value))}return(n,f)=>{var v;return E(),T("label",{class:V([e(l).b(),e(l).is("disabled",e(u)),e(l).is("focus",e(g)),e(l).is("bordered",n.border),e(l).is("checked",e(b)===n.label),e(l).m(e(m))])},[h("span",{class:V([e(l).e("input"),e(l).is("disabled",e(u)),e(l).is("checked",e(b)===n.label)])},[U(h("input",{ref_key:"radioRef",ref:c,"onUpdate:modelValue":f[0]||(f[0]=s=>H(b)?b.value=s:null),class:V(e(l).e("original")),value:n.label,name:n.name||((v=e(d))==null?void 0:v.name),disabled:e(u),type:"radio",onFocus:f[1]||(f[1]=s=>g.value=!0),onBlur:f[2]||(f[2]=s=>g.value=!1),onChange:y},null,42,ze),[[j,e(b)]]),h("span",{class:V(e(l).e("inner"))},null,2)],2),h("span",{class:V(e(l).e("label")),onKeydown:f[3]||(f[3]=K(()=>{},["stop"]))},[$(n.$slots,"default",{},()=>[_(k(n.label),1)])],34)],2)}}});var We=z(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const qe=D({...ee,name:{type:String,default:""}}),Ze=["value","name","disabled"],je={name:"ElRadioButton"},He=C({...je,props:qe,setup(o){const r=o,a=O("radio"),{radioRef:l,focus:c,size:d,disabled:g,modelValue:m,radioGroup:u}=le(r),b=w(()=>({backgroundColor:(u==null?void 0:u.fill)||"",borderColor:(u==null?void 0:u.fill)||"",boxShadow:u!=null&&u.fill?`-1px 0 0 0 ${u.fill}`:"",color:(u==null?void 0:u.textColor)||""}));return(y,n)=>{var f;return E(),T("label",{class:V([e(a).b("button"),e(a).is("active",e(m)===y.label),e(a).is("disabled",e(g)),e(a).is("focus",e(c)),e(a).bm("button",e(d))])},[U(h("input",{ref_key:"radioRef",ref:l,"onUpdate:modelValue":n[0]||(n[0]=v=>H(m)?m.value=v:null),class:V(e(a).be("button","original-radio")),value:y.label,type:"radio",name:y.name||((f=e(u))==null?void 0:f.name),disabled:e(g),onFocus:n[1]||(n[1]=v=>c.value=!0),onBlur:n[2]||(n[2]=v=>c.value=!1)},null,42,Ze),[[j,e(m)]]),h("span",{class:V(e(a).be("button","inner")),style:ue(e(m)===y.label?e(b):{}),onKeydown:n[3]||(n[3]=K(()=>{},["stop"]))},[$(y.$slots,"default",{},()=>[_(k(y.label),1)])],38)],2)}}});var oe=z(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const Je=D({id:{type:String,default:void 0},size:Z,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),Qe=ae,Xe=["id","aria-label","aria-labelledby"],Ye={name:"ElRadioGroup"},ea=C({...Ye,props:Je,emits:Qe,setup(o,{emit:r}){const a=o,l=O("radio"),c=de(),d=S(),{formItem:g}=pe(),{inputId:m,isLabeledByFormItem:u}=me(a,{formItemContext:g}),b=n=>{r(N,n),J(()=>r("change",n))};be(()=>{const n=d.value.querySelectorAll("[type=radio]"),f=n[0];!Array.from(n).some(v=>v.checked)&&f&&(f.tabIndex=0)});const y=w(()=>a.name||c.value);return fe(Y,ce({...ge(a),changeEvent:b,name:y})),ye(()=>a.modelValue,()=>{a.validateEvent&&(g==null||g.validate("change").catch(n=>ve()))}),(n,f)=>(E(),T("div",{id:e(m),ref_key:"radioGroupRef",ref:d,class:V(e(l).b("group")),role:"radiogroup","aria-label":e(u)?void 0:n.label||"radio-group","aria-labelledby":e(u)?e(g).labelId:void 0},[$(n.$slots,"default")],10,Xe))}});var se=z(ea,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);he(We,{RadioButton:oe,RadioGroup:se});const aa=Q(se),la=Q(oe);const B=C({__name:"FormRadio",props:{label:null,modelValue:null,prop:null,useBoolean:{type:Boolean},options:null,disabled:{type:Boolean},info:null,labelStyle:null,change:null},emits:["update:modelValue"],setup(o,{emit:r}){const a=o;function l(d){if(a.useBoolean&&d==="Enabled"?r("update:modelValue",!0):a.useBoolean&&d==="Disabled"?r("update:modelValue",!1):r("update:modelValue",d),!!a.change)return a.useBoolean&&d==="Enabled"?a.change(!0):a.useBoolean&&d==="Disabled"?a.change(!1):a.change(d)}const c=w(()=>a.useBoolean?a.modelValue===!0?"Enabled":a.modelValue===!1?"Disabled":a.modelValue:a.modelValue);return(d,g)=>(E(),R(e(P),{prop:o.prop},{label:p(()=>[i(Ve,{info:o.info,"label-style":o.labelStyle},{default:p(()=>[$(d.$slots,"label",{},()=>[_(k(o.label),1)])]),_:3},8,["info","label-style"])]),default:p(()=>[i(e(aa),{disabled:o.disabled,"model-value":e(c),onChange:l},{default:p(()=>[(E(!0),T(X,null,Ee(o.options,m=>(E(),R(e(la),{key:m,label:m},null,8,["label"]))),128))]),_:1},8,["disabled","model-value"]),$(d.$slots,"inline")]),_:3},8,["prop"]))}}),I=o=>(Re("data-v-10b4fc11"),o=o(),De(),o),oa=I(()=>h("h1",null,"Options",-1)),sa=I(()=>h("h2",null,"Generation Options",-1)),ta=I(()=>h("h2",null,"Image Options",-1)),na=I(()=>h("div",null,[_("Drop file here OR "),h("em",null,"click to upload")],-1)),ia=I(()=>h("h2",null,"General Options",-1)),ra=I(()=>h("h2",null,"Experimental Options",-1)),ua=C({__name:"OptionsView",setup(o){const r=we(),a=_e(),l=Se(),c=ke(),d=[{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"auto",label:"Auto"}],g=S([]),m=S(),u=S(!1),b=S(0);async function y(v){l.importFromZip(v),m.value.clearFiles()}async function n(){Le({message:`Downloading ${l.outputsLength} image(s)... (this may take a while)`,type:"info"}),u.value=!0,b.value=0;const v=await Ae.outputs.toCollection().primaryKeys();await Ne(v,!1,()=>{b.value++}),u.value=!1,b.value=0}async function f(){r.tagsTypes[r.currentTagsType].tags.length===0&&r.loadTags(r.currentTagsType)}return(v,s)=>(E(),T(X,null,[oa,i(e(Ie),{"label-position":"top",model:e(a).options,onSubmit:s[12]||(s[12]=K(()=>{},["prevent"]))},{default:p(()=>[i(e(Ue),{type:"border-card",style:{"min-height":"50vh"}},{default:p(()=>[i(e(G),{label:"\u{1F5A8}\uFE0F Generation"},{default:p(()=>[sa,i(e(P),{label:"API Key",prop:"apiKey"},{default:p(()=>[i(e(Be),{modelValue:e(a).apiKey,"onUpdate:modelValue":s[0]||(s[0]=t=>e(a).apiKey=t),type:"password",placeholder:"Enter API Key Here",autocomplete:"off",class:"apikey","show-password":""},null,8,["modelValue"]),i(e(L),{class:"anon",onClick:s[1]||(s[1]=t=>e(a).useAnon())},{default:p(()=>[_("Anon?")]),_:1})]),_:1}),U(i(A,{label:"Tag Autocomplete",prop:"tagAutocomplete",modelValue:e(r).currentTagsType,"onUpdate:modelValue":s[2]||(s[2]=t=>e(r).currentTagsType=t),options:e(r).possibleTags,onChange:f,info:"Use the up and down arrow keys to scroll through tag options then press 'Enter' to insert it into the prompt."},null,8,["modelValue","options"]),[[e($e),e(r).tagsLoading]]),i(A,{label:"Use Specific Worker",prop:"worker",modelValue:e(a).useWorker,"onUpdate:modelValue":s[3]||(s[3]=t=>e(a).useWorker=t),options:["None",...e(c).workers.map(t=>{var F;return{label:`${t.name} (${(F=t.performance)==null?void 0:F.split(" ")[0]} MPS/s, ${Math.floor(Math.sqrt(t.max_pixels||0))}x${Math.floor(Math.sqrt(t.max_pixels||0))})`,value:t.id}}).sort((t,F)=>(t.label||"").localeCompare(F.label||""))],filterable:""},null,8,["modelValue","options"]),i(B,{label:"Larger Values",prop:"allowLargerParams",modelValue:e(a).allowLargerParams,"onUpdate:modelValue":s[4]||(s[4]=t=>e(a).allowLargerParams=t),options:["Enabled","Disabled"],info:"Allows use of larger step values and dimension sizes if you have the kudos on hand.",disabled:e(a).apiKey==="0000000000"||e(a).apiKey===""},null,8,["modelValue","disabled"]),i(B,{label:"Share Generated Images with LAION",prop:"shareWithLaion",modelValue:e(a).shareWithLaion,"onUpdate:modelValue":s[5]||(s[5]=t=>e(a).shareWithLaion=t),options:["Enabled","Disabled"],info:"Automatically and anonymously share images with LAION (the non-profit that created the dataset that was used to train Stable Diffusion) for use in aesthetic training in order to improve future models. See the announcement at https://discord.com/channels/781145214752129095/1020707945694101564/1061980573096226826 for more information. NOTE: This option is automatically enabled for users without a valid API key. ",disabled:e(a).apiKey==="0000000000"||e(a).apiKey===""},null,8,["modelValue","disabled"])]),_:1}),i(e(G),{label:"\u{1F4F7} Images"},{default:p(()=>[ta,i(Ce,{label:"Images Per Page",prop:"pageSize",modelValue:e(a).pageSize,"onUpdate:modelValue":s[6]||(s[6]=t=>e(a).pageSize=t),min:10,max:50,step:5,disabled:e(a).pageless==="Enabled"},null,8,["modelValue","disabled"]),i(B,{label:"Pageless Format",prop:"pageless",modelValue:e(a).pageless,"onUpdate:modelValue":s[7]||(s[7]=t=>e(a).pageless=t),options:["Enabled","Disabled"]},null,8,["modelValue"]),i(B,{label:"Carousel Auto Cycle",prop:"autoCarousel",modelValue:e(a).autoCarousel,"onUpdate:modelValue":s[8]||(s[8]=t=>e(a).autoCarousel=t),options:["Enabled","Disabled"]},null,8,["modelValue"]),i(B,{label:"Image Download Format",prop:"downloadType",modelValue:e(a).imageDownloadType,"onUpdate:modelValue":s[9]||(s[9]=t=>e(a).imageDownloadType=t),options:["WEBP","PNG","JPG"]},null,8,["modelValue"]),i(e(P),{label:"Export Images (ZIP File)"},{default:p(()=>[u.value?(E(),R(e(L),{key:1,icon:e(q),disabled:""},{default:p(()=>[_("Downloading... ("+k(b.value)+" / "+k(e(l).outputsLength)+" image(s))",1)]),_:1},8,["icon"])):(E(),R(e(L),{key:0,icon:e(q),onClick:s[10]||(s[10]=t=>n())},{default:p(()=>[_("Download "+k(e(l).outputsLength)+" image(s)",1)]),_:1},8,["icon"]))]),_:1}),i(e(P),{label:"Import Images (ZIP File)"},{default:p(()=>[i(e(Te),{drag:"",ref_key:"upload",ref:m,"auto-upload":!1,onChange:y,"file-list":g.value,limit:1,multiple:""},{default:p(()=>[i(e(Fe),{size:100},{default:p(()=>[i(e(Ge))]),_:1}),na]),_:1},8,["file-list"])]),_:1})]),_:1}),i(e(G),{label:"\u2699\uFE0F General"},{default:p(()=>[ia,i(A,{label:"Color Scheme",prop:"colorScheme",modelValue:e(a).options.colorMode,"onUpdate:modelValue":s[11]||(s[11]=t=>e(a).options.colorMode=t),options:d},null,8,["modelValue"])]),_:1}),i(e(G),{disabled:""},{label:p(()=>[i(e(Pe),{content:"No running experiments!"},{default:p(()=>[_("\u{1F9EA} Experimental")]),_:1})]),default:p(()=>[ra]),_:1})]),_:1})]),_:1},8,["model"])],64))}});const ma=Oe(ua,[["__scopeId","data-v-10b4fc11"]]);export{ma as default};
