import{h as t,u as e,e as a,s as o,d as i,f as r}from"./index-C5mZ2f1n.js";import{s as m}from"./style-BW8_7pMu.js";import{w as s}from"./willPaint-B74CwLKT.js";import{v as n}from"./detail-D5hbE-Va.js";import{g as l}from"./goToDashboard-C8AM9ihF.js";import{U as c}from"./user-BFRpVqjb.js";var d,u=Object.defineProperty,p=Object.getOwnPropertyDescriptor,__decorateClass=(t,e,a,o)=>{for(var i,r=o>1?void 0:o?p(e,a):e,m=t.length-1;m>=0;m--)(i=t[m])&&(r=(o?i(e,a,r):i(r))||r);return o&&r&&u(e,a,r),r};let h=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async reset(t){const{email:e}=t;return await c.resetPasswordForEmail(e)&&(void 0)(e),this}async[d=hydrate](){return await c.isItAuthenticated()&&l(),this}};__decorateClass([a.submit(":host m-form",o,n)],h.prototype,"reset",1),__decorateClass([s],h.prototype,d,1),h=__decorateClass([i("m-forgot-password"),r((function component(){return t`
    <m-header>
      <m-button id="backToForgotPassword" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${e("signIn")}" on="backToForgotPassword/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <oauth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Esqueceu a senha?</m-text>
          <m-text align="center" size="xxxs">Não se preocupe! Enviaremos instruções de redefinição para o seu e-mail abaixo:</m-text>
        </m-stack>
        <m-form>
          <template>
            <m-input label="E-mail" name="email" type="email" required>
              <m-validity state="typeMismatch">E-mail inválido</m-validity>
              <m-validity state="valueMissing">E-mail é obrigatório</m-validity>
            </m-input>
            <m-button width="100%">Redefinir senha</m-button>
          </template>
        </m-form>
        <m-stack direction="column" align="center">
          <m-link href="${e("signIn")}">Voltar para a tela de login</m-link>
        </m-stack>
      </oauth>
    </m-main>
    <m-footer></m-footer>
  `}),m)],h);const g=h;export{g as default};
