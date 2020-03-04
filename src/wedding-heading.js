
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

export class WeddingHeading extends LitElement {
  
  static get properties() {
    return {
      text: { type: String }
    };
  }

  constructor() {
    super();
    this.text = '';
  }

  static get styles() {
    return css`
    h2 {
      margin: 0 0 1rem 0;
      font-size: 1.6rem;
      font-weight: normal;
      font-family: var(--wedding-heading-font-family);
    }
    `;
  }

  render() {
    return html`
      <h2>${this.text}</h2>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-heading', WeddingHeading);
