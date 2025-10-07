import{h as e,u as t,d as r,f as a,c as o}from"./index-C5mZ2f1n.js";var i=Object.getOwnPropertyDescriptor;let s=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}};s=((e,t,r,a)=>{for(var o,s=a>1?void 0:a?i(t,r):t,n=e.length-1;n>=0;n--)(o=e[n])&&(s=o(s)||s);return s})([r("m-how-works-header"),a((function component$1(){return e`
    <m-header>
      <m-button id="backToDeck" variant="icon" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${t("dashboard")}" on="backToDeck/click:method/go"></m-redirect>
      </m-button>
    </m-header>
  `}))],s);var n=Object.getOwnPropertyDescriptor;let c=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}};c=((e,t,r,a)=>{for(var o,i=a>1?void 0:a?n(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([r("m-how-works"),a((function component(r){return e`
    <m-how-works-header></m-how-works-header>
    <m-main>
      <app>
        <m-text color="master-darker" size="md" weight="bold" family="highlight" align="center">
          Maximizamos sua retenção de conhecimento
        </m-text>
        <ul>
          <li>
            <span>1</span>
            <m-text color="master-darker" size="sm" weight="medium" align="center">
              Crie seus flashcards
            </m-text>
            <m-text color="master-dark" size="xxs" align="center">
              Adicione suas perguntas e respostas ao aplicativo, criando seus próprios flashcards.
            </m-text>
          </li>
          <li>
            <span>2</span>
            <m-text color="master-darker" size="sm" weight="medium" align="center">
              Estude regularmente
            </m-text>
            <m-text color="master-dark" size="xxs" align="center">
              Acesse a seção de estudo e revise seus flashcards conforme desejar. Tente responder às perguntas ou solucionar os problemas apresentados.
            </m-text>
          </li>
          <li>
            <span>3</span>
            <m-text color="master-darker" size="sm" weight="medium" align="center">
              Cuidamos do resto
            </m-text>
            <m-text color="master-dark" size="xxs" align="center">
              Não se preocupe com quando revisar cada flashcard. O aplicativo organizará automaticamente as revisões com base em sua dificuldade, garantindo uma prática eficiente e eficaz.
            </m-text>
          </li>
        </ul>
        <m-button id="createFirstDeck" width="100%">
          <m-icon color="currentColor" use="add"></m-icon>
          Criar coleção
          <m-redirect href="${t("createDeck")}" on="createFirstDeck/click:method/go"></m-redirect>
        </m-button>
      </app>
    </m-main>
    <m-footer></m-footer>
  `}),(function style(){return o`
    app {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: calc(var(--spacing_inset-giant) * 1.62);
      justify-content: center;
      margin: 0 auto;
      max-width: 425px;
      min-height: calc(100svh - (144px + 32px));
      width: 100%;

      ul {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: calc(var(--spacing_inset-giant) * 1.62);
        list-style: none;
      }

      li {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-nano);
      }

      span {
        align-items: center;
        border: var(--border-width-thin) solid var(--color-master-darker);
        border-radius: var(--border-radius-circular);
        color: var(--color-master-darker);
        display: flex;
        font-family: var(--font-family-base);
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-bold);
        height: 56px;
        justify-content: center;
        margin-bottom: var(--spacing_inset-nano);
        text-align: center;
        width: 56px;
      }
    }
  `}))],c);const m=c;export{m as default};
