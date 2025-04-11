import { css } from "standard/dom";

function style() {
  return css`
    :host {
      width: 100%;

      day {
        align-items: center;
        border-radius: var(--border-radius-pill);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 78px;
        justify-content: start;
        padding: var(--spacing_inset-nano) var(--spacing_inset-nano);
        width: 36px;
      }

      day[is-today] {
        background-color: var(--color-master-lighter);
      }
    }
  `;
}

export default style;
