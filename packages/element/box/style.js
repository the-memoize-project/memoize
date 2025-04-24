import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      align-items: start;
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-md);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: ${self.height};
      justify-content: start;
      padding: var(--spacing_inset-xs);
      width: ${self.width};
    }

    :host(:state(elevated)) {
      box-shadow: var(--shadow-level-1) rgba(0, 0, 0, var(--opacity-level-light));
    }

    :host(:state(outlined)) {
      border: var(--border-width-hairline) solid var(--color-master-light);
    }
  `;
}

export default style;
