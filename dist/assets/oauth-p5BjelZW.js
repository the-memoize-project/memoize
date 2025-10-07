const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/index-C5mZ2f1n.js","assets/index-6JJOnoOU.css"])))=>i.map(i=>d[i]);
import{h as t,u as i,_ as a,e,j as n,s as o,d as s,f as r}from"./index-C5mZ2f1n.js";import{w as m}from"./willPaint-B74CwLKT.js";import{v as l}from"./detail-D5hbE-Va.js";import{h as c}from"./hydrate-DEJGKsT8.js";import{g as d}from"./goToDashboard-C8AM9ihF.js";import{s as h}from"./style-BW8_7pMu.js";const g={async isItAuthenticated(){var t;const{getSession:i}=await a((async()=>{const{getSession:t}=await import("./index-sHk9Weim.js");return{getSession:t}}),__vite__mapDeps([0,1,2,3])),{data:e}=await i();return Boolean(null==(t=null==e?void 0:e.session)?void 0:t.user)},async signInWithOAuth(){const{signInWithOAuth:t}=await a((async()=>{const{signInWithOAuth:t}=await import("./index-sHk9Weim.js");return{signInWithOAuth:t}}),__vite__mapDeps([0,1,2,3]));return t(),g},async signInWithPassword(t){const{signInWithPassword:i}=await a((async()=>{const{signInWithPassword:t}=await import("./index-sHk9Weim.js");return{signInWithPassword:t}}),__vite__mapDeps([0,1,2,3])),{data:e}=await i(t);return e}};var u,p=Object.defineProperty,w=Object.getOwnPropertyDescriptor,__decorateClass=(t,i,a,e)=>{for(var n,o=e>1?void 0:e?w(i,a):i,s=t.length-1;s>=0;s--)(n=t[s])&&(o=(e?n(i,a,o):n(o))||o);return e&&o&&p(i,a,o),o};let v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async logIn(t){return await g.signInWithPassword(t)&&d(),this}async logInWithGoogle(){return await g.signInWithOAuth(),this}async[u=c](){return await g.isItAuthenticated()&&d(),this}};__decorateClass([e.submit("m-form",n,l)],v.prototype,"logIn",1),__decorateClass([e.click("#logInWithGoogle",o)],v.prototype,"logInWithGoogle",1),__decorateClass([m],v.prototype,u,1),v=__decorateClass([s("m-sign-in"),r((function component(){return t`
    <m-header>
      <m-button id="backToSite" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${i("site")}" on="backToSite/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <oauth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Faça login na sua conta</m-text>
          <m-text align="center" size="xxxs">Bem-vindo de volta! Por favor, insira seus dados</m-text>
        </m-stack>
        <m-form>
          <template>
            <m-input label="E-mail" name="email" type="email" required>
              <m-validity state="typeMismatch">E-mail inválido</m-validity>
              <m-validity state="valueMissing">E-mail é obrigatório</m-validity>
            </m-input>
            <m-input label="Senha" name="password" type="password" autocomplete="off" required>
              <m-validity state="valueMissing">Senha é obrigatória</m-validity>
            </m-input>
            <m-button width="100%">Entrar</m-button>
          </template>
        </m-form>
        <m-button id="logInWithGoogle" variant="naked" width="100%">
          <img src="${"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M22.56%2012.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26%201.37-1.04%202.53-2.21%203.31v2.77h3.57c2.08-1.92%203.28-4.74%203.28-8.09z'%20fill='%234285F4'/%3e%3cpath%20d='M12%2023c2.97%200%205.46-.98%207.28-2.66l-3.57-2.77c-.98.66-2.23%201.06-3.71%201.06-2.86%200-5.29-1.93-6.16-4.53H2.18v2.84C3.99%2020.53%207.7%2023%2012%2023z'%20fill='%2334A853'/%3e%3cpath%20d='M5.84%2014.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43%208.55%201%2010.22%201%2012s.43%203.45%201.18%204.93l2.85-2.22.81-.62z'%20fill='%23FBBC05'/%3e%3cpath%20d='M12%205.38c1.62%200%203.06.56%204.21%201.64l3.15-3.15C17.45%202.09%2014.97%201%2012%201%207.7%201%203.99%203.47%202.18%207.07l3.66%202.84c.87-2.6%203.3-4.53%206.16-4.53z'%20fill='%23EA4335'/%3e%3cpath%20d='M1%201h22v22H1z'%20fill='none'/%3e%3c/svg%3e"}" alt="Google" loading="lazy" />
          Entrar com Google
        </m-button>
        <m-stack direction="column" align="center">
          <m-link href="${i("forgotPassword")}">Esqueceu a senha?</m-link>
          <m-text align="center">Não tem uma conta? <m-link href="${i("signUp")}">Criar conta</m-link></m-text>
        </m-stack>
      </oauth>
    </m-main>
    <m-footer></m-footer>
  `}),h)],v);const f=v;export{f as default};
