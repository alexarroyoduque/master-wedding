
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

export class WeddingInfoItem extends LitElement {
  
  static get properties() {
    return {
      title: {type: String},
      image: {type: String},
      description: {type: String}
    };
  }


  static get styles() {
    return css`

      :host {
        text-align: left;
      }

      div {
        position: relative;
      }

      h2 {
        position: absolute;
        font-family: var(--wedding-info-item-title);
        font-size: 1.6rem;
        font-weight: normal;
        display: inline-block;
        margin: 0;
        top: .1rem;
      }
      p {
        margin: .1rem;
        font-size: 1rem;
        display: inline-block;
        position: absolute;
        top: 2.5rem;
      }
      img {
        display: inline-block;
        height: 4rem;
        width: 4rem;
        margin-right: .7rem;
      }
    `;
  }

  render() {
    return html`
      <div>
        <img src=${this.image}>
        <h2>${this.title}</h2>
        <p>${this.description}</p>
      <div>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-info-item', WeddingInfoItem);
