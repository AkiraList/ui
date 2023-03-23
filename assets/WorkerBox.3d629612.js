import{e as x,f as _,o,l as d,m as n,R as e,S as s,k as a,E as i,aJ as T,aK as E,aL as M,aM as B,K as S,W as r,q as C,V as l,aN as N,aO as W,j as g,U as b,T as q,aP as z,aH as V,ac as I,ak as P,aQ as D}from"./index.48ab4d4a.js";const O={style:{display:"flex","justify-content":"space-between"}},j={class:"card-header"},F={style:{"margin-left":"0.5rem"}},K={class:"small-font"},L={class:"small-font"},H=x({__name:"WorkerBox",props:{worker:null},setup(t){const u=t,w=_(()=>u.worker.online?"Online":u.worker.paused?"Paused":u.worker.maintenance_mode?"Maintenance":"Offline");return(y,J)=>(o(),d(a(P),{class:"worker-box"},{header:n(()=>[e("div",O,[e("div",j,[s(a(S),{content:a(w),placement:"top"},{default:n(()=>[t.worker.online?(o(),d(a(i),{key:0,size:20,color:"green"},{default:n(()=>[s(a(T))]),_:1})):t.worker.paused?(o(),d(a(i),{key:1,size:20,color:"orange"},{default:n(()=>[s(a(E))]),_:1})):t.worker.maintenance_mode?(o(),d(a(i),{key:2,size:20,color:"orange"},{default:n(()=>[s(a(M))]),_:1})):(o(),d(a(i),{key:3,size:20,color:"red"},{default:n(()=>[s(a(B))]),_:1}))]),_:1},8,["content"]),e("span",F,r(t.worker.name),1)]),C(y.$slots,"header",{},void 0,!0)])]),default:n(()=>{var c;return[e("div",K,"ID: "+r(t.worker.id),1),e("div",null,[l("This worker has run for "),e("strong",null,r(a(N)(t.worker.uptime,!0,{days:!0,hours:!0,minutes:!0})),1)]),e("div",null,[l("They have generated "),e("strong",null,r(t.worker.megapixelsteps_generated),1),l(" MPS")]),e("div",null,[l("They're going at a speed of "),e("strong",null,r((c=t.worker.performance)==null?void 0:c.split(" ")[0]),1),l(" MPS/s")]),e("div",null,[l("They're utilizing "),e("strong",null,r(t.worker.threads),1),l(" thread(s)")]),e("div",null,[l("They have fulfilled "),e("strong",null,r(t.worker.requests_fulfilled),1),l(" requests")]),e("div",null,[l("They have NSFW "),e("strong",null,r(t.worker.nsfw?"enabled":"disabled"),1)]),e("div",null,[l("They can generate up to: "),e("strong",null,r(Math.round(Math.sqrt(t.worker.max_pixels||0)))+"x"+r(Math.round(Math.sqrt(t.worker.max_pixels||0))),1)]),e("div",null,[s(a(z),{style:{"margin-top":"0.5rem","--el-collapse-header-height":"2.5rem"}},{default:n(()=>{var f;return[s(a(W),{title:((f=t.worker.models)==null?void 0:f.length)+" model(s)",name:"1"},{default:n(()=>{var k;return[e("strong",null,r(((k=t.worker.models)==null?void 0:k.length)===0?"stable_diffusion":""),1),(o(!0),g(q,null,b(t.worker.models,(v,m)=>{var h;return o(),g("strong",{key:m},r(v)+r(m===((h=t.worker.models)==null?void 0:h.length)?"":", "),1)}),128))]}),_:1},8,["title"])]}),_:1})]),t.worker.info?(o(),d(a(V),{key:0,style:{margin:"10px 0"}})):I("",!0),e("div",L,r(t.worker.info),1)]}),_:3}))}});const R=D(H,[["__scopeId","data-v-04f3ee3c"]]);export{R as W};
