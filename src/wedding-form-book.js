
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

import('./wedding-input-text.js')
import('./wedding-input-textarea.js')
import('./wedding-button.js')


export class WeddingFormBook extends LitElement {
  
  static get properties() {
    return {
      name: { type: String },
      message: { type: String },
      buttonIsDisabled: { type: Boolean }
    };
  }
  constructor() {
    super();
    this.name = '';
    this.message = '';
    this.buttonIsDisabled = true;
  }

  firstUpdated() {
    // var config = {
    //   apiKey: "AIzaSyDNVEpSCpWjWj9gfSP49-8p4Ih3pJYL3Gc",
    //   authDomain: 'boda-irene-alex.firebaseapp.com',
    //   projectId: 'boda-irene-alex',
    //   databaseURL: "https://boda-irene-alex.firebaseio.com",
    //   storageBucket: "boda-irene-alex.appspot.com"
    // };
    
    // firebase.initializeApp(config);

    // this.db = firebase.database();
  }

  resetForm() {
    this.name = '';
    this.message = '';
    this.buttonIsDisabled = true;
    this.requestUpdate(); //forces render template

  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('submit', {
      detail: {
        nombre: this.name,
        mensaje: this.message
      }
    }));
  }

  static get styles() {
    return css`

    `;
  }

  nameChange(ev) {
    this.name = ev.detail;
    this.buttonIsDisabled = this.name ? false : true;
  }

  focusHandler(ev) {
    ev.target.select();
  }

  messageChange(ev) {
    this.message = ev.detail;
  }


  render() {
    return html`
      <div class="wrapper">
        <wedding-input-text labelText="Nombre" inputName="name" inputValue="${this.name}" @change="${this.nameChange}"></wedding-input-text>
        <wedding-input-textarea labelText="Mensaje" inputName="message" inputValue="${this.message}" @change="${this.messageChange}"></wedding-input-textarea>
        
        <wedding-button text="Enviar" ?isDisabled="${this.buttonIsDisabled}" @clicked="${this.handleClick}"></weedding-button>
      </div>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-form-book', WeddingFormBook);
