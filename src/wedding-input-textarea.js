
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

export class WeddingInputTextarea extends LitElement {
  
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
    this.inputValue = ev.target.value;
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
        color: var(--wedding-input-textarea-label-color, #707070);
      }

      .float-label {
        position: absolute;
        top: .2rem;
        left: 1rem;
        font-size: .7rem;
      }

      textarea {
        border: none;
        border-bottom: 2px solid var(--wedding-input-textarea-background-color, #E0E0E0);
        background-color: var(--wedding-input-textarea-background-color, #f5f5f5);
        padding: 1rem 1rem .3rem 1rem;
        font-size: 1rem;
        border-radius: 4px 4px 0 0;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        -webkit-box-sizing:border-box;
        -moz-box-sizing: border-box;

        transition: border-bottom .3s ease-in;
        outline:none;
      }

      input:focus, textarea:focus {
        border-bottom: 2px solid var(--wedding-input-textarea-highlighted-color);
      }
    `;
  }

  render() {
    return html`
      <label>
        <span class="float-label">${this.labelText}</span>
        <textarea rows="3" name="${this.inputName}" .value="${this.inputValue}" @change="${this.inputChange}"></textarea>
      </label>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-input-textarea', WeddingInputTextarea);
