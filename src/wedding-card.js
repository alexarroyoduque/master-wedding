
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

export class WeddingCard extends LitElement {
  
  static get properties() {
    return {
      title: { type: String }
    };
  }


  static get styles() {
    return css`
      div {
        background-color: white;
        border-radius: .5rem;
      }
    `;
  }

  render() {
    return html`
      <div>
        <p>${this.title}</p>
      <div>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-card', WeddingCard);
