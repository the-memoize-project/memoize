const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/index-C5mZ2f1n.js","assets/index-6JJOnoOU.css"])))=>i.map(i=>d[i]);
import{h as t,u as e,c as i,_ as o,d as s,f as a}from"./index-C5mZ2f1n.js";import{w as n}from"./willPaint-B74CwLKT.js";import{h as r}from"./hydrate-DEJGKsT8.js";import{g as m}from"./goToDashboard-C8AM9ihF.js";const c={async isItAuthenticated(){var t;const{getSession:e}=await o((async()=>{const{getSession:t}=await import("./index-sHk9Weim.js");return{getSession:t}}),__vite__mapDeps([0,1,2,3])),{data:i}=await e();return Boolean(null==(t=null==i?void 0:i.session)?void 0:t.user)}};var l,d=Object.defineProperty,g=Object.getOwnPropertyDescriptor,__decorateClass=(t,e,i,o)=>{for(var s,a=o>1?void 0:o?g(e,i):e,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o?s(e,i,a):s(a))||a);return o&&a&&d(e,i,a),a};let u=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async[l=r](){return await c.isItAuthenticated()&&m(),this}};__decorateClass([n],u.prototype,l,1),u=__decorateClass([s("m-site"),a((function component(){return t`
    <m-main>
      <site>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold">Aprenda <m-text color="primary" family="highlight" size="md" weight="bold">5x mais rápido!</m-text></m-text>
          <m-text align="center" size="xxxs">Com a ciência da repetição espaçada, você obtém uma retenção de conhecimento superior. Domine qualquer assunto <m-text size="xxxs" weight="bold">2 a 5 vezes mais rápido que os métodos tradicionais</m-text></m-text>
        </m-stack>
        <img alt="Memoize" src="${"/assets/image-Dz9bexZY.svg"}" loading="lazy" />
        <m-stack direction="column">
          <m-button id="signIn" width="100%">
            Entrar
            <m-redirect href="${e("signIn")}" on="signIn/click:method/go"></m-redirect>
          </m-button>
          <m-install></m-install>
        </m-stack>
      </site>
    </m-main>
    <m-footer></m-footer>
  `}),(function style(){return i`
    site {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: center;
      margin: 0 auto;
      max-width: 425px;
      min-height: calc(100svh - (72px + 32px));
      width: 100%;
    }
  `}))],u);const h=u;export{h as default};
