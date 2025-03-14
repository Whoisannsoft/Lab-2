class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/card/card.css">
      <div class="card">
        <div class="card-image">
          <img src=${this.getAttribute("card-image")} alt="placeholder">
        </div>
        <div class="card-content">
          <h2>${this.getAttribute("card-title")}</h2>
          <p>${this.getAttribute("card-text")}</p>
          </div>
      </div>
    `;
  }

}

customElements.define('card-component', Card);