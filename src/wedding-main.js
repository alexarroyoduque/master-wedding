
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

import('./wedding-card.js')
import('./wedding-title.js')
import('./wedding-info-item.js')
import('./wedding-form-guest.js')
import('./wedding-secret.js')
import('./wedding-sections.js')
import('./wedding-form-book.js')

export class WeddingMain extends LitElement {

  static get properties() {
    return {
      message: { type: String },
      infoItems: {type: Array},
      knowMoreSections: {type: Array},
      storySections: {type: Array},
      isMenuVisible: {type: Boolean},
      buttonCloseClass: {type: String}
    };
  }

  _getDaysToWedding() {
    var daysToWedding = (new Date('10/24/2020') - new Date().getTime()) /  (1000 * 3600 * 24)

    return ~~daysToWedding > 0 ? ~~daysToWedding : 0;
  }

  constructor() {
    super();
    this.isMenuVisible = false;
    this.buttonCloseClass = '';
    this.infoItems = [
      {
        title: '¿Dónde?',
        image: './src/images/radar.png',
        description: 'En la Quinta de Illescas'
      },
      {
        title: '¿Hora?',
        // image: './src/images/clock.png',
        image: './src/images/fullmetal.png',
        description: `A las 12:30 AM`
      }
    ];
    this.storySections = [
      {
        title: 'Sobre ella',
        content: ['Bollito de pan bao'],
        links: [],
        isHidden: true
      },
      {
        title: 'Sobre él',
        content: ['Bollo máximo'],
        links: [],
        isHidden: true
      }
    ];
    this.knowMoreSections = [
      {
        title: 'Sobre el sitio',
        content: ['La Quinta de Illescas', 'A-42 KM.30, 45200 Illescas, Toledo'],
        links: [{text: 'Ver en Google maps', href: 'https://g.page/laquintadeillescas?share'}],
        isHidden: true
      },
      {
        title: 'Cómo llegar',
        content: ['Aparcamiento', 'Taxi', 'Público', 'Autobús de boda'],
        links: [],
        isHidden: true
      },
      {
        title: 'Alojamiento',
        content: ['Hoteles cerca'],
        links: [],
        isHidden: true
      },
      {
        title: 'Contacto',
        content: ['Alejandro: 649 19 80 56', 'Irene: 628 811 903'],
        links: [],
        isHidden: true
      }];


  }

  firstUpdated() {
    this.loadLazy();

    var config = {
      apiKey: "AIzaSyDNVEpSCpWjWj9gfSP49-8p4Ih3pJYL3Gc",
      authDomain: 'boda-irene-alex.firebaseapp.com',
      projectId: 'boda-irene-alex',
      databaseURL: "https://boda-irene-alex.firebaseio.com",
      storageBucket: "boda-irene-alex.appspot.com"
    };
    
    firebase.initializeApp(config);

    this.db = firebase.database();
  }

  _generateDateDB() {
    var now = new Date();
    var dbDate = '';
    if (now.getDate() < 10) {
      dbDate+= '0';
    }
    dbDate+= `${now.getDate()}-`;

    if (now.getMonth()+1 < 10) {
      dbDate+= '0';
    }
    dbDate+= `${now.getMonth()+1}-`;
    dbDate+= `${now.getFullYear()}_`;

    if (now.getHours() < 10) {
      dbDate+= '0';
    }
    dbDate+= `${now.getHours()}:`;

    if (now.getMinutes() < 10) {
      dbDate+= '0';
    }
    dbDate+= `${now.getMinutes()}:`;

    if (now.getSeconds() < 10) {
      dbDate+= '0';
    }
    dbDate+= `${now.getSeconds()}:`;
 
    if (now.getMilliseconds() < 10) {
      dbDate+= '00';
    } else if (now.getMilliseconds() < 100) {
      dbDate+= '0';
    }
    dbDate+= `${now.getMilliseconds()}`;
    
    return dbDate;
  }

  updateDataBase(dbName, data) {
    var dbDate = this._generateDateDB();
    var dataForDataBase = data;
    dataForDataBase.fechaInscrito = dbDate;
    firebase.database().ref(`${dbName}/${data.nombre}_${dbDate}`).set(dataForDataBase);
  }

