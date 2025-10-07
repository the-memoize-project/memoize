import{h as e,u as t,i as o,e as a,s as i,d as r,f as n}from"./index-C5mZ2f1n.js";import{U as m}from"./user-BFRpVqjb.js";import{s}from"./style-BW8_7pMu.js";import{w as l}from"./willPaint-B74CwLKT.js";import{h as c}from"./hydrate-DEJGKsT8.js";import{g as d}from"./goToDashboard-C8AM9ihF.js";var p,h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,__decorateClass=(e,t,o,a)=>{for(var i,r=a>1?void 0:a?u(t,o):t,n=e.length-1;n>=0;n--)(i=e[n])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&h(t,o,r),r};let g=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}openEmailApp(){const[,e]=o.email.split("@");return function goToEmailProvider(e){window.open(`https://${e}`,"_blank")}(e),this}async resend(){return await m.resetPasswordForEmail(o.email),this}async[p=c](){return await m.isItAuthenticated()&&d(),this}};__decorateClass([a.click(":host #openEmailApp",i)],g.prototype,"openEmailApp",1),__decorateClass([a.click(":host #resend",i)],g.prototype,"resend",1),__decorateClass([l],g.prototype,p,1),g=__decorateClass([r("m-email-verification"),n((function component(){return e`
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
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Verifique seu e-mail</m-text>
          <m-text align="center" size="xxxs">Enviamos um link para redefinir sua senha para o endereço de e-mail abaixo:</m-text>
          <m-text weight="bold" align="center">${o.email}</m-text>
        </m-stack>
        <m-button id="openEmailApp" width="100%">Abrir aplicativo de e-mail</m-button>
        <m-stack direction="column" align="center">
          <m-text align="center">Não recebeu o e-mail? <m-link id="resend">Clique aqui para reenviar</m-link></m-text>
          <m-link href="${t("signIn")}">Voltar para a tela de login</m-link>
        </m-stack>
      </oauth>
    </m-main>
    <m-footer></m-footer>
  `}),s)],g);const f=g;export{f as default};
