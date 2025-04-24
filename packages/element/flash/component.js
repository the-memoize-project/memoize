import { html } from "standard/dom";
import Dialog from "./dialog";

function component(self) {
  return html`
    <m-modal id="modal" opened="${self.opened}">
      <m-box width="425px" elevated>
        <m-stack direction="column">
          <m-stack align="center" justify="space-between">
            <m-text family="highlight" weight="bold" size="sm" color="master-darker">${self.dialog.title}</m-text>
          </m-stack>
          <m-stack align="center">
            <m-text size="xxs" color="master-dark">${self.dialog.message}</m-text>
          </m-stack>
          <m-show when="${self.dialog.type === Dialog.ALERT}">
            <m-stack justify="end">
              <m-button id="close" width="120px">Fechar</m-button>
            </m-stack>
          </m-show>
          <m-show when="${self.dialog.type === Dialog.CONFIRM}">
            <m-stack justify="end">
              <m-button id="cancel" color="success" width="120px">Não</m-button>
              <m-button id="confirm" color="danger" width="120px">Sim</m-button>
            </m-stack>
          </m-show>
      </m-box>
    </m-modal>
  `;
}

export default component;
