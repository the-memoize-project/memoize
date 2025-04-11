import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component() {
  return html`
    <m-stack direction="column" spacing="none" align="center">
      <m-text color="master-darker" family="highlight" weight="bold" size="sm" align="center">Vanos nessa?</m-text>
      <m-text color="master-dark" size="xxxs" align="center">Ainda não tem nenhuma coleção por aqui. Que tal criar sua primeira e começar a turbinar seus estudos?</m-text>
    </m-stack>
    <img alt="Memoize" src="${image}" loading="lazy" />
    <m-stack direction="column" align="center">
      <m-button id="createFirstDeck" width="100%">
        Criar coleção
        <m-redirect href="${urlFor("createDeck")}" on="createFirstDeck/click:method/go"></m-redirect>
      </m-button>
      <m-link href="${urlFor("howWorks")}">Como o Memoize pode te ajudar?</m-link>
    </m-stack>
  `;
}

export default component;
