const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/index-C5mZ2f1n.js","assets/index-6JJOnoOU.css"])))=>i.map(i=>d[i]);
import{h as t,u as a,_ as e,e as i,s as n,d as o,f as r}from"./index-C5mZ2f1n.js";import{s as m}from"./style-BW8_7pMu.js";import{w as s}from"./willPaint-B74CwLKT.js";import{v as l}from"./detail-D5hbE-Va.js";import{h as c}from"./hydrate-DEJGKsT8.js";import{g as d}from"./goToDashboard-C8AM9ihF.js";const u={async isItAuthenticated(){var t;const{getSession:a}=await e((async()=>{const{getSession:t}=await import("./index-sHk9Weim.js");return{getSession:t}}),__vite__mapDeps([0,1,2,3])),{data:i}=await a();return Boolean(null==(t=null==i?void 0:i.session)?void 0:t.user)},async SignUp(t){const{signUp:a}=await e((async()=>{const{signUp:t}=await import("./index-sHk9Weim.js");return{signUp:t}}),__vite__mapDeps([0,1,2,3])),{data:i}=await a(t);return i}};var p,g=Object.defineProperty,h=Object.getOwnPropertyDescriptor,__decorateClass=(t,a,e,i)=>{for(var n,o=i>1?void 0:i?h(a,e):a,r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i?n(a,e,o):n(o))||o);return i&&o&&g(a,e,o),o};let y=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async create(t){return await u.signUp(t)&&d(),this}async[p=c](){return await u.isItAuthenticated()&&d(),this}};__decorateClass([i.submit(":host m-form",n,l)],y.prototype,"create",1),__decorateClass([s],y.prototype,p,1),y=__decorateClass([o("m-sign-up"),r((function component(){return t`
    <m-header>
      <m-button id="backToSignIn" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${a("signIn")}" on="backToSignIn/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <oauth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Criar uma conta</m-text>
          <m-text align="center" size="xxxs">Inicie sua avaliação gratuita</m-text>
        </m-stack>
        <m-form>
          <template>
            <m-input label="Nome" name="name" required>
              <m-validity state="valueMissing">Nome é obrigatório</m-validity>
            </m-input>
            <m-input label="Email" name="email" type="email" required>
              <m-validity state="typeMismatch">Email inválido</m-validity>
              <m-validity state="valueMissing">Email é obrigatório</m-validity>
            </m-input>
            <m-input label="Senha" name="password" type="password" autocomplete="off" required>
              <m-validity state="valueMissing">Senha é obrigatória</m-validity>
            </m-input>
            <m-button width="100%">Começar</m-button>
          </template>
        </m-form>
        <m-stack direction="column" align="center">
          <m-text align="center">Já tem uma conta? <m-link href="${a("signIn")}">Entrar</m-link></m-text>
        </m-stack>
      </oauth>
    </m-main>
    <m-footer></m-footer>
  `}),m)],y);const f=y;export{f as default};
