
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

export class WeddingTitle extends LitElement {
  
  static get properties() {
    return {
      title: { type: String },
      subtitle: {type: String},
      extra: {type: String}
    };
  }

  // background: url("https://wallpaperaccess.com/full/1804743.jpg");
        // background-position-y: -8rem;

  static get styles() {
    return css`
      div {
        padding: 1rem;
        background: url("https://i.pinimg.com/originals/00/77/d4/0077d404a87d41730afbe47a6a988441.jpg");
        background-position-x: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 70vh;
        animation-duration: 2s;
        animation-direction: alternate;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: ease;

        text-align: center;

        font-size: 2rem;
        line-height: 4rem;
        color: white;
        text-shadow: 0px 0px .5rem #c5a600;     
        
        position: relative;
      }

      
      @keyframes grayanimation {
        0% {
          -webkit-filter: grayscale(10%);
          filter: grayscale(10%);
        }
        25% {
          -webkit-filter: grayscale(20%);
          filter: grayscale(20%);
        }
        50% {
          -webkit-filter: grayscale(30%);
          filter: grayscale(30%);
        }
        75% {
          -webkit-filter: grayscale(40%);
          filter: grayscale(40%);
        }
      }

      h1 {
        font-weight: normal;
        font-size: 3.4rem;
      }

      .subtitle {
        font-size: 2rem;
        line-height: 3rem;
      }

      .extra {
        font-size: 1.1rem;
      }
    `;
  }

  render() {
    return html`
      <div>
        <h1>${this.title}</h1>
        <p class="subtitle">
          ${this.subtitle}
          <br>
          <span class="extra">${this.extra}</span>
        </p>
      </div>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-title', WeddingTitle);
