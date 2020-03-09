
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

export class WeddingFullAnimation extends LitElement {
  
  static get properties() {
    return {
      text: { type: String },
      time: { type: Number }
    };
  }

  constructor() {
    super();
    this.text = '';
    this.time = 4;
  }

  activeAnimation() {
    var element = this.shadowRoot.getElementById('full');
    element.setAttribute('style', `animation-duration: ${this.time}s`);

    element.classList.add('active');
    var timer;
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

      p {
        text-align: center;
        margin-top: 10rem;
        font-size: 2.5rem;
      }

      .active {
        display:block;
        animation: show-animation ease-in;
        animation-fill-mode: forwards;
      }


      @keyframes show-animation {
        0% {
          background-color: green;
          opacity: 0;
        }
        20% {
          opacity: .8;
        }

        90% {
          opacity: .2;
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
        <p>${this.text}</p>
      </div>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-full-animation', WeddingFullAnimation);
