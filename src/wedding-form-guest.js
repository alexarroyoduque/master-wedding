
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

import('./wedding-input-text.js')
import('./wedding-input-checkbox.js')
import('./wedding-button.js')

export class WeddingFormGuest extends LitElement {
  
  static get properties() {
    return {
      name: { type: String },
      mail: { type: String },
      adults: { type: String },
      junior: { type: String },
      allergy: { type: String },
      bus: { type: String },
      buttonIsDisabled: { type: Boolean }
    };
  }
  constructor() {
    super();
    this.name = '';
    this.mail = '';
    this.adults = 1;
    this.junior = 0;
    this.allergy = '';
    this.bus = '';
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
    this.mail = '';
    this.adults = 1;
    this.junior = 0;
    this.allergy = '';
    this.bus = '';
    this.buttonIsDisabled = true;

    this.requestUpdate(); //forces render template
  }

  handleClick() {
    console.log('handleClick')
    this.dispatchEvent(new CustomEvent('submit', {
      detail: {
        nombre: this.name,
        mail: this.mail,
        adultos: this.adults,
        'niños': this.junior || 0,
        alergias: this.allergy || 'no',
        bus: this.bus ? 'sí' : 'no'
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

  mailChange(ev) {
    this.mail = ev.detail;
  }

  adultsChange(ev) {
    this.adults = ev.detail;
  }

  juniorChange(ev) {
    this.junior = ev.detail;
  }

  allergyChange(ev) {
    this.allergy = ev.detail;
  }

  busChange(ev) {
    this.bus = ev.detail;
  }

  // <button ?disabled="${this.buttonIsDisabled}" @click="${this.handleClick}">Confirmar</button>

  render() {
    return html`
      <div class="wrapper">
        <wedding-input-text labelText="Nombre y apellidos (obligatorio)" inputName="name" inputValue="${this.name}" @change="${this.nameChange}"></wedding-input-text>
        <wedding-input-text labelText="Correo electrónico" inputName="mail" inputValue="${this.mail}" @change="${this.mailChange}"></wedding-input-text>
        <wedding-input-text labelText="¿Cuántos adultos sois?" inputType="number" inputName="adults" inputValue="${this.adults}" @change="${this.adultsChange}" autoSelect></wedding-input-text>
        <wedding-input-text labelText="¿Viene algún niño?" inputType="number" inputName="junior" inputValue="${this.junior}" @change="${this.juniorChange}" autoSelect></wedding-input-text>
        <wedding-input-text labelText="¿Alergias o algo que debamos saber?" inputName="allergy" inputValue="${this.allergy}" @change="${this.allergyChange}"></wedding-input-text>
        <wedding-input-checkbox labelText="Marca si crees que necesitarás autobús" inputName="${this.bus}" inputValue="${this.bus}" @change="${this.busChange}"></wedding-input-checkbox>
  
        <wedding-button text="Confirmar" ?isDisabled="${this.buttonIsDisabled}" @clicked="${this.handleClick}"></weedding-button>
      </div>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-form-guest', WeddingFormGuest);
