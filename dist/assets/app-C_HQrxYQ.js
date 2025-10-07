import{h as t,u as e,c as o,p as a,e as n,s as r,d as i,f as s}from"./index-C5mZ2f1n.js";const c={goToDashboard(){return history.pushState({},"",e("dashboard")),this},goToDeck(t){return history.pushState({},"",e("deck",{deck:t})),this}};var m=Object.defineProperty,d=Object.getOwnPropertyDescriptor,__decorateClass=(t,e,o,a)=>{for(var n,r=a>1?void 0:a?d(e,o):e,i=t.length-1;i>=0;i--)(n=t[i])&&(r=(a?n(e,o,r):n(r))||r);return a&&r&&m(e,o,r),r};let l=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}click(){return a.deck?c.goToDeck(a.deck):c.goToDashboard(),this}};__decorateClass([n.click(":host m-button",r)],l.prototype,"click",1),l=__decorateClass([i("m-study-completed"),s((function component(){return t`
    <m-header>
      <m-button variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
      </m-button>
    </m-header>
    <m-main>
      <app>
        <m-stack direction="column" spacing="nano" align="center">
          <m-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Estudo concluído</m-text>
          <m-text align="center">Você terminou de estudar este topico. Volte mais tarde para revisar novamente</m-text>
        </m-stack>
        <img alt="Memoize" src="${"/assets/image-bSQ5nd-b.svg"}" loading="lazy" />
        <m-button width="100%">Continuar</m-button>
      </app>
    </m-main>
    <m-footer></m-footer>
  `}),(function style(){return o`
    app {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: center;
      margin: 0 auto;
      max-width: 425px;
      min-height: calc(100svh - (144px + 32px));
      width: 100%;
    }
  `}))],l);const u=l;export{u as default};
