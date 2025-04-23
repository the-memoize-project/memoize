import { html } from "standard/dom";

function component() {
  return html`
    <overlayer>
      <aside>
        <slot></slot>
      </aside>
    </overlayer>
  `;
}

export default component;
