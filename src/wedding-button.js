
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

export class WeddingButton extends LitElement {
  
  static get properties() {
    return {
      text: { type: String },
      id: { type: String },
      isDisabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.text = '';
    this.id = '';
    this.isDisabled = false;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('clicked' + this.id, {
      detail: this.inputValue
    }));
  }

  static get styles() {
    return css`
      button {
        text-transform: uppercase;
        background-color: var(--wedding-button-background-color, #c5a600);
        color: var(--wedding-button-color, #ffffff);
        border: none;
        border-color: none;
        border-radius: 4px;
        padding: .7rem;
        font-size: .9rem;
        outline: none;
      }

      button:hover {
        background-color: var(--wedding-button-hover-color, #efcf20);
      }

      button:disabled {
        background-color: var(--wedding-button-disabled-color, #E0E0E0);
      }
    `;
  }

  render() {
    return html`
      <button ?disabled="${this.isDisabled}" @click="${this.handleClick}">${this.text}</button>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-button', WeddingButton);
