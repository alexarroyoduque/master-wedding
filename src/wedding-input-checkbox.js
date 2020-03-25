
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

export class WeddingInputCheckbox extends LitElement {
  
  static get properties() {
    return {
      labelText: {type: String},
      inputName: {type: String},
      inputValue: {type: String},
      inputType: {type: String},
      autoSelect: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.inputValue = '';
    this.inputType = 'text';
  }

  inputChange(ev) {
    this.inputValue = ev.target.checked;
    this.dispatchEvent(new CustomEvent('change', {
      detail: this.inputValue
    }));
  }

  focusHandler(ev) {
    console.log(this.autoSelect)
    if (this.autoSelect) {
      ev.target.select();
    }
  }

  static get styles() {
    return css`
      label {
        display:block;
        margin: 0 0 1rem 0;
        position: relative;
        color: #707070;
      }

      .wrapper-checkbox {
        height: 3rem;
      }

      /* Hide the browser's default checkbox */
      .container-checkbox input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      /* Create a custom checkbox */
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        width: 30px;
        transition: background-color .2s ease-in;
        background-color: #eee; //unchecked-background
        border-radius: 4px;
      }
      /* On mouse-over, add a grey background color */
      .container-checkbox:hover input ~ .checkmark {
        background-color: #eee; //unchecked-background-hover
      }
      /* When the checkbox is checked, add a custom color background */
      .container-checkbox input:checked ~ .checkmark {
        background-color: var(--wedding-input-checkbox-highlighted-background-color, #fcd734); //checked-background
      }
      /* Create the checkmark/indicator (hidden when not checked) */
      .checkmark:after {
        content: "";
        position: absolute;
        display: block;
        border-color: #eee; //unchecked-color
      }
      /* Show the checkmark when checked */
      .container-checkbox input:checked ~ .checkmark:after {
        display: block;
        border-color: var(--wedding-input-checkbox-highlighted-color, #c5a600); //checked-color
      }
      /* Style the checkmark/indicator */
      .container-checkbox .checkmark:after {
        left: 9px;
        top: 4px;
        width: 8px;
        height: 14px;
        border-style: solid;
        border-width: 0 4px 4px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .checkbox-label {
        left: 2.5rem;
        position: absolute;
        top: .3rem;
        font-size: .9rem;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper-checkbox">
        <label class="container-checkbox">
          <input type="checkbox" ?checked="${this.inputValue}" .value="${this.inputValue}" @change="${this.inputChange}">
          <span class="checkmark"></span>
          <span class="checkbox-label">${this.labelText}</span>
        </label>
      </div>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-input-checkbox', WeddingInputCheckbox);
