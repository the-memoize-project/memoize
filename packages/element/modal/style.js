import { css } from "standard/dom";

function style() {
  return css`
    :host {
      box-sizing: border-box;
      display: none;
      height: 100svh;
      left: 0;
      position: fixed;
      top: 0;
      width: 100svw;

      overlayer {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        width: 100%;

        aside {
          align-items: start;
          display: flex;
          flex-direction: column;
          justify-content: start;
          max-height: calc(100% - 32px);
          max-width: calc(100% - 32px);
        }
      }
    }
    
    :host(:state(opened)) {
      display: flex;
    }
  `;
}

export default style;
