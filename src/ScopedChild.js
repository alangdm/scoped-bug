import { html, css, LitElement } from 'lit-element';

export class ScopedChild extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          border: 1px solid turquoise;
          padding: 0.25rem;
        }
      `,
    ];
  }

  render() {
    return html`Scoped Child`;
  }
}
