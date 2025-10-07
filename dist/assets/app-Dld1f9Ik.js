const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/index-C5mZ2f1n.js","assets/index-6JJOnoOU.css"])))=>i.map(i=>d[i]);
var e,__typeError=e=>{throw TypeError(e)},__accessCheck=(e,t,a)=>t.has(e)||__typeError("Cannot "+a);import{p as t,_ as a,h as r,u as i,d as o,f as n,c as s,e as c,s as m}from"./index-C5mZ2f1n.js";import{v as d}from"./detail-D5hbE-Va.js";const l={get oneMinute(){return 6e4}},u=1,p={get now(){return(new Date).getTime()}},h={async create(e,r){const i={...e,deck:t.deck,interval:l.oneMinute,type:u,user_id:r,validity:p.now},{default:o}=await a((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3]));return o.from("card").insert([i])}};var g=Object.getOwnPropertyDescriptor;let v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}};v=((e,t,a,r)=>{for(var i,o=r>1?void 0:r?g(t,a):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=i(o)||o);return o})([o("m-create-card-header"),n((function component$1(){return r`
    <m-header>
      <m-button id="backToDeck" variant="icon" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${i("deck",t)}" on="backToDeck/click:method/go"></m-redirect>
      </m-button>
    </m-header>
  `}))],v);const f={goToDeck(){return history.pushState({},"",i("deck",t)),this}};e=new WeakMap;let x=class _User{constructor(t){var a,r,i;a=this,(r=e).has(a)?__typeError("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(a):r.set(a,i),((e,t,a,r)=>{__accessCheck(e,t,"write to private field"),r?r.call(e,a):t.set(e,a)})(this,e,t)}get id(){return(t=this,a=e,__accessCheck(t,a,"read from private field"),r?r.call(t):a.get(t)).id;var t,a,r}static async logged(){const{default:e}=await a((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{data:{user:t}}=await e.auth.getUser();return new _User(t)}};var w=Object.defineProperty,y=Object.getOwnPropertyDescriptor,__decorateClass=(e,t,a,r)=>{for(var i,o=r>1?void 0:r?y(t,a):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,a,o):i(o))||o);return r&&o&&w(t,a,o),o};let b=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async create(e){const t=await x.logged();return await h.create(e,t.id),f.goToDeck(),this}};__decorateClass([c.submit("m-form",m,d)],b.prototype,"create",1),b=__decorateClass([o("m-create-card"),n((function component(){return r`
    <m-create-card-header></m-create-card-header>
    <m-main>
      <app>
        <m-text color="master-darker" size="md" weight="bold" family="highlight">
          Nova revisão
        </m-text>
        <m-form>
          <template>
            <m-input label="Pergunta" name="front" maxlength="128" required>
              <m-validity state="valueMissing">Pergunta é obrigatório</m-validity>
              <m-text size="xxxs" color="info">Digite a pergunta ou conceito a ser revisado.</m-text>
            </m-input>
            <m-input id="cover" label="Imagem de Referência (URL)" name="cover" type="url" maxlength="256">
              <m-cover slot="preview" aspect="wide" on="cover/change:attribute/src"></m-cover>
              <m-validity state="typeMismatch">URL inválida</m-validity>
              <m-text size="xxxs" color="info">Insira a URL de uma imagem para ilustrar a pergunta.</m-text>
            </m-input>
            <m-area label="Reposta" name="back" maxlength="1024" required>
              <m-validity state="valueMissing">Resumo é obrigatório</m-validity>
              <m-text size="xxxs" color="info">Insira a resposta ou explicaçâo para esta pergunta.</m-text>
            </m-area>
            <m-button width="100%">
              Criar revisão
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
  `}))],b);const k=b;export{k as default};
