import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      display: ${self.display};
      width: 100%;
    }
  `;
}

export default style;
