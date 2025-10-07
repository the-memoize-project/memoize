const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/index-C5mZ2f1n.js","assets/index-6JJOnoOU.css"])))=>i.map(i=>d[i]);
var e,t,r,a,n,i,s,o,c,d,m,l,h,u,p,__typeError=e=>{throw TypeError(e)},__accessCheck=(e,t,r)=>t.has(e)||__typeError("Cannot "+r),__privateGet=(e,t,r)=>(__accessCheck(e,t,"read from private field"),r?r.call(e):t.get(e)),__privateAdd=(e,t,r)=>t.has(e)?__typeError("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),__privateSet=(e,t,r,a)=>(__accessCheck(e,t,"write to private field"),a?a.call(e,r):t.set(e,r),r);import{_ as g,p as f,h as k,u as w,c as v,d as y,f as x}from"./index-C5mZ2f1n.js";import{w as b}from"./willPaint-B74CwLKT.js";e=new WeakMap;let $=class _Cards{constructor(t){__privateAdd(this,e),__privateSet(this,e,t)}get count(){return __privateGet(this,e)??__privateSet(this,e,0)}static async current(){const{default:e}=await g((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{count:t}=await e.from("card").select("id",{count:"exact",head:!0}).eq("deck",f.deck);return new _Cards(t)}};const C=Symbol("hydrate");var _,M,O=Object.defineProperty,T=Object.getOwnPropertyDescriptor,__typeError$4=e=>{throw TypeError(e)},__decorateClass$5=(e,t,r,a)=>{for(var n,i=a>1?void 0:a?T(t,r):t,s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a?n(t,r,i):n(i))||i);return a&&i&&O(t,r,i),i},__accessCheck$4=(e,t,r)=>t.has(e)||__typeError$4("Cannot "+r),__privateSet$4=(e,t,r,a)=>(__accessCheck$4(e,t,"write to private field"),t.set(e,r),r);let E=class extends HTMLElement{constructor(){var e,t,r;super(),e=this,(t=M).has(e)?__typeError$4("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this.attachShadow({mode:"open"})}get cards(){return __accessCheck$4(e=this,t=M,"read from private field"),(r?r.call(e):t.get(e))??__privateSet$4(this,M,{});var e,t,r}async[_=C](){return __privateSet$4(this,M,await $.current()),this}};M=new WeakMap,__decorateClass$5([b],E.prototype,_,1),E=__decorateClass$5([y("m-deck-empty"),x((function component$4(){return k`
    <m-stack direction="column" spacing="nano" align="center">
      <m-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Crie sua primeira revisão</m-text>
      <m-text align="center">Para começar a estudar, vamos criar sua primeira revisão</m-text>
    </m-stack>
    <img alt="Memoize" src="${"/assets/image-BZbHUMzW.svg"}" loading="lazy" />
    <m-button id="createFirstCard" width="100%">
      Criar revisão
      <m-redirect href="${w("createCard",f)}" on="createFirstCard/click:method/go"></m-redirect>
    </m-button>
  `}),(function style$3(e){return v`
    :host {
      align-items: center;
      display: ${e.cards.count?"none":"flex"};
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: center;
      margin: 0 auto;
      max-width: 425px;
      width: 100%;
    }
  `}))],E);let P=(r=class{constructor(e){__privateAdd(this,t),__privateSet(this,t,e)}get paused(){var e;return(e=__privateGet(this,t)).paused??(e.paused=!1)}static async current(){const{default:e}=await g((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{data:t}=await e.from("deck").select("paused").eq("id",f.deck).single();return new r(t)}},t=new WeakMap,r);const j=Symbol("hydrate");var W,D,S=Object.defineProperty,z=Object.getOwnPropertyDescriptor,__typeError$3=e=>{throw TypeError(e)},__decorateClass$4=(e,t,r,a)=>{for(var n,i=a>1?void 0:a?z(t,r):t,s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a?n(t,r,i):n(i))||i);return a&&i&&S(t,r,i),i},__accessCheck$3=(e,t,r)=>t.has(e)||__typeError$3("Cannot "+r),__privateSet$3=(e,t,r,a)=>(__accessCheck$3(e,t,"write to private field"),t.set(e,r),r);let R=class extends HTMLElement{constructor(){var e,t,r;super(),e=this,(t=D).has(e)?__typeError$3("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this.attachShadow({mode:"open"})}get deck(){return __accessCheck$3(e=this,t=D,"read from private field"),(r?r.call(e):t.get(e))??__privateSet$3(this,D,{});var e,t,r}async[W=j](){return __privateSet$3(this,D,await P.current()),this}};D=new WeakMap,__decorateClass$4([b],R.prototype,W,1),R=__decorateClass$4([y("m-deck-header"),x((function component$3(e){return k`
    <m-header>
      <m-button slot="leading" id="backToDashboard" variant="link">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${w("dashboard")}" on="backToDashboard/click:method/go"></m-redirect>
      </m-button>
      <m-show when="${e.deck.paused}" slot="trailing">
        <m-tag color="danger">Pausado para estudo</m-tag>
      </m-show>
      <m-button id="goToEditDeck" variant="link" slot="trailing">
        <m-icon use="settings"></m-icon>
        <m-redirect href="${w("editDeck",f)}" on="goToEditDeck/click:method/go"></m-redirect>
      </m-button>
    </m-header>
  `}))],R);let L=(n=class{constructor(e){__privateAdd(this,a),__privateSet(this,a,e)}get front(){var e;return(e=__privateGet(this,a)).front??(e.front="")}get id(){return __privateGet(this,a).id}static async current(){const{default:e}=await g((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{data:t}=await e.from("card").select("id, front)").eq("deck",f.deck);return null==t?void 0:t.map((e=>new n(e)))}},a=new WeakMap,n);const H=Symbol("hydrate");var I,q,V=Object.defineProperty,A=Object.getOwnPropertyDescriptor,__typeError$2=e=>{throw TypeError(e)},__decorateClass$3=(e,t,r,a)=>{for(var n,i=a>1?void 0:a?A(t,r):t,s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a?n(t,r,i):n(i))||i);return a&&i&&V(t,r,i),i},__accessCheck$2=(e,t,r)=>t.has(e)||__typeError$2("Cannot "+r),__privateSet$2=(e,t,r,a)=>(__accessCheck$2(e,t,"write to private field"),t.set(e,r),r);let B=class extends HTMLElement{constructor(){var e,t,r;super(),e=this,(t=q).has(e)?__typeError$2("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this.attachShadow({mode:"open"})}get cards(){return __accessCheck$2(e=this,t=q,"read from private field"),(r?r.call(e):t.get(e))??__privateSet$2(this,q,[]);var e,t,r}async[I=H](){return __privateSet$2(this,q,await L.current()),this}};q=new WeakMap,__decorateClass$3([b],B.prototype,I,1),B=__decorateClass$3([y("m-deck-shelf"),x((function component$2(e){return k`
    <m-stack direction="column">
      <m-stack justify="space-between" align="center">
        <m-text size="sm" family="highlight" weight="bold" color="master-darker">Revisões</m-text>
        <m-button id="goToCreateCard" variant="ghost">
          <m-icon color="currentColor" use="add"></m-icon>
          Criar revisão
          <m-redirect href="${w("createCard",f)}" on="goToCreateCard/click:method/go"></m-redirect>
        </m-button>
      </m-stack>
      <m-stack direction="column" spacing="xs">
        ${e.cards.map((e=>k`
            <m-link href="${w("editCard",{...f,card:e.id})}">${e.front}</m-link>
          `))}
      </m-stack>
    </m-stack>
  `}),(function style$2(e){return v`
    :host {
      display: ${e.cards.length?"flex":"none"};
      width: 100%;
    }
  `}))],B);const U={get expired(){return(new Date).getTime()}};i=new WeakMap,s=new WeakMap;let F=class _Card{constructor(e,t){__privateAdd(this,i),__privateAdd(this,s),__privateSet(this,s,e),__privateSet(this,i,t)}get nextReviewDate(){return __privateGet(this,i)??__privateSet(this,i,0)}get totalReviewCards(){return __privateGet(this,s)??__privateSet(this,s,0)}static async current(){const{default:e}=await g((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{count:t}=await e.from("card").select("id, deck!inner(paused)",{count:"exact",head:!0}).eq("deck",f.deck).filter("deck.paused","eq",!1).lte("validity",U.expired),{data:r}=await e.from("card").select("validity, deck!inner(paused)").eq("deck",f.deck).filter("deck.paused","eq",!1).order("validity",{ascending:!0}).limit(1).single();return new _Card(t,null==r?void 0:r.validity)}};const G=Symbol("hydrate");var K,Z,J=Object.defineProperty,N=Object.getOwnPropertyDescriptor,__typeError$1=e=>{throw TypeError(e)},__decorateClass$2=(e,t,r,a)=>{for(var n,i=a>1?void 0:a?N(t,r):t,s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a?n(t,r,i):n(i))||i);return a&&i&&J(t,r,i),i},__accessCheck$1=(e,t,r)=>t.has(e)||__typeError$1("Cannot "+r),__privateGet$1=(e,t,r)=>(__accessCheck$1(e,t,"read from private field"),r?r.call(e):t.get(e));let Q=class extends HTMLElement{constructor(){var e,t,r;super(),e=this,(t=Z).has(e)?__typeError$1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this.attachShadow({mode:"open"})}get shouldHide(){return""===this.nextReviewIn&&0===this.pendingCards}get nextReviewIn(){return function timeUntilReview(e=0){const t=e-Date.now();if(t<=0)return"";const r=Math.floor(t/1e3),a=Math.floor(r/60),n=Math.floor(a/60),i=Math.floor(n/24),s=Math.floor(i/7),o=Math.floor(i/30),c=Math.floor(i/365);return c>0?`${c} ano${c>1?"s":""}`:o>0?`${o} mês${o>1?"es":""}`:s>0?`${s} semana${s>1?"s":""}`:i>0?`${i} dia${i>1?"s":""}`:n>0?`${n} hora${n>1?"s":""}`:a>0?`${a} minuto${a>1?"s":""}`:""}(__privateGet$1(this,Z).nextReviewDate)}get pendingCards(){return __privateGet$1(this,Z).totalReviewCards}async[K=G](){var e,t,r;return e=this,t=Z,r=await F.current(),__accessCheck$1(e,t,"write to private field"),t.set(e,r),this}};Z=new WeakMap,__decorateClass$2([b],Q.prototype,K,1),Q=__decorateClass$2([y("m-deck-study"),x((function component$1(e){return e.pendingCards?k`
      <m-stack align="center">
        <img src="${"/assets/image-full-CBrSzEyk.svg"}" alt="Memoize" loading="auto" />
        <m-stack direction="column" spacing="none">
          <m-text family="highlight" size="xs" color="master-darker" weight="bold">Você tem revisões!</m-text>
          <m-text size="xxxs">Há <strong>${e.pendingCards}</strong> revisões aguardando você.</m-text>
        </m-stack>
      </m-stack>
      <m-button id="goToStudy">
        Revisar agora
        <m-redirect href="${w("cardOfDeck",f)}" on="goToStudy/click:method/go"></m-redirect>
      </m-button>
    `:e.nextReviewIn?k`
      <m-stack align="center">
        <img src="${"/assets/image-empty-CxGKuSUP.svg"}" alt="Memoize" loading="auto" />
        <m-stack direction="column" spacing="none">
          <m-text family="highlight" size="xs" color="master-darker" weight="bold">Estudo concluído</m-text>
          <m-text size="xxxs">Volte em <strong>${e.nextReviewIn}</strong> para continuar seu aprendizado.</m-text>
        </m-stack>
      </m-stack>
    `:k``}),(function style$1(e){return v`
    :host {
      align-items: center;
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-sm);
      box-sizing: border-box;
      display: ${e.shouldHide?"none":"flex"};
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      justify-content: center;
      padding: var(--spacing_inset-xs);
      width: 100%;

      @media (width > 595px) {
        flex-direction: row;
        padding-right: var(--spacing_inset-md);
      }
      
      img {
        aspect-ratio: 1 / 1;
        height: 80px;
        width: 80px;
      }

      m-button {
        width: 100%;

        @media (width > 595px) {
          width: 200px;
        }
      }
    }
  `}))],Q);var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,__decorateClass$1=(e,t,r,a)=>{for(var n,i=Y(t,r),s=e.length-1;s>=0;s--)(n=e[s])&&(i=n(t,r,i)||i);return i&&X(t,r,i),i};const ee=(l=class{constructor(e,t,r,a){__privateAdd(this,o),__privateAdd(this,c),__privateAdd(this,d),__privateAdd(this,m),__privateSet(this,o,e),__privateSet(this,d,t),__privateSet(this,c,r),__privateSet(this,m,a)}get learn(){return __privateGet(this,o)??__privateSet(this,o,0)}get relearn(){return __privateGet(this,c)??__privateSet(this,c,0)}get review(){return __privateGet(this,d)??__privateSet(this,d,0)}get total(){return __privateGet(this,m)??__privateSet(this,m,0)}static from(e){const{1:t=[],2:r=[],3:a=[]}=e.group((e=>e.type));return new l(t.length,r.length,a.length,e.length)}static asPercentageOfTotal(e,t,r){const a=r.get;return Object.assign(r,{get(){return this.total?Math.round(a.call(this)/this.total*100):0}}),r}},o=new WeakMap,c=new WeakMap,d=new WeakMap,m=new WeakMap,l);__decorateClass$1([ee.asPercentageOfTotal],ee.prototype,"learn"),__decorateClass$1([ee.asPercentageOfTotal],ee.prototype,"relearn"),__decorateClass$1([ee.asPercentageOfTotal],ee.prototype,"review");let te=ee;h=new WeakMap,u=new WeakMap,p=new WeakMap;let re=class _Deck{constructor(e){__privateAdd(this,h),__privateAdd(this,u),__privateAdd(this,p),__privateSet(this,u,e)}get cover(){return __privateGet(this,u).cover}get description(){return __privateGet(this,u).description}get id(){return __privateGet(this,u).id}get name(){return __privateGet(this,u).name}get progress(){return __privateGet(this,p)??__privateSet(this,p,te.from(__privateGet(this,u).cards))}static async current(){const{default:e}=await g((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{data:t}=await e.from("deck").select("id, cover, description, name, cards:card(type, validity)").eq("id",f.deck).single();return new _Deck(t)}};const ae=Symbol("hydrate");var ne,ie,se=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,__typeError2=e=>{throw TypeError(e)},__decorateClass=(e,t,r,a)=>{for(var n,i=a>1?void 0:a?oe(t,r):t,s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a?n(t,r,i):n(i))||i);return a&&i&&se(t,r,i),i},__accessCheck2=(e,t,r)=>t.has(e)||__typeError2("Cannot "+r),__privateSet2=(e,t,r,a)=>(__accessCheck2(e,t,"write to private field"),t.set(e,r),r);let ce=class extends HTMLElement{constructor(){var e,t,r;super(),e=this,(t=ie).has(e)?__typeError2("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this.attachShadow({mode:"open"})}get deck(){return __accessCheck2(e=this,t=ie,"read from private field"),(r?r.call(e):t.get(e))??__privateSet2(this,ie,[]);var e,t,r}async[ne=ae](){return __privateSet2(this,ie,await re.current()),this}};ie=new WeakMap,__decorateClass([b],ce.prototype,ne,1),ce=__decorateClass([y("m-deck"),x((function component(e){return k`
    <m-deck-header></m-deck-header>
    <m-main>
      <app>
        <m-cover aspect="wide" src="${e.deck.cover}"></m-cover>
        <m-stack direction="column" spacing="none">
          <m-text size="sm" family="highlight" weight="bold" color="master-darker">${e.deck.name}</m-text>
          <m-text size="xxs">${e.deck.description}</m-text>
        </m-stack>
        <m-stack direction="column" spacing="nano">
          <m-chart learn="${e.deck.progress.learn}" relearn="${e.deck.progress.relearn}" review="${e.deck.progress.review}"></m-chart>
          <m-text size="xxxs" color="info">${e.deck.progress.total} Revisões</m-text>
        </m-stack>
        <m-stack>
          <m-deck-study></m-deck-study>
        </m-stack>
        <m-deck-shelf></m-deck-shelf>
        <m-deck-empty></m-deck-empty>
      </app>
    </m-main>
    <m-footer></m-footer>
  `}),(function style(){return v`
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
  `}))],ce);const de=ce;export{de as default};
