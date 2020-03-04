
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

export class WeddingSecret extends LitElement {
  
  static get properties() {
    return {
      title: { type: String },
      actionText: { type: String },
      actionTextHidden: { type: String },
      secret: { type: String },
      isVisibleSecret: { type: Boolean },
      _ofuscatedAppearence: { type: String }
    };
  }

  constructor() {
    super();
    this.isVisibleSecret = false;
    this._ofuscatedAppearence = '';
  }

  toggleSecret() {
    this.isVisibleSecret = !this.isVisibleSecret;
  }

  _getOfuscatedAppearence() {
    var ofuscatedAppearence = ''; 
    this.secret.split('').forEach(character => {
      ofuscatedAppearence+= character !== ' ' ? '*':' ';
    });

    return ofuscatedAppearence;
  }


  static get styles() {
    return css`

    `;
  }

  render() {
    return html`
      <div>
        <p ?hidden="${!this.isVisibleSecret}">${this.secret}</p>
        <p ?hidden="${this.isVisibleSecret}">${this._getOfuscatedAppearence()}</p>
        <wedding-button text="${this.isVisibleSecret ? this.actionTextHidden : this.actionText}" ?isDisabled="${this.buttonIsDisabled}" @clicked="${this.toggleSecret}"></weedding-button>
      </div>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-secret', WeddingSecret);
