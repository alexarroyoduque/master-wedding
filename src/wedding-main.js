
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

import('./wedding-card.js')
import('./wedding-title.js')
import('./wedding-info-item.js')
import('./wedding-form-guest.js')
import('./wedding-secret.js')
import('./wedding-sections.js')
import('./wedding-form-book.js')
import('./wedding-full-animation.js')

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
        image: './src/images/radar-fs8.png',
        description: 'En la Quinta de Illescas'
      },
      {
        title: '¿Hora?',
        image: './src/images/fullmetal-fs8.png',
        description: `13:00`
      }
    ];
    this.storySections = [
      {
        title: 'Sobre ella',
        isHidden: true,
        content: [
          {
            isLink: false,
            text: 'Lo que más me gusta de Irene es su capacidad de escuchar y de empatizar con los demás. Siempre tiene buenas palabras y es capaz de hacer que te sientas mejor incluso en los malos momentos, aunque también saca su carácter con las personas que más quiere. Como a mi, le gustan mucho otras culturas exóticas pudiendo compartir juntos desde películas, series, hasta los bocados de comida más peculiares. También le encanta bailar y seguro que aprovechará este evento tan especial para que no me quede más remedio que marcarnos el baile más alucinante de la historia. Es una persona muy detallista y cariñosa y estoy seguro de que tendrá guardada alguna sorpresa muy especial para este gran día.'
          }
        ]
      },
      {
        title: 'Sobre él',
        isHidden: true,
        content: [
          {
            isLink: false,
            text: 'Alex es una persona muy especial que aún no ha perdido esa esencia del niño interior que todos llevamos dentro. Con él puedes ver la vida desde la perspectiva de un niño que descubre y hace las cosas por primera vez. Es un artesano y una persona muy creativa por eso siempre está inventando alguna cosa con la que echar un buen ratillo: videojuegos hechos por él mismo, podcast, dibujos… también le gusta mucho la cocina y siempre pone toda su energía, amor y pasión en todo lo que hace. Es amante de las bandas sonoras de películas y videojuegos con los que siempre se le eriza la piel.  Alex es cariñoso y detallista por eso es tan fácil que se cuele dentro de los corazones de la gente y por eso cautivó el mío.'
          }
        ]
      },
      {
        title: 'Sobre nosotros',
        isHidden: true,
        content: [
          {
            isLink: false,
            text: 'Nos conocimos allá por 2006. Los dos habíamos ido sin saberlo al mismo colegio y al mismo instituto pero no fue hasta que la vecina de Alejandro y mejor amiga de Irene nos presentó por casualidad en aquel mítico para muchos “messenger” cuando nos conocimos. Desde entonces, no paramos de hablar horas y horas y algo mágico nos empezó a pasar: ¿nos estábamos enamorando? Mientras, coincidíamos por los pasillos y recreos sin apenas tener contacto y por fin, el 17 de mayo de 2007 quedamos por primera vez. Desde entonces, llevamos juntos más de 13 años y hemos vivido mil historias y aventuras llenas de buenos y malos momentos, pero sobre todo, muchas risas y mucho amor.'
          }
        ]
      },
      {
        title: '¿La luna de miel?',
        isHidden: true,
        content: [
          {
            isLink: false,
            text: 'Quienes nos conocéis sabéis lo mucho que nos encanta la cultura nipona así que no podía ser de otra manera...nuestro viaje soñado es y siempre será Japón y allá que nos vamos. ¡Sayonara!'
          }
        ]
      }
    ];
    this.knowMoreSections = [
      {
        title: 'Sobre el sitio',
        isHidden: true,
        content: [
          {
            isLink: false,
            text: 'La Quinta de Illescas'
          },
          {
            isLink: false,
            text: 'A-42 KM.30, 45200 Illescas, Toledo'
          },
          {
            isLink: true,
            text: 'Ver en Google maps',
            href: 'https://g.page/laquintadeillescas?share'
          }
        ]
      },
      {
        title: 'Cómo llegar',
        isHidden: true,
        content: [
          {
            isLink: false,
            text: 'Desde la estación de Parla + Taxi: 915 47 82 00'
          },
          {
            isLink: false,
            text: 'Desde la estación de Illescas + Taxi: 925 51 55 15'
          },
          {
            isLink: false,
            text: 'El autobús de boda todavía no está confirmado, dependerá del número de invitados que lo necesiten desde Madrid.'
          },
          {
            isLink: false,
            text: 'Si vienes en transporte privado el sitio cuenta con aparcamiento'
          }          
        ]
      },
      {
        title: 'Alojamiento',
        content: [
          {
            text: 'Hotel comendador **** (En Carranque a 15 minutos en coche)',
            isLink: false
          },
          {
            text: 'Ver web',
            href: 'https://www.hotelcomendador.es/',
            isLink: true
          },
          {
            text: 'Teléfono: 925 52 95 66',
            isLink: false,
            hasSeparator: true
          },
          {
            text: 'Complejo París *** (En Illescas a 7 min. en coche)',
            isLink: false
          },
          {
            text: 'Ver web',
            href: 'http://www.complejoparis.com/',
            isLink: true
          },
          {
            text: 'Teléfono: 925 51 27 87',
            isLink: false,
            hasSeparator: true
          },
          {
            text: 'Hotel Carlos I *** (En Yuncos a 13 min. en coche)',
            isLink: false
          },
          {
            text: 'Ver web',
            href: 'http://www.hotelcarlos1.com/',
            isLink: true
          },
          {
            text: 'Teléfono: 925 55 79 19',
            isLink: false,
            hasSeparator: true
          },
          {
            text: 'Hotel NH Parla *** (En Parla a 7 min. en coche)',
            isLink: false
          },
          {
            text: 'Ver web',
            href: 'https://www.nh-hoteles.es/hotel/nh-parla?campid=8435708&utm_campaign=paid-search_brand&utm_source=google&utm_term=spanish-all&utm_medium=paid-search&gclid=EAIaIQobChMIpI2CiL2F6AIV2obVCh3xGQiIEAAYASAAEgKXi_D_BwE',
            isLink: true
          },
          {
            text: 'Teléfono: 916 64 41 60',
            isLink: false,
            hasSeparator: true
          },
          {
            text: 'Route 42 *** (En Illescas a 3 min. en coche)',
            isLink: false
          },
          {
            text: 'Teléfono: 925 52 67 20',
            isLink: false,
            hasSeparator: true
          },
          {
            text: 'Vivar ** (En Griñón a 11 min. en coche)',
            isLink: false
          },
          {
            text: 'Ver web',
            href: 'http://www.hotelvivar.com/',
            isLink: true
          },
          {
            text: 'Teléfono: 918 14 02 34',
            isLink: false,
            hasSeparator: true
          }, 
          {
            text: 'Real de Illescas * (En Illescas a 8 min. en coche)',
            isLink: false
          }, 
          {
            text: 'Ver web',
            href: 'https://hotelrealillescas.es/',
            isLink: true
          },
          {
            text: 'Teléfono: 925 54 16 99',
            isLink: false,
            hasSeparator: true
          }, 
        ],
        isHidden: true
      },
      {
        title: 'Contacto',
        content: [
          {
            text: 'Alejandro: 649 19 80 56',
            isLink: false,
            hasSeparator: true
          },
          {
            text: 'Irene: 628 81 19 03',
            isLink: false,
            hasSeparator: true
          }
        ],
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
    firebase
      .database()
      .ref(`${dbName}/${data.nombre}_${dbDate}`)
      .set(dataForDataBase, (error) => {
        if (!error) {
          // Data saved successfully!
          this.shadowRoot.getElementById('thanks').activeAnimation();
        } else {
          // The write failed...
          this.shadowRoot.getElementById('error').activeAnimation();
        }
      });
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

      wedding-full-animation {
        font-family: var(--theme-primary-font-family);
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
        background-image: url('./src/images/kingdom-hearts-fs8.png');
      }

      #secret:after {
        background-image: url('./src/images/coin-fs8.png');
        left: 5rem;
      }

      #story:after {
        background-image: url('./src/images/ffx-fs8.png');
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

      @media screen and (min-width: 1024px) {
        .menu {
          right: calc(50% - 32rem);
        }
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
        transition: 0.4s;
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
      <wedding-full-animation id="thanks" text="¡Gracias!" backgroundColor="#4CAF50"></wedding-full-animation>
      <wedding-full-animation id="error" text="Error..." backgroundColor="#f44336"></wedding-full-animation>
      <div class="menu ${this.buttonCloseClass}">
        <button id="menu-access" class="${this.buttonCloseClass}" @click="${this.openMenu}">  
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </button>
        <div class="menu-opened" ?hidden="${!this.isMenuVisible}">
          <a href="#home" @click="${()=>this.goTo('home')}">Bienvenida</a>
          <a href="#guest-content" @click="${()=>this.goTo('guest-content')}">¿Te vienes?</a>
          <a href="#knowmore" @click="${()=>this.goTo('knowmore')}">¿Necesitas saber más?</a>
          <a href="#book-content" @click="${()=>this.goTo('book-content')}">¿Nos dejas un mensaje?</a>
          <a href="#secret" @click="${()=>this.goTo('secret')}">¿Quieres hacernos un regalo?</a>
          <a href="#story" @click="${()=>this.goTo('story')}">Esta es nuestra historia</a>
        </div>
      </div>

      <header id="home">
        <wedding-title title="¡Nos casamos!" subtitle="Irene & Alex" extra="24 octubre 2020, faltan ${this._getDaysToWedding()} días"></wedding-title>
      </header>
      
      <div class="content">
        <p class="welcome">
          Estamos preparando una boda muy especial y queremos compartir contigo nuestra felicidad y amor. Mientras contamos las horas para el gran día puedes consultar la información necesaria en esta web. ¡Nos vemos muy pronto! 
        </p>

        <ul>
          ${this.infoItems.map(item => html`<li><wedding-info-item title=${item.title} image=${item.image} description=${item.description}></amiibo-item></li>`)}
        </ul>
        
        <section class="info" id="guest-content">
          <h2>¿Te vienes?</h2>
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
        <p class="welcome">
          Y ahora que lo sabéis todo…¡no podéis faltar! Os esperamos para pasarlo en grande rodeados de las personas más especiales para nosotros. ¡Os queremos!
        </p>
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
