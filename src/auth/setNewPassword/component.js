import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-button id="backToSignIn" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("signIn")}" on="backToSignIn/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <auth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Quase lá!</m-text>
          <m-text align="center" size="xxxs">Crie uma nova senha segura para continuar seus estudos com tranquilidade</m-text>
        </m-stack>
        <m-form id="reset">
          <template>
            <m-input label="Senha" name="password" type="password" required>
              <m-validity state="valueMissing">Senha é obrigatória</m-validity>
            </m-input>
            <m-button width="100%">Definir senha</m-button>
          </template>
        </m-form>
        <m-stack direction="column" align="center">
          <m-link href="${urlFor("signIn")}">Voltar para o login</m-link>
        </m-stack>
      </auth>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
