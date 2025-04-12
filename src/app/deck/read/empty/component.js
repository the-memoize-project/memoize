import { html } from "standard/dom";
import { params, urlFor } from "standard/router";
import image from "./image.svg";

function component() {
  return html`
    <m-stack direction="column" spacing="none" align="center">
      <m-text color="master-darker" size="md" family="highlight" weight="bold" align="center">Bora começar?</m-text>
      <m-text color="master-dark" size="xxxs" align="center">Que tal criar sua primeira revisão pra dar o start nos estudos?</m-text>
    </m-stack>
    <img alt="Memoize" src="${image}" loading="lazy" />
    <m-button id="createFirstCard" width="100%">
      Criar minha primeira revisão
      <m-redirect href="${urlFor("createCard", params)}" on="createFirstCard/click:method/go"></m-redirect>
    </m-button>
  `;
}

export default component;
