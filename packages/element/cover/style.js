import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      --aspect-ratio-portrait: 3/4;;
      --aspect-ratio-square: 1/1;;
      --aspect-ratio-wide: 16/9;
      --aspect-ratio-auto: auto;

      --object-fit-portrait: cover;
      --object-fit-square: cover;
      --object-fit-wide: cover;
      --object-fit-auto: contain;

      aspect-ratio: var(--aspect-ratio-${self.aspect});
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-sm);
      display: flex;
      justify-content: center;
      max-height: 432px;
      max-width: 768px;
      width: 100%;

      img {
        aspect-ratio: inherit;
        border-radius: inherit;
        color: transparent;
        display: block;
        object-fit: var(--object-fit-${self.aspect});
        max-height: inherit;
        width: inherit;
      }
    }
  `;
}

export default style;
