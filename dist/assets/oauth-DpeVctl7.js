import{h as e,u as t,d as o,f as r}from"./index-C5mZ2f1n.js";import{U as a}from"./user-BFRpVqjb.js";import{s as i}from"./style-BW8_7pMu.js";import{w as n}from"./willPaint-B74CwLKT.js";import{h as s}from"./hydrate-DEJGKsT8.js";import{g as m}from"./goToDashboard-C8AM9ihF.js";var c,d=Object.defineProperty,l=Object.getOwnPropertyDescriptor,__decorateClass=(e,t,o,r)=>{for(var a,i=r>1?void 0:r?l(t,o):t,n=e.length-1;n>=0;n--)(a=e[n])&&(i=(r?a(t,o,i):a(i))||i);return r&&i&&d(t,o,i),i};let h=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async[c=s](){return await a.isItAuthenticated()&&m(),this}};__decorateClass([n],h.prototype,c,1),h=__decorateClass([o("m-password-reseted"),r((function component(){return e`
    <m-header>
      <m-button id="backToForgotPassword" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${t("forgotPassword")}" on="backToForgotPassword/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <oauth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Redefinição de senha</m-text>
          <m-text align="center" size="xxxs">Sua senha foi redefinida com sucesso. Clique abaixo para fazer login de forma rápida e segura.</m-text>
        </m-stack>
        <m-button id="continue" width="100%">
          Continuar
          <m-redirect href="${t("signIn")}" on="continue/click:method/go"></m-redirect>
        </m-button>
        <m-stack direction="column" align="center">
          <m-link href="${t("signIn")}">Voltar para a tela de login</m-link>
        </m-stack>
      </oauth>
    </m-main>
    <m-footer></m-footer>
  `}),i)],h);const u=h;export{u as default};