  handleNewGuest(ev) {    
    this.updateDataBase('invitados', ev.detail);  
    this.shadowRoot.getElementById('guest').resetForm();
  }

  handleNewMessage(ev) {   
    this.updateDataBase('mensajes', ev.detail);
    this.shadowRoot.getElementById('book').resetForm();
  }

  static get styles() {
    return css`

      :host {
        display: block;
        --theme-title-font-family: 'Dancing Script';
        --theme-title-section-font-family: 'Dancing Script';
        --theme-primary-font-family: Montserrat;
        --theme-secondary-font-family: Catamaran;

        --theme-color-golden: #fcd734;
        --theme-color-golden-light: #efcf20;
        --theme-color-golden-dark: #c5a600;
        --theme-color-light: #fff;
        --theme-color-gray-light: #F5F5F5;
        --theme-color-dark: #212121;

        --theme-color-primary: var(--theme-color-light);
        --theme-color-secondary: var(--theme-color-dark);


        --wedding-input-text-highlighted-color: var(--theme-color-golden-dark);
        --wedding-input-textarea-highlighted-color: var(--theme-color-golden-dark);
      }


      wedding-title {
        display: block;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.4);
        font-family: var(--theme-title-font-family);
        margin: 0 auto;
        max-width: 1024px;
      }

      .content {
        max-width: 700px;
        margin: 0 auto;
      }

      .welcome {
        padding: 1rem;
        margin: 0;
        text-align: center;
        font-family: var(--theme-primary-font-family);
      }

      ul {
        margin: 0;
        padding: 1rem 1rem 0 1rem;
        text-align: center;
      }

      li {
        list-style: none;
        margin-bottom: 1.5rem;
        min-width: 17rem;
        display: inline-block;
        margin-right: 2rem;
      }

      wedding-info-item {
        --wedding-info-item-title: var(--theme-title-section-font-family);
        font-family: var(--theme-primary-font-family);
        color: var(--theme-color-dark);
      }

      section.info {
        display: block;
        margin: 1rem;
        border-radius: .8rem;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.4);
        padding: 1rem;
        background-color: white;
        color: var(--theme-color-dark);
        font-family: var(--theme-primary-font-family);
        position: relative;
        overflow: hidden;
        z-index: 9;
      }

      h2 {
        margin: 0 0 1rem 0;
        font-size: 1.6rem;
        font-weight: normal;
        font-family: var(--theme-title-section-font-family);
      }

      p.description {
        font-size: .9rem;
      }

      section.info:after {
        content: ' ';
        display: block;
        position: absolute;
        left: 3.5rem;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.08;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -91;
      }

      #knowmore:after {
        background-image: url('./src/images/moguri.png');
      }

      #secret:after {
        background-image: url('./src/images/box.png');
      }

      #story:after {
        background-image: url('./src/images/ffx.png');
      }

      .menu {
        position: fixed;
        top: 0;
        background-color: rgba(33, 33, 33, 0.9);
        color: var(--theme-color-light);
        z-index: 999;
        right: 0;
        font-family: var(--theme-primary-font-family);
        font-size: 1rem;
      }

      .menu-opened {
        padding-top: 4rem;
        text-align: center;
      }

      .menu.close {
        width: 100%;
        height: 100vh;
      }

      .menu a {
        display: block;
        padding: .8rem 0;
        width: 100%;
        text-decoration: none;
        color: var(--theme-color-light);
      }

      #menu-access {
        border: 0;
        outline: none;
        background-color: transparent;
        right: 0;
        position: absolute;
      }

      .menu a:visited {
        color: var(--theme-color-light);
      }

      .bar1, .bar2, .bar3 {
        width: 2.2rem;
        height: .35rem;
        background-color: var(--theme-color-light);
        margin: .4rem 0;
        transition: 0.3s;
        box-shadow: 0px 0px 4px 2px black;
        border-radius: 1rem;
      }

      .close .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
        box-shadow: none;
      }
      
      .close .bar2 {opacity: 0;}
      
      .close .bar3 {
        -webkit-transform: rotate(45deg) translate(-10px, -8px);
        transform: rotate(45deg) translate(-10px, -8px);
        box-shadow: none;
      }
    `;
  }

  openMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    this.buttonCloseClass = this.isMenuVisible ? 'close' : '';
  }

  goTo(id) {
    var element_to_scroll_to = this.shadowRoot.getElementById(id);
    element_to_scroll_to.scrollIntoView();
    this.isMenuVisible = false;
    this.buttonCloseClass = this.isMenuVisible ? 'close' : '';
  }

  render() {
    return html`
      <div class="menu ${this.buttonCloseClass}">
        <button id="menu-access" class="${this.buttonCloseClass}" @click="${this.openMenu}">  
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </button>
        <div class="menu-opened" ?hidden="${!this.isMenuVisible}">
          <a href="#home" @click="${()=>this.goTo('home')}">Bienvenida</a>
          <a href="#guest-content" @click="${()=>this.goTo('guest-content')}">¿Te apuntas?</a>
          <a href="#knowmore" @click="${()=>this.goTo('knowmore')}">¿Necesitas saber más?</a>
          <a href="#book-content" @click="${()=>this.goTo('book-content')}">¿Nos dejas un mensaje?</a>
          <a href="#secret" @click="${()=>this.goTo('secret')}">¿Nos haces un regalo?</a>
          <a href="#story" @click="${()=>this.goTo('story')}">Nuestra historia</a>
        </div>
      </div>

      <header id="home">
        <wedding-title title="¡Nos casamos!" subtitle="Irene & Alex" extra="24 octubre 2020, faltan ${this._getDaysToWedding()} días"></wedding-title>
      </header>
      
      <div class="content">
        <p class="welcome">
          Estamos preparando una boda que hará historia y queremos compartir contigo nuestro amor y felicidad. Para que estés al tanto de todo, hemos creado esta web mientras llega gran día. Nos vemos muy pronto ¡Millones de besos!
        </p>

        <ul>
          ${this.infoItems.map(item => html`<li><wedding-info-item title=${item.title} image=${item.image} description=${item.description}></amiibo-item></li>`)}
        </ul>
        
        <section class="info" id="guest-content">
          <h2>¿Te apuntas?</h2>
          <wedding-form-guest id="guest" @submit="${this.handleNewGuest}"></wedding-form-guest>
        </section>
        <section class="info" id="knowmore">
          <h2>¿Necesitas saber más?</h2>
          <wedding-sections sections="${JSON.stringify(this.knowMoreSections)}" showText="mostrar" hideText="ocultar"></wedding-sections>
        </section>
        <section class="info" id="book-content">
          <h2>¿Nos dejas un mensaje?</h2>
          <p class="description">Alimenta nuestros corazones llenándonos de amor y buena energía</p>
          <wedding-form-book id="book" @submit="${this.handleNewMessage}"></wedding-form-book>
        </section>
        <section class="info" id="secret">
          <h2>¿Quieres hacernos un regalo?</h2>
          <wedding-secret actionText="Mostrar cuenta bancaria" actionTextHidden="Ocultar cuenta bancaria" secret="ES11 0081 0471 5700 0130 1238"></wedding-secret>
        </section>
        <section class="info" id="story">
          <h2>Esta es nuestra historia</h2>
          <wedding-sections sections="${JSON.stringify(this.storySections)}" showText="mostrar" hideText="ocultar"></wedding-sections>
        </section>
      </div>

    `;
  }

  /**
   * If we need the lazy element && it hasn't already been loaded, 
   * load it and remember that we loaded it.
   */
  async loadLazy() {
    console.log('loadLazy');
    if(this.pie && !this.loadComplete) {
      return import('./lazy-element.js').then((LazyElement) => {
        this.loadComplete = true;
        console.log("LazyElement loaded");
      }).catch((reason) => {
        this.loadComplete = false;
        console.log("LazyElement failed to load", reason);
      });
    }
  }
}

// Register the element with the browser
customElements.define('wedding-main', WeddingMain);
