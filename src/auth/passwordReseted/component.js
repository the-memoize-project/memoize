import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-button id="backToForgotPassword" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("forgotPassword")}" on="backToForgotPassword/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <auth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Tudo certo por aqui!</m-text>
          <m-text align="center" size="xxxs">Sua senha foi atualizada com sucesso. Agora é só fazer login e continuar sua jornada 💡</m-text>
        </m-stack>
        <m-button id="continue" width="100%">
          Continuar
          <m-redirect href="${urlFor("signIn")}" on="continue/click:method/go"></m-redirect>
        </m-button>
        <m-stack direction="column" align="center">
          <m-link href="${urlFor("signIn")}">Voltar para o login</m-link>
        </m-stack>
      </auth>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
