const templateString = /*html*/`
  <style type="text/css">
  * {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;
  }

  .load-screen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateZ(0);
    pointer-events: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.2;

    /* expected to be overwritten with data from the server */
    background-color: white;
    color: white;
  }

  .load-screen-title,
  .load-screen-subtitle {
    display: none;
    word-break: break-word;
  }

  /* Load Screen Containers and Media Queries */
  .load-screen-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 95vw;
    font-size: 12px;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 480px) {
    .load-screen-container { width: 90vw;  font-size: 14px; }
  }
  @media only screen and (min-width: 760px) {
    .load-screen-container { font-size: 15px; }
  }
  @media only screen and (min-width: 1024px) {
    .load-screen-container { font-size: 16px; }
  }
  @media only screen and (min-width: 1440px) {
    .load-screen-container { width: 1024px; }
  }
  @media only screen and (max-height: 670px) {
    .load-screen-container { font-size: 11px; }
  }
  @media only screen and (max-height: 630px) {
    .load-screen-container { font-size: 10px; }
  }
  @media only screen and (max-height: 530px) {
    .load-screen-container { font-size: 9px; }
  }
  @media only screen and (max-height: 500px) {
    .load-screen-container { font-size: 8px; }
  }


  .load-screen-title, .load-screen-subtitle, .load-screen-author {
    width: 100%;
    padding: 0px;
    margin: 0px;
    text-align: center;
  }

  .load-screen-title {
    font-size: 3.25em;
    font-weight: 800;
    line-height: 1.2;
    margin-top: 20px;
  }

  .load-screen-subtitle {
    font-weight: 400;
    font-size: 2em;
    line-height: 1.2;
    margin-top: 10px;
  }

  .load-screen-author {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-size: 1.25em;
    line-height: 1.2;
  }

  .load-screen-author-avatar {
    display: none;
    height: 64px;
    min-height: 64px;
    width: 64px;
    border: 1px solid rgb(198, 198, 198);
    border-radius: 50%;
    background-size: cover;
    margin-right: 10px;
    flex: 0 0 auto;
    background-position: center;
  }

  .load-screen-author-byline {
    display: none;
    font-weight: 400;
    text-transform: uppercase;
  }

  .made-with-bublup {
    display: flex !important;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 22px;
    width: 240px;
    height: 62px;
    background-color: rgb(255, 255, 255);
    padding: 10px 24px;
    font-size: 11px;
    box-sizing: border-box;
    border-radius: 100px;
    box-shadow: 0px 13px 36px rgba(0, 0, 0, .1);
  }

  .made-with-bublup__text {
    height: 100%;
    line-height: 100%;
    font-size: 11px;
    color: rgb(150, 150, 150);
    padding-right: 11px;
    margin-right: 11px;
    border-right: 1px solid rgb(226,226,226);
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img.made-with-bublup__image {
    height: 90%;
  }


  @media only screen and (min-width: 0px) and (max-width: 480px) {
    .load-screen-author-avatar { height: 52px; min-height: 52px; width: 52px; }
    .made-with-bublup { transform: scale(.8); box-shadow: 0px 6px 18px rgba(0, 0, 0, .1); }
  }

  @media only screen and (min-width: 481px) and (max-width: 760px) {
    .made-with-bublup { transform: scale(.9); box-shadow: 0px 6px 18px rgba(0, 0, 0, .1); }
  }


  .load-screen-spinner {
    margin-top: 20px;
    width: 70px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .load-screen-spinner > div {
    width: 18px;
    height: 18px;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;

    /* expected to be replaced by server data */
    background-color: white;
  }

  .load-screen-spinner div:first-child {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .load-screen-spinner div:nth-child(2) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0); }
    40% { -webkit-transform: scale(1.0); }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
  </style>

  <div id="load-screen" class="load-screen">
    <div class="load-screen-container">
      <!-- Loader -->
      <div class="load-screen-spinner">
        <div class="load-screen-spinner-div"></div>
        <div class="load-screen-spinner-div"></div>
        <div class="load-screen-spinner-div"></div>
      </div>
      <!-- Roll Title -->
      <h1 id="load-screen-title" class="load-screen-title"></h1>
      <!-- Roll Subtitle -->
      <h3 id="load-screen-subtitle" class="load-screen-subtitle"></h3>
      <!-- Avatar ** INITIALLY HIDDEN (display:none;) UNTIL WE HAVE AUTHOR INFO ** -->
      <div id="load-screen-author" class="load-screen-author" style="display: none;">
        <div id="load-screen-author-avatar" class="load-screen-author-avatar"></div>
        <div id="load-screen-author-byline" class="load-screen-author-byline">
          <span class="load-screen-a-roll">A roll</span>&nbsp;<span>by</span>&nbsp;<span id="load-screen-author-name" class="load-screen-author-name"></span>
        </div>
      </div>
      <div id="made-with-bublup" class="made-with-bublup" style="display: none;">
        <div class="made-with-bublup__text">
          <span>MADE WITH</span>
        </div>
      </div>
    </div>
  </div>
`;

