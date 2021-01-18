import { html, css, LitElement } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

import { ScopedChild } from './ScopedChild.js';

export class ScopedBug extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--scoped-bug-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <h2>Scoped Elements + HMR Bug</h2>
      <scoped-child></scoped-child>
    `;
  }

  static get scopedElements() {
    return {
      'scoped-child': ScopedChild,
    };
  }
}
