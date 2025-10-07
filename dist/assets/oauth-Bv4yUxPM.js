const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/index-C5mZ2f1n.js","assets/index-6JJOnoOU.css"])))=>i.map(i=>d[i]);
import{h as t,u as e,_ as a,e as n,s,d as r,f as o}from"./index-C5mZ2f1n.js";import{s as i}from"./style-BW8_7pMu.js";import{w as m}from"./willPaint-B74CwLKT.js";import{v as d}from"./detail-D5hbE-Va.js";import{h as c}from"./hydrate-DEJGKsT8.js";import{g as l}from"./goToDashboard-C8AM9ihF.js";const u={async isItAuthenticated(){var t;const{getSession:e}=await a((async()=>{const{getSession:t}=await import("./index-sHk9Weim.js");return{getSession:t}}),__vite__mapDeps([0,1,2,3])),{data:n}=await e();return Boolean(null==(t=null==n?void 0:n.session)?void 0:t.user)},async updateUser(t){const{updateUser:e}=await a((async()=>{const{updateUser:t}=await import("./index-sHk9Weim.js");return{updateUser:t}}),__vite__mapDeps([0,1,2,3])),{data:n}=await e(t);return n}};var p,h=Object.defineProperty,g=Object.getOwnPropertyDescriptor,__decorateClass=(t,e,a,n)=>{for(var s,r=n>1?void 0:n?g(e,a):e,o=t.length-1;o>=0;o--)(s=t[o])&&(r=(n?s(e,a,r):s(r))||r);return n&&r&&h(e,a,r),r};let f=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async reset(t){return await u.updateUser(t)&&(void 0)(),this}async[p=c](){return await u.isItAuthenticated()&&l(),this}};__decorateClass([n.submit(":host m-form",s,d)],f.prototype,"reset",1),__decorateClass([m],f.prototype,p,1),f=__decorateClass([r("m-set-new-password"),o((function component(){return t`
    <m-header>
      <m-button id="backToSignIn" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${e("signIn")}" on="backToSignIn/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <oauth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Definir nova senha</m-text>
          <m-text align="center" size="xxxs">Sua nova senha deve ser diferente das senhas anteriormente utilizadas.</m-text>
        </m-stack>
        <m-form>
          <template>
            <m-input label="Senha" name="password" type="password" required>
              <m-validity state="valueMissing">Senha é obrigatória</m-validity>
            </m-input>
            <m-button width="100%">Definir nova senha</m-button>
          </template>
        </m-form>
        <m-stack direction="column" align="center">
          <m-link href="${e("signIn")}">Voltar para a tela de login</m-link>
        </m-stack>
      </oauth>
    </m-main>
    <m-footer></m-footer>
  `}),i)],f);const w=f;export{w as default};
