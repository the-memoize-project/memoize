const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/index-C5mZ2f1n.js","assets/index-6JJOnoOU.css"])))=>i.map(i=>d[i]);
var e,t,__typeError=e=>{throw TypeError(e)},__accessCheck=(e,t,a)=>t.has(e)||__typeError("Cannot "+a),__privateGet=(e,t,a)=>(__accessCheck(e,t,"read from private field"),a?a.call(e):t.get(e)),__privateAdd=(e,t,a)=>t.has(e)?__typeError("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),__privateSet=(e,t,a,r)=>(__accessCheck(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a);import{h as a,u as r,d as o,f as i,_ as n,c as s,e as c,s as m}from"./index-C5mZ2f1n.js";import{v as d}from"./detail-D5hbE-Va.js";var l=Object.getOwnPropertyDescriptor;let u=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}};u=((e,t,a,r)=>{for(var o,i=r>1?void 0:r?l(t,a):t,n=e.length-1;n>=0;n--)(o=e[n])&&(i=o(i)||i);return i})([o("m-create-deck-header"),i((function component$1(){return a`
    <m-header>
      <m-button id="backToDeck" variant="icon" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${r("dashboard")}" on="backToDeck/click:method/go"></m-redirect>
      </m-button>
    </m-header>
  `}))],u);e=new WeakMap;let p=class _Deck{constructor(t){__privateAdd(this,e),__privateSet(this,e,t)}get id(){return __privateGet(this,e).id}static async create(e,t){const a={...e,user_id:t},{default:r}=await n((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{data:o}=await r.from("deck").insert([a]).select().single();return new _Deck(o)}};const h={goToDeck(e){return history.pushState({},"",r("deck",{deck:e})),this}};t=new WeakMap;let f=class _User{constructor(e){__privateAdd(this,t),__privateSet(this,t,e)}get id(){return __privateGet(this,t).id}static async logged(){const{default:e}=await n((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{data:{user:t}}=await e.auth.getUser();return new _User(t)}};var g=Object.defineProperty,x=Object.getOwnPropertyDescriptor,__decorateClass=(e,t,a,r)=>{for(var o,i=r>1?void 0:r?x(t,a):t,n=e.length-1;n>=0;n--)(o=e[n])&&(i=(r?o(t,a,i):o(i))||i);return r&&i&&g(t,a,i),i};let v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async create(e){const t=await f.logged(),a=await p.create(e,t.id);return h.goToDeck(a.id),this}};__decorateClass([c.submit("m-form",m,d)],v.prototype,"create",1),v=__decorateClass([o("m-create-deck"),i((function component(){return a`
    <m-create-deck-header></m-create-deck-header>
    <m-main>
      <app>
        <m-text color="master-darker" size="md" weight="bold" family="highlight">
          Nova coleção
        </m-text>
        <m-form>
          <template>
            <m-input id="cover" label="Imagem de capa (URL)" name="cover" type="url" maxlength="256">
              <m-cover slot="preview" aspect="wide" on="cover/change:attribute/src"></m-cover>
              <m-validity state="typeMismatch">URL inválida</m-validity>
              <m-text size="xxxs" color="info">Insira o link de uma imagem para representar a coleção.</m-text>
            </m-input>
            <m-input label="Nome" name="name" maxlength="64" required>
              <m-validity state="valueMissing">Nome é obrigatório</m-validity>
              <m-text size="xxxs" color="info">Escolha um nome curto e descritivo para sua coleção.</m-text>
            </m-input>
            <m-area label="Descrição" name="description" maxlength="256">
              <m-text size="xxxs" color="info">Adicione uma breve descrição sobre o conteúdo desta coleção.</m-text>
            </m-area>
            <m-button width="100%">
              Criar coleção
            </m-button>
          </template>
        </m-form>
      </app>
    </m-main>
    <m-footer></m-footer>
  `}),(function style(){return s`
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
  `}))],v);const w=v;export{w as default};
