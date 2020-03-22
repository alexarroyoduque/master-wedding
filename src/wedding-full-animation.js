
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

export class WeddingFullAnimation extends LitElement {
  
  static get properties() {
    return {
      text: { type: String },
      time: { type: Number },
      backgroundColor: { type: String }
    };
  }

  constructor() {
    super();
    this.text = '';
    this.time = 4;
    this.backgroundColor = 'gray';
  }

  firstUpdated() {
    var messageContainer = this.shadowRoot.getElementById('message-container');
    messageContainer.setAttribute('style', `background-color: ${this.backgroundColor}`);
    var element = this.shadowRoot.getElementById('full');
    element.setAttribute('style', `animation-duration: ${this.time}s; background-color: red`);
  }

  activeAnimation() {
    var element = this.shadowRoot.getElementById('full');
    var timer;

    element.classList.add('active');
    timer = window.setTimeout(()=> {
      window.clearTimeout(timer);
      element.classList.remove('active');
    }, this.time*1000);
  }



  static get styles() {
    return css`
      :host {
        color: white;
      }

      div {
        width: 100%;
        height: 100vh;
        opacity: .9;
        position: fixed;
        z-index: 9999;
        display: none;
      }

      #message-container {
        display: flex;
        justify-content:center;
        align-items:center;
        background-color: #4CAF50;
      }

      p {
        font-size: 2.5rem;
      }

      .active {
        display:block;
        animation: show-animation ease-in;
        animation-fill-mode: forwards;
      }


      @keyframes show-animation {
        0% {
          opacity: 0;
        }
        15% {
          opacity: .9;
        }

        90% {
          opacity: .3;
        }

        100% {
          opacity: 0;
        }
      }

    `;
  }

  render() {
    return html`
      <div id="full">
        <div id="message-container">
          <p>${this.text}</p>
        </div>
      </div>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-full-animation', WeddingFullAnimation);
