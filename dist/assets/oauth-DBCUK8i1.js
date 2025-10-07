const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/index-C5mZ2f1n.js","assets/index-6JJOnoOU.css"])))=>i.map(i=>d[i]);
import{h as t,u as e,_ as o,k as a,e as n,s as i,d as r,f as s}from"./index-C5mZ2f1n.js";import{s as c}from"./style-BW8_7pMu.js";const m={async signOut(){const{signOut:t}=await o((async()=>{const{signOut:t}=await import("./index-sHk9Weim.js");return{signOut:t}}),__vite__mapDeps([0,1,2,3]));return await t(),m}};var l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,__decorateClass=(t,e,o,a)=>{for(var n,i=a>1?void 0:a?u(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(i=(a?n(e,o,i):n(i))||i);return a&&i&&l(e,o,i),i};let d=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async logOut(t){return await m.signOut(),a(),this}};__decorateClass([n.click("#logOut",i)],d.prototype,"logOut",1),d=__decorateClass([r("m-sign-out"),s((function component(){return t`
    <m-header>
      <m-button id="backToSite" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${e("site")}" on="backToSite/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <oauth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Você terminou por hoje?</m-text>
          <m-text align="center" size="xxxs">Você será desconectado do aplicativo. Sentiremos sua falta! Volte logo para continuar seus estudos</m-text>
        </m-stack>
        <img alt="Memoize" src="${"/assets/image-CyQXLuaM.svg"}" loading="lazy" />
        <m-button id="logOut" width="100%">Sair</m-button>
        <m-stack direction="column" align="center">
          <m-link href="${e("dashboard")}">Voltar para o Dashboard</m-link>
        </m-stack>
      </oauth>
    </m-main>
    <m-footer></m-footer>
  `}),c)],d);const g=d;export{g as default};