const template = document.createElement('template');
template.innerHTML = templateString;

class RollsLoadScreenElement extends HTMLElement {
  constructor() {
    super();
    // Attach Shadow DOM
    this.attachShadow({ mode: 'open' });
    // Append contents of template to Shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  /**
   * Convert an array of numbers [50, 100, 150] to an rgb value rgb(50, 100, 150).
   */
  colorArrayToRGB(colorArray) {
    return `rgb(${colorArray.join(',')})`;
  }

  /**
   * Called when this component is added to the DOM.
   */
  connectedCallback() {
    const roll_data = window.roll_data;

    // Grab some loader elements.
    const loadScreenEl = this.shadowRoot.getElementById('load-screen');
    const spinnerDivs = this.shadowRoot.querySelectorAll('.load-screen-spinner-div');
    const madeWithBublup = this.shadowRoot.getElementById('made-with-bublup');

    // Create Made With Bublup image element.
    const imageEl = document.createElement('img');
    imageEl.setAttribute('src', 'https://assets.bublup.com/logos/bublup-brand.png');
    imageEl.setAttribute('class', 'made-with-bublup__image');
    madeWithBublup.appendChild(imageEl);

    // Set colors if roll data exists.
    if (roll_data) {
      // Set background color.
      loadScreenEl.style.setProperty('background-color',
        roll_data.custom_loading_bg_color || this.colorArrayToRGB(roll_data.loading_bg_color),
        'important');

      // Set font color.
      loadScreenEl.style.setProperty('color',
        roll_data.custom_loading_font_color || this.colorArrayToRGB(roll_data.loading_font_color),
        'important');

      // Set spinner color.
      const spinnerColor = roll_data.custom_loading_spinner_color || this.colorArrayToRGB(roll_data.loading_spinner_color);
      for (let i = 0; i < spinnerDivs.length; i++) {
        spinnerDivs.item(i).style.setProperty('background-color', spinnerColor, 'important');
      }
    }

    // Set title.
    const titleEl = this.shadowRoot.getElementById('load-screen-title');
    titleEl.innerText = (roll_data && roll_data.title) || '';
    titleEl.style.display = 'initial';

    // Set subtitle
    const subtitleEl = this.shadowRoot.getElementById('load-screen-subtitle');
    subtitleEl.innerText = (roll_data && roll_data.subtitle) || '';
    subtitleEl.style.display = 'initial';

    // Set author element to display flex.
    const authorEl = this.shadowRoot.getElementById('load-screen-author');
    authorEl.style.display = 'flex';

    // Set Author Name.
    if (roll_data && roll_data.author_name) {
      const anameEl = this.shadowRoot.getElementById('load-screen-author-name');
      const bylineEl = this.shadowRoot.getElementById('load-screen-author-byline');
      anameEl.innerText = roll_data.author_name;
      bylineEl.style.display = 'initial';
    }

    // Set avatar background url.
    if (roll_data && roll_data.author_image) {
      const avatarEl = this.shadowRoot.getElementById('load-screen-author-avatar');
      avatarEl.style.backgroundImage = `url(${roll_data.author_image})`;
      avatarEl.style.display = 'initial';
    }
  }
}

// Define the web component.
customElements.define('rolls-load-screen', RollsLoadScreenElement);
