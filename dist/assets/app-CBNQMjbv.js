const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/index-C5mZ2f1n.js","assets/index-6JJOnoOU.css"])))=>i.map(i=>d[i]);
var t,__typeError=t=>{throw TypeError(t)},__accessCheck=(t,e,a)=>e.has(t)||__typeError("Cannot "+a),__privateGet=(t,e,a)=>(__accessCheck(t,e,"read from private field"),a?a.call(t):e.get(t)),__privateSet=(t,e,a,r)=>(__accessCheck(t,e,"write to private field"),r?r.call(t,a):e.set(t,a),a);import{_ as e,p as a,h as r,u as i,e as o,s as n,d as s,f as c,c as d}from"./index-C5mZ2f1n.js";import{w as m}from"./willPaint-B74CwLKT.js";import{v as l}from"./detail-D5hbE-Va.js";t=new WeakMap;let u=class _Card{constructor(e){var a,r,i;a=this,(r=t).has(a)?__typeError("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(a):r.set(a,i),__privateSet(this,t,e)}get back(){return __privateGet(this,t).back}get cover(){return __privateGet(this,t).cover}get front(){return __privateGet(this,t).front}get id(){return __privateGet(this,t).id}async update(a){const{default:r}=await e((async()=>{const{default:t}=await import("./index-sHk9Weim.js");return{default:t}}),__vite__mapDeps([0,1,2,3])),{data:i}=await r.from("card").update(a).eq("id",this.id).select().single();return __privateSet(this,t,i),this}static async current(){const{default:t}=await e((async()=>{const{default:t}=await import("./index-sHk9Weim.js");return{default:t}}),__vite__mapDeps([0,1,2,3])),{data:r}=await t.from("card").select("id, back, cover, front, user_id").eq("id",a.card).single();return new _Card(r)}};const p={async delete(){const{default:t}=await e((async()=>{const{default:t}=await import("./index-sHk9Weim.js");return{default:t}}),__vite__mapDeps([0,1,2,3]));return t.from("card").delete().eq("id",a.card)}};const h={goToDeck(){return history.pushState({},"",i("deck",a)),this}};var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,__decorateClass$1=(t,e,a,r)=>{for(var i,o=r>1?void 0:r?g(e,a):e,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r?i(e,a,o):i(o))||o);return r&&o&&f(e,a,o),o};let v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async delete(){return await p.delete(),h.goToDeck(),this}};__decorateClass$1([o.click("#delete",n)],v.prototype,"delete",1),v=__decorateClass$1([s("m-edit-card-header"),c((function component$1(){return r`
    <m-header>
      <m-button slot="leading" id="backToDeck" variant="icon">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${i("deck",a)}" on="backToDeck/click:method/go"></m-redirect>
      </m-button>
      <m-button slot="trailing" id="delete" color="danger" variant="icon">
        <m-icon use="delete"></m-icon>
      </m-button>
    </m-header>
  `}))],v);const x=Symbol("hydrate"),y={goToDeck(){return history.pushState({},"",i("deck",a)),this}};var w,b,k=Object.defineProperty,_=Object.getOwnPropertyDescriptor,__typeError2=t=>{throw TypeError(t)},__decorateClass=(t,e,a,r)=>{for(var i,o=r>1?void 0:r?_(e,a):e,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r?i(e,a,o):i(o))||o);return r&&o&&k(e,a,o),o},__accessCheck2=(t,e,a)=>e.has(t)||__typeError2("Cannot "+a),__privateSet2=(t,e,a,r)=>(__accessCheck2(t,e,"write to private field"),e.set(t,a),a);let T=class extends HTMLElement{constructor(){var t,e,a;super(),t=this,(e=b).has(t)?__typeError2("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),this.attachShadow({mode:"open"})}get card(){return __accessCheck2(t=this,e=b,"read from private field"),(a?a.call(t):e.get(t))??__privateSet2(this,b,{});var t,e,a}async update(t){return await this.card.update(t),y.goToDeck(),this}async[w=x](){return __privateSet2(this,b,await u.current()),this}};b=new WeakMap,__decorateClass([o.submit("m-form",n,l)],T.prototype,"update",1),__decorateClass([m],T.prototype,w,1),T=__decorateClass([s("m-edit-card"),c((function component(t){return r`
    <m-edit-card-header></m-edit-card-header>
    <m-main>
      <app>
        <m-text color="master-darker" size="md" weight="bold" family="highlight">
          Atualizar revisão
        </m-text>
        <m-form>
          <template>
            <m-input label="Pergunta" name="front" maxlength="128" value="${t.card.front}" required>
              <m-validity state="valueMissing">Pergunta é obrigatório</m-validity>
              <m-text size="xxxs" color="info">Digite a pergunta ou conceito a ser revisado.</m-text>
            </m-input>
            <m-input id="cover" label="Imagem de Referência (URL)" name="cover" type="url" maxlength="256" value="${t.card.cover}">
              <m-cover slot="preview" aspect="wide" src="${t.card.cover}" on="cover/change:attribute/src"></m-cover>
              <m-validity state="typeMismatch">URL inválida</m-validity>
              <m-text size="xxxs" color="info">Insira a URL de uma imagem para ilustrar a pergunta.</m-text>
            </m-input>
            <m-area label="Reposta" name="back" maxlength="1024" required>
              <template>${t.card.back}</template>
              <m-validity state="valueMissing">Resumo é obrigatório</m-validity>
              <m-text size="xxxs" color="info">Insira a resposta ou explicaçâo para esta pergunta.</m-text>
            </m-area>
            <m-button width="100%">
              Atualizar revisão
            </m-button>
          </template>
        </m-form>
      </app>
    </m-main>
    <m-footer></m-footer>
  `}),(function style(){return d`
    app {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: start;
      margin: 0 auto;
      max-width: 768px;
      min-height: calc(100svh - (144px + 32px));
      width: 100%;
    }
  `}))],T);const D=T;export{D as default};
