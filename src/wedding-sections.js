
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

import('./wedding-button.js')

export class WeddingSections extends LitElement {
  
  static get properties() {
    return {
      title: { type: String },
      sections: {
          converter: {
          fromAttribute(value) {
            return JSON.parse(value)
          }
        }
      },
      showText: { type: String },
      hideText: { type: String }
    };
  }

  constructor() {
    super();
  }

  toggle(ev) {
    var section = this.sections.filter((section) => section.title===ev.title)[0];
    // this.sections.forEach(section => section.isHidden = true);
    section.isHidden = !section.isHidden;
    this.requestUpdate(); //forces render template
  }


  static get styles() {
    return css`

      h3 {
        display: inline-block;
        margin: 0 0 0 .3rem;
        font-size: 1rem;
      }

      article {
        margin: 0 0 1rem 0;
      }

      a, p {
        margin: .2rem 0 ;
        font-size: .8rem;
      }

      a, a:visited {
        color: #9C27B0;
      }

    `;
  }
  // <button @click="${()=>this.toggle(item)}">${item.isHidden ? this.showText : this.hideText}</button>
  // <wedding-button text="${item.isHidden ? this.showText : this.hideText}" @clicked="${()=>this.toggle(item)}"></weedding-button>

  render() {
    return html`
      <div>
        ${this.sections.map(item => html`
          
          <article>
            <span><wedding-button text="${item.isHidden ? this.showText : this.hideText}" @clicked="${()=>this.toggle(item)}"></weedding-button></span>
            
            <h3>${item.title}</h3>
            ${item.content.map(info => html`
              <p ?hidden="${item.isHidden}">${info}</p>
            `)}
            ${item.links.map(link => html`
              <a href="${link.href}" target="_blank" ?hidden="${item.isHidden}">${link.text}</a>
            `)}
          </article>
        `)}
 
      </div>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-sections', WeddingSections);
