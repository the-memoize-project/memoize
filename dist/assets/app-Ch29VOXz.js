const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/index-C5mZ2f1n.js","assets/index-6JJOnoOU.css"])))=>i.map(i=>d[i]);
var e,t,r,a,n,s,o,i,c,d,l,h,g,m,u,p,f,w,v,y,x,k,b,$,O,D,_,M,L,T,__typeError=e=>{throw TypeError(e)},__accessCheck=(e,t,r)=>t.has(e)||__typeError("Cannot "+r),__privateGet=(e,t,r)=>(__accessCheck(e,t,"read from private field"),r?r.call(e):t.get(e)),__privateAdd=(e,t,r)=>t.has(e)?__typeError("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),__privateSet=(e,t,r,a)=>(__accessCheck(e,t,"write to private field"),a?a.call(e,r):t.set(e,r),r);import{h as j,u as P,_ as W,c as C,d as U,f as S}from"./index-C5mZ2f1n.js";import{w as E}from"./willPaint-B74CwLKT.js";import{h as z}from"./hydrate-DEJGKsT8.js";e=new WeakMap;let R=class _Decks{constructor(t){__privateAdd(this,e),__privateSet(this,e,t)}get length(){var t;return(null==(t=__privateGet(this,e))?void 0:t.length)||0}static async ofUserLogged(){const{decksOfUserLogged:e}=await W((async()=>{const{decksOfUserLogged:e}=await import("./index-sHk9Weim.js");return{decksOfUserLogged:e}}),__vite__mapDeps([0,1,2,3])),{data:t}=await e();return new _Decks(t)}};var A,H,I=Object.defineProperty,V=Object.getOwnPropertyDescriptor,__typeError$4=e=>{throw TypeError(e)},__decorateClass$9=(e,t,r,a)=>{for(var n,s=a>1?void 0:a?V(t,r):t,o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a?n(t,r,s):n(s))||s);return a&&s&&I(t,r,s),s},__accessCheck$4=(e,t,r)=>t.has(e)||__typeError$4("Cannot "+r),__privateSet$4=(e,t,r,a)=>(__accessCheck$4(e,t,"write to private field"),t.set(e,r),r);let B=class extends HTMLElement{constructor(){var e,t,r;super(),e=this,(t=H).has(e)?__typeError$4("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this.attachShadow({mode:"open"})}get decks(){return __accessCheck$4(e=this,t=H,"read from private field"),(r?r.call(e):t.get(e))??__privateSet$4(this,H,{});var e,t,r}async[A=z](){return __privateSet$4(this,H,await R.ofUserLogged()),this}};H=new WeakMap,__decorateClass$9([E],B.prototype,A,1),B=__decorateClass$9([U("m-dashboard-empty"),S((function component$7(){return j`
    <m-stack direction="column" spacing="none" align="center">
      <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Pronto para começar?</m-text>
      <m-text align="center" size="xxxs">Para começar a estudar, vamos criar sua primeira coleção de estudo</m-text>
    </m-stack>
    <img alt="Memoize" src="${"/assets/image-BPAc1jvZ.svg"}" loading="lazy" />
    <m-stack direction="column" align="center">
      <m-button id="createFirstDeck" width="100%">
        Criar coleção
        <m-redirect href="${P("createDeck")}" on="createFirstDeck/click:method/go"></m-redirect>
      </m-button>
      <m-link href="${P("howWorks")}">Como funciona o Memoize</m-link>
    </m-stack>
  `}),(function style$5(e){return C`
    :host {
      align-items: center;
      display: ${e.decks.length?"none":"flex"};
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: center;
      margin: 0 auto;
      max-width: 425px;
      width: 100%;
    }
  `}))],B);var F=Object.getOwnPropertyDescriptor;let Q=class Header extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}};Q=((e,t,r,a)=>{for(var n,s=a>1?void 0:a?F(t,r):t,o=e.length-1;o>=0;o--)(n=e[o])&&(s=n(s)||s);return s})([U("m-dashboard-footer"),S((function component$6(){return j`
    <m-footer>
      <m-button id="goToSignOut" variant="link" slot="trailing">
        Sair
        <m-redirect href="${P("signOut")}" on="goToSignOut/click:method/go"></m-redirect>
      </m-button>
    </m-footer>
  `}))],Q);var q=Object.getOwnPropertyDescriptor;let G=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}};G=((e,t,r,a)=>{for(var n,s=a>1?void 0:a?q(t,r):t,o=e.length-1;o>=0;o--)(n=e[o])&&(s=n(s)||s);return s})([U("m-dashboard-header"),S((function component$5(){return j`
    <m-header>
      <m-logo slot="leading"></m-logo>
      <m-button slot="trailing" id="createDeck" variant="ghost" width="100%">
        <m-icon color="currentColor" use="add"></m-icon>
        Criar coleção
        <m-redirect href="${P("createDeck")}" on="createDeck/click:method/go"></m-redirect>
      </m-button>
    </m-header>
  `}))],G);var K=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,__decorateClass$6=(e,t,r,a)=>{for(var n,s=Z(t,r),o=e.length-1;o>=0;o--)(n=e[o])&&(s=n(t,r,s)||s);return s&&K(t,r,s),s};const J=(s=class{constructor(e,s,o,i){__privateAdd(this,t),__privateAdd(this,r),__privateAdd(this,a),__privateAdd(this,n),__privateSet(this,t,e),__privateSet(this,a,s),__privateSet(this,r,o),__privateSet(this,n,i)}get learn(){return __privateGet(this,t)??__privateSet(this,t,0)}get mastered(){return __privateGet(this,a)??__privateSet(this,a,0)}get relearn(){return __privateGet(this,r)??__privateSet(this,r,0)}get review(){return __privateGet(this,a)??__privateSet(this,a,0)}get total(){return __privateGet(this,n)??__privateSet(this,n,0)}static asPercentageOfTotal(e,t,r){const a=r.get;return Object.assign(r,{get(){return this.total?Math.round(a.call(this)/this.total*100):0}}),r}static async ofUserLogged(){const{progressOfUserLogged:e}=await W((async()=>{const{progressOfUserLogged:e}=await import("./index-sHk9Weim.js");return{progressOfUserLogged:e}}),__vite__mapDeps([0,1,2,3])),{data:t}=await e(),{1:r=[],2:a=[],3:n=[]}=t.group((e=>e.type));return new s(r.length,a.length,n.length,t.length)}},t=new WeakMap,r=new WeakMap,a=new WeakMap,n=new WeakMap,s);__decorateClass$6([J.asPercentageOfTotal],J.prototype,"learn"),__decorateClass$6([J.asPercentageOfTotal],J.prototype,"relearn"),__decorateClass$6([J.asPercentageOfTotal],J.prototype,"review");let N=J;o=new WeakMap;let X=class _User{constructor(e){__privateAdd(this,o,{}),__privateSet(this,o,e)}get avatar(){var e,t;return null==(t=null==(e=__privateGet(this,o))?void 0:e.user_metadata)?void 0:t.avatar_url}get id(){var e;return null==(e=__privateGet(this,o))?void 0:e.id}get name(){var e;const{full_name:t,name:r}=(null==(e=__privateGet(this,o))?void 0:e.user_metadata)??{};return t??r}get reviewTime(){var e,t;return function formatStudyTime(e=0){if(e<=0)return"0 minutos";const t=Math.floor(e/6e4),r=Math.floor(t/1440),a=Math.floor(t%1440/60),n=t%60,s=[];return r>0&&s.push(`${r} dia${r>1?"s":""}`),a>0&&s.push(`${a} hora${a>1?"s":""}`),n>0&&s.push(`${n} minuto${n>1?"s":""}`),s.join(" ")}((null==(t=null==(e=__privateGet(this,o))?void 0:e.user_metadata)?void 0:t.reviewTime)??0)}static async logged(){const{getUser:e}=await W((async()=>{const{getUser:e}=await import("./index-sHk9Weim.js");return{getUser:e}}),__vite__mapDeps([0,1,2,3])),{data:{user:t}}=await e();return new _User(t)}};var Y,ee,te,re=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,__typeError$3=e=>{throw TypeError(e)},__decorateClass$5=(e,t,r,a)=>{for(var n,s=a>1?void 0:a?ae(t,r):t,o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a?n(t,r,s):n(s))||s);return a&&s&&re(t,r,s),s},__accessCheck$3=(e,t,r)=>t.has(e)||__typeError$3("Cannot "+r),__privateGet$3=(e,t,r)=>(__accessCheck$3(e,t,"read from private field"),r?r.call(e):t.get(e)),__privateAdd$3=(e,t,r)=>t.has(e)?__typeError$3("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),__privateSet$3=(e,t,r,a)=>(__accessCheck$3(e,t,"write to private field"),t.set(e,r),r);let ne=class extends HTMLElement{constructor(){super(),__privateAdd$3(this,ee),__privateAdd$3(this,te),this.attachShadow({mode:"open"})}get progress(){return __privateGet$3(this,te)??__privateSet$3(this,te,{})}get user(){return __privateGet$3(this,ee)??__privateSet$3(this,ee,{})}async[Y=z](){return __privateSet$3(this,ee,await X.logged()),__privateSet$3(this,te,await N.ofUserLogged()),this}};ee=new WeakMap,te=new WeakMap,__decorateClass$5([E],ne.prototype,Y,1),ne=__decorateClass$5([U("m-dashboard-profile"),S((function component$4(e){return j`
    <m-stack align="center" spacing="nano">
      <m-avatar src="${e.user.avatar}" alt="${e.user.name}" learn="${e.progress.learn}" relearn="${e.progress.relearn}" review="${e.progress.review}"></m-avatar>
      <m-stack direction="column" spacing="none">
        <m-text family="highlight" size="xs" weight="bold">${e.user.name}</m-text>
        <m-stack align="center" spacing="quarck">
          <m-icon use="timer" size="xs"></m-icon>
          <m-text size="xxxs" color="info">${e.user.reviewTime}</m-text></m-text>
        </m-stack>
      </m-stack>
      <tag>
        ${e.progress.mastered}
        <m-icon use="cognition" color="currentColor"></m-icon>
      </tag>
    </m-stack>
  `}),(function style$4(){return C`
    :host {
      width: 100%;

      tag {
        align-items: center;
        background-color: var(--color-primary);
        border: var(--border-width-hairline) solid transparent;
        border-radius: var(--border-radius-pill);
        box-sizing: border-box;
        color: var(--color-master-lightest);
        display: flex;
        font-family: var(--font-family-base);
        font-size: var(--font-size-xxs);
        font-weight: var(--font-weight-medium);
        gap: var(--spacing_inset-nano);
        height: 42px;
        justify-content: center;
        letter-spacing: 0.38px;
        line-height: 0;
        padding: 0 var(--spacing_inset-xs);
        transition: all 0.2s ease-out;
      }
    }
  `}))],ne);var se=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,__decorateClass$4=(e,t,r,a)=>{for(var n,s=oe(t,r),o=e.length-1;o>=0;o--)(n=e[o])&&(s=n(t,r,s)||s);return s&&se(t,r,s),s};const ie=(h=class{constructor(e,t,r,a){__privateAdd(this,i),__privateAdd(this,c),__privateAdd(this,d),__privateAdd(this,l),__privateSet(this,i,e),__privateSet(this,d,t),__privateSet(this,c,r),__privateSet(this,l,a)}get learn(){return __privateGet(this,i)??__privateSet(this,i,0)}get relearn(){return __privateGet(this,c)??__privateSet(this,c,0)}get review(){return __privateGet(this,d)??__privateSet(this,d,0)}get total(){return __privateGet(this,l)??__privateSet(this,l,0)}static from(e){const{1:t=[],2:r=[],3:a=[]}=e.group((e=>e.type));return new h(t.length,r.length,a.length,e.length)}static asPercentageOfTotal(e,t,r){const a=r.get;return Object.assign(r,{get(){return this.total?Math.round(a.call(this)/this.total*100):0}}),r}},i=new WeakMap,c=new WeakMap,d=new WeakMap,l=new WeakMap,h);__decorateClass$4([ie.asPercentageOfTotal],ie.prototype,"learn"),__decorateClass$4([ie.asPercentageOfTotal],ie.prototype,"relearn"),__decorateClass$4([ie.asPercentageOfTotal],ie.prototype,"review");let ce=ie;g=new WeakMap,m=new WeakMap;let de=class _Deck{constructor(e){__privateAdd(this,g),__privateAdd(this,m),__privateSet(this,m,e)}get cards(){return __privateGet(this,g)??__privateSet(this,g,ce.from(__privateGet(this,m).cards))}get cover(){return __privateGet(this,m).cover}get id(){return __privateGet(this,m).id}get name(){return __privateGet(this,m).name}static async ofUserLogged(){const{decksOfUserLogged:e}=await W((async()=>{const{decksOfUserLogged:e}=await import("./index-sHk9Weim.js");return{decksOfUserLogged:e}}),__vite__mapDeps([0,1,2,3])),{data:t}=await e();return null==t?void 0:t.map((e=>new _Deck(e)))}};var le,he,ge=Object.defineProperty,me=Object.getOwnPropertyDescriptor,__typeError$2=e=>{throw TypeError(e)},__decorateClass$3=(e,t,r,a)=>{for(var n,s=a>1?void 0:a?me(t,r):t,o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a?n(t,r,s):n(s))||s);return a&&s&&ge(t,r,s),s},__accessCheck$2=(e,t,r)=>t.has(e)||__typeError$2("Cannot "+r),__privateSet$2=(e,t,r,a)=>(__accessCheck$2(e,t,"write to private field"),t.set(e,r),r);let ue=class extends HTMLElement{constructor(){var e,t,r;super(),e=this,(t=he).has(e)?__typeError$2("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this.attachShadow({mode:"open"})}get decks(){return __accessCheck$2(e=this,t=he,"read from private field"),(r?r.call(e):t.get(e))??__privateSet$2(this,he,[]);var e,t,r}async[le=z](){return __privateSet$2(this,he,await de.ofUserLogged()),this}};he=new WeakMap,__decorateClass$3([E],ue.prototype,le,1),ue=__decorateClass$3([U("m-dashboard-shelf"),S((function component$3(e){return j`
    ${e.decks.map((e=>j`
        <m-stack id="deck_${e.id}" direction="column">
          <m-cover src="${e.cover}" aspect="portrait"></m-cover>
          <m-stack direction="column" spacing="nano">
            <m-chart learn="${e.cards.learn}" relearn="${e.cards.relearn}" review="${e.cards.review}"></m-chart>
            <m-stack direction="column" spacing="none">
              <m-text size="xxxs" color="info">${e.cards.total} Revisões</m-text>
              <m-text size="xs" family="highlight" weight="bold" color="master-darker">${e.name}</m-text>
            </m-stack>
          </m-stack>
          <m-redirect href="${P("deck",{deck:e.id})}" on="deck_${e.id}/click:method/go"></m-redirect>
        </m-stack>
      `))}
  `}),(function style$3(e){return C`
    :host {
      display: grid;
      gap: var(--spacing_inset-xs);
      grid-template-columns: repeat(2, 1fr);
      width: 100%;

      @media(width > 425px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media(width > 768px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media(width > 960px) {
        grid-template-columns: repeat(5, 1fr);
      }

      m-stack[id] {
        cursor: pointer;
      }
    }
  `}))],ue);const pe={get expired(){return(new Date).getTime()}};u=new WeakMap,p=new WeakMap;let fe=class _Cards{constructor(e,t){__privateAdd(this,u),__privateAdd(this,p),__privateSet(this,p,e),__privateSet(this,u,t)}get nextReviewDate(){return __privateGet(this,u)??__privateSet(this,u,0)}get totalReviewCards(){return __privateGet(this,p)??__privateSet(this,p,0)}static async reviewStats(){const{nextReviewCardOfUserLogged:e,totalReviewCardsOfUserLogged:t}=await W((async()=>{const{nextReviewCardOfUserLogged:e,totalReviewCardsOfUserLogged:t}=await import("./index-sHk9Weim.js");return{nextReviewCardOfUserLogged:e,totalReviewCardsOfUserLogged:t}}),__vite__mapDeps([0,1,2,3])),{count:r}=await t(pe.expired),{data:a}=await e();return new _Cards(r,null==a?void 0:a.validity)}};var we,ve,ye=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,__typeError$1=e=>{throw TypeError(e)},__decorateClass$2=(e,t,r,a)=>{for(var n,s=a>1?void 0:a?xe(t,r):t,o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a?n(t,r,s):n(s))||s);return a&&s&&ye(t,r,s),s},__accessCheck$1=(e,t,r)=>t.has(e)||__typeError$1("Cannot "+r),__privateGet$1=(e,t,r)=>(__accessCheck$1(e,t,"read from private field"),r?r.call(e):t.get(e));let ke=class extends HTMLElement{constructor(){var e,t,r;super(),e=this,(t=ve).has(e)?__typeError$1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this.attachShadow({mode:"open"})}get shouldHide(){return""===this.nextReviewIn&&0===this.pendingCards}get nextReviewIn(){return function timeUntilReview(e=0){const t=e-Date.now();if(t<=0)return"";const r=Math.floor(t/1e3),a=Math.floor(r/60),n=Math.floor(a/60),s=Math.floor(n/24),o=Math.floor(s/7),i=Math.floor(s/30),c=Math.floor(s/365);return c>0?`${c} ano${c>1?"s":""}`:i>0?`${i} mês${i>1?"es":""}`:o>0?`${o} semana${o>1?"s":""}`:s>0?`${s} dia${s>1?"s":""}`:n>0?`${n} hora${n>1?"s":""}`:a>0?`${a} minuto${a>1?"s":""}`:""}(__privateGet$1(this,ve).nextReviewDate)}get pendingCards(){return __privateGet$1(this,ve).totalReviewCards}async[we=z](){var e,t,r;return e=this,t=ve,r=await fe.reviewStats(),__accessCheck$1(e,t,"write to private field"),t.set(e,r),this}};ve=new WeakMap,__decorateClass$2([E],ke.prototype,we,1),ke=__decorateClass$2([U("m-dashboard-study"),S((function component$2(e){return e.pendingCards?j`
      <m-stack align="center">
        <img src="${"/assets/image-full-CBrSzEyk.svg"}" alt="Memoize" loading="auto" />
        <m-stack direction="column" spacing="none">
          <m-text family="highlight" size="xs" color="master-darker" weight="bold">Você tem revisões!</m-text>
          <m-text size="xxxs">Há <strong>${e.pendingCards}</strong> revisões aguardando você.</m-text>
        </m-stack>
      </m-stack>
      <m-button id="goToStudy">
        Revisar agora
        <m-redirect href="${P("card")}" on="goToStudy/click:method/go"></m-redirect>
      </m-button>
    `:e.nextReviewIn?j`
      <m-stack align="center">
        <img src="${"/assets/image-empty-CxGKuSUP.svg"}" alt="Memoize" loading="auto" />
        <m-stack direction="column" spacing="none">
          <m-text family="highlight" size="xs" color="master-darker" weight="bold">Estudo concluído</m-text>
          <m-text size="xxxs">Volte em <strong>${e.nextReviewIn}</strong> para continuar seu aprendizado.</m-text>
        </m-stack>
      </m-stack>
    `:j``}),(function style$2(e){return C`
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
  `}))],ke);const be=0,$e=1,Oe=2,De=3,_e=4,Me=5,Le=6,Te={is(e){const t=new Date;return t.setDate(t.getDate()-t.getDay()+e),t.setHours(0,0,0,0),t.getTime()}};let je=(w=class{constructor(e){__privateAdd(this,f),__privateSet(this,f,e)}get number(){return new Date(Te.is(Me)).getDate()}get label(){return"S"}get goalAchieved(){var e;return(null==(e=__privateGet(this,f))?void 0:e.goalAchieved)??!1}get today(){return(new Date).getDay()===Me}static from(e){const t=Te.is(Me);return new w(null==e?void 0:e.find((e=>e.date===t)))}},f=new WeakMap,w),Pe=(y=class{constructor(e){__privateAdd(this,v),__privateSet(this,v,e)}get number(){return new Date(Te.is($e)).getDate()}get label(){return"S"}get goalAchieved(){var e;return(null==(e=__privateGet(this,v))?void 0:e.goalAchieved)??!1}get today(){return(new Date).getDay()===$e}static from(e){const t=Te.is($e);return new y(null==e?void 0:e.find((e=>e.date===t)))}},v=new WeakMap,y),We=(k=class{constructor(e){__privateAdd(this,x),__privateSet(this,x,e)}get number(){return new Date(Te.is(Le)).getDate()}get label(){return"S"}get goalAchieved(){var e;return(null==(e=__privateGet(this,x))?void 0:e.goalAchieved)??!1}get today(){return(new Date).getDay()===Le}static from(e){const t=Te.is(Le);return new k(null==e?void 0:e.find((e=>e.date===t)))}},x=new WeakMap,k),Ce=($=class{constructor(e){__privateAdd(this,b),__privateSet(this,b,e)}get number(){return new Date(Te.is(be)).getDate()}get label(){return"D"}get goalAchieved(){var e;return(null==(e=__privateGet(this,b))?void 0:e.goalAchieved)??!1}get today(){return(new Date).getDay()===be}static from(e){const t=Te.is(be);return new $(null==e?void 0:e.find((e=>e.date===t)))}},b=new WeakMap,$),Ue=(D=class{constructor(e){__privateAdd(this,O),__privateSet(this,O,e)}get number(){return new Date(Te.is(_e)).getDate()}get label(){return"Q"}get goalAchieved(){var e;return(null==(e=__privateGet(this,O))?void 0:e.goalAchieved)??!1}get today(){return(new Date).getDay()===_e}static from(e){const t=Te.is(_e);return new D(null==e?void 0:e.find((e=>e.date===t)))}},O=new WeakMap,D),Se=(M=class{constructor(e){__privateAdd(this,_),__privateSet(this,_,e)}get number(){return new Date(Te.is(Oe)).getDate()}get label(){return"T"}get goalAchieved(){var e;return(null==(e=__privateGet(this,_))?void 0:e.goalAchieved)??!1}get today(){return(new Date).getDay()===Oe}static from(e){const t=Te.is(Oe);return new M(null==e?void 0:e.find((e=>e.date===t)))}},_=new WeakMap,M);L=new WeakMap;let Ee=class _Sunday{constructor(e){__privateAdd(this,L),__privateSet(this,L,e)}get number(){return new Date(Te.is(De)).getDate()}get label(){return"Q"}get goalAchieved(){var e;return(null==(e=__privateGet(this,L))?void 0:e.goalAchieved)??!1}get today(){return(new Date).getDay()===De}static from(e){const t=Te.is(De);return new _Sunday(null==e?void 0:e.find((e=>e.date===t)))}};T=new WeakMap;let ze=class _Habit{constructor(...e){__privateAdd(this,T),__privateSet(this,T,e)}map(e){return __privateGet(this,T).map(e)}static async ofUserLogged(){const{habitOfUserLogged:e}=await W((async()=>{const{habitOfUserLogged:e}=await import("./index-sHk9Weim.js");return{habitOfUserLogged:e}}),__vite__mapDeps([0,1,2,3])),{data:t}=await e();return new _Habit(Ce.from(t),Pe.from(t),Se.from(t),Ee.from(t),Ue.from(t),je.from(t),We.from(t))}};var Re,Ae,He=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,__typeError2=e=>{throw TypeError(e)},__decorateClass$1=(e,t,r,a)=>{for(var n,s=a>1?void 0:a?Ie(t,r):t,o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a?n(t,r,s):n(s))||s);return a&&s&&He(t,r,s),s},__accessCheck2=(e,t,r)=>t.has(e)||__typeError2("Cannot "+r),__privateSet2=(e,t,r,a)=>(__accessCheck2(e,t,"write to private field"),t.set(e,r),r);let Ve=class extends HTMLElement{constructor(){var e,t,r;super(),e=this,(t=Ae).has(e)?__typeError2("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this.attachShadow({mode:"open"})}get habit(){return __accessCheck2(e=this,t=Ae,"read from private field"),(r?r.call(e):t.get(e))??__privateSet2(this,Ae,[]);var e,t,r}async[Re=z](){return __privateSet2(this,Ae,await ze.now()),this}};Ae=new WeakMap,__decorateClass$1([E],Ve.prototype,Re,1),Ve=__decorateClass$1([U("m-dashboard-week"),S((function component$1(e){return j`
    <m-stack justify="space-between">
      ${e.habit.map((e=>j`
          <day ${e.today?"is-today":""}>
            <m-text size="xxxs" color="info">${e.label}</m-text>
            <m-text family="highlight" size="sm" color="master-darker" weight="bold">${e.number}</m-text>
            <m-show when="${e.goalAchieved}" justify="center">
              <m-icon use="check" size="xxs"></m-icon>
            <m/-show>
          </day>
        `))}
    </m-stack>
  `}),(function style$1(){return C`
    :host {
      width: 100%;

      day {
        align-items: center;
        border-radius: var(--border-radius-pill);
        display: flex;
        flex-direction: column;
        padding: var(--spacing_inset-nano) var(--spacing_inset-nano);
      }

      day[is-today] {
        background-color: var(--color-master-lighter);
      }
    }
  `}))],Ve);var Be=Object.getOwnPropertyDescriptor;let Fe=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}};Fe=((e,t,r,a)=>{for(var n,s=a>1?void 0:a?Be(t,r):t,o=e.length-1;o>=0;o--)(n=e[o])&&(s=n(s)||s);return s})([U("m-dashboard"),S((function component(){return j`
    <m-dashboard-header></m-dashboard-header>
    <m-main>
      <app>
        <m-dashboard-profile></m-dashboard-profile>
        <m-dashboard-week></m-dashboard-week>
        <m-dashboard-study></m-dashboard-study>
        <m-dashboard-shelf></m-dashboard-shelf>
        <m-dashboard-empty></m-dashboard-empty>
      </app>      
    </m-main>
    <m-dashboard-footer></m-dashboard-footer>
  `}),(function style(e){return C`
    app {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: start;
      margin: 0 auto;
      max-width: 1024;
      padding: var(--spacing_inset-sm) 0;
      width: 100%;
    }
  `}))],Fe);const Qe=Fe;export{Qe as default};
