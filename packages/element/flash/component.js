import { html } from "standard/dom";

function component() {
  return html`
    <m-modal>
      <m-stack direction="column">
        <m-stack>
          <m-text></m-text>
          <m-button variant="linkx">X</m-buttton>
        </m-stack>
        <m-stack align="end">
          <m-button>Ok</m-button>
        </m-stack>
      </m-stack>
    </m-modal>
  `;
}

export default component;
